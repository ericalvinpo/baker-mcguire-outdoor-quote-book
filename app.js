/* Baker McGuire Outdoor — The Quote Book. Client-only SPA, no build step. */

const CATEGORY_LABELS = { all: "All pieces", chairs: "Chairs", sofas: "Sofas & Settees", ottomans: "Ottomans & Benches" };

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
  return `BM-OUT-${ymd}-${rand}`;
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
  view: "collection",
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

// ---------------- Category counts / filtering ----------------
function categoryCounts() {
  const counts = { all: state.products.length, chairs: 0, sofas: 0, ottomans: 0 };
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
    const centavos = usdToPhpCentavos(product.fabric.g1);
    const beforeVat = centavos;
    const withVat = Math.round(beforeVat * (1 + VAT_RATE));
    return { price: formatPHP(withVat), label: "Fabric Grade 1, incl. VAT" };
  }
  const centavos = usdToPhpCentavos(product.basePrice);
  const withVat = Math.round(centavos * (1 + VAT_RATE));
  return { price: formatPHP(withVat), label: "Standard specification, incl. VAT" };
}

// ---------------- Rendering: controls ----------------
function renderControls() {
  const counts = categoryCounts();
  const chipsEl = document.getElementById("filterChips");
  chipsEl.innerHTML = Object.keys(CATEGORY_LABELS)
    .map((key) => `<button class="chip ${state.category === key ? "active" : ""}" data-cat="${key}" type="button">${CATEGORY_LABELS[key]} (${counts[key]})</button>`)
    .join("");
  chipsEl.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => { state.category = btn.dataset.cat; renderAll(); });
  });

  const designerSelect = document.getElementById("designerSelect");
  const designers = designerList();
  designerSelect.innerHTML = `<option value="all">All designers &amp; collections</option>` + designers.map((d) => `<option value="${escapeHtml(d)}" ${state.designer === d ? "selected" : ""}>${escapeHtml(d)}</option>`).join("");
  designerSelect.onchange = () => { state.designer = designerSelect.value; renderAll(); };

  document.getElementById("collectionMeta").textContent = `${state.products.length} products · Source price list updated ${SOURCE_DATE}`;
}

