/* PDF quotation generator — jsPDF + AutoTable (loaded from CDN in index.html). */

function formatDateLong(isoDate) {
  const d = isoDate ? new Date(isoDate + "T00:00:00") : new Date();
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
function addDays(isoDate, days) {
  const d = isoDate ? new Date(isoDate + "T00:00:00") : new Date();
  d.setDate(d.getDate() + days);
  return d;
}

const FOREST = [23, 48, 31];
const GOLD = [166, 132, 47];
const SOFT = [90, 100, 92];
const BORDER = [222, 216, 192];

function generateQuotationPdf(quotation, lines, totals) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const headerHeight = 96;

  function drawHeader() {
    doc.setFillColor(...FOREST);
    doc.rect(0, 0, pageWidth, headerHeight, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text("BAKER · McGUIRE", margin, 38);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...GOLD.map((c) => Math.min(255, c + 60)));
    doc.text("PHILIPPINES", margin, 54);
    doc.setTextColor(230, 230, 220);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("QUOTATION", margin, 76);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(230, 230, 220);
    const rightX = pageWidth - margin;
    const validThroughDate = addDays(quotation.date, 30);
    doc.text(`Quotation No: ${quotation.number}`, rightX, 38, { align: "right" });
    doc.text(`Date: ${formatDateLong(quotation.date)}`, rightX, 52, { align: "right" });
    doc.text(`Valid through: ${validThroughDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, rightX, 66, { align: "right" });
  }

  // --- Header (first render, also re-drawn per page via autoTable hook) ---
  drawHeader();

  let y = headerHeight + 30;
  doc.setTextColor(...FOREST);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("PREPARED FOR", margin, y);
  doc.text("PREPARED BY", pageWidth / 2 + 10, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(40, 40, 40);
  doc.text(quotation.preparedFor || "—", margin, y + 16);
  doc.text(quotation.preparedBy || "—", pageWidth / 2 + 10, y + 16);

  y += 40;
  doc.setDrawColor(...BORDER);
  doc.line(margin, y, pageWidth - margin, y);

  const body = lines.map((line) => {
    const configParts = [line.coveringLabel];
    if (line.fabricRef) configParts.push(`Ref: ${line.fabricRef}`);
    if (line.finishLabel) configParts.push(`Finish: ${line.finishLabel}`);
    const dimStr = line.dimsText || "";
    return [
      `${line.name}\n${line.sku}`,
      configParts.join("\n"),
      dimStr,
      String(line.quantity),
      formatPHP(line.unitPriceBeforeVatCentavos),
      formatPHP(line.unitPriceBeforeVatCentavos * line.quantity),
    ];
  });

  doc.autoTable({
    startY: y + 14,
    margin: { top: headerHeight + 20, left: margin, right: margin, bottom: 90 },
    head: [["Product", "Configuration", "Dimensions", "Qty", "Unit Price (excl. VAT)", "Line Total (excl. VAT)"]],
    body,
    styles: { font: "helvetica", fontSize: 8.5, cellPadding: 6, textColor: [40, 40, 40], overflow: "linebreak", valign: "top" },
    headStyles: { fillColor: FOREST, textColor: 255, fontStyle: "bold", fontSize: 8.5 },
    alternateRowStyles: { fillColor: [247, 245, 239] },
    columnStyles: {
      0: { cellWidth: 105 },
      1: { cellWidth: 125 },
      2: { cellWidth: 75 },
      3: { cellWidth: 26, halign: "center" },
      4: { cellWidth: 82, halign: "right" },
      5: { cellWidth: 82, halign: "right" },
    },
    tableWidth: 495,
    didDrawPage: function () {
      drawHeader();
    },
  });

  let finalY = doc.lastAutoTable.finalY + 20;
  const pageHeight = doc.internal.pageSize.getHeight();
  if (finalY > pageHeight - 160) {
    doc.addPage();
    drawHeader();
    finalY = headerHeight + 30;
  }

  const totalsX = pageWidth - margin - 200;
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "normal");
  doc.text("Subtotal (excl. VAT)", totalsX, finalY);
  doc.text(formatPHP(totals.subtotalCentavos), pageWidth - margin, finalY, { align: "right" });
  doc.text("VAT (12%)", totalsX, finalY + 16);
  doc.text(formatPHP(totals.vatCentavos), pageWidth - margin, finalY + 16, { align: "right" });
  doc.setDrawColor(...BORDER);
  doc.line(totalsX, finalY + 24, pageWidth - margin, finalY + 24);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12.5);
  doc.setTextColor(...FOREST);
  doc.text("Grand Total (incl. VAT)", totalsX, finalY + 42);
  doc.text(formatPHP(totals.grandTotalCentavos), pageWidth - margin, finalY + 42, { align: "right" });

  finalY += 70;
  if (finalY > pageHeight - 110) {
    doc.addPage();
    drawHeader();
    finalY = headerHeight + 30;
  }
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(110, 110, 100);
  const terms = "Valid for 30 days from the quotation date. Prices are indicative and subject to confirmation at time of order.";
  const wrapped = doc.splitTextToSize(terms, pageWidth - margin * 2);
  doc.text(wrapped, margin, finalY);

  // Footer: page numbers + repeating byline on every page
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 130);
    doc.text(`Baker · McGuire — Philippines`, margin, pageHeight - 24);
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, pageHeight - 24, { align: "right" });
  }

  const fileName = `BakerMcGuire-Quotation-${quotation.number}.pdf`;
  doc.save(fileName);
}
