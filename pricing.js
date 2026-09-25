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

// ---------------- Optional add-ons ----------------
// Only ~39% of the catalogue (mainly Baker Originals-family upholstery collections and
// Bespoke Seating) lists priced construction/cushion-fill add-ons in the source PDF;
// product.addons is null for everything else, and availableAddonGroups reflects that.
const SEAT_FILL_DEFS = [
  ["seatComfort", "Baker Comfort"], ["seatComfortPlush", "Baker Comfort Plush"],
  ["seatFiberlux", "Baker Fiberlux"], ["seatFirmSpringDown", "Baker Firm Spring Down"],
  ["seatCrown", "Baker Crown"], ["seatCrownSupport", "Baker Crown Support"],
];
const BACK_FILL_DEFS = [
  ["backComfort", "Baker Comfort"], ["backComfortPlush", "Baker Comfort Plush"],
  ["backComfortUltraplush", "Baker Comfort Ultraplush"], ["backFiberlux", "Baker Fiberlux"],
];
const THROW_FILL_DEFS = [
  ["throwComfortPlush", "Baker Comfort Plush"], ["throwComfortUltraplush", "Baker Comfort Ultraplush"],
  ["throwFiberlux", "Baker Fiberlux"],
];
const SWIVEL_DEFS = [["swivel180", "180° Swivel"], ["swivel360", "360° Swivel"]];
const SELF_DECKING_DEFS = [["selfDeckingFabric", "Fabric"], ["selfDeckingCom", "COM"]];
const CONTRAST_WELT_DEFS = [["contrastWeltFabric", "Fabric"], ["contrastWeltLeather", "Leather"]];
const TOGGLE_DEFS = [
  ["topStitching", "Top Stitching"], ["buttonedOption", "Buttoned Option"],
  ["tallTaperedFoot", "Tall Tapered Foot"], ["blockFoot", "Block Foot"],
  ["casterLeg", "Caster Leg"], ["plinthBase", "Plinth Base"],
];

function availableAddonGroups(product) {
  const a = product.addons;
  if (!a) return null;
  const filt = (defs) => defs.filter(([k]) => a[k] != null).map(([key, label]) => ({ key, label, usd: a[key] }));
  const groups = {
    seat: filt(SEAT_FILL_DEFS), back: filt(BACK_FILL_DEFS), throwFill: filt(THROW_FILL_DEFS),
    swivel: filt(SWIVEL_DEFS), selfDecking: filt(SELF_DECKING_DEFS), contrastWelt: filt(CONTRAST_WELT_DEFS),
    toggles: filt(TOGGLE_DEFS),
  };
  const hasAny = Object.values(groups).some((g) => g.length > 0);
  return hasAny ? groups : null;
}

/**
 * addonConfig = {
 *   seat: key|null, back: key|null,
 *   throwFill: key|null, throwQty: integer >=0,
 *   swivel: key|null, selfDecking: key|null, contrastWelt: key|null,
 *   toggles: { [key]: boolean },
 * }
 */
function computeAddonsBreakdown(product, addonConfig) {
  const groups = availableAddonGroups(product);
  if (!groups) return { lines: [], totalCentavos: 0 };
  const cfg = addonConfig || {};
  const lines = [];

  const pickSingle = (groupList, selectedKey, labelPrefix) => {
    if (!groupList.length) return;
    const opt = groupList.find((o) => o.key === selectedKey) || groupList[0];
    const centavos = usdToPhpCentavos(opt.usd);
    lines.push({ label: `${labelPrefix} — ${opt.label}`, key: opt.key, centavos, muted: centavos === 0 });
  };

  pickSingle(groups.seat, cfg.seat, "Seat cushion");
  pickSingle(groups.back, cfg.back, "Back pillow");
  if (groups.throwFill.length && (cfg.throwQty || 0) > 0) {
    const opt = groups.throwFill.find((o) => o.key === cfg.throwFill) || groups.throwFill[0];
    const qty = cfg.throwQty || 0;
    const centavos = usdToPhpCentavos(opt.usd) * qty;
    lines.push({ label: `Throw pillow ×${qty} — ${opt.label}`, key: opt.key, centavos, muted: centavos === 0 });
  }
  pickSingle(groups.swivel, cfg.swivel, "Swivel base");
  pickSingle(groups.selfDecking, cfg.selfDecking, "Self decking");
  pickSingle(groups.contrastWelt, cfg.contrastWelt, "Contrast welt");
  groups.toggles.forEach((opt) => {
    if (cfg.toggles && cfg.toggles[opt.key]) {
      const centavos = usdToPhpCentavos(opt.usd);
      lines.push({ label: opt.label, key: opt.key, centavos, muted: centavos === 0 });
    }
  });

  const totalCentavos = lines.reduce((s, l) => s + l.centavos, 0);
  return { lines, totalCentavos };
}

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

  const addonsBreakdown = computeAddonsBreakdown(product, config.addons);
  const extrasCentavos = addonsBreakdown.totalCentavos;

  const subtotalCentavos = covering.coveringCentavos + finishSurchargeCentavos + extrasCentavos;
  const vatCentavos = Math.round(subtotalCentavos * VAT_RATE);
  const unitInclVatCentavos = subtotalCentavos + vatCentavos;

  return {
    ok: true,
    coveringCentavos: covering.coveringCentavos,
    coveringLabel: covering.coveringLabel,
    finishLabel,
    finishSurchargeCentavos,
    addonLines: addonsBreakdown.lines,
    extrasCentavos,
    subtotalCentavos,
    vatCentavos,
    unitInclVatCentavos,
  };
}

function computeLineTotal(unitInclVatCentavos, quantity) {
  return unitInclVatCentavos * quantity;
}