// ---------------- Rendering: product list ----------------
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
      <div class="product-card ${state.selectedSku === p.sku ? "selected" : ""}" data-sku="${p.sku}">
        <div class="pc-top">
          <span class="pc-sku">${p.sku}</span>
          ${p.limited ? '<span class="pc-limited">Limited</span>' : ""}
        </div>
        <div class="pc-name">${escapeHtml(p.name)}</div>
        <div class="pc-designer">${escapeHtml(p.collection)}</div>
        <div class="pc-price">${price}<span class="pc-price-label">${label}</span></div>
      </div>`;
  }).join("");
  el.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => selectProduct(card.dataset.sku));
  });
}

// ---------------- Configurator ----------------
function defaultConfigForProduct(product) {
  const coverings = availableCoverings(product);
  const type = coverings[0];
  const cfg = { coveringType: type, fabricGrade: 1, fabricGradeCustom: 16, leatherGrade: null, comCustomPricePhp: null, fabricRef: "", quantity: 1 };
  if (type === "fabric") cfg.fabricGrade = 1;
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
  renderConfigurator();
  // scroll configurator into view on mobile
  if (window.innerWidth <= 900) {
    document.getElementById("configurator").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function currentProduct() {
  return state.products.find((p) => p.sku === state.selectedSku) || null;
}

function renderConfigurator() {
  const el = document.getElementById("configurator");
  const product = currentProduct();
  if (!product) {
    el.innerHTML = `<div class="config-placeholder"><div class="ph-title">Select a piece</div><p>Choose a product from the list to configure its covering, view pricing, and add it to your quotation.</p></div>`;
    return;
  }
  const coverings = availableCoverings(product);
  const cfg = state.config;

  const tabsHtml = coverings.map((c) => {
    const labels = { fabric: "Fabric", leather: "Leather", com: "COM / COL", standard: "Standard specification" };
    return `<button type="button" class="covering-tab ${cfg.coveringType === c ? "active" : ""}" data-covering="${c}">${labels[c]}</button>`;
  }).join("");

  let coveringBodyHtml = "";
  if (cfg.coveringType === "fabric") {
    const gradeBtns = Array.from({ length: 15 }, (_, i) => i + 1).map((g) => {
      const usd = product.fabric["g" + g];
      const price = formatPHP(Math.round(usdToPhpCentavos(usd) * (1 + VAT_RATE)));
      return `<button type="button" class="grade-btn ${cfg.fabricGrade === g ? "active" : ""}" data-grade="${g}">${g}<span class="grade-price">${price}</span></button>`;
    }).join("");
    const g16ok = grade16PlusAvailable(product);
    coveringBodyHtml = `
      <div class="grade-grid">${gradeBtns}</div>
      ${g16ok ? `
      <button type="button" class="grade-btn ${cfg.fabricGrade === "g16plus" ? "active" : ""}" id="grade16Btn" style="width:100%;text-align:left;padding:10px 12px;margin-bottom:10px;">Grade 16 and above</button>
      ${cfg.fabricGrade === "g16plus" ? `
      <div class="field-row">
        <label for="customGradeInput">Fabric grade (whole number, 16 or higher)</label>
        <input type="number" min="16" step="1" class="number-input" id="customGradeInput" value="${cfg.fabricGradeCustom}" />
        <p class="helper-text">Grade price = Base price + (grade &times; grade riser), converted to pesos.</p>
      </div>` : ""}` : ""}
      <div class="field-row">
        <label for="fabricRefInput">Fabric reference (optional)</label>
        <input type="text" class="text-input" id="fabricRefInput" placeholder="e.g. supplier / pattern name" value="${escapeHtml(cfg.fabricRef)}" />
      </div>`;
  } else if (cfg.coveringType === "leather") {
    const grades = ["A", "B", "C", "D"].filter((g) => product.leather.grades && product.leather.grades[g] != null);
    const gradeBtns = grades.map((g) => {
      const price = formatPHP(Math.round(usdToPhpCentavos(product.leather.grades[g]) * (1 + VAT_RATE)));
      return `<button type="button" class="grade-btn" style="min-width:90px;flex:0 0 auto;" data-leather="${g}">Grade ${g}<span class="grade-price">${price}</span></button>`;
    }).join("");
    coveringBodyHtml = `
      <div class="grade-grid" style="grid-template-columns:repeat(auto-fill,minmax(90px,1fr));">${gradeBtns}</div>
      <div class="field-row">
        <label for="leatherRefInput">Leather reference (optional)</label>
        <input type="text" class="text-input" id="leatherRefInput" placeholder="e.g. supplier / hide name" value="${escapeHtml(cfg.fabricRef)}" />
      </div>`;
    // re-mark active after render (need product context in closure below)
  } else if (cfg.coveringType === "com") {
    const listedUsd = product.fabric.comCol;
    const listedPhp = formatPHP(Math.round(usdToPhpCentavos(listedUsd) * (1 + VAT_RATE)));
    const useCustom = cfg.comCustomPricePhp != null;
    coveringBodyHtml = `
      <div class="radio-row"><label><input type="radio" name="comMode" value="listed" ${!useCustom ? "checked" : ""}> Use listed COM/COL price (${listedPhp} incl. VAT)</label></div>
      <div class="radio-row"><label><input type="radio" name="comMode" value="custom" ${useCustom ? "checked" : ""}> Enter custom whole-piece price</label></div>
      ${useCustom ? `
      <div class="field-row">
        <label for="customComInput">Custom price, in pesos, before VAT</label>
        <input type="number" min="0" step="0.01" class="number-input" id="customComInput" value="${cfg.comCustomPricePhp ?? ""}" placeholder="0.00" />
        <p class="helper-text">This replaces the listed COM/COL price &mdash; it is not an additional charge.</p>
      </div>` : ""}
      <div class="field-row">
        <label for="fabricRefInput">Material reference (optional)</label>
        <input type="text" class="text-input" id="fabricRefInput" placeholder="e.g. customer-supplied fabric name" value="${escapeHtml(cfg.fabricRef)}" />
      </div>`;
  } else {
    coveringBodyHtml = `<div class="finish-box"><span class="ff-name">Standard specification</span><p class="ff-note">This model is priced as a complete standard piece &mdash; no fabric, leather, or COM/COL selection applies.</p></div>`;
  }

  const finishName = product.standardFinish || product.frameMaterial || "Standard";
  const finishHtml = `
    <div class="finish-box">
      <span class="ff-name">${escapeHtml(finishName)}</span>
      <p class="ff-note">Standard finish is included. No additional finish tiers are listed for this model in the source price list.</p>
    </div>`;

  const breakdown = computeUnitBreakdown(product, cfg);
  const qty = cfg.quantity || 1;

  let summaryHtml = "";
  if (breakdown.ok) {
    const lineTotal = computeLineTotal(breakdown.unitInclVatCentavos, qty);
    summaryHtml = `
      <div class="summary-box">
        <div class="summary-row"><span>${escapeHtml(breakdown.coveringLabel)}</span><span>${formatPHP(breakdown.coveringCentavos)}</span></div>
        <div class="summary-row"><span>Finish surcharge</span><span>Included</span></div>
        <div class="summary-row"><span>VAT (12%)</span><span>${formatPHP(breakdown.vatCentavos)}</span></div>
        <div class="summary-row total"><span>Unit price, incl. VAT</span><span>${formatPHP(breakdown.unitInclVatCentavos)}</span></div>
        <div class="qty-row">
          <label for="qtyInput">Quantity</label>
          <div class="qty-control">
            <button type="button" id="qtyMinus">&minus;</button>
            <input type="number" id="qtyInput" min="1" step="1" value="${qty}" />
            <button type="button" id="qtyPlus">+</button>
          </div>
        </div>
        <div class="summary-row total"><span>Total for quantity</span><span>${formatPHP(lineTotal)}</span></div>
        <button class="btn btn-gold" id="addToQuoteBtn" type="button" style="margin-top:14px;">Add to quotation</button>
      </div>`;
  } else {
    summaryHtml = `<div class="summary-box"><p class="error-text">${escapeHtml(breakdown.error)}</p><button class="btn" id="addToQuoteBtn" type="button" disabled style="margin-top:10px;">Add to quotation</button></div>`;
  }

  const scheduleRows = product.fabric
    ? [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((g) => `<tr><td>Grade ${g}</td><td>${formatPHP(usdToPhpCentavos(product.fabric["g" + g]))}</td></tr>`).join("") +
      `<tr><td>COM/COL</td><td>${formatPHP(usdToPhpCentavos(product.fabric.comCol))}</td></tr>`
    : `<tr><td>Base price</td><td>${formatPHP(usdToPhpCentavos(product.basePrice))}</td></tr>`;
  const leatherRows = product.leather && product.leather.grades
    ? Object.entries(product.leather.grades).filter(([, v]) => v != null).map(([g, usd]) => `<tr><td>Leather Grade ${g}</td><td>${formatPHP(usdToPhpCentavos(usd))}</td></tr>`).join("")
    : "";
  const riserRow = product.leather && product.leather.riser != null ? `<tr><td>Grade riser (grade 16+)</td><td>${formatPHP(usdToPhpCentavos(product.leather.riser))}</td></tr>` : "";

  const d = product.dims;
  const dimsRows = [
    ["Width", d.width], ["Depth", d.depth], ["Height", d.height], ["Width inside", d.widthInside],
    ["Seat height", d.seatHeight], ["Seat depth", d.seatDepth], ["Arm width", d.armWidth], ["Arm height", d.armHeight],
    ["Exposed leg height", d.exposedLegHeight], ["Volume", d.volume ? d.volume + " ft³" : null],
    ["Weight", d.weight ? d.weight + " lb" : null], ["Fabric requirement", d.fabricReq ? d.fabricReq + " yd" : null],
    ["Leather requirement", d.leatherReq ? d.leatherReq + " ft²" : null],
  ].filter(([, v]) => v != null && v !== "").map(([k, v]) => `<div><span>${k}</span><span>${typeof v === "number" ? v + '"' : v}</span></div>`).join("");

  el.innerHTML = `
    <div class="cf-header">
      <p class="cf-kicker">${escapeHtml(product.collection)}${product.limited ? " · Limited" : ""}</p>
      <h2 class="cf-title">${escapeHtml(product.name)}</h2>
      <p class="cf-sub">SKU ${product.sku}</p>
      <p class="cf-dims">${dimsSummary(d) || ""}</p>
    </div>

    <p class="section-label">Covering</p>
    <div class="covering-tabs">${tabsHtml}</div>
    <div id="coveringBody">${coveringBodyHtml}</div>

    <p class="section-label">Frame Finish</p>
    ${finishHtml}

    <details class="expand">
      <summary>Frame details &amp; dimensions</summary>
      <div class="expand-body">
        <p style="margin-top:0;">${product.specs.map((s) => escapeHtml(s)).join("<br/>")}</p>
        <div class="dims-grid">${dimsRows}</div>
      </div>
    </details>

    <details class="expand">
      <summary>Complete price schedule (before VAT)</summary>
      <div class="expand-body schedule-table-wrap">
        <table class="schedule-table">
          <thead><tr><th>Covering</th><th>Price</th></tr></thead>
          <tbody>${scheduleRows}${leatherRows}${riserRow}</tbody>
        </table>
      </div>
    </details>

    ${summaryHtml}
  `;

  bindConfiguratorEvents(product);
}

function bindConfiguratorEvents(product) {
  const el = document.getElementById("configurator");
  el.querySelectorAll(".covering-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.config.coveringType = btn.dataset.covering;
      if (state.config.coveringType === "leather" && !state.config.leatherGrade) {
        const grades = Object.keys(product.leather.grades || {}).filter((g) => product.leather.grades[g] != null);
        state.config.leatherGrade = grades[0] || null;
      }
      renderConfigurator();
    });
  });

  if (state.config.coveringType === "fabric") {
    el.querySelectorAll(".grade-btn[data-grade]").forEach((btn) => {
      btn.addEventListener("click", () => { state.config.fabricGrade = Number(btn.dataset.grade); renderConfigurator(); });
    });
    const g16Btn = document.getElementById("grade16Btn");
    if (g16Btn) g16Btn.addEventListener("click", () => { state.config.fabricGrade = "g16plus"; renderConfigurator(); });
    const customGradeInput = document.getElementById("customGradeInput");
    if (customGradeInput) customGradeInput.addEventListener("input", () => { state.config.fabricGradeCustom = customGradeInput.value; renderConfigurator(); });
    const fabricRefInput = document.getElementById("fabricRefInput");
    if (fabricRefInput) fabricRefInput.addEventListener("input", () => { state.config.fabricRef = fabricRefInput.value; });
  }

  if (state.config.coveringType === "leather") {
    el.querySelectorAll(".grade-btn[data-leather]").forEach((btn) => {
      if (btn.dataset.leather === state.config.leatherGrade) btn.classList.add("active");
      btn.addEventListener("click", () => { state.config.leatherGrade = btn.dataset.leather; renderConfigurator(); });
    });
    const leatherRefInput = document.getElementById("leatherRefInput");
    if (leatherRefInput) leatherRefInput.addEventListener("input", () => { state.config.fabricRef = leatherRefInput.value; });
  }

  if (state.config.coveringType === "com") {
    el.querySelectorAll('input[name="comMode"]').forEach((radio) => {
      radio.addEventListener("change", () => {
        state.config.comCustomPricePhp = radio.value === "custom" ? (state.config.comCustomPricePhp ?? "") : null;
        renderConfigurator();
      });
    });
    const customComInput = document.getElementById("customComInput");
    if (customComInput) customComInput.addEventListener("input", () => { state.config.comCustomPricePhp = customComInput.value; renderConfigurator(); });
    const fabricRefInput = document.getElementById("fabricRefInput");
    if (fabricRefInput) fabricRefInput.addEventListener("input", () => { state.config.fabricRef = fabricRefInput.value; });
  }

  const qtyInput = document.getElementById("qtyInput");
  if (qtyInput) {
    qtyInput.addEventListener("change", () => {
      const v = Math.max(1, Math.floor(Number(qtyInput.value) || 1));
      state.config.quantity = v;
      renderConfigurator();
    });
  }
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  if (qtyMinus) qtyMinus.addEventListener("click", () => { state.config.quantity = Math.max(1, (state.config.quantity || 1) - 1); renderConfigurator(); });
  if (qtyPlus) qtyPlus.addEventListener("click", () => { state.config.quantity = (state.config.quantity || 1) + 1; renderConfigurator(); });

  const addBtn = document.getElementById("addToQuoteBtn");
  if (addBtn && !addBtn.disabled) addBtn.addEventListener("click", () => addToQuotation(product));
}

// ---------------- Cart / Quotation ----------------
function configSignature(sku, cfg, breakdown) {
  return [sku, cfg.coveringType, cfg.fabricGrade, cfg.fabricGradeCustom, cfg.leatherGrade, cfg.comCustomPricePhp, (cfg.fabricRef || "").trim().toLowerCase(), breakdown.coveringCentavos].join("|");
}

function addToQuotation(product) {
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
      finishLabel: product.standardFinish || product.frameMaterial || "Standard",
      dimsText: dimsSummary(product.dims),
      quantity: qty,
      unitPriceBeforeVatCentavos: breakdown.subtotalCentavos,
      unitInclVatCentavos: breakdown.unitInclVatCentavos,
    });
  }
  renderCartBadge();
  flashAdded();
}
function flashAdded() {
  const btn = document.getElementById("addToQuoteBtn");
  if (!btn) return;
  const original = btn.textContent;
  btn.textContent = "Added ✓";
  setTimeout(() => { if (btn) btn.textContent = original; }, 1100);
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

function renderQuotationView() {
  document.getElementById("qPreparedFor").value = state.quotation.preparedFor;
  document.getElementById("qPreparedBy").value = state.quotation.preparedBy;
  document.getElementById("qNumber").value = state.quotation.number;
  document.getElementById("qDate").value = state.quotation.date;

  const linesEl = document.getElementById("quoteLines");
  const emptyEl = document.getElementById("quoteEmpty");
  if (state.cart.length === 0) {
    linesEl.innerHTML = "";
    emptyEl.hidden = false;
  } else {
    emptyEl.hidden = true;
    linesEl.innerHTML = state.cart.map((l) => `
      <div class="quote-line" data-id="${l.id}">
        <div>
          <div class="ql-sku">${l.sku}</div>
          <h3 class="ql-name">${escapeHtml(l.name)}</h3>
          <div class="ql-detail">
            ${escapeHtml(l.collection)}<br/>
            ${escapeHtml(l.coveringLabel)}${l.fabricRef ? " &mdash; " + escapeHtml(l.fabricRef) : ""}<br/>
            Finish: ${escapeHtml(l.finishLabel)}<br/>
            ${escapeHtml(l.dimsText)}
          </div>
        </div>
        <div class="ql-right">
          <div class="qty-control">
            <button type="button" class="qMinus">&minus;</button>
            <input type="number" class="qInput" min="1" step="1" value="${l.quantity}" />
            <button type="button" class="qPlus">+</button>
          </div>
          <div class="ql-unit-price">${formatPHP(l.unitPriceBeforeVatCentavos)} / unit, excl. VAT</div>
          <div class="ql-line-total">${formatPHP(l.unitPriceBeforeVatCentavos * l.quantity)}</div>
          <button type="button" class="remove-btn">Remove</button>
        </div>
      </div>`).join("");

    linesEl.querySelectorAll(".quote-line").forEach((row) => {
      const id = row.dataset.id;
      const line = state.cart.find((l) => l.id === id);
      row.querySelector(".remove-btn").addEventListener("click", () => {
        state.cart = state.cart.filter((l) => l.id !== id);
        renderQuotationView();
        renderCartBadge();
      });
      const qInput = row.querySelector(".qInput");
      qInput.addEventListener("change", () => {
        const v = Math.max(1, Math.floor(Number(qInput.value) || 1));
        line.quantity = v;
        renderQuotationView();
        renderCartBadge();
      });
      row.querySelector(".qMinus").addEventListener("click", () => { line.quantity = Math.max(1, line.quantity - 1); renderQuotationView(); renderCartBadge(); });
      row.querySelector(".qPlus").addEventListener("click", () => { line.quantity += 1; renderQuotationView(); renderCartBadge(); });
    });
  }

  const totals = computeQuotationTotals();
  document.getElementById("quoteTotals").innerHTML = `
    <div class="summary-row"><span>Subtotal (excl. VAT)</span><span>${formatPHP(totals.subtotalCentavos)}</span></div>
    <div class="summary-row"><span>VAT (12%)</span><span>${formatPHP(totals.vatCentavos)}</span></div>
    <div class="summary-row total"><span>Grand total (incl. VAT)</span><span>${formatPHP(totals.grandTotalCentavos)}</span></div>`;
}

function bindQuotationFields() {
  document.getElementById("qPreparedFor").addEventListener("input", (e) => { state.quotation.preparedFor = e.target.value; });
  document.getElementById("qPreparedBy").addEventListener("input", (e) => { state.quotation.preparedBy = e.target.value; });
  document.getElementById("qNumber").addEventListener("input", (e) => { state.quotation.number = e.target.value; });
  document.getElementById("qDate").addEventListener("change", (e) => { state.quotation.date = e.target.value; });
  document.getElementById("continueBrowsing").addEventListener("click", () => switchView("collection"));
  document.getElementById("downloadPdf").addEventListener("click", () => {
    if (state.cart.length === 0) { alert("Your quotation is empty. Add at least one piece before downloading."); return; }
    const totals = computeQuotationTotals();
    generateQuotationPdf(state.quotation, state.cart, totals);
  });
}

// ---------------- View switching ----------------
function switchView(view) {
  state.view = view;
  document.getElementById("viewCollection").hidden = view !== "collection";
  document.getElementById("viewQuotation").hidden = view !== "quotation";
  document.getElementById("navCollection").classList.toggle("active", view === "collection");
  document.getElementById("navQuotation").classList.toggle("active", view === "quotation");
  if (view === "quotation") renderQuotationView();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function renderAll() {
  renderControls();
  renderProductList();
}

// ---------------- Init ----------------
function init() {
  initTheme();
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);
  document.getElementById("navCollection").addEventListener("click", () => switchView("collection"));
  document.getElementById("navQuotation").addEventListener("click", () => switchView("quotation"));
  document.getElementById("brandHome").addEventListener("click", () => switchView("collection"));
  document.getElementById("searchInput").addEventListener("input", (e) => { state.search = e.target.value; renderProductList(); });

  bindQuotationFields();
  renderAll();
  window.addEventListener("beforeunload", (e) => {
    if (state.cart.length > 0) { e.preventDefault(); e.returnValue = ""; }
  });
}

document.addEventListener("DOMContentLoaded", init);
