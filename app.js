/* Baker McGuire — The Quote Book. Client-only SPA, no build step. */

const CATEGORY_LABELS = { all: "All pieces", chairs: "Chairs", sofas: "Sofas & Settees", ottomans: "Ottomans & Benches", tables: "Tables & Consoles", casegoods: "Casegoods", beds: "Beds", lighting: "Lighting", mirrors: "Mirrors" };
const COVERING_LABELS = { fabric: "Fabric", leather: "Leather", com: "COM / COL", standard: "Standard specification" };

function escapeHtml(str) {
  if (str == null) return "";
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function todayIso() {
  return new Date().toISOString().slice(0, 10);
}
function genQuoteNumber() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `BM-${ymd}-${rand}`;
}
function uid() {
  return "l" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function dimsSummary(d) {
  const parts = [];
  if (d.width) parts.push(`${d.width}"W`);
  if (d.depth) parts.push(`${d.depth}"D`);
  if (d.height) parts.push(`${d.height}"H`);
  return parts.join(" x ");
}

const state = {
  products: PRODUCTS,
  search: "",
  category: "all",
  designer: "all",
  selectedSku: null,
  config: {},
  cart: [],
  quotation: { preparedFor: "", preparedBy: "", number: genQuoteNumber(), date: todayIso() },
  view: "shop",
};

// ---------------- Theme ----------------
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("bakermcguire_theme"); } catch (e) {}
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  updateThemeIcons();
}
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const effectiveCurrent = current || (prefersDark ? "dark" : "light");
  const next = effectiveCurrent === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("bakermcguire_theme", next); } catch (e) {}
  updateThemeIcons();
}
function updateThemeIcons() {
  const current = document.documentElement.getAttribute("data-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = current ? current === "dark" : prefersDark;
  document.getElementById("themeIconSun").hidden = isDark;
  document.getElementById("themeIconMoon").hidden = !isDark;
}

// ---------------- Toast ----------------
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.hidden = false;
  el.classList.remove("show");
  void el.offsetWidth;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; el.classList.remove("show"); }, 2450);
}

