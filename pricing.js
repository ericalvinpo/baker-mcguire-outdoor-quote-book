/* Pricing engine — all customer-facing amounts are PHP, precise to the centavo.
   Internal-only: USD source values are converted at a fixed multiplier and never shown. */

const USD_TO_PHP = 70;
const VAT_RATE = 0.12;

function usdToPhpCentavos(usd) {
  if (usd == null) return null;
  return Math.round(usd * USD_TO_PHP * 100);
}
function pesoToCentavos(peso) {
  if (peso == null || isNaN(peso)) return null;
  return Math.round(peso * 100);
}
function centavosToPeso(c) {
  return c / 100;
}
function formatPHP(centavosOrPeso, isCentavos = true) {
  const peso = isCentavos ? centavosToPeso(centavosOrPeso) : centavosOrPeso;
  return "₱" + peso.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Determines which covering types are selectable for a product.
function availableCoverings(product) {
  const list = [];
  if (product.fabric) list.push("fabric");
  if (product.leather && product.leather.grades) list.push("leather");
  if (product.fabric) list.push("com"); // COM/COL price lives in the fabric pricing row
  if (list.length === 0) list.push("standard");
  return list;
}

function fabricGradeAvailable(product, grade) {
  if (!product.fabric) return false;
  return grade >= 1 && grade <= 15;
}

function grade16PlusAvailable(product) {
  return !!(product.fabric && product.leather && product.leather.riser != null);
}

// Returns [{ key, label, usd }] for every finish tier/rattan option this product has a real price for.
function availableFinishOptions(product) {
  const ft = product.finishTiers;
  if (!ft) return [];
  const defs = [
    ["tier1", "Tier 1"], ["tier2", "Tier 2"], ["tier3", "Tier 3"], ["tier4", "Tier 4"],
    ["type1Rattan", "Type 1 Rattan"], ["type2Rattan", "Type 2 Rattan"], ["specialtyRattan", "Specialty Rattan"],
  ];
  return defs
    .filter(([key]) => ft[key] != null)
    .map(([key, label]) => ({ key, label, usd: ft[key] }));
}
function finishSurchargeUsd(product, finishKey) {
  if (!finishKey || finishKey === "standard") return 0;
  const ft = product.finishTiers;
  if (!ft || ft[finishKey] == null) return 0;
  return ft[finishKey];
}

/**
 * config = {
 *   coveringType: 'fabric' | 'leather' | 'com' | 'standard',
 *   fabricGrade: 1-15 | null,
 *   fabricGradeCustom: integer >=16 | null,
 *   leatherGrade: 'A'|'B'|'C'|'D' | null,
 *   comCustomPricePhp: number | null   // pesos, before VAT — replaces listed COM/COL price
 * }
 * Returns { ok: true, coveringCentavos, coveringLabel } or { ok: false, error }
 */
function computeCoveringCentavos(product, config) {
  const type = config.coveringType;

  if (type === "standard") {
    if (product.fabric || (product.leather && product.leather.grades)) {
      return { ok: false, error: "This model requires a covering selection." };
    }
    return { ok: true, coveringCentavos: usdToPhpCentavos(product.basePrice), coveringLabel: "Standard specification" };
  }

  if (type === "fabric") {
    if (!product.fabric) return { ok: false, error: "Fabric pricing is not available for this model." };
    if (config.fabricGrade === "g16plus") {
      if (!grade16PlusAvailable(product)) {
        return { ok: false, error: "Grade 16+ pricing is not available for this model (no grade riser listed)." };
      }
      const g = Number(config.fabricGradeCustom);
      if (!Number.isInteger(g) || g < 16) {
        return { ok: false, error: "Enter a whole-number fabric grade of 16 or higher." };
      }
      const usd = product.basePrice + g * product.leather.riser;
      return { ok: true, coveringCentavos: usdToPhpCentavos(usd), coveringLabel: `Fabric — Grade ${g}` };
    }
    const grade = Number(config.fabricGrade);
    if (!fabricGradeAvailable(product, grade)) {
      return { ok: false, error: "That fabric grade is not available for this model." };
    }
    const usd = product.fabric["g" + grade];
    if (usd == null) return { ok: false, error: "That fabric grade is not priced for this model." };
    return { ok: true, coveringCentavos: usdToPhpCentavos(usd), coveringLabel: `Fabric — Grade ${grade}` };
  }

  if (type === "leather") {
    if (!product.leather || !product.leather.grades) {
      return { ok: false, error: "Leather pricing is not available for this model." };
    }
    const g = config.leatherGrade;
    const usd = product.leather.grades[g];
    if (usd == null) return { ok: false, error: `Leather Grade ${g} is not available for this model.` };
    return { ok: true, coveringCentavos: usdToPhpCentavos(usd), coveringLabel: `Leather — Grade ${g}` };
  }

  if (type === "com") {
    if (!product.fabric) return { ok: false, error: "COM/COL pricing is not available for this model." };
    if (config.comCustomPricePhp != null && config.comCustomPricePhp !== "") {
      const val = Number(config.comCustomPricePhp);
      if (!(val > 0)) return { ok: false, error: "Enter a valid custom COM/COL price greater than ₱0.00." };
      return { ok: true, coveringCentavos: pesoToCentavos(val), coveringLabel: "COM/COL — custom price" };
    }
    const usd = product.fabric.comCol;
    if (usd == null) return { ok: false, error: "Listed COM/COL pricing is not available for this model." };
    return { ok: true, coveringCentavos: usdToPhpCentavos(usd), coveringLabel: "COM/COL — listed price" };
  }

  return { ok: false, error: "Select a covering." };
}

// Optional upgrades (seat cushion/back pillow/throw pillow/swivel) are not priced anywhere in this
// catalogue's outdoor collection (verified against source), so extrasCentavos stays 0 for now.
function computeUnitBreakdown(product, config) {
  const covering = computeCoveringCentavos(product, config);
  if (!covering.ok) return covering;

  const finishOptions = availableFinishOptions(product);
  let finishKey = config.finishKey || "standard";
  let finishLabel = "Standard finish";
  let finishSurchargeCentavos = 0;
  if (finishKey !== "standard") {
    const opt = finishOptions.find((o) => o.key === finishKey);
    if (!opt) return { ok: false, error: "Select a valid frame finish option." };
    finishLabel = opt.label;
    finishSurchargeCentavos = usdToPhpCentavos(opt.usd);
  }
  const extrasCentavos = 0; // no product in this catalogue has priced optional upgrades

  const subtotalCentavos = covering.coveringCentavos + finishSurchargeCentavos + extrasCentavos;
  const vatCentavos = Math.round(subtotalCentavos * VAT_RATE);
  const unitInclVatCentavos = subtotalCentavos + vatCentavos;

  return {
    ok: true,
    coveringCentavos: covering.coveringCentavos,
    coveringLabel: covering.coveringLabel,
    finishLabel,
    finishSurchargeCentavos,
    extrasCentavos,
    subtotalCentavos,
    vatCentavos,
    unitInclVatCentavos,
  };
}

function computeLineTotal(unitInclVatCentavos, quantity) {
  return unitInclVatCentavos * quantity;
}