// ---------------- Category counts / filtering ----------------
function categoryCounts() {
  const counts = { all: state.products.length, chairs: 0, sofas: 0, ottomans: 0, tables: 0, casegoods: 0, beds: 0, lighting: 0, mirrors: 0 };
  state.products.forEach((p) => { counts[p.category]++; });
  return counts;
}
function designerList() {
  const set = new Set(state.products.map((p) => p.collection));
  return Array.from(set).sort();
}
function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return state.products.filter((p) => {
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.designer !== "all" && p.collection !== state.designer) return false;
    if (q) {
      const hay = `${p.name} ${p.sku} ${p.collection}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function displayPriceForProduct(product) {
  if (product.fabric) {
    const firstAvailable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].find((g) => product.fabric["g" + g] != null);
    if (firstAvailable != null) {
      const withVat = Math.round(usdToPhpCentavos(product.fabric["g" + firstAvailable]) * (1 + VAT_RATE));
      return { price: formatPHP(withVat), label: `Grade ${firstAvailable}` };
    }
  }
  const centavos = usdToPhpCentavos(product.basePrice);
  const withVat = Math.round(centavos * (1 + VAT_RATE));
  return { price: formatPHP(withVat), label: "Standard" };
}

// ---------------- Rendering: browse controls ----------------
function renderCatTabs() {
  const counts = categoryCounts();
  const el = document.getElementById("catTabs");
  el.innerHTML = Object.keys(CATEGORY_LABELS)
    .map((key) => `<button type="button" class="cat-tab" data-cat="${key}" aria-pressed="${state.category === key}">${CATEGORY_LABELS[key]} (${counts[key]})</button>`)
    .join("");
  el.querySelectorAll(".cat-tab").forEach((btn) => {
    btn.addEventListener("click", () => { state.category = btn.dataset.cat; renderProductList(); renderCatTabs(); });
  });

  const designerSelect = document.getElementById("designerSelect");
  const designers = designerList();
  designerSelect.innerHTML = `<option value="all">All designers &amp; collections</option>` + designers.map((d) => `<option value="${escapeHtml(d)}" ${state.designer === d ? "selected" : ""}>${escapeHtml(d)}</option>`).join("");
  designerSelect.onchange = () => { state.designer = designerSelect.value; renderProductList(); };

  document.getElementById("itemCount").textContent = `${state.products.length} pieces · Source updated ${SOURCE_DATE}`;
}

// ---------------- Rendering: model list + detail ----------------
function renderProductList() {
  const list = filteredProducts();
  const el = document.getElementById("productList");
  if (list.length === 0) {
    el.innerHTML = `<div class="empty-state">No pieces match your search or filters.</div>`;
    return;
  }
  el.innerHTML = list.map((p) => {
    const { price, label } = displayPriceForProduct(p);
    return `
      <button type="button" class="model-row" role="option" aria-pressed="${state.selectedSku === p.sku}" data-sku="${p.sku}">
        <span>
          <span class="mname">${escapeHtml(p.name)}${p.limited ? " · Limited" : ""}</span><br/>
          <span class="msku">${p.sku}</span> &middot; <span class="mdesigner">${escapeHtml(p.collection)}</span>
        </span>
        <span class="mfrom">${price}<span class="mfrom-label">from, ${label}, incl. VAT</span></span>
      </button>`;
  }).join("");
  el.querySelectorAll(".model-row").forEach((row) => {
    row.addEventListener("click", () => selectProduct(row.dataset.sku));
  });
}

function renderProductDetail() {
  const el = document.getElementById("productDetail");
  const product = currentProduct();
  if (!product) { el.innerHTML = ""; return; }
  const d = product.dims;
  const dimEntries = [
    ["Width", d.width], ["Depth", d.depth], ["Height", d.height], ["Width inside", d.widthInside],
    ["Seat height", d.seatHeight], ["Seat depth", d.seatDepth], ["Arm width", d.armWidth], ["Arm height", d.armHeight],
    ["Exposed leg", d.exposedLegHeight], ["Volume", d.volume ? d.volume + " ft³" : null],
    ["Weight", d.weight ? d.weight + " lb" : null], ["Fabric req.", d.fabricReq ? d.fabricReq + " yd" : null],
    ["Leather req.", d.leatherReq ? d.leatherReq + " ft²" : null],
  ].filter(([, v]) => v != null && v !== "");
  el.innerHTML = `
    <h2>${escapeHtml(product.name)}</h2>
    <div class="sku">${product.sku} &middot; ${escapeHtml(product.collection)}</div>
    <ul>${product.specs.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
    <div class="dims-grid">${dimEntries.map(([l, v]) => `<div class="dim"><span class="dl">${l}</span><span class="dv">${typeof v === "number" ? v + '"' : v}</span></div>`).join("")}</div>`;
}

// ---------------- Configurator ----------------
function defaultAddonConfig(product) {
  const groups = availableAddonGroups(product);
  const cfg = { seat: null, back: null, throwFill: null, throwQty: 0, swivel: null, selfDecking: null, contrastWelt: null, toggles: {} };
  if (!groups) return cfg;
  if (groups.seat.length) cfg.seat = groups.seat[0].key;
  if (groups.back.length) cfg.back = groups.back[0].key;
  if (groups.throwFill.length) cfg.throwFill = groups.throwFill[0].key;
  if (groups.swivel.length) cfg.swivel = groups.swivel[0].key;
  if (groups.selfDecking.length) cfg.selfDecking = groups.selfDecking[0].key;
  if (groups.contrastWelt.length) cfg.contrastWelt = groups.contrastWelt[0].key;
  return cfg;
}

function defaultConfigForProduct(product) {
  const coverings = availableCoverings(product);
  const type = coverings[0];
  const cfg = { coveringType: type, fabricGrade: 1, fabricGradeCustom: 16, leatherGrade: null, comCustomPricePhp: null, fabricRef: "", quantity: 1, finishKey: "standard", addons: defaultAddonConfig(product) };
  if (type === "fabric") {
    const firstAvailable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].find((g) => product.fabric["g" + g] != null);
    cfg.fabricGrade = firstAvailable || 1;
  }
  if (type === "leather") {
    const grades = Object.keys(product.leather.grades).filter((g) => product.leather.grades[g] != null);
    cfg.leatherGrade = grades[0] || null;
  }
  return cfg;
}

function selectProduct(sku) {
  state.selectedSku = sku;
  const product = state.products.find((p) => p.sku === sku);
  state.config = defaultConfigForProduct(product);
  renderProductList();
  renderProductDetail();
  document.getElementById("coveringPanel").hidden = false;
  document.getElementById("finishPanel").hidden = false;
  document.getElementById("scheduleWrap").hidden = false;
  renderCoveringPanel();
  renderFinishPanel();
  renderAddonsPanel();
  renderSchedulePanel();
  renderSummary();
}

function currentProduct() {
  return state.products.find((p) => p.sku === state.selectedSku) || null;
}

// ---- Covering panel ----
function renderCoveringPanel() {
  const product = currentProduct();
  const cfg = state.config;
  const coverings = availableCoverings(product);

  const seg = document.getElementById("coveringSeg");
  seg.innerHTML = coverings.map((c) => `<button type="button" data-cover="${c}" aria-pressed="${cfg.coveringType === c}">${COVERING_LABELS[c]}</button>`).join("");
  seg.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.config.coveringType = btn.dataset.cover;
      if (state.config.coveringType === "leather" && !state.config.leatherGrade) {
        const grades = Object.keys(product.leather.grades || {}).filter((g) => product.leather.grades[g] != null);
        state.config.leatherGrade = grades[0] || null;
      }
      renderCoveringPanel();
      renderSummary();
    });
  });

  const body = document.getElementById("coveringBody");
  if (cfg.coveringType === "fabric") {
    const gradeChips = Array.from({ length: 15 }, (_, i) => i + 1).map((g) => {
      const usd = product.fabric["g" + g];
      const price = usd != null ? formatPHP(Math.round(usdToPhpCentavos(usd) * (1 + VAT_RATE))) : null;
      return `<button type="button" class="grade-chip" data-grade="${g}" aria-pressed="${cfg.fabricGrade === g}" ${usd == null ? "disabled" : ""}>${g}${price ? `<span class="gc-price">${price}</span>` : ""}</button>`;
    }).join("");
    const g16ok = grade16PlusAvailable(product);
    body.innerHTML = `
      <div class="grade-grid">${gradeChips}${g16ok ? `<button type="button" class="grade-chip" id="grade16Btn" aria-pressed="${cfg.fabricGrade === "g16plus"}">16+</button>` : ""}</div>
      ${cfg.fabricGrade === "g16plus" ? `
      <div class="field-row">
        <label for="customGradeInput">Fabric grade (whole number, 16 or higher)</label>
        <input type="number" min="16" step="1" id="customGradeInput" value="${cfg.fabricGradeCustom}" style="width:90px;" />
        <span class="helper-text">Grade price = Base price + (grade &times; grade riser), converted to pesos.</span>
      </div>` : ""}
      <div class="field-row">
        <label for="fabricRefInput">Fabric reference (optional)</label>
        <input type="text" id="fabricRefInput" placeholder="e.g. supplier / pattern name" value="${escapeHtml(cfg.fabricRef)}" style="flex:1;min-width:180px;" />
      </div>`;
    body.querySelectorAll(".grade-chip[data-grade]").forEach((btn) => {
      btn.addEventListener("click", () => { state.config.fabricGrade = Number(btn.dataset.grade); renderCoveringPanel(); renderSummary(); });
    });
    const g16Btn = document.getElementById("grade16Btn");
    if (g16Btn) g16Btn.addEventListener("click", () => { state.config.fabricGrade = "g16plus"; renderCoveringPanel(); renderSummary(); });
    const customGradeInput = document.getElementById("customGradeInput");
    if (customGradeInput) customGradeInput.addEventListener("input", () => { state.config.fabricGradeCustom = customGradeInput.value; renderSummary(); });
    const fabricRefInput = document.getElementById("fabricRefInput");
    if (fabricRefInput) fabricRefInput.addEventListener("input", () => { state.config.fabricRef = fabricRefInput.value; });
  } else if (cfg.coveringType === "leather") {
    const grades = ["A", "B", "C", "D"].filter((g) => product.leather.grades && product.leather.grades[g] != null);
    const chips = grades.map((g) => {
      const price = formatPHP(Math.round(usdToPhpCentavos(product.leather.grades[g]) * (1 + VAT_RATE)));
      return `<button type="button" class="grade-chip" style="min-width:84px;" data-leather="${g}" aria-pressed="${cfg.leatherGrade === g}">Grade ${g}<span class="gc-price">${price}</span></button>`;
    }).join("");
    body.innerHTML = `
      <div class="grade-grid">${chips}</div>
      <div class="field-row">
        <label for="leatherRefInput">Leather reference (optional)</label>
        <input type="text" id="leatherRefInput" placeholder="e.g. supplier / hide name" value="${escapeHtml(cfg.fabricRef)}" style="flex:1;min-width:180px;" />
      </div>`;
    body.querySelectorAll(".grade-chip[data-leather]").forEach((btn) => {
      btn.addEventListener("click", () => { state.config.leatherGrade = btn.dataset.leather; renderCoveringPanel(); renderSummary(); });
    });
    const leatherRefInput = document.getElementById("leatherRefInput");
    if (leatherRefInput) leatherRefInput.addEventListener("input", () => { state.config.fabricRef = leatherRefInput.value; });
  } else if (cfg.coveringType === "com") {
    const listedUsd = product.fabric.comCol;
    const listedAvailable = listedUsd != null;
    const listedPhp = listedAvailable ? formatPHP(Math.round(usdToPhpCentavos(listedUsd) * (1 + VAT_RATE))) : null;
    const useCustom = cfg.comCustomPricePhp != null || !listedAvailable;
    body.innerHTML = `
      ${listedAvailable ? `<div class="radio-row"><label><input type="radio" name="comMode" value="listed" ${!useCustom ? "checked" : ""}> Use listed COM/COL price (${listedPhp} incl. VAT)</label></div>` : `<p class="helper-text">No listed COM/COL price for this model &mdash; enter a custom price below.</p>`}
      <div class="radio-row"><label><input type="radio" name="comMode" value="custom" ${useCustom ? "checked" : ""} ${listedAvailable ? "" : "disabled checked"}> Enter custom whole-piece price</label></div>
      ${useCustom ? `
      <div class="field-row">
        <label for="customComInput">Custom price, in pesos, before VAT</label>
        <input type="number" min="0" step="0.01" id="customComInput" value="${cfg.comCustomPricePhp ?? ""}" placeholder="0.00" style="width:140px;" />
        <span class="helper-text">This replaces the listed COM/COL price &mdash; it is not an additional charge.</span>
      </div>` : ""}
      <div class="field-row">
        <label for="fabricRefInput">Material reference (optional)</label>
        <input type="text" id="fabricRefInput" placeholder="e.g. customer-supplied fabric name" value="${escapeHtml(cfg.fabricRef)}" style="flex:1;min-width:180px;" />
      </div>`;
    body.querySelectorAll('input[name="comMode"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        state.config.comCustomPricePhp = radio.value === "custom" ? (state.config.comCustomPricePhp ?? "") : null;
        renderCoveringPanel();
        renderSummary();
      });
    });
    const customComInput = document.getElementById("customComInput");
    if (customComInput) customComInput.addEventListener("input", () => { state.config.comCustomPricePhp = customComInput.value; renderSummary(); });
    const fabricRefInput = document.getElementById("fabricRefInput");
    if (fabricRefInput) fabricRefInput.addEventListener("input", () => { state.config.fabricRef = fabricRefInput.value; });
  } else {
    body.innerHTML = `<p class="finish-note">This model is priced as a complete standard piece &mdash; no fabric, leather, or COM/COL selection applies.</p>`;
  }
}

// ---- Finish panel ----
function renderFinishPanel() {
  const product = currentProduct();
  const cfg = state.config;
  const finishName = product.standardFinish || product.frameMaterial || "Standard";
  const finishOptions = availableFinishOptions(product);
  const grid = document.getElementById("tierGrid");

  const standardBtn = `<button type="button" class="tier-btn" data-finish="standard" aria-pressed="${cfg.finishKey === "standard"}"><span class="tn">${escapeHtml(finishName)}</span><span class="tp">included</span></button>`;
  const optionBtns = finishOptions.map((o) => {
    const surchargePhp = formatPHP(Math.round(usdToPhpCentavos(o.usd) * (1 + VAT_RATE)));
    return `<button type="button" class="tier-btn" data-finish="${o.key}" aria-pressed="${cfg.finishKey === o.key}"><span class="tn">${escapeHtml(o.label)}</span><span class="tp">${o.usd === 0 ? "included" : "+" + surchargePhp}</span></button>`;
  }).join("");
  grid.innerHTML = standardBtn + optionBtns;
  if (finishOptions.length === 0) {
    grid.insertAdjacentHTML("beforeend", `<span class="helper-text">No additional finish tiers are listed for this model in the source price list.</span>`);
  }
  grid.querySelectorAll(".tier-btn").forEach((btn) => {
    btn.addEventListener("click", () => { state.config.finishKey = btn.dataset.finish; renderFinishPanel(); renderSummary(); });
  });
}

// ---- Optional add-ons ----
function addonSelectRow(label, sub, options, selectedKey, onChange) {
  if (!options.length) return "";
  const id = "addonSel_" + label.replace(/\W+/g, "");
  const opts = options.map((o) => {
    const price = usdToPhpCentavos(o.usd) === 0 ? "included" : "+" + formatPHP(Math.round(usdToPhpCentavos(o.usd) * (1 + VAT_RATE)));
    return `<option value="${o.key}" ${selectedKey === o.key ? "selected" : ""}>${escapeHtml(o.label)} (${price})</option>`;
  }).join("");
  return { html: `<div class="addon-row"><div><div class="addon-label">${label}</div>${sub ? `<div class="addon-sub">${sub}</div>` : ""}</div><select id="${id}">${opts}</select></div>`, id, onChange };
}

function renderAddonsPanel() {
  const product = currentProduct();
  const wrap = document.getElementById("addonsWrap");
  const groups = availableAddonGroups(product);
  if (!groups) { wrap.hidden = true; return; }
  wrap.hidden = false;
  const cfg = state.config.addons;
  const body = document.getElementById("addonsBody");
  const rows = [];
  const binders = [];

  if (groups.seat.length) {
    const r = addonSelectRow("Seat cushion fill", "Baker Comfort standard unless noted", groups.seat, cfg.seat);
    rows.push(r.html); binders.push([r.id, (v) => { cfg.seat = v; }]);
  }
  if (groups.back.length) {
    const r = addonSelectRow("Back pillow fill", "Baker Comfort standard unless noted", groups.back, cfg.back);
    rows.push(r.html); binders.push([r.id, (v) => { cfg.back = v; }]);
  }
  if (groups.throwFill.length) {
    const opts = groups.throwFill.map((o) => {
      const price = formatPHP(Math.round(usdToPhpCentavos(o.usd) * (1 + VAT_RATE)));
      return `<option value="${o.key}" ${cfg.throwFill === o.key ? "selected" : ""}>${escapeHtml(o.label)} (${price} ea.)</option>`;
    }).join("");
    rows.push(`<div class="addon-row">
      <div><div class="addon-label">Throw pillow(s)</div><div class="addon-sub">Priced per pillow, added on top</div></div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <select id="addonThrowFill">${opts}</select>
        <div class="stepper"><button type="button" id="throwMinus">&minus;</button><span id="throwQtyDisplay">${cfg.throwQty}</span><button type="button" id="throwPlus">+</button></div>
      </div>
    </div>`);
  }
  if (groups.swivel.length) {
    const r = addonSelectRow("Swivel base", "Hidden base, stationary or rotating", groups.swivel, cfg.swivel);
    rows.push(r.html); binders.push([r.id, (v) => { cfg.swivel = v; }]);
  }
  if (groups.selfDecking.length) {
    const r = addonSelectRow("Self decking", "Covers the underside of the piece", groups.selfDecking, cfg.selfDecking);
    rows.push(r.html); binders.push([r.id, (v) => { cfg.selfDecking = v; }]);
  }
  if (groups.contrastWelt.length) {
    const r = addonSelectRow("Contrast welt", "Accent trim in a contrasting material", groups.contrastWelt, cfg.contrastWelt);
    rows.push(r.html); binders.push([r.id, (v) => { cfg.contrastWelt = v; }]);
  }
  groups.toggles.forEach((o) => {
    const price = usdToPhpCentavos(o.usd) === 0 ? "included" : "+" + formatPHP(Math.round(usdToPhpCentavos(o.usd) * (1 + VAT_RATE)));
    const id = "addonToggle_" + o.key;
    rows.push(`<div class="addon-row"><div class="addon-label">${escapeHtml(o.label)}</div><label class="addon-toggle"><input type="checkbox" id="${id}" ${cfg.toggles[o.key] ? "checked" : ""}/> <span class="addon-sub">${price}</span></label></div>`);
  });

  body.innerHTML = rows.length ? rows.join("") : `<span class="addon-sub">No optional upgrades are listed for this model.</span>`;

  binders.forEach(([id, setter]) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", () => { setter(el.value); renderSummary(); });
  });
  const throwFillSel = document.getElementById("addonThrowFill");
  if (throwFillSel) throwFillSel.addEventListener("change", () => { cfg.throwFill = throwFillSel.value; renderSummary(); });
  const throwMinus = document.getElementById("throwMinus");
  const throwPlus = document.getElementById("throwPlus");
  if (throwMinus) throwMinus.addEventListener("click", () => { cfg.throwQty = Math.max(0, cfg.throwQty - 1); renderAddonsPanel(); renderSummary(); });
  if (throwPlus) throwPlus.addEventListener("click", () => { cfg.throwQty = Math.min(6, cfg.throwQty + 1); renderAddonsPanel(); renderSummary(); });
  groups.toggles.forEach((o) => {
    const el = document.getElementById("addonToggle_" + o.key);
    if (el) el.addEventListener("change", () => { cfg.toggles[o.key] = el.checked; renderSummary(); });
  });
}

// ---- Price schedule ----
function renderSchedulePanel() {
  const product = currentProduct();
  const scheduleCell = (usd) => (usd == null ? "Not available" : formatPHP(usdToPhpCentavos(usd)));
  const scheduleRows = product.fabric
    ? [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((g) => `<tr><td>Grade ${g}</td><td>${scheduleCell(product.fabric["g" + g])}</td></tr>`).join("") +
      `<tr><td>COM/COL</td><td>${scheduleCell(product.fabric.comCol)}</td></tr>`
    : `<tr><td>Base price</td><td>${scheduleCell(product.basePrice)}</td></tr>`;
  const leatherRows = product.leather && product.leather.grades
    ? Object.entries(product.leather.grades).filter(([, v]) => v != null).map(([g, usd]) => `<tr><td>Leather Grade ${g}</td><td>${formatPHP(usdToPhpCentavos(usd))}</td></tr>`).join("")
    : "";
  const riserRow = product.leather && product.leather.riser != null ? `<tr><td>Grade riser (grade 16+)</td><td>${formatPHP(usdToPhpCentavos(product.leather.riser))}</td></tr>` : "";
  const finishRows = availableFinishOptions(product).map((o) => `<tr><td>${escapeHtml(o.label)} surcharge</td><td>${formatPHP(usdToPhpCentavos(o.usd))}</td></tr>`).join("");
  document.getElementById("scheduleBody").innerHTML = `
    <table class="schedule-table">
      <thead><tr><th>Covering</th><th>Price</th></tr></thead>
      <tbody>${scheduleRows}${leatherRows}${riserRow}${finishRows}</tbody>
    </table>`;
}

// ---- Summary panel ----
function renderSummary() {
  const product = currentProduct();
  document.getElementById("summaryEmpty").hidden = !!product;
  document.getElementById("summaryFull").hidden = !product;
  if (!product) return;

  document.getElementById("sumModel").textContent = product.name;
  document.getElementById("sumSku").textContent = `${product.sku} · ${product.collection}`;
  const tag = document.getElementById("sumTag");
  if (product.limited) { tag.hidden = false; tag.textContent = "Limited"; } else { tag.hidden = true; }

  const cfg = state.config;
  const breakdown = computeUnitBreakdown(product, cfg);
  const errorEl = document.getElementById("summaryError");
  const addBtn = document.getElementById("addToCartBtn");
  const qtyRow = document.getElementById("qtyRow");

  if (!breakdown.ok) {
    document.getElementById("lineItems").innerHTML = "";
    qtyRow.hidden = true;
    document.getElementById("totalPhp").textContent = "—";
    document.getElementById("vatPhp").textContent = "—";
    document.getElementById("totalPhpVat").textContent = "—";
    errorEl.hidden = false;
    errorEl.textContent = breakdown.error;
    addBtn.disabled = true;
    return;
  }
  errorEl.hidden = true;
  addBtn.disabled = false;
  qtyRow.hidden = false;

  const qty = cfg.quantity || 1;
  document.getElementById("qtyDisplay").textContent = qty;

  const lines = [
    { label: breakdown.coveringLabel, value: breakdown.coveringCentavos },
    { label: breakdown.finishSurchargeCentavos > 0 ? `Finish — ${breakdown.finishLabel}` : "Frame finish", value: breakdown.finishSurchargeCentavos, muted: breakdown.finishSurchargeCentavos === 0 },
  ];
  (breakdown.addonLines || []).forEach((l) => lines.push({ label: l.label, value: l.centavos, muted: l.muted }));
  document.getElementById("lineItems").innerHTML = lines.map((l) =>
    `<div class="line-item${l.muted ? " muted" : ""}"><span class="li-label">${escapeHtml(l.label)}</span><span class="li-val">${l.muted ? "Included" : formatPHP(l.value)}</span></div>`
  ).join("");

  document.getElementById("totalPhp").textContent = formatPHP(breakdown.subtotalCentavos * qty);
  document.getElementById("vatPhp").textContent = formatPHP(breakdown.vatCentavos * qty);
  document.getElementById("totalPhpVat").textContent = formatPHP(breakdown.unitInclVatCentavos * qty);
}

function bindQtyStepper() {
  document.getElementById("qtyMinus").addEventListener("click", () => {
    state.config.quantity = Math.max(1, (state.config.quantity || 1) - 1);
    renderSummary();
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    state.config.quantity = (state.config.quantity || 1) + 1;
    renderSummary();
  });
}

// ---------------- Cart / Quotation ----------------
function addonSignature(addons) {
  if (!addons) return "";
  const t = addons.toggles || {};
  return [addons.seat, addons.back, addons.throwFill, addons.throwQty, addons.swivel, addons.selfDecking, addons.contrastWelt, Object.keys(t).filter((k) => t[k]).sort().join(",")].join("|");
}
function configSignature(sku, cfg, breakdown) {
  return [sku, cfg.coveringType, cfg.fabricGrade, cfg.fabricGradeCustom, cfg.leatherGrade, cfg.comCustomPricePhp, (cfg.fabricRef || "").trim().toLowerCase(), breakdown.coveringCentavos, cfg.finishKey || "standard", addonSignature(cfg.addons)].join("|");
}

function addToQuotation() {
  const product = currentProduct();
  if (!product) return;
  const cfg = state.config;
  const breakdown = computeUnitBreakdown(product, cfg);
  if (!breakdown.ok) return;
  const qty = Math.max(1, Math.floor(cfg.quantity || 1));
  const sig = configSignature(product.sku, cfg, breakdown);
  const existing = state.cart.find((l) => l.signature === sig);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: uid(),
      signature: sig,
      sku: product.sku,
      name: product.name,
      collection: product.collection,
      coveringLabel: breakdown.coveringLabel,
      fabricRef: cfg.fabricRef || "",
      finishLabel: breakdown.finishSurchargeCentavos > 0
        ? `${product.standardFinish || product.frameMaterial || "Standard"} + ${breakdown.finishLabel} (+${formatPHP(breakdown.finishSurchargeCentavos)})`
        : (product.standardFinish || product.frameMaterial || "Standard"),
      addonsText: (breakdown.addonLines || []).filter((l) => !l.muted).map((l) => `${l.label} (+${formatPHP(l.centavos)})`).join("; "),
      dimsText: dimsSummary(product.dims),
      quantity: qty,
      unitPriceBeforeVatCentavos: breakdown.subtotalCentavos,
      unitInclVatCentavos: breakdown.unitInclVatCentavos,
    });
  }
  renderCartBadge();
  showToast(`Added "${product.name}" to your quotation cart`);
}
function renderCartBadge() {
  const totalQty = state.cart.reduce((s, l) => s + l.quantity, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = String(totalQty);
  badge.hidden = totalQty === 0;
}

function computeQuotationTotals() {
  const subtotalCentavos = state.cart.reduce((s, l) => s + l.unitPriceBeforeVatCentavos * l.quantity, 0);
  const vatCentavos = Math.round(subtotalCentavos * VAT_RATE);
  const grandTotalCentavos = subtotalCentavos + vatCentavos;
  return { subtotalCentavos, vatCentavos, grandTotalCentavos };
}

function renderCheckout() {
  document.getElementById("qPreparedFor").value = state.quotation.preparedFor;
  document.getElementById("qPreparedBy").value = state.quotation.preparedBy;
  document.getElementById("qNumber").value = state.quotation.number;
  document.getElementById("qDate").value = state.quotation.date;

  const listEl = document.getElementById("cartList");
  const emptyEl = document.getElementById("cartEmpty");
  const footerEl = document.getElementById("cartListFooter");
  const downloadBtn = document.getElementById("downloadPdfBtn");

  if (state.cart.length === 0) {
    listEl.innerHTML = "";
    emptyEl.hidden = false;
    footerEl.hidden = true;
    downloadBtn.disabled = true;
  } else {
    emptyEl.hidden = true;
    footerEl.hidden = false;
    downloadBtn.disabled = false;

    listEl.innerHTML = state.cart.map((l) => `
      <div class="cart-item" data-id="${l.id}">
        <div class="cart-item-top">
          <div>
            <div class="cart-item-name">${escapeHtml(l.name)}</div>
            <div class="cart-item-sku">${l.sku} &middot; ${escapeHtml(l.collection)}</div>
          </div>
          <button type="button" class="cart-item-remove" aria-label="Remove ${escapeHtml(l.name)}"><span>&#128465;</span> Remove</button>
        </div>
        <div class="cart-item-config">
          ${escapeHtml(l.coveringLabel)}${l.fabricRef ? " &mdash; " + escapeHtml(l.fabricRef) : ""}<br/>
          Finish: ${escapeHtml(l.finishLabel)}${l.dimsText ? " · " + escapeHtml(l.dimsText) : ""}
          ${l.addonsText ? "<br/>Add-ons: " + escapeHtml(l.addonsText) : ""}
        </div>
        <div class="cart-item-bottom">
          <div class="stepper">
            <button type="button" class="qty-minus">&minus;</button>
            <span>${l.quantity}</span>
            <button type="button" class="qty-plus">+</button>
          </div>
          <div class="cart-item-price">${formatPHP(l.unitPriceBeforeVatCentavos * l.quantity)} <span class="cart-item-unit">(${formatPHP(l.unitPriceBeforeVatCentavos)} ea., excl. VAT)</span></div>
        </div>
      </div>`).join("");

    listEl.querySelectorAll(".cart-item").forEach((row) => {
      const id = row.dataset.id;
      const line = state.cart.find((l) => l.id === id);
      row.querySelector(".cart-item-remove").addEventListener("click", () => {
        state.cart = state.cart.filter((l) => l.id !== id);
        renderCartBadge();
        renderCheckout();
        showToast(`Removed "${line.name}" from the quotation cart`);
      });
      row.querySelector(".qty-minus").addEventListener("click", () => { line.quantity = Math.max(1, line.quantity - 1); renderCheckout(); renderCartBadge(); });
      row.querySelector(".qty-plus").addEventListener("click", () => { line.quantity += 1; renderCheckout(); renderCartBadge(); });
    });
  }

  const totals = computeQuotationTotals();
  document.getElementById("coLineItems").innerHTML = state.cart.length
    ? state.cart.map((l) => `<div class="line-item"><span class="li-label">${escapeHtml(l.name)}${l.quantity > 1 ? " &times;" + l.quantity : ""}</span><span class="li-val">${formatPHP(l.unitPriceBeforeVatCentavos * l.quantity)}</span></div>`).join("")
    : `<div class="line-item muted"><span class="li-label">No items yet</span><span class="li-val">₱0.00</span></div>`;
  document.getElementById("coTotalPhp").textContent = formatPHP(totals.subtotalCentavos);
  document.getElementById("coVatPhp").textContent = formatPHP(totals.vatCentavos);
  document.getElementById("coTotalPhpVat").textContent = formatPHP(totals.grandTotalCentavos);
}

function bindQuotationFields() {
  document.getElementById("qPreparedFor").addEventListener("input", (e) => { state.quotation.preparedFor = e.target.value; });
  document.getElementById("qPreparedBy").addEventListener("input", (e) => { state.quotation.preparedBy = e.target.value; });
  document.getElementById("qNumber").addEventListener("input", (e) => { state.quotation.number = e.target.value; });
  document.getElementById("qDate").addEventListener("change", (e) => { state.quotation.date = e.target.value; });
  document.getElementById("emptyBackBtn").addEventListener("click", () => switchView("shop"));
  document.getElementById("backToShopBtn").addEventListener("click", () => switchView("shop"));
  document.getElementById("clearCartBtn").addEventListener("click", () => {
    if (state.cart.length === 0) return;
    if (confirm("Remove all items from the quotation cart?")) {
      state.cart = [];
      renderCartBadge();
      renderCheckout();
    }
  });
  document.getElementById("downloadPdfBtn").addEventListener("click", () => {
    if (state.cart.length === 0) { alert("Your quotation is empty. Add at least one piece before downloading."); return; }
    const totals = computeQuotationTotals();
    generateQuotationPdf(state.quotation, state.cart, totals);
  });
}

// ---------------- View switching ----------------
function switchView(view) {
  state.view = view;
  document.getElementById("shopView").hidden = view !== "shop";
  document.getElementById("checkoutView").hidden = view !== "checkout";
  if (view === "checkout") renderCheckout();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

// ---------------- Init ----------------
function init() {
  initTheme();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("cartBtn").addEventListener("click", () => switchView("checkout"));
  document.getElementById("brandHome").addEventListener("click", () => switchView("shop"));
  document.getElementById("searchInput").addEventListener("input", (e) => { state.search = e.target.value; renderProductList(); });
  document.getElementById("addToCartBtn").addEventListener("click", addToQuotation);
  bindQtyStepper();
  bindQuotationFields();

  renderCatTabs();
  renderProductList();
  renderSummary();

  window.addEventListener("beforeunload", (e) => {
    if (state.cart.length > 0) { e.preventDefault(); e.returnValue = ""; }
  });
}

document.addEventListener("DOMContentLoaded", init);
