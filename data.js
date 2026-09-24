/* Baker McGuire Outdoor — source price list data
   Extracted and cross-checked from Baker's complete retail price list ("BAKER price-list-retail-9-22-26.pdf"),
   updated 09/22/26. Covers the McGuire Outdoor collection: lounge seating (Stage 1a) plus dining/occasional
   furniture — tables, barstools, counter stools (Stage 1b). Other Baker/McGuire collections are added in
   later stages of the catalog rebuild.
   All monetary values below are RAW SOURCE PRICES IN USD. Conversion to PHP (x70) and VAT (12%)
   are applied at render time in pricing.js — this file must never contain PHP or VAT-adjusted values.
   A value of null means the source PDF shows a dash ("-") — i.e. NOT AVAILABLE. Never treat null as free/zero.
   Note: a handful of standardFinish / specs text fields may carry minor extraction artifacts from column
   text parsing (word-boundary noise) — pricing, dimensions, and grade data are verified exact. A very small
   number of products with ambiguous source formatting (embedded upcharge text breaking the parser's anchor)
   were excluded rather than risk shipping wrong prices; see extraction notes.
*/

const SOURCE_DATE = "09/22/26";

// FABRIC_ORDER defines the 16 rows as they appear in the source "FABRIC PRICING" column.
// grades: g1, comCol, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15
function fab(vals) {
  if (!vals) return null;
  const [g1, comCol, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15] = vals;
  return { g1, comCol, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15 };
}
function leather(vals, riser) {
  if (!vals && riser == null) return { grades: null, riser: null };
  return { grades: vals ? { A: vals[0], B: vals[1], C: vals[2], D: vals[3] } : null, riser: riser ?? null };
}
function dims(d) { return d; }

const PRODUCTS = [
{
  sku: "MCA97", name: "Mustique Sedan Chair", collection: "Bill Sofield", category: "chairs", limited: false,
  standardFinish: "Danish cord frame", frameMaterial: null, basePrice: 10725,
  specs: ["(1) loose seat cushion", "(1) loose back pillow", "Fully upholstered interior", "This frame is handcrafted with natural materials and variations in tone or grain can occur. Satin Walnut with stained woven"],
  dims: dims({ width: 31, depth: 39.25, height: 47.5, widthInside: null, seatHeight: 17.5, seatDepth: 21.5, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 51, weight: 180, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([10860, 10929, 10995, 11130, 11265, 11400, 11535, 11670, 11805, 11940, 12075, 12210, 12345, 12480, 12615, 12750]),
  leather: leather([12615, 13290, 13830, 14370], 135),
},

{
  sku: "MCAN10", name: "Outdoor Lounge Chair", collection: "Antalya", category: "chairs", limited: false,
  standardFinish: "resin and frame", frameMaterial: null, basePrice: 4116,
  specs: ["(1) Loose, reversible, boxed seat cushion", "(1) Loose, reversible, boxed back pillow in", "Woven resin over powder-coated aluminum", "Specify single stitch or welted", "Suitable Outdoor Cover: MCCV01 Driftwood resin and frame, Havana"],
  dims: dims({ width: 31, depth: 33.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: 20, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 34, weight: 42, fabricReq: 4.5, leatherReq: null }),
  fabric: fab([4197, 4239, 4278, 4359, 4440, 4521, 4602, 4683, 4764, 4845, 4926, 5007, 5088, 5169, 5250, 5331]),
  leather: leather(null, 81),
},

{
  sku: "MCAN12", name: "Outdoor Slipper Chair", collection: "Antalya", category: "chairs", limited: false,
  standardFinish: "resin and frameDr", frameMaterial: null, basePrice: 3087,
  specs: ["O (1) Loose, non-reversible, boxed", "(seat cushion", "( Woven resin over powder-coated", "Waluminum a Specify single stitch or welted", "S Suitable Outdoor Cover: MCCV23", "Fp SDriftwood resin and frame, Havana"],
  dims: dims({ width: 26, depth: 27.75, height: 29.5, widthInside: null, seatHeight: 19.5, seatDepth: 21, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 20, weight: 30, fabricReq: 1.75, leatherReq: null }),
  fabric: fab([3120, 3138, 3153, 3186, 3219, 3252, 3285, 3318, 3351, 3384, 3417, 3450, 3483, 3516, 3549, 3582]),
  leather: leather(null, 33),
},

{
  sku: "MCAN13", name: "Outdoor Sectional Slipper Chair", collection: "Antalya", category: "chairs", limited: false,
  standardFinish: "resin and frame", frameMaterial: null, basePrice: 3162,
  specs: ["(1) Loose, reversible, boxed seat (1) Loose, reversible KE back pillow Woven resin over powder-coated aluminum Specify single stitch or welted Furniture clamps & cushion toggles provided Suitable Outdoor Cover: MCCV27 Driftwood resin and frame, Havana"],
  dims: dims({ width: 26.25, depth: 33.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: 20, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 30, weight: 74, fabricReq: 3.25, leatherReq: null }),
  fabric: fab([3222, 3252, 3282, 3342, 3402, 3462, 3522, 3582, 3642, 3702, 3762, 3822, 3882, 3942, 4002, 4062]),
  leather: leather(null, 60),
},

{
  sku: "MCAN14", name: "Outdoor Sectional Ottoman", collection: "Antalya", category: "ottomans", limited: false,
  standardFinish: "Driftwood resin and frame, Havanresin and frame", frameMaterial: null, basePrice: 1911,
  specs: ["(1) Loose, non-reversible, boxed seat", "Loose, reversible KE back pillow", "Specify single stitch or welted", "Furniture clamps & cushion togglprovided", "Suitable Outdoor Cover: MCCV08"],
  dims: dims({ width: 26.25, depth: 28.5, height: 18.5, widthInside: null, seatHeight: 18.5, seatDepth: 20, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 58, fabricReq: 2.25, leatherReq: null }),
  fabric: fab([1953, 1974, 1995, 2037, 2079, 2121, 2163, 2205, 2247, 2289, 2331, 2373, 2415, 2457, 2499, 2541]),
  leather: leather(null, 42),
},

{
  sku: "MCAN15", name: "Outdoor Sectional Corner Chair", collection: "Antalya", category: "chairs", limited: false,
  standardFinish: "resin and frame", frameMaterial: null, basePrice: 4131,
  specs: ["(1) Loose, reversible, boxed seat", "(2) Loose, reversible KE back pillow", "Woven resin over powder-coated aluminum les", "Specify single stitch or welted", "Cushion toggles & clamps provided 8", "Suitable Outdoor Cover: MCCV24 na Driftwood resin and frame, Havana"],
  dims: dims({ width: 33.5, depth: 33.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: 20, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: 27, weight: 87, fabricReq: 4.75, leatherReq: null }),
  fabric: fab([4218, 4263, 4305, 4392, 4479, 4566, 4653, 4740, 4827, 4914, 5001, 5088, 5175, 5262, 5349, 5436]),
  leather: leather(null, 87),
},

{
  sku: "MCAN19", name: "Outdoor Chaise Lounge", collection: "Antalya", category: "chairs", limited: false,
  standardFinish: "SHavana resin and frameDr", frameMaterial: null, basePrice: 4767,
  specs: ["(1) Loose, non-reversible, KE pad", "( Reclines to 4 positions", "( (2) 2.6\u201DD round wheels p Velcro strap headrest", "W Woven resin over powder-coated aaluminum", "S Do not use w/o cushion", "C Suitable Outdoor Cover: MCCV05"],
  dims: dims({ width: 27, depth: 82.25, height: 13.25, widthInside: null, seatHeight: 15, seatDepth: 49, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 37, weight: 71, fabricReq: 5.5, leatherReq: null }),
  fabric: fab([4866, 4917, 4965, 5064, 5163, 5262, 5361, 5460, 5559, 5658, 5757, 5856, 5955, 6054, 6153, 6252]),
  leather: leather(null, 99),
},

{
  sku: "MCAN33", name: "Outdoor Sofa", collection: "Antalya", category: "sofas", limited: false,
  standardFinish: "resin and frame", frameMaterial: null, basePrice: 4911,
  specs: ["(1) Loose, reversible, boxed seat (3) Loose, reversible, KE back pillows Woven resin over powder-coated aluminum Specify single stitch or welted Cushion toggles provided Suitable Outdoor Cover: MCCV03 Driftwood resin and frame, Havana"],
  dims: dims({ width: 76, depth: 33.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: 20, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 53, weight: 124, fabricReq: 8.5, leatherReq: null }),
  fabric: fab([5064, 5142, 5217, 5370, 5523, 5676, 5829, 5982, 6135, 6288, 6441, 6594, 6747, 6900, 7053, 7206]),
  leather: leather(null, 153),
},

{
  sku: "MCAO114", name: "Tansen Ottoman", collection: "McGuire Originals", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4269,
  specs: ["Tight seat", "Rattan frame with caning on the under side", "Welt along frame where upholstery meets frame"],
  dims: dims({ width: 29.5, depth: 19, height: 17, widthInside: null, seatHeight: 16.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 44, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([4320, 4347, 4371, 4422, 4473, 4524, 4575, 4626, 4677, 4728, 4779, 4830, 4881, 4932, 4983, 5034]),
  leather: leather([4983, 5238, 5442, 5646], 51),
},

{
  sku: "MCAO97", name: "Mustique Ottoman", collection: "Bill Sofield", category: "ottomans", limited: false,
  standardFinish: "frame", frameMaterial: null, basePrice: 4326,
  specs: ["(1) Semi-attached tufted seat cushion", "This frame is handcrafted with natural materials and variations in tone or grain can occur. Tea-stained woven Danish cord"],
  dims: dims({ width: 26, depth: 26, height: 17.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 52, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([4362, 4380, 4398, 4434, 4470, 4506, 4542, 4578, 4614, 4650, 4686, 4722, 4758, 4794, 4830, 4866]),
  leather: leather([4830, 5010, 5154, 5298], 36),
},

{
  sku: "MCBB22", name: "Plateau Outdoor Sectional Double (Armless)", collection: "Barbara Barry", category: "chairs", limited: true,
  standardFinish: "SJava resin with Bronze frameD", frameMaterial: null, basePrice: 6666,
  specs: ["Outdoor Sectional Double (Armless) Barbara Barry", "(1) Loose, reversible seat", "( (1) Loose, reversible back pillow", "( Woven resin over powder-coated", "Waluminum frame a Stitch options: Double, top, or", "Swelted w Cushion toggles & sectional clamps", "C Suitable Outdoor Cover: MCCV33"],
  dims: dims({ width: 60, depth: 35.25, height: 31, widthInside: null, seatHeight: 17.5, seatDepth: 23.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 43, weight: 40, fabricReq: 7.5, leatherReq: null }),
  fabric: fab([6801, 6870, 6936, 7071, 7206, 7341, 7476, 7611, 7746, 7881, 8016, 8151, 8286, 8421, 8556, 8691]),
  leather: leather(null, 135),
},

{
  sku: "MCBB24", name: "Plateau Outdoor Sectional Corner", collection: "Barbara Barry", category: "chairs", limited: true,
  standardFinish: "Driftwood resin and frame", frameMaterial: null, basePrice: 2517,
  specs: ["Outdoor Sectional Corner Barbara Barry (1) Loose, reversible seat (1) Loose, reversible back pillow Woven resin over powder-coated aluminum frame Stitch options: Double, top, or welted Cushion toggles & sectional clamps Suitable Outdoor Cover: MCCV32"],
  dims: dims({ width: 35.25, depth: 35.25, height: 31, widthInside: null, seatHeight: 17.5, seatDepth: 23.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 28, weight: 45, fabricReq: 5.5, leatherReq: null }),
  fabric: fab([2616, 2667, 2715, 2814, 2913, 3012, 3111, 3210, 3309, 3408, 3507, 3606, 3705, 3804, 3903, 4002]),
  leather: leather(null, 99),
},

{
  sku: "MCBB25L", name: "Outdoor Plateau Sectional Double (Left)", collection: "Barbara Barry", category: "chairs", limited: true,
  standardFinish: "Java resin with Bronze frame", frameMaterial: null, basePrice: 6966,
  specs: ["(1) Loose, reversible seat", "(1) Loose, reversible back pillow", "Woven resin over powder-coated aluminum frame", "Stitch options: Double, top, or welted", "Cushion toggles & sectional clamp Suitable Outdoor Cover: MCCV33"],
  dims: dims({ width: 60, depth: 35.25, height: 31, widthInside: null, seatHeight: 17.5, seatDepth: 23.5, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 43, weight: 45, fabricReq: 7.5, leatherReq: null }),
  fabric: fab([7101, 7170, 7236, 7371, 7506, 7641, 7776, 7911, 8046, 8181, 8316, 8451, 8586, 8721, 8856, 8991]),
  leather: leather(null, 135),
},

{
  sku: "MCBB25R", name: "Outdoor Plateau Sectional Double (Right)", collection: "Barbara Barry", category: "chairs", limited: true,
  standardFinish: "Java resin with Bronze frame", frameMaterial: null, basePrice: 6966,
  specs: ["(1) Loose, reversible seat", "(1) Loose, reversible back pillow d", "Woven resin over powder-coated aluminum frame", "Stitch options: Double, top, or welted ps", "Cushion toggles & sectional clamps 3", "Suitable Outdoor Cover: MCCV33"],
  dims: dims({ width: 60, depth: 35.25, height: 31, widthInside: null, seatHeight: 17.5, seatDepth: 23.5, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 43, weight: 45, fabricReq: 7.5, leatherReq: null }),
  fabric: fab([7101, 7170, 7236, 7371, 7506, 7641, 7776, 7911, 8046, 8181, 8316, 8451, 8586, 8721, 8856, 8991]),
  leather: leather(null, 135),
},

{
  sku: "MCBB28", name: "Plateau Outdoor Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7866,
  specs: ["Outdoor Sofa Barbara Barry", "(2) Loose, reversible seat", "B (2) Loose, reversible back pillow", "( Woven resin over powder-coated", "(aluminum frame", "D Stitch options: Double, top, or", "Hwelted", "R Cushion toggles & sectional clamps c Suitable Outdoor Cover: MCCV41 Driftwood resin and frame, Java resin with Bronze frame"],
  dims: dims({ width: 76, depth: 35.5, height: 31, widthInside: null, seatHeight: 17.5, seatDepth: 23.5, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 70, weight: 57, fabricReq: 7.5, leatherReq: null }),
  fabric: fab([8001, 8070, 8136, 8271, 8406, 8541, 8676, 8811, 8946, 9081, 9216, 9351, 9486, 9621, 9756, 9891]),
  leather: leather(null, 135),
},

{
  sku: "MCC109", name: "Lyon 84\u201D Sofa", collection: "McGuire Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10896,
  specs: ["Bench seat (1) tufted pad atop the seat (2) Loose back pillows Double stitch. Hook clasp keeps top pad in place Rattan frame with tightly woven caned sides"],
  dims: dims({ width: 84, depth: 34, height: 34, widthInside: null, seatHeight: 21, seatDepth: 16.5, armWidth: null, armHeight: 26, exposedLegHeight: 3.5, volume: 88, weight: 175, fabricReq: 20.25, leatherReq: 344 }),
  fabric: fab([11262, 11445, 11628, 11994, 12360, 12726, 13092, 13458, 13824, 14190, 14556, 14922, 15288, 15654, 16020, 16386]),
  leather: leather([16020, 17850, 19314, 20778], 366),
},

{
  sku: "MCC109-v2", name: "Lyon 96\u201D Sofa", collection: "McGuire Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11796,
  specs: ["(2) Loose seats", "(1) Tufted pad atop the seat", "(2) Loose back pillows", "Double stitch", "Hook clasp keeps top pad in place", "Rattan frame with tightly woven caned sides"],
  dims: dims({ width: 96, depth: 34, height: 34, widthInside: null, seatHeight: 21, seatDepth: 16.5, armWidth: null, armHeight: 26, exposedLegHeight: 3.5, volume: 88, weight: 175, fabricReq: 22.25, leatherReq: 378 }),
  fabric: fab([12198, 12399, 12600, 13002, 13404, 13806, 14208, 14610, 15012, 15414, 15816, 16218, 16620, 17022, 17424, 17826]),
  leather: leather([17424, 19434, 21042, 22650], 402),
},

{
  sku: "MCC140", name: "Tresser 84\u201D Sofa (with Woven Leather)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "Quercia Bianca, Quercia Nera", frameMaterial: null, basePrice: 12981,
  specs: ["One (1) Loose bench seat", "Two (2) Loose back pillows", "Woven black leather sides and back e", "White Oak frame"],
  dims: dims({ width: 84, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 47, weight: 100, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([13152, 13239, 13323, 13494, 13665, 13836, 14007, 14178, 14349, 14520, 14691, 14862, 15033, 15204, 15375, 15546]),
  leather: leather([15375, 16230, 16914, 17598], 171),
},

{
  sku: "MCC140-v2", name: "Tresser 84\u201D Sofa (Fully Upholstered)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "WQuercia Bianca, Quercia NeraQ", frameMaterial: null, basePrice: 9831,
  specs: ["One (1) Loose bench seat", "O Two (2) Loose back pillows", "T Fully upholstered sides and back", "W White Oak frame b"],
  dims: dims({ width: 84, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 47, weight: 100, fabricReq: 14, leatherReq: 238 }),
  fabric: fab([10083, 10209, 10335, 10587, 10839, 11091, 11343, 11595, 11847, 12099, 12351, 12603, 12855, 13107, 13359, 13611]),
  leather: leather([13359, 14619, 15627, 16635], 252),
},

{
  sku: "MCC140-v3", name: "Tresser 96\u201D Sofa (with Woven Leather)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "Quercia Bianca, Quercia Nera", frameMaterial: null, basePrice: 16701,
  specs: ["One (1) Loose bench seat Two (2) Loose back pillows Woven black leather sides and back White Oak frame"],
  dims: dims({ width: 96, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 53, weight: 150, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([16872, 16959, 17043, 17214, 17385, 17556, 17727, 17898, 18069, 18240, 18411, 18582, 18753, 18924, 19095, 19266]),
  leather: leather([19095, 19950, 20634, 21318], 171),
},

{
  sku: "MCC140-v4", name: "Tresser 96\u201D Sofa (Fully Upholstered)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "Quercia Bianca, Quercia Nera", frameMaterial: null, basePrice: 10431,
  specs: ["One (1) Loose bench seat", "Two (2) Loose back pillows", "Fully upholstered sides and back", "White Oak frame"],
  dims: dims({ width: 96, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 53, weight: 150, fabricReq: 14, leatherReq: 238 }),
  fabric: fab([10683, 10809, 10935, 11187, 11439, 11691, 11943, 12195, 12447, 12699, 12951, 13203, 13455, 13707, 13959, 14211]),
  leather: leather([13959, 15219, 16227, 17235], 252),
},

{
  sku: "MCC140-v5", name: "Tresser 108\u201D Sofa (with Woven Leather)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "Quercia Bianca, Quercia Nera", frameMaterial: null, basePrice: 18762,
  specs: ["One (1) Loose bench seat", "Three (3) Loose back pillows", "Woven black leather sides and back", "White Oak frame"],
  dims: dims({ width: 108, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 47, weight: 100, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([19005, 19128, 19248, 19491, 19734, 19977, 20220, 20463, 20706, 20949, 21192, 21435, 21678, 21921, 22164, 22407]),
  leather: leather([22164, 23379, 24351, 25323], 243),
},

{
  sku: "MCC140-v6", name: "Tresser 108\u201D Sofa (Fully Upholstered)", collection: "Nicole Hollis", category: "sofas", limited: true,
  standardFinish: "wQuercia Bianca, Quercia NeraD", frameMaterial: null, basePrice: 14712,
  specs: ["One (1) Loose bench seat", "T Three (3) Loose back pillows", "( Fully upholstered sides and back", "S White Oak frame"],
  dims: dims({ width: 108, depth: 34, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 119, weight: 200, fabricReq: 19.5, leatherReq: 332 }),
  fabric: fab([15063, 15240, 15414, 15765, 16116, 16467, 16818, 17169, 17520, 17871, 18222, 18573, 18924, 19275, 19626, 19977]),
  leather: leather([19626, 21381, 22785, 24189], 351),
},

{
  sku: "MCC171", name: "Loop Settee", collection: "Jamie Durie", category: "sofas", limited: true,
  standardFinish: "Dark Tobacco", frameMaterial: null, basePrice: 3921,
  specs: ["Tight seat (1) Loose back pillow Settee in Rattan and Honeycomb, with Greystone leather cord"],
  dims: dims({ width: 53, depth: 27.5, height: 28, widthInside: null, seatHeight: 17.75, seatDepth: 23.75, armWidth: null, armHeight: 22.75, exposedLegHeight: null, volume: 78, weight: 65, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([3984, 4017, 4047, 4110, 4173, 4236, 4299, 4362, 4425, 4488, 4551, 4614, 4677, 4740, 4803, 4866]),
  leather: leather([4803, 5118, 5370, 5622], 63),
},

{
  sku: "MCLAO10", name: "Ottoman", collection: "McGuire Originals", category: "ottomans", limited: true,
  standardFinish: "Pecan", frameMaterial: null, basePrice: 4047,
  specs: ["(1) Semi-attached cushion", "Rawhide and rattan frame"],
  dims: dims({ width: 26, depth: 26, height: 16, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 4, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([4101, 4128, 4155, 4209, 4263, 4317, 4371, 4425, 4479, 4533, 4587, 4641, 4695, 4749, 4803, 4857]),
  leather: leather([4803, 5073, 5289, 5505], 54),
},

{
  sku: "MCO3011L", name: "Gondola Outdoor Settee", collection: "Gondola", category: "sofas", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 3276,
  specs: ["Outdoor Settee Gondola", "(1) Loose bench seat", "(3) Loose, throws (20\u201D)", "Powder coated aluminum frame joined by a series of stretchers and x-braces", "Suitable Outdoor Cover: MCCV47"],
  dims: dims({ width: 60, depth: 23, height: 32, widthInside: null, seatHeight: 19, seatDepth: 20.5, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 31, weight: 60, fabricReq: 5.75, leatherReq: null }),
  fabric: fab([3381, 3435, 3486, 3591, 3696, 3801, 3906, 4011, 4116, 4221, 4326, 4431, 4536, 4641, 4746, 4851]),
  leather: leather(null, 105),
},

{
  sku: "MCO3211C", name: "Cuerda Slipper Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "SBark WeaveB", frameMaterial: null, basePrice: 5541,
  specs: ["Aluminum frame wrapped with", "Aacrylic rope a Loose seat and back cushion", "L Suitable outdoor cover: MCCV51", "( T"],
  dims: dims({ width: 23, depth: 32.75, height: 32, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 45, weight: 23.5, fabricReq: 3, leatherReq: null }),
  fabric: fab([5595, 5622, 5649, 5703, 5757, 5811, 5865, 5919, 5973, 6027, 6081, 6135, 6189, 6243, 6297, 6351]),
  leather: leather(null, 54),
},

{
  sku: "MCO3211CS", name: "Cuerda Chaise Lounge", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 8736,
  specs: ["Aluminum frame wrapped with acrylic rope Loose seat and back cushion (1) 7\u201Dx26\u201D bolster pillow Two wheels for easy mobility Suitable outdoor cover: MCCV52"],
  dims: dims({ width: 31, depth: 74.5, height: 34.5, widthInside: null, seatHeight: 18, seatDepth: 63.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 43, weight: 66, fabricReq: 7, leatherReq: null }),
  fabric: fab([8862, 8925, 8988, 9114, 9240, 9366, 9492, 9618, 9744, 9870, 9996, 10122, 10248, 10374, 10500, 10626]),
  leather: leather(null, 126),
},

{
  sku: "MCO3211O", name: "Cuerda Ottoman", collection: "Laura Kirar", category: "ottomans", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 2790,
  specs: ["Aluminum frame wrapped with acrylic rope", "Loose cushion", "Suitable Outdoor Cover: MCCV53"],
  dims: dims({ width: 23, depth: 23, height: 17.5, widthInside: null, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14.5, weight: 17, fabricReq: 2, leatherReq: null }),
  fabric: fab([2826, 2844, 2862, 2898, 2934, 2970, 3006, 3042, 3078, 3114, 3150, 3186, 3222, 3258, 3294, 3330]),
  leather: leather(null, 36),
},

{
  sku: "MCO3211S", name: "Cuerda Sofa", collection: "Laura Kirar", category: "sofas", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 11511,
  specs: ["Aluminum frame wrapped with acrylic rope", "Loose bench seat cushion 3", "Three (3) loose back cushions two (2) 25.75\u201D x 13\u201D, one (1) 36.25\u201D x 13\u201D", "Two (2) 7.5\u201D bolster pillows", "Suitable Outdoor Cover: MCCV54"],
  dims: dims({ width: 90, depth: 32, height: 29.25, widthInside: 87, seatHeight: 18, seatDepth: 22, armWidth: null, armHeight: 29.25, exposedLegHeight: null, volume: 48.5, weight: 119.5, fabricReq: 8.5, leatherReq: null }),
  fabric: fab([11664, 11742, 11817, 11970, 12123, 12276, 12429, 12582, 12735, 12888, 13041, 13194, 13347, 13500, 13653, 13806]),
  leather: leather(null, 153),
},

{
  sku: "MCO3212C", name: "Cuerda Lounge Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "SBark WeaveB", frameMaterial: null, basePrice: 6141,
  specs: ["Aluminum frame wrapped with", "Aacrylic rope a Loose seat and back cushion", "L Suitable Outdoor Cover: MCCV55", "("],
  dims: dims({ width: 28.5, depth: 34.5, height: 34.5, widthInside: 25.5, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 22.75, exposedLegHeight: null, volume: 45, weight: 32.5, fabricReq: 3, leatherReq: null }),
  fabric: fab([6195, 6222, 6249, 6303, 6357, 6411, 6465, 6519, 6573, 6627, 6681, 6735, 6789, 6843, 6897, 6951]),
  leather: leather(null, 54),
},

{
  sku: "MCO3214CA", name: "Cuerda Armless Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 6225,
  specs: ["Aluminum frame wrapped with acrylic rope Loose seat and back cushion (1) 7\u201D x 22\u201D bolster pillow Suitable Outdoor Cover: MCCV65"],
  dims: dims({ width: 33.25, depth: 33.25, height: 30.5, widthInside: null, seatHeight: 18, seatDepth: 18.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 45, weight: 42, fabricReq: 4.75, leatherReq: null }),
  fabric: fab([6312, 6357, 6399, 6486, 6573, 6660, 6747, 6834, 6921, 7008, 7095, 7182, 7269, 7356, 7443, 7530]),
  leather: leather(null, 87),
},

{
  sku: "MCO3214CC", name: "Cuerda Corner Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 7755,
  specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat", "(2) loose back cushions", "(1) 7\u201D x 22\u201D bolster pillow", "Suitable Outdoor Cover: MCCV66"],
  dims: dims({ width: 33.25, depth: 33.25, height: 30.5, widthInside: 0, seatHeight: 18, seatDepth: 18.5, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 45, weight: 47.5, fabricReq: 5.25, leatherReq: null }),
  fabric: fab([7851, 7899, 7947, 8043, 8139, 8235, 8331, 8427, 8523, 8619, 8715, 8811, 8907, 9003, 9099, 9195]),
  leather: leather(null, 96),
},

{
  sku: "MCO3341C", name: "Bow Outdoor Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "with Stone Weave", frameMaterial: null, basePrice: 1791,
  specs: ["Cast aluminum dining chair with flat woven acrylic rope", "Suitable Outdoor Cover: MCCV01 6 Gravel with Bark Weave, Gravel"],
  dims: dims({ width: 29, depth: 28.5, height: 31.75, widthInside: null, seatHeight: 14.75, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 19, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
},

{
  sku: "MCO3341O", name: "Bow Outdoor Ottoman", collection: "Barbara Barry", category: "ottomans", limited: false,
  standardFinish: "with Stone WeaveS", frameMaterial: null, basePrice: 1191,
  specs: ["Cast aluminum ottoman in Gravel", "Pfinish with flat, woven acrylic rope a Suitable outdoor over:MCCV09", "O Lr SGravel with Bark Weave, Gravel"],
  dims: dims({ width: 26.75, depth: 16, height: 14.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 12, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
},

{
  sku: "MCO3500B", name: "Navagio Bench", collection: "Baker Resort\u00AE for McGuire", category: "ottomans", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 4011,
  specs: ["Powder-coated cast and extruded aluminum frame Outdoor grade strapping Loose bench cushion (non- reversible) Suitable Outdoor Cover: MCCV76"],
  dims: dims({ width: 60, depth: 20, height: 22, widthInside: null, seatHeight: 21, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 44.5, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([4053, 4074, 4095, 4137, 4179, 4221, 4263, 4305, 4347, 4389, 4431, 4473, 4515, 4557, 4599, 4641]),
  leather: leather([4599, 4809, 4977, 5145], 42),
},

{
  sku: "MCO3500CS", name: "Phuket Chaise Lounge", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 7326,
  specs: ["Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping", "Loose lounge pillow (non- reversible)", "Reclines to six (6) positions", "Casters on back legs", "Suitable Outdoor Cover: MCCV77"],
  dims: dims({ width: 30, depth: 92, height: 19, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 33, weight: 76.5, fabricReq: 8.75, leatherReq: 149 }),
  fabric: fab([7485, 7566, 7644, 7803, 7962, 8121, 8280, 8439, 8598, 8757, 8916, 9075, 9234, 9393, 9552, 9711]),
  leather: leather([9552, 10347, 10983, 11619], 159),
},

{
  sku: "MCO3502CA", name: "Abaco Armless Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 4671,
  specs: ["d", "Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non- reversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV65 7"],
  dims: dims({ width: 29, depth: 33.5, height: 34, widthInside: null, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 20, weight: 91.5, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([4734, 4767, 4797, 4860, 4923, 4986, 5049, 5112, 5175, 5238, 5301, 5364, 5427, 5490, 5553, 5616]),
  leather: leather([5553, 5868, 6120, 6372], 63),
},

{
  sku: "MCO3502CC", name: "Abaco Corner Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "SSea SaltS", frameMaterial: null, basePrice: 5646,
  specs: ["Powder-coated cast and extruded", "Paluminum frame a Loose seat and back cushion (non-", "Lreversible) r Cushion toggles and sectional", "Cclamps c Suitable Outdoor Cover: MCCV32"],
  dims: dims({ width: 33.5, depth: 33.5, height: 34, widthInside: 22.5, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 23, weight: 106, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([5736, 5781, 5826, 5916, 6006, 6096, 6186, 6276, 6366, 6456, 6546, 6636, 6726, 6816, 6906, 6996]),
  leather: leather([6906, 7356, 7716, 8076], 90),
},

{
  sku: "MCO3502CL", name: "Abaco Left Arm Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 4971,
  specs: ["Powder-coated cast and extruded aluminum frame Loose seat and back cushion (non- reversible) Cushion toggles and sectional clamps Suitable Outdoor Cover: MCCV83"],
  dims: dims({ width: 30.5, depth: 33.5, height: 34, widthInside: 29, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 21, weight: 96, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([5034, 5067, 5097, 5160, 5223, 5286, 5349, 5412, 5475, 5538, 5601, 5664, 5727, 5790, 5853, 5916]),
  leather: leather([5853, 6168, 6420, 6672], 63),
},

{
  sku: "MCO3502CR", name: "Abaco Right Arm Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 4971,
  specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (nonreversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV83"],
  dims: dims({ width: 30.5, depth: 33.5, height: 34, widthInside: 29, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 21, weight: 96, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([5034, 5067, 5097, 5160, 5223, 5286, 5349, 5412, 5475, 5538, 5601, 5664, 5727, 5790, 5853, 5916]),
  leather: leather([5853, 6168, 6420, 6672], 63),
},

{
  sku: "MCO3502O", name: "Abaco Ottoman - Large", collection: "Baker Resort\u00AE for McGuire", category: "ottomans", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 5607,
  specs: ["d", "Powder-coated cast and extruded aluminum frame n-", "Loose cushion (non-reversible)", "Cushion toggles", "Suitable Outdoor Cover: MCCV78 3"],
  dims: dims({ width: 54, depth: 40, height: 17, widthInside: null, seatHeight: 16, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 18, weight: 139.5, fabricReq: 4.25, leatherReq: 72 }),
  fabric: fab([5685, 5724, 5763, 5841, 5919, 5997, 6075, 6153, 6231, 6309, 6387, 6465, 6543, 6621, 6699, 6777]),
  leather: leather([6699, 7089, 7401, 7713], 78),
},

{
  sku: "MCO3503C", name: "Abaco Lounge Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea SaltS", frameMaterial: null, basePrice: 6771,
  specs: ["Powder-coated cast and extruded", "Paluminum frame a Loose seat and back cushion (non-", "Lreversible)", "C Standard 360 swivel", "S Cushion toggles", "Suitable Outdoor Cover: MCCV83"],
  dims: dims({ width: 32, depth: 33.5, height: 36, widthInside: 29, seatHeight: 20, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 22, weight: 113, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([6834, 6867, 6897, 6960, 7023, 7086, 7149, 7212, 7275, 7338, 7401, 7464, 7527, 7590, 7653, 7716]),
  leather: leather([7653, 7968, 8220, 8472], 63),
},

{
  sku: "MCO3503O", name: "Abaco Ottoman - Small", collection: "Baker Resort\u00AE for McGuire", category: "ottomans", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 3411,
  specs: ["Powder-coated cast and extruded aluminum frame Loose cushion (non-reversible) Cushion toggles Suitable Outdoor Cover: MCCV30"],
  dims: dims({ width: 29, depth: 20, height: 17, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 51.5, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([3453, 3474, 3495, 3537, 3579, 3621, 3663, 3705, 3747, 3789, 3831, 3873, 3915, 3957, 3999, 4041]),
  leather: leather([3999, 4209, 4377, 4545], 42),
},

{
  sku: "MCO3504C", name: "Abaco Slipper Chair", collection: "Baker Resort\u00AE for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 6171,
  specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (nonreversible)", "Standard 360 swivel", "Cushion toggles", "Suitable Outdoor Cover: MCCV65"],
  dims: dims({ width: 29, depth: 33.5, height: 36, widthInside: null, seatHeight: 20, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 100, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([6234, 6267, 6297, 6360, 6423, 6486, 6549, 6612, 6675, 6738, 6801, 6864, 6927, 6990, 7053, 7116]),
  leather: leather([7053, 7368, 7620, 7872], 63),
},

{
  sku: "MCO3507L", name: "Phuket Settee", collection: "Baker Resort\u00AE for McGuire", category: "sofas", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 6231,
  specs: ["d", "Powder-coated cast and extruded aluminum frame n-", "Outdoor grade strapping", "Loose seat and back cushion (non- reversible)", "Suitable Outdoor Cover: MCCV79 5"],
  dims: dims({ width: 60, depth: 25, height: 36, widthInside: 57, seatHeight: 21, seatDepth: 17, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 37, weight: 54, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([6318, 6363, 6405, 6492, 6579, 6666, 6753, 6840, 6927, 7014, 7101, 7188, 7275, 7362, 7449, 7536]),
  leather: leather([7449, 7884, 8232, 8580], 87),
},

{
  sku: "MCO3702C", name: "Naxos Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7500,
  specs: ["One (1) non-reversible loose seat", "Ocushion c One (1) non-reversible back pillow", "O One (1) lumbar pillow (26\u201D x 10\u201D)", "O Two (2) throw pillows (27.5\u201D x 10\u201D)", "B Blackened Stainless Steel frame -"],
  dims: dims({ width: 42, depth: 36, height: 32, widthInside: 29, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 26, exposedLegHeight: null, volume: 28, weight: 85, fabricReq: 7.25, leatherReq: 124 }),
  fabric: fab([7632, 7698, 7764, 7896, 8028, 8160, 8292, 8424, 8556, 8688, 8820, 8952, 9084, 9216, 9348, 9480]),
  leather: leather([9348, 10008, 10536, 11064], 132),
},

{
  sku: "MCO3704C", name: "Naxos Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5100,
  specs: ["One (1) non-reversible loose seat cushion One (1) non-reversible back pillow One (1) lumbar pillow (23\u201D x 10\u201D) Blackened Stainless Steel frame"],
  dims: dims({ width: 30, depth: 34, height: 30, widthInside: 28.5, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 18, weight: 58.5, fabricReq: 4.5, leatherReq: 77 }),
  fabric: fab([5181, 5223, 5262, 5343, 5424, 5505, 5586, 5667, 5748, 5829, 5910, 5991, 6072, 6153, 6234, 6315]),
  leather: leather([6234, 6639, 6963, 7287], 81),
},

{
  sku: "MCO3704O", name: "Naxos Ottoman", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2850,
  specs: ["One (1) non-reversible loose seat cushion", "Blackened Stainless Steel frame"],
  dims: dims({ width: 28, depth: 20, height: 17, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 26.5, fabricReq: 1.75, leatherReq: 30 }),
  fabric: fab([2883, 2901, 2916, 2949, 2982, 3015, 3048, 3081, 3114, 3147, 3180, 3213, 3246, 3279, 3312, 3345]),
  leather: leather([3312, 3477, 3609, 3741], 33),
},

{
  sku: "MCO3710L", name: "Naxos Loveseat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9600,
  specs: ["t", "Two (2) non-reversible loose seat cushions", "Two (2) non-reversible back pillows", "Two (2) lumbar pillows (24\u201D x 10\u201D)", "Blackened Stainless Steel frame"],
  dims: dims({ width: 64.5, depth: 34, height: 30, widthInside: 63, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 39, weight: 119.5, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([9762, 9843, 9924, 10086, 10248, 10410, 10572, 10734, 10896, 11058, 11220, 11382, 11544, 11706, 11868, 12030]),
  leather: leather([11868, 12678, 13326, 13974], 162),
},

{
  sku: "MCO3710S", name: "Naxos Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 14550,
  specs: ["Three (3) non-reversible loose seat", "Ncushions a Three (3) non-reversible back", "Tpillows", "B Three (3) lumbar pillows (24\u201D x", "S10\u201D)", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV81 -"],
  dims: dims({ width: 96, depth: 34, height: 30, widthInside: 94.5, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 57, weight: 175, fabricReq: 13.25, leatherReq: 226 }),
  fabric: fab([14790, 14910, 15030, 15270, 15510, 15750, 15990, 16230, 16470, 16710, 16950, 17190, 17430, 17670, 17910, 18150]),
  leather: leather([17910, 19110, 20070, 21030], 240),
},

{
  sku: "MCO3712CS", name: "Naxos Slim Chaise", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7500,
  specs: ["Non-reversible bench seat and angled arms Two (2) bolster pillows (6\u201D x 22\u201D) Blackened Stainless Steel frame Suitable Outdoor Cover: MCCV05"],
  dims: dims({ width: 80.5, depth: 25, height: 21, widthInside: 52, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 98, weight: 86.5, fabricReq: 5.25, leatherReq: 90 }),
  fabric: fab([7596, 7644, 7692, 7788, 7884, 7980, 8076, 8172, 8268, 8364, 8460, 8556, 8652, 8748, 8844, 8940]),
  leather: leather([8844, 9324, 9708, 10092], 96),
},

{
  sku: "MCO3714CA", name: "Naxos Slipper Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4050,
  specs: ["One (1) non-reversible loose seat cushion", "One (1) non-reversible back pillow", "One (1) lumbar pillow (17.5\u201D x 7\u201D)", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV51"],
  dims: dims({ width: 24, depth: 30, height: 25, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 11, weight: 35.5, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([4101, 4128, 4152, 4203, 4254, 4305, 4356, 4407, 4458, 4509, 4560, 4611, 4662, 4713, 4764, 4815]),
  leather: leather([4764, 5019, 5223, 5427], 51),
},

{
  sku: "MCO3716CS", name: "Naxos Chaise Lounge", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8700,
  specs: ["t", "Non-reversible loose bench seat and back w", "One (1) removable round bolster \u201D) headrest", "Reclines to four (4) positions 1", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV05"],
  dims: dims({ width: 78, depth: 30, height: 16.5, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 98, weight: 104, fabricReq: 7.75, leatherReq: 132 }),
  fabric: fab([8841, 8913, 8982, 9123, 9264, 9405, 9546, 9687, 9828, 9969, 10110, 10251, 10392, 10533, 10674, 10815]),
  leather: leather([10674, 11379, 11943, 12507], 141),
},

{
  sku: "MCO3718B", name: "Naxos Oval Bench", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3000,
  specs: ["Non-reversible loose seat cushion", "N Blackened Stainless Steel frame", "B Suitable Outdoor Cover: MCCV09 -"],
  dims: dims({ width: 30, depth: 18, height: 16, widthInside: null, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 23.5, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([3027, 3042, 3054, 3081, 3108, 3135, 3162, 3189, 3216, 3243, 3270, 3297, 3324, 3351, 3378, 3405]),
  leather: leather([3378, 3513, 3621, 3729], 27),
},

{
  sku: "MCO3720B", name: "Naxos Slim Bench", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3000,
  specs: ["Non-reversible loose seat cushion Blackened Stainless Steel frame"],
  dims: dims({ width: 24, depth: 17, height: 16, widthInside: null, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 23.5, fabricReq: 1.25, leatherReq: 22 }),
  fabric: fab([3024, 3036, 3048, 3072, 3096, 3120, 3144, 3168, 3192, 3216, 3240, 3264, 3288, 3312, 3336, 3360]),
  leather: leather([3336, 3456, 3552, 3648], 24),
},

{
  sku: "MCTP50", name: "Outdoor Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Java resin with Bronze frame", frameMaterial: null, basePrice: 3165,
  specs: ["(1) Loose seat", "(1) Loose, back pillow", "(1) Lumbar throw", "Contrasting yardage for lumbar pillow: 0.75 yards", "Woven resin over powder-coated aluminum frame", "Suitable Outdoor Cover: MCCV01"],
  dims: dims({ width: 30, depth: 33, height: 30, widthInside: null, seatHeight: 16.5, seatDepth: 19, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 27, weight: null, fabricReq: 3.5, leatherReq: null }),
  fabric: fab([3228, 3261, 3291, 3354, 3417, 3480, 3543, 3606, 3669, 3732, 3795, 3858, 3921, 3984, 4047, 4110]),
  leather: leather(null, 63),
},

{
  sku: "MCTP53", name: "Outdoor Sofa", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: "Java resin with Bronze frame", frameMaterial: null, basePrice: 10287,
  specs: ["(2) Loose seat", "(2) Loose back pillow", "(2) Lumbar throw pillows", "Contrast yardage for lumbar pillow: 1.5 yards d", "Woven resin over powder-coated aluminum frame 1", "Suitable outdoor cover: MCCV03"],
  dims: dims({ width: 75, depth: 34, height: 30, widthInside: null, seatHeight: 16.5, seatDepth: 19, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 53, weight: 124, fabricReq: 8, leatherReq: null }),
  fabric: fab([10431, 10503, 10575, 10719, 10863, 11007, 11151, 11295, 11439, 11583, 11727, 11871, 12015, 12159, 12303, 12447]),
  leather: leather(null, 144),
},

{
  sku: "MCTP59", name: "Single Outdoor Chaise", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Driftwood Resin and FrameC", frameMaterial: null, basePrice: 5736,
  specs: ["(1) Loose lounge pillow and", "Tremovable headrest", "( Contrasting yardage for headrest", "R1 yd c Woven resin over powder-coated aluminum frame", "Suitable Outdoor Cover: MCCV05"],
  dims: dims({ width: 30, depth: 80, height: 16, widthInside: 27.5, seatHeight: 16, seatDepth: 77.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 32, weight: 94, fabricReq: 7, leatherReq: null }),
  fabric: fab([5862, 5925, 5988, 6114, 6240, 6366, 6492, 6618, 6744, 6870, 6996, 7122, 7248, 7374, 7500, 7626]),
  leather: leather(null, 126),
},

{
  sku: "MCU1000L", name: "Open Oval Caned Banquette", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Coconut, Mica", frameMaterial: null, basePrice: 5046,
  specs: ["Tight seat (2) Throws (20\u201D) Rattan frame with natural closed cane on arms and back"],
  dims: dims({ width: 63, depth: 30.5, height: 37.25, widthInside: null, seatHeight: 17, seatDepth: 21, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 52, weight: 78, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([5136, 5181, 5226, 5316, 5406, 5496, 5586, 5676, 5766, 5856, 5946, 6036, 6126, 6216, 6306, 6396]),
  leather: leather([6306, 6756, 7116, 7476], 90),
},
{
  sku: "MCO143T", name: "Rollick Barstool", collection: "Nicole Hollis", category: "chairs", limited: true,
  standardFinish: "Naturale, Nero", frameMaterial: null, basePrice: 1497,
  specs: ["Backless woven rattan frame", "Rawhide weave", "One Bronze Kickplate"],
  dims: dims({ width: 17.5, depth: 17.5, height: 29.75, widthInside: null, seatHeight: 29.75, seatDepth: 16.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 8, weight: 13, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO184", name: "Gondola Outdoor Chair", collection: "Gondola", category: "chairs", limited: true,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 2145,
  specs: ["Outdoor Chair Gondola", "Powder-coated aluminum frame", "Loose seat cushion", "Suitable Outdoor Cover: MCCV39"],
  dims: dims({ width: 23, depth: 23, height: 32.5, widthInside: null, seatHeight: 19, seatDepth: 20.5, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 14, weight: 21, fabricReq: 1, leatherReq: null }),
  fabric: fab([2163, 2172, 2181, 2199, 2217, 2235, 2253, 2271, 2289, 2307, 2325, 2343, 2361, 2379, 2397, 2415]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3034", name: "Gondola Outdoor 48” Round Dining Table", collection: "Gondola", category: "tables", limited: false,
  standardFinish: "AMoonstoneM", frameMaterial: null, basePrice: 891,
  specs: ["Outdoor 48” Round Dining Table Gondola G Powder-coated aluminum frame", "Pjoined by a series of stretchers and jx-braces x Suitable Outdoor Cover: MCCV45", "O Base only t S"],
  dims: dims({ width: 48, depth: 48, height: 29.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 29, weight: 272, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3037", name: "Gondola Outdoor Round Counter Height Dining Table", collection: "Gondola", category: "tables", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 1491,
  specs: ["Outdoor Round CountHeight Dining Table Gondola", "Powder-coated aluminum frame joined by a series of stretchers anx-braces", "Optional top: 48” diameter, 3/4” thick Starphire glass top +$179 Optional top: 60” diameter, 3/4” thick Starphire glass top +$269 Available as base only", "Suitable Outdoor Cover: MCCV46"],
  dims: dims({ width: 48, depth: 48, height: 35.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 33, weight: 200, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3044", name: "Gondola Outdoor Side Counter Stool", collection: "Gondola", category: "chairs", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 1545,
  specs: ["Outdoor Side Counter Stool Gondola", "Powder-coated aluminum frame nd", "Loose seat cushion", "Suitable Outdoor Cover: MCCV44 91 91 6"],
  dims: dims({ width: 18, depth: 21.25, height: 38, widthInside: null, seatHeight: 24, seatDepth: 18, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 10, weight: 16, fabricReq: 1, leatherReq: null }),
  fabric: fab([1563, 1572, 1581, 1599, 1617, 1635, 1653, 1671, 1689, 1707, 1725, 1743, 1761, 1779, 1797, 1815]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3045", name: "Gondola Outdoor Arm Counter Stool", collection: "Gondola", category: "chairs", limited: false,
  standardFinish: "SMoonstoneM", frameMaterial: null, basePrice: 1845,
  specs: ["Outdoor Arm Counter Stool Gondola G Powder-coated aluminum frame", "P Loose seat cushion", "L Suitable Outdoor Cover: MCCV44"],
  dims: dims({ width: 22, depth: 21.25, height: 38, widthInside: null, seatHeight: 24, seatDepth: 19, armWidth: null, armHeight: 34, exposedLegHeight: null, volume: 16, weight: 22, fabricReq: 1, leatherReq: null }),
  fabric: fab([1863, 1872, 1881, 1899, 1917, 1935, 1953, 1971, 1989, 2007, 2025, 2043, 2061, 2079, 2097, 2115]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3046", name: "Gondola Outdoor Side Barstool", collection: "Gondola", category: "chairs", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 1845,
  specs: ["Outdoor Side Barstool Gondola Powder-coated aluminum frame Loose seat cushion Suitable Outdoor Cover: MCCV44"],
  dims: dims({ width: 18, depth: 21.25, height: 43.75, widthInside: null, seatHeight: 30, seatDepth: 19, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 25, fabricReq: 1, leatherReq: null }),
  fabric: fab([1863, 1872, 1881, 1899, 1917, 1935, 1953, 1971, 1989, 2007, 2025, 2043, 2061, 2079, 2097, 2115]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3047", name: "Gondola Outdoor Arm Barstool", collection: "Gondola", category: "chairs", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 2145,
  specs: ["Outdoor Arm BarstoGondola", "Powder coated aluminum frame", "Loose seat cushion", "Suitable Outdoor Cover: MCCV44"],
  dims: dims({ width: 22, depth: 21.25, height: 43.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 26, fabricReq: 1, leatherReq: null }),
  fabric: fab([2163, 2172, 2181, 2199, 2217, 2235, 2253, 2271, 2289, 2307, 2325, 2343, 2361, 2379, 2397, 2415]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3048", name: "Gondola Outdoor Side Chair", collection: "Gondola", category: "chairs", limited: false,
  standardFinish: "Moonstone", frameMaterial: null, basePrice: 1545,
  specs: ["Outdoor Side Chair Gondola", "Powder-coated aluminum frame", "Loose seat cushion 4", "Suitable Outdoor Cover: MCCV39"],
  dims: dims({ width: 23, depth: 22.75, height: 33.5, widthInside: null, seatHeight: 18, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 12, weight: 20, fabricReq: 1, leatherReq: null }),
  fabric: fab([1563, 1572, 1581, 1599, 1617, 1635, 1653, 1671, 1689, 1707, 1725, 1743, 1761, 1779, 1797, 1815]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO323", name: "Hayes Swivel Counter/Barstool", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "-A", frameMaterial: null, basePrice: 4218,
  specs: ["Base options: Rattan or blackened", "Asteel base a Optional foot rail for Rattan Base:", "EOil Rubbed Bronze, Polished Brass, lBrushed Nickel", "S Optional height: Barstool 40”H,", "DCounter Stool 34.5”H M Rattan with caning on the inside seat back", "Barstool", "30” Seat Height for Barstool", "Counter Stool is not available in Blackened Steel Base"],
  dims: dims({ width: 19, depth: 19.5, height: 34.5, widthInside: null, seatHeight: 25, seatDepth: 14.75, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 30, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([4236, 4245, 4254, 4272, 4290, 4308, 4326, 4344, 4362, 4380, 4398, 4416, 4434, 4452, 4470, 4488]),
  leather: leather([4470, 4560, 4632, 4704], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO3234", name: "Cuerda Square Dining Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "Avana Dune with Bark Weave", frameMaterial: null, basePrice: 5691,
  specs: ["Aluminum frame wrapped with acrylic rope Engineered stone top with leathered finish Suitable Outdoor Cover: MCCV56 Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 36, depth: 36, height: 29, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 125, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3235", name: "Cuerda Rectangle Dining Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "Avana Dune with Bark Weave", frameMaterial: null, basePrice: 11991,
  specs: [],
  dims: dims({ width: 84, depth: 38, height: 29.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 200, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3237", name: "Cuerda Counter Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "Avana Dune with Bark Weave", frameMaterial: null, basePrice: 3291,
  specs: ["Aluminum frame wrapped with acrylic rope", "Engineered stone top and shelf with leathered finish 7", "Suitable Outdoor Cover: MCCV58", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 26, depth: 26, height: 36, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 34.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3244", name: "Cuerda Dining Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "SBark WeaveB", frameMaterial: null, basePrice: 2745,
  specs: ["Aluminum frame wrapped with", "Aacrylic rope a Loose seat cushion", "T Suitable Outdoor Cover: MCCV59"],
  dims: dims({ width: 19, depth: 24, height: 32.25, widthInside: null, seatHeight: 18.5, seatDepth: 18.25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 30, weight: 13.5, fabricReq: 1, leatherReq: null }),
  fabric: fab([2763, 2772, 2781, 2799, 2817, 2835, 2853, 2871, 2889, 2907, 2925, 2943, 2961, 2979, 2997, 3015]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3245", name: "Cuerda Counter Stool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 2445,
  specs: ["Aluminum frame wrapped with acrylic rope Tight upholstered seat Suitable Outdoor Cover: MCCV60"],
  dims: dims({ width: 18.5, depth: 18.5, height: 25.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 13, fabricReq: 1, leatherReq: null }),
  fabric: fab([2463, 2472, 2481, 2499, 2517, 2535, 2553, 2571, 2589, 2607, 2625, 2643, 2661, 2679, 2697, 2715]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3246", name: "Cuerda Barstool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Bark Weave", frameMaterial: null, basePrice: 2745,
  specs: ["Aluminum frame wrapped with acrylic rope", "Tight upholstered seat", "Suitable Outdoor Cover: MCCV61"],
  dims: dims({ width: 18.5, depth: 18.5, height: 31, widthInside: null, seatHeight: 29.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 14.5, fabricReq: 1, leatherReq: null }),
  fabric: fab([2763, 2772, 2781, 2799, 2817, 2835, 2853, 2871, 2889, 2907, 2925, 2943, 2961, 2979, 2997, 3015]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCO3261", name: "Cuerda Oval End Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "Avana Dune with Bark Weave", frameMaterial: null, basePrice: 2991,
  specs: ["Aluminum base wrapped with acrylic rope", "Engineered stone top with 1 leathered finish", "Suitable Outdoor Cover: MCCV62", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 24, depth: 18, height: 22, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 36, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3262", name: "Cuerda Square End Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "MAvana Dune with Bark WeaveA", frameMaterial: null, basePrice: 2691,
  specs: ["Aluminum base wrapped with", "Aacrylic rope a Engineered stone top with", "Eleathered finish l Suitable Outdoor Cover: MCCV63", "S Disclaimer: Please see Natural", "DMaterials page"],
  dims: dims({ width: 20, depth: 20, height: 17, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 36.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3278", name: "Cuerda Spot Table", collection: "Laura Kirar", category: "tables", limited: false,
  standardFinish: "Avana Dune with Bark Weave", frameMaterial: null, basePrice: 2691,
  specs: ["Aluminum base wrapped with acrylic rope Engineered stone top with leathered finish Suitable Outdoor Cover: MCCV64 Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 14, depth: 14, height: 19, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: 18, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3316B", name: "Bow Outdoor Bench", collection: "Barbara Barry", category: "ottomans", limited: false,
  standardFinish: "with Bark Weave", frameMaterial: null, basePrice: 1491,
  specs: ["Powder coated cast aluminum bench with flat, woven acrylic rop Suitable Outdoor Cover: MCCV12 Gravel with Stone Weave, Gravel"],
  dims: dims({ width: 49.75, depth: 19.5, height: 17, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 21, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO333", name: "Alameda Swivel Counter/Barstool", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Matte Natural Brown, Matte Pecan", frameMaterial: null, basePrice: 4968,
  specs: ["Rattan base pe", "Optional foot rail: Oil Rubbed 2 Bronze, Polished Brass, Brushed Nickel", "Optional height: Barstool 37”H/28” seat height, Counter Stool 34”H/25” seat height", "Rattan seat with woven rawhide back rest", "Tight upholstered seat", "Non-standard finish ships in 20-24 weeks l"],
  dims: dims({ width: 18.5, depth: 20.5, height: 33.75, widthInside: null, seatHeight: 25, seatDepth: 15.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 30, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([4986, 4995, 5004, 5022, 5040, 5058, 5076, 5094, 5112, 5130, 5148, 5166, 5184, 5202, 5220, 5238]),
  leather: leather([5220, 5310, 5382, 5454], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 600, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCO3336", name: "Spin Outdoor Dining Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "SGravelG", frameMaterial: null, basePrice: 4491,
  specs: ["Powder coated cast aluminum", "Cdining table top p Suitable Outdoor Cover: MCCV87"],
  dims: dims({ width: 48, depth: 48, height: 29, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 92, weight: 143, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3337", name: "Arrow Outdoor Dining Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "Gravel Base with Shadow Top", frameMaterial: null, basePrice: 5091,
  specs: ["Cast aluminum base with teak plank top Suitable Outdoor Cover: MCCV69"],
  dims: dims({ width: 88, depth: 44, height: 29.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 52, weight: 94, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3338", name: "Arrow Outdoor Counter Height Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "Gravel Base with Shadow Top", frameMaterial: null, basePrice: 3291,
  specs: ["Cast aluminum base with teak plank top", "Suitable outdoor cover: MCCV46"],
  dims: dims({ width: 48, depth: 48, height: 36.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 85, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO334", name: "Bercut Swivel Counter/Barstool", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4797,
  specs: ["Rattan Base", "Optional foot rail for Rattan base: Oil Rubbed Bronze, Polished Brass, Brushed Nickel", "Leather panels available in: Chocolate, Camel, Pebble, Ivory, and Black", "Optional height: Barstool 39”H, Counter Stool 35.5”H", "Rattan seat with leather panels", "Tight upholstered seat", "Barstool+$300+$300"],
  dims: dims({ width: 18.5, depth: 21.5, height: 35.5, widthInside: null, seatHeight: 25, seatDepth: 15.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 30, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([4815, 4824, 4833, 4851, 4869, 4887, 4905, 4923, 4941, 4959, 4977, 4995, 5013, 5031, 5049, 5067]),
  leather: leather([5049, 5139, 5211, 5283], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO3340", name: "Bow Outdoor Dining Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "with Stone WeaveGw", frameMaterial: null, basePrice: 2691,
  specs: ["Cast aluminum dining chair with", "Cflat woven acrylic rope fl Suitable Outdoor Cover: MCCV39 Gravel with Bark Weave, Gravel"],
  dims: dims({ width: 24, depth: 24, height: 33.5, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14, weight: 16, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3346", name: "Bow Outdoor Counter Stool", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "with Stone Weave", frameMaterial: null, basePrice: 1191,
  specs: ["Cast aluminum counter stool with flat, woven acrylic rope Gravel with Bark Weave, Gravel"],
  dims: dims({ width: 22, depth: 15.5, height: 25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 7, weight: 16, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3347", name: "Bow Outdoor Barstool", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "with Stone Weave", frameMaterial: null, basePrice: 1491,
  specs: ["Cast aluminum barstool with flat, woven acrylic rope Gravel with Bark Weave, Gravel"],
  dims: dims({ width: 22, depth: 15.5, height: 31, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 9, weight: 16, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3350", name: "Spin Outdoor Accent Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "Gravel", frameMaterial: null, basePrice: 2097,
  specs: [",", "Powder coated cast aluminum accent table", "Suitable outdoor cover: MCCV36"],
  dims: dims({ width: 24, depth: 24, height: 20, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 49, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3352", name: "Spin Outdoor Cocktail Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "DMGarden, GravelB", frameMaterial: null, basePrice: 3597,
  specs: ["Powder coated cast aluminum", "Pcocktail table base a Suitable outdoor cover: MCCV28", "S S"],
  dims: dims({ width: 42, depth: 42, height: 17, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 34, weight: 112, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3436", name: "Lanikai Square Dining Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 8397,
  specs: ["Powder-coated cast and extruded aluminum base Stone top Suitable Outdoor Cover: MCCV67 Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 48, depth: 48, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 233, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3437", name: "Lanikai Round Dining Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 8397,
  specs: ["Powder-coated cast and extruded aluminum base", "Stone top", "Suitable Outdoor Cover: MCCV68", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 54, depth: 54, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 200, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3438", name: "Lanikai Rectangle Dining Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 14997,
  specs: ["d", "Powder-coated cast and extruded aluminum base", "Stone top 8", "Suitable Outdoor Cover: MCCV69", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 96, depth: 48, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 37, weight: 461, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3439", name: "Laucala Counter Height Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "SBianco Vittoria with Sea SaltS", frameMaterial: null, basePrice: 6597,
  specs: ["Powder-coated cast and extruded", "Paluminum base a Stone top", "O Suitable Outdoor Cover: MCCV70", "L Disclaimer: Please see Natural rMaterials page"],
  dims: dims({ width: 38.5, depth: 38.5, height: 36, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 30, weight: 120, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3440", name: "Phuket Side Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 3711,
  specs: ["Powder-coated cast and extruded aluminum frame Outdoor grade strapping Loose seat and back cushion (non- reversible) Suitable Outdoor Cover: MCCV71"],
  dims: dims({ width: 20, depth: 25, height: 35, widthInside: null, seatHeight: 21, seatDepth: 17, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 25, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([3753, 3774, 3795, 3837, 3879, 3921, 3963, 4005, 4047, 4089, 4131, 4173, 4215, 4257, 4299, 4341]),
  leather: leather([4299, 4509, 4677, 4845], 42),
  finishTiers: null,
},

{
  sku: "MCO3441", name: "Phuket Arm Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 4011,
  specs: ["Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping", "Loose seat and back cushion (nonreversible)", "Suitable Outdoor Cover: MCCV71"],
  dims: dims({ width: 25, depth: 25, height: 35, widthInside: 22, seatHeight: 21, seatDepth: 17, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 16, weight: 35.5, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([4053, 4074, 4095, 4137, 4179, 4221, 4263, 4305, 4347, 4389, 4431, 4473, 4515, 4557, 4599, 4641]),
  leather: leather([4599, 4809, 4977, 5145], 42),
  finishTiers: null,
},

{
  sku: "MCO3448", name: "Phuket Counter Stool", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea Salt", frameMaterial: null, basePrice: 3411,
  specs: ["d", "Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping n-", "Loose seat and back cushion (non- reversible) 1", "Brushed Stainless Steel kickplate", "Suitable Outdoor Cover: MCCV72"],
  dims: dims({ width: 20, depth: 24.5, height: 41, widthInside: null, seatHeight: 27, seatDepth: 16, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14, weight: 34, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([3453, 3474, 3495, 3537, 3579, 3621, 3663, 3705, 3747, 3789, 3831, 3873, 3915, 3957, 3999, 4041]),
  leather: leather([3999, 4209, 4377, 4545], 42),
  finishTiers: null,
},

{
  sku: "MCO3449", name: "Phuket Barstool", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
  standardFinish: "Sea SaltB", frameMaterial: null, basePrice: 3711,
  specs: ["Powder-coated cast and extruded", "Paluminum frame a Outdoor grade strapping", "S Loose seat and back cushion (non-", "Sreversible)", "D Brushed Stainless Steel kickplate M Suitable Outdoor Cover: MCCV72"],
  dims: dims({ width: 20, depth: 24.5, height: 46, widthInside: null, seatHeight: 32, seatDepth: 16, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 36, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([3753, 3774, 3795, 3837, 3879, 3921, 3963, 4005, 4047, 4089, 4131, 4173, 4215, 4257, 4299, 4341]),
  leather: leather([4299, 4509, 4677, 4845], 42),
  finishTiers: null,
},

{
  sku: "MCO3450", name: "Bondi Cocktail Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 6897,
  specs: ["Powder-coated cast and extruded aluminum base Stone top Suitable Outdoor Cover: MCCV73 Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 60, depth: 36, height: 17, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 32, weight: 186, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3456", name: "Condado Spot Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 2997,
  specs: ["Powder-coated cast and extruded aluminum base", "Stone top", "Suitable Outdoor Cover: MCCV20", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 16, depth: 16, height: 17.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 63.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3458", name: "Bondi Round Side Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 3597,
  specs: ["d", "Powder-coated cast and extruded aluminum base", "Stone top 0", "Suitable Outdoor Cover: MCCV36", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 24, depth: 24, height: 22, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 8, weight: 37, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3459", name: "Bondi Square Side Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "DMBianco Vittoria with Sea SaltB", frameMaterial: null, basePrice: 3597,
  specs: ["Powder-coated cast and extruded", "Paluminum base a Stone top", "S Suitable Outdoor Cover: MCCV74", "S Disclaimer: Please see Natural sMaterials page", "S"],
  dims: dims({ width: 24, depth: 24, height: 22, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 10, weight: 40, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3463", name: "Bondi Console", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: "Bianco Vittoria with Sea Salt", frameMaterial: null, basePrice: 8397,
  specs: ["Powder-coated cast and extruded aluminum base Stone top Stone shelf divided into three (3) sections Suitable Outdoor Cover: MCCV75 Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 72, depth: 18, height: 31.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 35, weight: 167, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO362", name: "Caned Barstool", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4251,
  specs: ["Optional foot rail for Rattan Base: Antique Bronze, Polished Brass, Brushed Nickel", "Framed with square mesh caned arms and back", "Tight upholstered seat cushion", "Standard cushion has base welt"],
  dims: dims({ width: 23.5, depth: 23.5, height: 41.5, widthInside: null, seatHeight: 28.5, seatDepth: 17.5, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: 26, weight: 34, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([4269, 4278, 4287, 4305, 4323, 4341, 4359, 4377, 4395, 4413, 4431, 4449, 4467, 4485, 4503, 4521]),
  leather: leather([4503, 4593, 4665, 4737], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO362N", name: "Caned Counter Stool", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3951,
  specs: [":", "Optional foot rail for Rattan Base: Antique Bronze, Polished Brass, Brushed Nickel", "Framed with square mesh caned arms and back", "Tight upholstered seat", "Standard seat cushion has base welt"],
  dims: dims({ width: 23.5, depth: 23.5, height: 41.5, widthInside: null, seatHeight: 25, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([3969, 3978, 3987, 4005, 4023, 4041, 4059, 4077, 4095, 4113, 4131, 4149, 4167, 4185, 4203, 4221]),
  leather: leather([4203, 4293, 4365, 4437], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO3660", name: "Ketch Spot Table", collection: "Baker Resort® for McGuire", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5487,
  specs: ["Travertine table", "C Suitable Outdoor Cover: MCCV63", "B Disclaimer: Please see Natural", "CMaterials page", "Tp S DMBrown Travertine"],
  dims: dims({ width: 18, depth: 18, height: 18, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 99, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3735", name: "Naxos Round Dining Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11250,
  specs: ["Classico Roman travertine top Blackened Stainless Steel base Comfortably seats 4-6 Top includes a light PU sealer to protect the stone Suitable Outdoor Cover: MCCV87 Disclaimer: Please see Natural Materials page in price list"],
  dims: dims({ width: 48, depth: 48, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 73, weight: 269, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3737", name: "Naxos Rectangle Dining Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 21900,
  specs: ["Classico Roman travertine top", "Blackened Stainless Steel base", "Comfortably seats 6-8", "Top includes a light PU sealer to protect the stone", "Suitable Outdoor Cover: MCCV69", "Disclaimer: Please see Natural Materials page in price list"],
  dims: dims({ width: 96, depth: 48, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 160, weight: 591, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3740", name: "Naxos Side Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3900,
  specs: ["Loose seat and back (non- reversible)", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV59 9"],
  dims: dims({ width: 19, depth: 24.5, height: 32, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 9, weight: 30, fabricReq: 1.75, leatherReq: 30 }),
  fabric: fab([3933, 3951, 3966, 3999, 4032, 4065, 4098, 4131, 4164, 4197, 4230, 4263, 4296, 4329, 4362, 4395]),
  leather: leather([4362, 4527, 4659, 4791], 33),
  finishTiers: null,
},

{
  sku: "MCO3741", name: "Naxos Arm Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4050,
  specs: ["Loose seat and back (non-", "Lreversible) r Blackened Stainless Steel frame", "R Suitable Outdoor Cover: MCCV39", "B S-"],
  dims: dims({ width: 22, depth: 24.5, height: 32, widthInside: 21.5, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 10, weight: 35, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([4086, 4104, 4122, 4158, 4194, 4230, 4266, 4302, 4338, 4374, 4410, 4446, 4482, 4518, 4554, 4590]),
  leather: leather([4554, 4734, 4878, 5022], 36),
  finishTiers: null,
},

{
  sku: "MCO3746", name: "Naxos Counter Stool", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3300,
  specs: ["Loose seat cushion (non- reversible) Round bolster black pillow Blackened Stainless Steel frame Suitable Outdoor Cover: MCCV44"],
  dims: dims({ width: 17, depth: 20, height: 35, widthInside: null, seatHeight: 25, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 23.5, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([3318, 3327, 3336, 3354, 3372, 3390, 3408, 3426, 3444, 3462, 3480, 3498, 3516, 3534, 3552, 3570]),
  leather: leather([3552, 3642, 3714, 3786], 18),
  finishTiers: null,
},

{
  sku: "MCO3750", name: "Naxos Rectangle Cocktail Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7050,
  specs: [],
  dims: dims({ width: 48, depth: 30, height: 17, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 44, weight: 250, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3752", name: "Naxos Round Cocktail Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9150,
  specs: ["ith", "Classico Roman travertine top with half bull-nose edge", "Blackened Stainless Steel base", "Top includes a light PU sealer to protect the stone", "Suitable Outdoor Cover: MCCV86 5", "Disclaimer: See Natural Materials s Page in price list"],
  dims: dims({ width: 52.5, depth: 52.5, height: 15, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 66, weight: 292, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3756", name: "Naxos Side Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3750,
  specs: ["Tiered-shelf side table", "C Classico Roman travertine top", "Band shelf", "T Blackened Stainless Steel base Y Top and shelf include a light PU", "Tsealer to protect the stone p Disclaimer: See Natural Materials", "Dpage in price list p-"],
  dims: dims({ width: 16, depth: 29, height: 22.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 141, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO3758", name: "Naxos Spot Table", collection: "Thomas Pheasant", category: "tables", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2400,
  specs: ["Classico Roman travertine top Blackened Stainless Steel base Three (3) legs connected by Y-shaped stretcher Top includes a light PU sealer to protect the stone Disclaimer: See Natural Materials page in price list"],
  dims: dims({ width: 18, depth: 18, height: 22.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 83, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO401", name: "Curved Walnut Counter Stool", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Satin Walnut", frameMaterial: null, basePrice: 2997,
  specs: [],
  dims: dims({ width: 18.5, depth: 13.5, height: 26, widthInside: null, seatHeight: 25, seatDepth: 13, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 12, weight: 22, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO420", name: "Seido Counter Stool", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Satin Walnut", frameMaterial: null, basePrice: 3297,
  specs: ["Walnut solid and veneer frame", "Danish cord woven seat", "Natural variations in Walnut color will occur"],
  dims: dims({ width: 19.25, depth: 21.25, height: 36.5, widthInside: null, seatHeight: 25, seatDepth: 15.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 12, weight: 20, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO424N", name: "Passage Swivel Counter Stool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5172,
  specs: [],
  dims: dims({ width: 21.5, depth: 22, height: 37, widthInside: null, seatHeight: 25, seatDepth: 18, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 35, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([5199, 5214, 5226, 5253, 5280, 5307, 5334, 5361, 5388, 5415, 5442, 5469, 5496, 5523, 5550, 5577]),
  leather: leather([5550, 5685, 5793, 5901], 27),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCO426", name: "Danish Cord Swivel Counter Stool", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Black, Tea-stained Danish cord", frameMaterial: null, basePrice: 4977,
  specs: [",", "The frame is handcrafted with natural materials and variations in tone or grain can occur k", "Blackened steel or polished d stainless steel base"],
  dims: dims({ width: 20, depth: 20, height: 33.25, widthInside: null, seatHeight: 25, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 30, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO426T", name: "Danish Cord Swivel Barstool", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5277,
  specs: ["The frame is handcrafted with", "Onatural materials and variations in Atone or grain can occur N Blackened steel or polished", "Rstainless steel base", "Ta UBlack, Tea-stained Danish cord"],
  dims: dims({ width: 20, depth: 20, height: 38.75, widthInside: null, seatHeight: 30, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 36, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCO530", name: "Passage Barstool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4272,
  specs: ["Optional foot rail: Polished Brass, Antique Bronze, and Brushed Nickel Rattan frame with caned back Tight Upholstered interior back and seat Upholstered seat has bottom welt"],
  dims: dims({ width: 22, depth: 21.5, height: 41, widthInside: null, seatHeight: 29, seatDepth: 17, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 48, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([4299, 4314, 4326, 4353, 4380, 4407, 4434, 4461, 4488, 4515, 4542, 4569, 4596, 4623, 4650, 4677]),
  leather: leather([4650, 4785, 4893, 5001], 27),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO530N", name: "Passage Counter Stool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3972,
  specs: ["Optional foot rail: Polished Brass, Antique Bronze, and Brushed Nickel", "Rattan frame with caned back", "Tight Upholstered interior back and seat", "Upholstered seat has bottom welt"],
  dims: dims({ width: 22, depth: 21.5, height: 37, widthInside: null, seatHeight: 25, seatDepth: 17, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 48, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([3999, 4014, 4026, 4053, 4080, 4107, 4134, 4161, 4188, 4215, 4242, 4269, 4296, 4323, 4350, 4377]),
  leather: leather([4350, 4485, 4593, 4701], 27),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO531", name: "Maketto Barstool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4251,
  specs: [",", "Optional foot rail: Polished Brass, Antique Bronze, and Brushed Nickel", "Rattan frame with can webbing on the back and seat", "Loose upholstered seat cushion lt", "Standard stitching on top seams is double stitch, single stitch on side seams", "1” long tab on the bottom of cushion"],
  dims: dims({ width: 23, depth: 22.25, height: 40.5, widthInside: null, seatHeight: 29, seatDepth: 17.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 13, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([4269, 4278, 4287, 4305, 4323, 4341, 4359, 4377, 4395, 4413, 4431, 4449, 4467, 4485, 4503, 4521]),
  leather: leather([4503, 4593, 4665, 4737], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO531N", name: "Maketto Counter Stool", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "-M", frameMaterial: null, basePrice: 3951,
  specs: ["Optional foot rail: Polished Brass,", "RAntique Bronze, and Brushed aNickel", "B Rattan frame with can webbing on othe back and seat", "N Loose upholstered seat cushion w Standard stitching on top seams is double stitch, single stitch on side seams", "1” long tab on the bottom of cushion"],
  dims: dims({ width: 23, depth: 22.25, height: 36.5, widthInside: null, seatHeight: 25, seatDepth: 17.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 13, fabricReq: 1, leatherReq: 17 }),
  fabric: fab([3969, 3978, 3987, 4005, 4023, 4041, 4059, 4077, 4095, 4113, 4131, 4149, 4167, 4185, 4203, 4221]),
  leather: leather([4203, 4293, 4365, 4437], 18),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCO532", name: "Crin Counter Stool", collection: "Steven Volpe", category: "chairs", limited: false,
  standardFinish: "Matte Slate, Matte Umber", frameMaterial: null, basePrice: 3237,
  specs: ["Rattan frame with rawhide straps and bindings on seat and back Burnished brass nailhead detailing on back comes standard Non-standard finish ships in 20-24 weeks"],
  dims: dims({ width: 17.5, depth: 20.5, height: 32.75, widthInside: null, seatHeight: 26, seatDepth: 15, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 36, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 600, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCTP520", name: "Outdoor Dining Arm Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Java resin with Bronze frame", frameMaterial: null, basePrice: 2451,
  specs: ["Woven resin over powder-coated aluminum frame", "Loose seat cushion", "Shown with optional Kidney Pillow (KP-917) available at additional cost", "Suitable Outdoor Cover: MCCV39"],
  dims: dims({ width: 23, depth: 26, height: 36.25, widthInside: null, seatHeight: 18.25, seatDepth: 18, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 17, weight: 33, fabricReq: 1, leatherReq: null }),
  fabric: fab([2469, 2478, 2487, 2505, 2523, 2541, 2559, 2577, 2595, 2613, 2631, 2649, 2667, 2685, 2703, 2721]),
  leather: leather(null, 18),
  finishTiers: null,
},

{
  sku: "MCTP532", name: "Outdoor Cocktail Table", collection: "Thomas Pheasant", category: "tables", limited: true,
  standardFinish: "Java Bronze", frameMaterial: null, basePrice: 1791,
  specs: ["d", "Powder-coated aluminum frame with glass top and shelf", "1/2” clear tempered glass w", "Optional 2” umbrella hole in glass", "Suitable Outdoor Cover: MCCV25 9"],
  dims: dims({ width: 48, depth: 30.75, height: 15, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 20, weight: 116, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCU1056", name: "Lakepoint End Table", collection: "Barbara Barry", category: "tables", limited: false,
  standardFinish: "-B", frameMaterial: null, basePrice: 3087,
  specs: ["Fully upholstered leather end table", "M Double stitching", "U Trefoil shape design"],
  dims: dims({ width: 22, depth: 20.75, height: 18, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14, weight: 20, fabricReq: 1.75, leatherReq: 30 }),
  fabric: fab([3120, 3138, 3153, 3186, 3219, 3252, 3285, 3318, 3351, 3384, 3417, 3450, 3483, 3516, 3549, 3582]),
  leather: leather([3549, 3714, 3846, 3978], 33),
  finishTiers: null,
},

{
  sku: "MR4548", name: "Wayne Counter Stool", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3072,
  specs: ["Mil Metal base and frame", "Comes s Upholstered tight seat and back cushion", "Optional Blackened Steel", "Optionalfinish +$1650 cushionWhite Powdercoat"],
  dims: dims({ width: 20.5, depth: 21.25, height: 29.75, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 35, weight: 28, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([3099, 3114, 3126, 3153, 3180, 3207, 3234, 3261, 3288, 3315, 3342, 3369, 3396, 3423, 3450, 3477]),
  leather: leather([3450, 3585, 3693, 3801], 27),
  finishTiers: null,
},

{
  sku: "MR668-11-9", name: "Woven X Bench", collection: "Milling Road Originals", category: "ottomans", limited: true,
  standardFinish: "+$165Blackened Walnut, Natura", frameMaterial: null, basePrice: 2751,
  specs: ["standard with a 17.5” x 24”", "Hardwood Solids, Metal aCaning al Premium Down"],
  dims: dims({ width: null, depth: null, height: null, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: 32, exposedLegHeight: 21.5, volume: 17, weight: 23.5, fabricReq: 23, leatherReq: 35 }),
  fabric: fab([null, null, null, null, 19, 20, null, null, null, null, 23, null, null, null, 31, 14]),
  leather: leather([65, 9, 1, 0.75], 17),
  finishTiers: { tier1: 3036, tier2: null, tier3: null, tier4: null, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR7040", name: "Cane Side Chair", collection: "Kara Mann", category: "chairs", limited: false,
  standardFinish: "Blackened Walnut, Natural Walnut", frameMaterial: null, basePrice: 3345,
  specs: ["Hardwood solids, metal and caning"],
  dims: dims({ width: 21.5, depth: 23.5, height: 35, widthInside: null, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 25.5, exposedLegHeight: null, volume: 15, weight: 11, fabricReq: 0.75, leatherReq: 13 }),
  fabric: fab([3360, 3369, 3375, 3390, 3405, 3420, 3435, 3450, 3465, 3480, 3495, 3510, 3525, 3540, 3555, 3570]),
  leather: leather([3555, 3630, 3690, 3750], 15),
  finishTiers: null,
},

{
  sku: "MR7148", name: "Cane Counter Stool", collection: "Kara Mann", category: "chairs", limited: true,
  standardFinish: "Natural Walnut", frameMaterial: null, basePrice: 2586,
  specs: ["Hardwood solids, metal and canin Natural Caning", "Antique Bronze, Oil Rubbed BronzHardware"],
  dims: dims({ width: 17.25, depth: 21, height: 36, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 28, fabricReq: 0.75, leatherReq: 12.8 }),
  fabric: fab([2601, 2610, 2616, 2631, 2646, 2661, 2676, 2691, 2706, 2721, 2736, 2751, 2766, 2781, 2796, 2811]),
  leather: leather([2796, 2871, 2931, 2991], 15),
  finishTiers: null,
},

{
  sku: "MR8401", name: "Dacian Dressing Chest", collection: "Milling Road Originals", category: "casegoods", limited: true,
  standardFinish: "Moonlight with Blackened Bronze", frameMaterial: null, basePrice: 6831,
  specs: ["ing", "Standard Metal Finish(es): Blackened Bronze, Sculptural nze Bronze", "Oak Solids and Veneer Case", "Soft Close Drawers", "Cast Bronze Hardware", "Seven Drawers"],
  dims: dims({ width: 66, depth: 20, height: 34, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 295, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8409", name: "Pierre Nightstand", collection: "Milling Road Originals", category: "casegoods", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 2097,
  specs: ["Standard Metal Finish(es):", "CBlackened Bronze", "I Oak Solids and Veneer Case", "Resin Reeding", "Cast Bronze Hardware", "One soft close drawer", "One faux escutcheon with blackened bronze key Moonlight"],
  dims: dims({ width: 27, depth: 20, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8414", name: "Olympus Looking Glass Mirror", collection: "Milling Road Originals", category: "mirrors", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 2847,
  specs: ["Curved Laurel Leaf Motif Inset Mirrored Glass"],
  dims: dims({ width: 42, depth: 2.5, height: 43.25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 72, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8416", name: "Petit Thanos Bench", collection: "Milling Road Originals", category: "ottomans", limited: true,
  standardFinish: "Bronze", frameMaterial: null, basePrice: 3732,
  specs: ["Saber Tooth Bench with Cast Bronze Legs Blackened Bronze, Sculptural"],
  dims: dims({ width: 32, depth: 18.75, height: 19, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 40, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([3783, 3810, 3834, 3885, 3936, 3987, 4038, 4089, 4140, 4191, 4242, 4293, 4344, 4395, 4446, 4497]),
  leather: leather([4446, 4701, 4905, 5109], 51),
  finishTiers: null,
},

{
  sku: "MR8417", name: "Thanos Bench", collection: "Milling Road Originals", category: "ottomans", limited: true,
  standardFinish: "Bronze", frameMaterial: null, basePrice: 4242,
  specs: ["Saber Tooth Bench with Cast Bronze Legs", "Tight Seat Cushion Blackened Bronze, Sculptural"],
  dims: dims({ width: 60, depth: 18.75, height: 19, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 40, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([4314, 4350, 4386, 4458, 4530, 4602, 4674, 4746, 4818, 4890, 4962, 5034, 5106, 5178, 5250, 5322]),
  leather: leather([5250, 5610, 5898, 6186], 72),
  finishTiers: null,
},

{
  sku: "MR8421CK", name: "Aurelia California King Bed", collection: "Milling Road Originals", category: "beds", limited: true,
  standardFinish: "bSculptural BronzeS", frameMaterial: null, basePrice: 8472,
  specs: ["Upholstered headboard, footboard", "Uand sideboard with box pleated sskirt application a Recommended: 5” low profile", "Rboxspring and 10” mattress height"],
  dims: dims({ width: 78, depth: 91, height: 72, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 320, fabricReq: 10.75, leatherReq: 183 }),
  fabric: fab([8667, 8766, 8862, 9057, 9252, 9447, 9642, 9837, 10032, 10227, 10422, 10617, 10812, 11007, 11202, 11397]),
  leather: leather([11202, 12177, 12957, 13737], 195),
  finishTiers: null,
},

{
  sku: "MR8421K", name: "Aurelia King Bed", collection: "Milling Road Originals", category: "beds", limited: true,
  standardFinish: "Sculptural Bronze", frameMaterial: null, basePrice: 7872,
  specs: ["Upholstered headboard, foot and sideboard with box pleated skirt application Recommended: 5” low profile boxspring and 10” mattress height"],
  dims: dims({ width: 82, depth: 87, height: 72, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 300, fabricReq: 10.75, leatherReq: 183 }),
  fabric: fab([8067, 8166, 8262, 8457, 8652, 8847, 9042, 9237, 9432, 9627, 9822, 10017, 10212, 10407, 10602, 10797]),
  leather: leather([10602, 11577, 12357, 13137], 195),
  finishTiers: null,
},

{
  sku: "MR8421Q", name: "Aurelia Queen Bed", collection: "Milling Road Originals", category: "beds", limited: true,
  standardFinish: "boxspring and 10” mattress heighSculptural Bronze", frameMaterial: null, basePrice: 7527,
  specs: ["Upholstered headboard, foot and sideboard with box pleated skirt application", "Four Cast Bronze Posters", "Recommended: 5” low profile"],
  dims: dims({ width: 66, depth: 87, height: 66, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 300, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([7704, 7794, 7881, 8058, 8235, 8412, 8589, 8766, 8943, 9120, 9297, 9474, 9651, 9828, 10005, 10182]),
  leather: leather([10005, 10890, 11598, 12306], 177),
  finishTiers: null,
},

{
  sku: "MR8422Q", name: "Francois Queen Bed", collection: "Milling Road Originals", category: "beds", limited: true,
  standardFinish: "Daybreak", frameMaterial: null, basePrice: 8637,
  specs: ["d", "Upholstered headboard, footboard and siderails ht"],
  dims: dims({ width: 66.5, depth: 93, height: 68.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 300, fabricReq: 11, leatherReq: 187 }),
  fabric: fab([8835, 8934, 9033, 9231, 9429, 9627, 9825, 10023, 10221, 10419, 10617, 10815, 11013, 11211, 11409, 11607]),
  leather: leather([11409, 12399, 13191, 13983], 198),
  finishTiers: null,
},

{
  sku: "MR8429", name: "Thea Credenza", collection: "Milling Road Originals", category: "casegoods", limited: true,
  standardFinish: "Evening with Blackened BronzeE", frameMaterial: null, basePrice: 5547,
  specs: ["Optional Metal Finish(es):", "OSculptural Bronze", "S Eglomise Door Fronts on Three", "ADoors S Cast Bronze Hardware", "O Sterling Silver Drawer liner in one Smiddle drawer Q One Faux Escutcheon with Blackened Bronze Key and Tassel"],
  dims: dims({ width: 62.5, depth: 18, height: 35, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 133, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8437", name: "Hemingway Dining Table", collection: "Milling Road Originals", category: "tables", limited: true,
  standardFinish: "Evening", frameMaterial: null, basePrice: 5097,
  specs: ["Oak Solids and Veneers Starburst pattern and circular motif Additional 24” Leaf Comes Standard Optional Contrast Decorative Striping: Black, Dove, Ivory, Linen, Quill"],
  dims: dims({ width: 96, depth: 45.5, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 355, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8438", name: "Grand Concorde Oval Table", collection: "Milling Road Originals", category: "tables", limited: true,
  standardFinish: "Twilight", frameMaterial: null, basePrice: 4497,
  specs: ["Oak Solids and Veneer Top and Base", "Starburst pattern and circular mo Optional Contrast Decorative Striping: Black, Dove, Ivory, Linen, Quill"],
  dims: dims({ width: 88, depth: 45.5, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 165, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8440", name: "Josephine Chair", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: "Ancient Gilt", frameMaterial: null, basePrice: 2826,
  specs: ["Leafing on the Legs", "Upholstered Tight Seat and Back otif n,"],
  dims: dims({ width: 23, depth: 28, height: 34.5, widthInside: null, seatHeight: 19, seatDepth: 19.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 63, fabricReq: 2.5, leatherReq: 38 }),
  fabric: fab([2871, 2895, 2916, 2961, 3006, 3051, 3096, 3141, 3186, 3231, 3276, 3321, 3366, 3411, 3456, 3501]),
  leather: leather([3456, 3681, 3861, 4041], 45),
  finishTiers: { tier1: 300, tier2: 795, tier3: 1095, tier4: 1350, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8441", name: "Napoleon Chair", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3126,
  specs: ["Leafing on the Legs", "U Nailhead Trim Accent on Arms", "Upholstered Tight Seat Back Ancient Gilt"],
  dims: dims({ width: 25, depth: 27, height: 35, widthInside: null, seatHeight: 20, seatDepth: 20, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 35, weight: 35, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([3171, 3195, 3216, 3261, 3306, 3351, 3396, 3441, 3486, 3531, 3576, 3621, 3666, 3711, 3756, 3801]),
  leather: leather([3756, 3981, 4161, 4341], 45),
  finishTiers: { tier1: 600, tier2: 1095, tier3: 1395, tier4: 1650, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8443", name: "Atticus Arm Chair", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3147,
  specs: ["Upholstered Tight Seat and Back"],
  dims: dims({ width: 24, depth: 29.5, height: 38, widthInside: null, seatHeight: 20, seatDepth: 20.25, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([3201, 3228, 3255, 3309, 3363, 3417, 3471, 3525, 3579, 3633, 3687, 3741, 3795, 3849, 3903, 3957]),
  leather: leather([3903, 4173, 4389, 4605], 54),
  finishTiers: { tier1: 0, tier2: 1095, tier3: 1395, tier4: 1650, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8444", name: "Grande Aegean Chair", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: "Daybreak", frameMaterial: null, basePrice: 3282,
  specs: ["Oak Solids with saber leg", "Upholstered Tight Seat and Back"],
  dims: dims({ width: 22.75, depth: 24, height: 33, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 30, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([3333, 3360, 3384, 3435, 3486, 3537, 3588, 3639, 3690, 3741, 3792, 3843, 3894, 3945, 3996, 4047]),
  leather: leather([3996, 4251, 4455, 4659], 51),
  finishTiers: { tier1: 600, tier2: 1095, tier3: 1395, tier4: 1650, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8446", name: "Dillin Counter Stool", collection: "Milling Road Originals", category: "chairs", limited: false,
  standardFinish: "Daybreak", frameMaterial: null, basePrice: 2841,
  specs: ["Oak Solids frame with four stretchers", "Upholstered Tight seat and back", "One Blackened Bronze kick plate standard"],
  dims: dims({ width: 18, depth: 21.75, height: 33, widthInside: null, seatHeight: 24.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 28, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([2895, 2922, 2949, 3003, 3057, 3111, 3165, 3219, 3273, 3327, 3381, 3435, 3489, 3543, 3597, 3651]),
  leather: leather([3597, 3867, 4083, 4299], 54),
  finishTiers: null,
},

{
  sku: "MR8447", name: "Dillin Barstool", collection: "Milling Road Originals", category: "chairs", limited: true,
  standardFinish: "DaybreakB", frameMaterial: null, basePrice: 3147,
  specs: ["Upholstered Tight seat and back", "U One Blackened Bronze kickplate standard"],
  dims: dims({ width: 18, depth: 21.75, height: 39, widthInside: null, seatHeight: 30.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 70, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([3201, 3228, 3255, 3309, 3363, 3417, 3471, 3525, 3579, 3633, 3687, 3741, 3795, 3849, 3903, 3957]),
  leather: leather([3903, 4173, 4389, 4605], 54),
  finishTiers: null,
},

{
  sku: "MR8448", name: "Vere Counter Stool with Back", collection: "Milling Road Originals", category: "chairs", limited: true,
  standardFinish: "Blackened Bronze", frameMaterial: null, basePrice: 3732,
  specs: ["Upholstered Seat and Back"],
  dims: dims({ width: 23.5, depth: 21, height: 38.5, widthInside: null, seatHeight: 25.65, seatDepth: 18, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 57, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([3783, 3810, 3834, 3885, 3936, 3987, 4038, 4089, 4140, 4191, 4242, 4293, 4344, 4395, 4446, 4497]),
  leather: leather([4446, 4701, 4905, 5109], 51),
  finishTiers: null,
},

{
  sku: "MR8449", name: "Vere Barstool with Back", collection: "Milling Road Originals", category: "chairs", limited: true,
  standardFinish: "Sculptural Bronze", frameMaterial: null, basePrice: 3732,
  specs: ["Cast Bronze Frame", "Upholstered Seat and Back"],
  dims: dims({ width: 23.5, depth: 21, height: 42.5, widthInside: null, seatHeight: 29, seatDepth: 18, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 59, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([3783, 3810, 3834, 3885, 3936, 3987, 4038, 4089, 4140, 4191, 4242, 4293, 4344, 4395, 4446, 4497]),
  leather: leather([4446, 4701, 4905, 5109], 51),
  finishTiers: null,
},

{
  sku: "MR8463", name: "Makiko Console", collection: "Milling Road Originals", category: "tables", limited: true,
  standardFinish: "Oak Solids and Veneer frame -", frameMaterial: null, basePrice: 2847,
  specs: [],
  dims: dims({ width: 72, depth: 16, height: 33.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 2850, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8464", name: "Estelle Console", collection: "Milling Road Originals", category: "tables", limited: true,
  standardFinish: "EveningBB", frameMaterial: null, basePrice: 3747,
  specs: ["Oak Solids and Veneer Frame", "Inset Honed Carrara Marble Top", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 59, depth: 16, height: 34, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 133, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8466", name: "Noble Console", collection: "Milling Road Originals", category: "tables", limited: false,
  standardFinish: "Bronze", frameMaterial: null, basePrice: 9987,
  specs: ["Blackened Bronze, Sculptural"],
  dims: dims({ width: 73, depth: 13, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 133, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8475", name: "Roman Chest", collection: "Milling Road Originals", category: "casegoods", limited: false,
  standardFinish: "Moonlight", frameMaterial: null, basePrice: 4971,
  specs: ["Three Soft Close, Pull to Open Drawers"],
  dims: dims({ width: 39, depth: 19, height: 34, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 188, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: { tier1: 1500, tier2: 1650, tier3: 2025, tier4: 4350, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MR8488", name: "Hemingway Desk", collection: "Milling Road Originals", category: "casegoods", limited: true,
  standardFinish: "Twilight with Sculptural Bronze", frameMaterial: null, basePrice: 5697,
  specs: ["Standard Metal Finish(es): Blackened Bronze, Sculptural Bronze", "Oak solids, veneers and composite top and base", "Cast Bronze Hardware", "Three drawers"],
  dims: dims({ width: 59.5, depth: 29.5, height: 30.25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: 255, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MR8497", name: "Vere Barstool", collection: "Milling Road Originals", category: "chairs", limited: true,
  standardFinish: "BronzeBB", frameMaterial: null, basePrice: 3096,
  specs: ["Cast Bronze frame", "C Front foot rest", "F Tight, upholstered seat", "TBlackened Bronze, Sculptural"],
  dims: dims({ width: 21, depth: 19.5, height: 29.5, widthInside: null, seatHeight: 29.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 28, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([3132, 3150, 3168, 3204, 3240, 3276, 3312, 3348, 3384, 3420, 3456, 3492, 3528, 3564, 3600, 3636]),
  leather: leather([3600, 3780, 3924, 4068], 36),
  finishTiers: null,
},

{
  sku: "MR8498", name: "Vere Counter Stool", collection: "Milling Road Originals", category: "chairs", limited: true,
  standardFinish: "Bronze", frameMaterial: null, basePrice: 2946,
  specs: ["Cast Bronze frame Front Foot rest Tight, Upholstered seat Blackened Bronze, Sculptural"],
  dims: dims({ width: 20.5, depth: 19.5, height: 25.5, widthInside: null, seatHeight: 25.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 31, weight: 28, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([2982, 3000, 3018, 3054, 3090, 3126, 3162, 3198, 3234, 3270, 3306, 3342, 3378, 3414, 3450, 3486]),
  leather: leather([3450, 3630, 3774, 3918], 36),
  finishTiers: null,
},

{
  sku: "BAA4611", name: "Nautica Wall Mirror", collection: "Baker Resort®", category: "mirrors", limited: true,
  standardFinish: "Bronze frame with clear mirrorBlackened Bronze", frameMaterial: null, basePrice: 5997,
  specs: [],
  dims: dims({ width: 40, depth: 4, height: 52, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 135, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAA4612", name: "Pacifica Wall Mirror", collection: "Baker Resort®", category: "mirrors", limited: true,
  standardFinish: "Bronze frame with clear mirror Natural Bronze", frameMaterial: null, basePrice: 5997,
  specs: [],
  dims: dims({ width: 40, depth: 4, height: 52, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 135, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAA4613", name: "Nautica Floor Mirror", collection: "Baker Resort®", category: "mirrors", limited: false,
  standardFinish: "BBlackened BronzeN", frameMaterial: null, basePrice: 7497,
  specs: ["Bronze frame with clear mirror"],
  dims: dims({ width: 36, depth: 4, height: 84, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 23, weight: 180, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAA4614", name: "Pacifica Floor Mirror", collection: "Baker Resort®", category: "mirrors", limited: true,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 7497,
  specs: ["Bronze frame with clear mirror"],
  dims: dims({ width: 36, depth: 4, height: 84, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 23, weight: 180, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB134", name: "Gemstone Large Table Lamp", collection: "Barbara Barry", category: "lighting", limited: true,
  standardFinish: "Citrine Murano Glass", frameMaterial: null, basePrice: 4497,
  specs: ["White linen shade with diffuser", "Two (2) sockets with pull chains", "Accept 60W E26 type A CFL or incandescent bulbs", "White fabric cord", "Only available in 110V", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 16.5, depth: 16.5, height: 30.25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 40, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB138", name: "Magritte Table Lamp", collection: "Barbara Barry", category: "lighting", limited: false,
  standardFinish: "with Satin", frameMaterial: null, basePrice: 3891,
  specs: ["Murano glass or frosted glass with brass details", "White linen shade with diffuser", "Two (2) sockets with pull chains", "Accepts 60W E26 type A CFL or incandescent bulbs", "Brown fabric cord", "Rose Quartz only available in 110", "Amber Champagne only available in 220", "Disclaimer: Please see Natural Materials page Rose Quartz, Amber Champagne"],
  dims: dims({ width: 18, depth: 18, height: 26, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 12, weight: 35, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB142", name: "Prism Table Lamp", collection: "Barbara Barry", category: "lighting", limited: true,
  standardFinish: "BlushF", frameMaterial: null, basePrice: 4197,
  specs: ["Standard Metal Finish(es): Deep", "MBronze t Linen shade with large weave and", "Ediffuser", "Two (2) sockets with pull chains", "Accepts 60W E26 type A CFL or incandescent bulbs", "Brown fabric cord", "Only available in C plug"],
  dims: dims({ width: 14.25, depth: 14.25, height: 33.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 9, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB150", name: "Aura Table Lamp", collection: "Barbara Barry", category: "lighting", limited: true,
  standardFinish: "Frosted Smokey Green", frameMaterial: null, basePrice: 5247,
  specs: ["Murano glass with organic etching technique E26 bulb"],
  dims: dims({ width: 16, depth: 16, height: 27, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 12, weight: 35, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB301", name: "Lens Chandelier", collection: "Barbara Barry", category: "lighting", limited: false,
  standardFinish: "Ivory Enamel", frameMaterial: null, basePrice: 9627,
  specs: ["Standard Metal Finish(es): Stain Brass", "Natural white Onyx", "Three (3) sockets accept 60W E12 type B CFL or incandescent bulbs"],
  dims: dims({ width: 34, depth: 34, height: 4.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 4, weight: 33, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABB404", name: "Opus Sconce", collection: "Barbara Barry", category: "lighting", limited: true,
  standardFinish: "Deep Bronze", frameMaterial: null, basePrice: 3297,
  specs: ["Brass body", "Natural white onyx diffuser", "22 Watt LED strip 2 s"],
  dims: dims({ width: 9.75, depth: 2.75, height: 13.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 3, weight: 33, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK101", name: "Frille Table Lamp", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "DCCast IronD", frameMaterial: null, basePrice: 597,
  specs: ["Cast Iron", "S Black cotton pleated shade with", "Oblack fabric cord", "O One (1) 75W, E26 type A CFL or iincandescent bulb required", "D One (1) socket with turnkey switch P Only available in A1 Plug"],
  dims: dims({ width: 8.5, depth: 7.25, height: 31, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 6, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK102", name: "Firenze Table Lamp", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "De Bois Noir, De Bois Blanc", frameMaterial: null, basePrice: 1047,
  specs: ["Silk barrel shade One (1) socket with turnkey switch One (1) 75W, E26 type A CFL or incandescent bulb required De Bois Noir only available in A1 Plug De Bois Blanc only available in C Plug"],
  dims: dims({ width: 8.5, depth: 7.5, height: 33, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 11, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK201", name: "Frille Floor Lamp", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "Cast Iron", frameMaterial: null, basePrice: 3600,
  specs: ["Black cotton pleated shade", "Black fabric cord", "One (1) socket with pull chain switches", "Two (2) 60W type A CFL or incandescent bulbs required", "Only available in A1 Plug"],
  dims: dims({ width: 17.75, depth: 15.5, height: 69, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 2, weight: 15, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK303", name: "Briolette Chandelier", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "Satin Brass", frameMaterial: null, basePrice: 13485,
  specs: ["Five (5) faceted alabaster blocks", "Hardwired for wall switch", "Five (5) 4W LED discs", "Only available in 220V", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 34.5, depth: 34.5, height: 52.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 33, weight: 45, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK310", name: "Stella Chandelier", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "MCrystal Murano GlassC", frameMaterial: null, basePrice: 23991,
  specs: ["Murano glass with brass frame", "M Only available in 220", "O Disclaimer: Please see Natural", "DMaterials page"],
  dims: dims({ width: 35.5, depth: 35.5, height: 35.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 33, weight: 170, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BABK410", name: "Stella Sconce", collection: "Baker Originals", category: "lighting", limited: true,
  standardFinish: "Crystal Murano Glass", frameMaterial: null, basePrice: 3291,
  specs: ["Murano glass with brass frame Only available in 220V Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 17, depth: 8.75, height: 21.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 4, weight: 23.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAJLD107", name: "Azurite Table Lamp", collection: "Jean Louis Deniot", category: "lighting", limited: false,
  standardFinish: "Alabaster with Satin Brass Accents", frameMaterial: null, basePrice: 5277,
  specs: ["Sand cotton shade", "Silver fabric power cord with cord switch", "Two (2) 60W medium base bulbs required", "Disclaimer: Please see Natural Materials page", "Only available in 110 Volt"],
  dims: dims({ width: 17, depth: 17, height: 27, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 17, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAJLD400", name: "Iolite Sconce", collection: "Jean Louis Deniot", category: "lighting", limited: true,
  standardFinish: "Antique Bronze with Polished Brass", frameMaterial: null, basePrice: 2991,
  specs: ["Hardwired for wall switch d", "One (1) 7W candelabra base bulb required s", "Only available in 220 Volt ts"],
  dims: dims({ width: 10.25, depth: 4, height: 15, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 3, weight: 26, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAJLD401", name: "Sodalite Sconce", collection: "Jean Louis Deniot", category: "lighting", limited: true,
  standardFinish: "Satin Nickel with Alabaster ShadeW", frameMaterial: null, basePrice: 3297,
  specs: ["Brass and glass or alabaster", "P Hardwired for wall switch", "H Two (2) 25W candelabra base", "Abulbs required for alabaster shades i Two (2) 40W candelabra base", "Obulbs required for glass shades", "Only available in E12", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 11.5, depth: 7, height: 18, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 3, weight: 26, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BALK303", name: "Compañas Pendant", collection: "Laura Kirar", category: "lighting", limited: true,
  standardFinish: "White Frosted Glass", frameMaterial: null, basePrice: 10947,
  specs: ["Polished Brass ceiling plate Hardwired for wall switch Accepts three (3) 60W type B incandescent bulbs Only available in 110V"],
  dims: dims({ width: 12, depth: 12, height: 25.75, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 11, weight: 49, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPH126", name: "Cloak Table Lamp", collection: "Thomas Pheasant", category: "lighting", limited: false,
  standardFinish: "Textured BrassMurano", frameMaterial: null, basePrice: 7617,
  specs: ["DiaT White linen shade with diffuser", "White ch Two (2) sockets with pull chains", "6 ft. tran Accepts 60W E26 type A CFL or cord switincandescent bulb", "One (1) 7required Oil Rubbed and Bright Bronze with"],
  dims: dims({ width: 18, depth: 12, height: 26.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 18, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPH163", name: "Diamond Table Lamp", collection: "Thomas Pheasant", category: "lighting", limited: false,
  standardFinish: "o Glass with Brass HardwareCrystal and Brass Hardwar", frameMaterial: null, basePrice: 5367,
  specs: ["BAPH164 Bangle Glass Table LThomas Pheasanhinette shade, no border", "White chinette shade nsparent power cord with", "6 ft. transparent power coitch cord switch 75W incandescent bulb", "One (1) 75W incandescend required", "Disclaimer: Please see NatMaterials page"],
  dims: dims({ width: null, depth: null, height: null, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: 15.75, exposedLegHeight: 15.75, volume: 15.75, weight: 15.75, fabricReq: 27.5, leatherReq: 27 }),
  fabric: fab([null, null, null, null, null, null, null, null, null, null, null, null, null, null, 8, 3]),
  leather: leather([25, 15, null, null], null),
  finishTiers: { tier1: 4437, tier2: null, tier3: null, tier4: null, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAPH164", name: "Bangle Glass Table Lamp", collection: "Thomas Pheasant", category: "lighting", limited: false,
  standardFinish: "Nickel", frameMaterial: null, basePrice: 2547,
  specs: ["One light with ivory chinette shade", "Hardwired for Wall Switch", "Uses one candelabra bulb, 40 watts maximum", "Only available in A1 plug"],
  dims: dims({ width: 9, depth: 9, height: 11.25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 11, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPH316", name: "Amanda Pendant", collection: "Thomas Pheasant", category: "lighting", limited: false,
  standardFinish: "Bright Bronze", frameMaterial: null, basePrice: 7047,
  specs: ["Hardwired for wall switch", "One (1) 60W type B bulb required"],
  dims: dims({ width: 8, depth: 8, height: 78, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 17, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN100", name: "Volare Table Lamp", collection: "Paola Navone", category: "lighting", limited: false,
  standardFinish: "Cast Murano Glass with Solid Brass", frameMaterial: null, basePrice: 5397,
  specs: ["Textured Cast Murano glass lamp d", "White linen shade", "One (1) socket", "Recommended light bulb: E26", "Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 14, depth: 14, height: 30, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 12, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN101", name: "Vela Table Lamp - Small", collection: "Paola Navone", category: "lighting", limited: true,
  standardFinish: "MCast Murano Glass with Cast BrassC", frameMaterial: null, basePrice: 4191,
  specs: ["Murano glass with brass details", "M Recommended light bulb: E26", "R Only available in C plug", "O Disclaimer: Please see Natural", "DMaterials page"],
  dims: dims({ width: 6.25, depth: 6.25, height: 19, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 3, weight: 12, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN102", name: "Vela Table Lamp - Large", collection: "Paola Navone", category: "lighting", limited: true,
  standardFinish: "Cast Murano Glass with Cast Brass", frameMaterial: null, basePrice: 4491,
  specs: ["Murano glass with brass details Recommended light bulb: E26 Only available in C Plug Disclaimer: Please see Natural Materials page"],
  dims: dims({ width: 6.25, depth: 6.25, height: 25, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 3, weight: 15, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN200", name: "Volare Floor Lamp", collection: "Paola Navone", category: "lighting", limited: true,
  standardFinish: "Materials pageCast Murano Glass with Solid Bras", frameMaterial: null, basePrice: 5391,
  specs: ["Murano glass with brass details", "Recommended light bulb: E26", "Only available in C Plug", "Disclaimer: Please see Natural"],
  dims: dims({ width: 18, depth: 20, height: 55, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 10.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN305", name: "Volare Pendant - Small", collection: "Paola Navone", category: "lighting", limited: true,
  standardFinish: "Solid Brass", frameMaterial: null, basePrice: 10497,
  specs: ["Murano glass with brass details", "Three 3” diameter pendants", "One 25” tall pendant and two 18” tall pendants", "Wires adjustable up to 79”", "Recommended light bulb: GU10 40W dimmable", "Disclaimer: Please see Natural Materials page ass Cast Murano Glass with Cast and"],
  dims: dims({ width: 12, depth: 12, height: 104, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 31, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BAPN306", name: "Volare Pendant - Large", collection: "Paola Navone", category: "lighting", limited: true,
  standardFinish: "Solid BrassO", frameMaterial: null, basePrice: 16497,
  specs: ["Murano glass with brass details", "L Five 3” diameter pendants i Two 25” tall pendants and three 18” tall pendants", "Wires adjustable up to 79”", "Recommended light bulb: GU10 40W dimmable", "Disclaimer: Please see Natural Materials page Cast Murano Glass with Cast and"],
  dims: dims({ width: 17.75, depth: 17.75, height: 104, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 9, weight: 58, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCA1712", name: "Spinnaker Mirror", collection: "Baker Resort® for McGuire", category: "mirrors", limited: true,
  standardFinish: "Oyster Leather Cord", frameMaterial: null, basePrice: 8997,
  specs: ["Leather cord wrapped frame with inset clear mirror 20.5” DIA"],
  dims: dims({ width: 48, depth: 2, height: 48, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 7, weight: 34.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "MCA1713", name: "Tidal Mirror", collection: "Baker Resort® for McGuire", category: "mirrors", limited: true,
  standardFinish: "Madeira Leather Cord", frameMaterial: null, basePrice: 8997,
  specs: ["Leather cord wrapped frame with inset clear mirror 20.5” DIA"],
  dims: dims({ width: 48, depth: 2, height: 48, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 7, weight: 34.5, fabricReq: null, leatherReq: null }),
  fabric: null,
  leather: leather(null, null),
  finishTiers: null,
},

{
  sku: "BA128S", name: "Madison Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12876,
  specs: ["Two (2) Baker Comfort cushions", "Two (2) Baker Comfort loose knife edge back pillows", "Two (2) Baker Comfort Plush loosknife edge throw pillows (16” x 23”)", "Welt trim standard", "Maple wood"],
  dims: dims({ width: 85, depth: 36, height: 34, widthInside: 73, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: 6, volume: 1, weight: null, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([13200, 13362, 13524, 13848, 14172, 14496, 14820, 15144, 15468, 15792, 16116, 16440, 16764, 17088, 17412, 17736]),
  leather: leather([17412, 19032, 20328, 21624], 324),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA128S-BTI-101-110", name: "Madison 101”-110” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 14097,
  specs: ["Three (3) Baker Comfort cushions fe", "Three (3) Baker Comfort loose knife edge back pillows se", "Two (2) Baker Comfort Plush loose knife edge throw pillows (16” x 23”)", "Welt trim standard", "Maple wood"],
  dims: dims({ width: null, depth: 36, height: 34, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: 6, volume: null, weight: null, fabricReq: 21, leatherReq: 357 }),
  fabric: fab([14475, 14664, 14853, 15231, 15609, 15987, 16365, 16743, 17121, 17499, 17877, 18255, 18633, 19011, 19389, 19767]),
  leather: leather([19389, 21279, 22791, 24303], 378),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA128S-BTI-111-120", name: "Madison 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 14397,
  specs: ["Three (3) Baker Comfort cushions", "O Three (3) Baker Comfort loose", "Tknife edge back pillows e Two (2) Baker Comfort Plush loose", "Tknife edge throw pillows (16” x k23”) 2 Welt trim standard", "W Maple wood", "M-"],
  dims: dims({ width: null, depth: 36, height: 34, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: 6, volume: null, weight: null, fabricReq: 24, leatherReq: 408 }),
  fabric: fab([14829, 15045, 15261, 15693, 16125, 16557, 16989, 17421, 17853, 18285, 18717, 19149, 19581, 20013, 20445, 20877]),
  leather: leather([20445, 22605, 24333, 26061], 432),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA128S-BTI-60-70", name: "Madison 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11097,
  specs: ["One (1) Baker Comfort cushion Two (2) Baker Comfort loose knife edge back pillows Two (2) Baker Comfort Plush loose knife edge throw pillows (16” x 23”) Welt trim standard Maple wood"],
  dims: dims({ width: null, depth: 36, height: 34, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: 6, volume: null, weight: null, fabricReq: 13.75, leatherReq: 234 }),
  fabric: fab([11346, 11472, 11595, 11844, 12093, 12342, 12591, 12840, 13089, 13338, 13587, 13836, 14085, 14334, 14583, 14832]),
  leather: leather([14583, 15828, 16824, 17820], 249),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA128S-BTI-71-80", name: "Madison 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11697,
  specs: ["BMa One (1) Baker Comfort cushion", "Two (2) B Two (2) Baker Comfort loose knife", "Two (2) Bedge back pillows edge bac Two (2) Baker Comfort Plush loose", "Two (2) Bknife edge throw pillows (16” x knife edg23”) 23”)", "Welt trim standard", "Welt trim Maple wood", "Maple w-"],
  dims: dims({ width: null, depth: 36, height: 34, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: 6, volume: null, weight: null, fabricReq: 15, leatherReq: 255 }),
  fabric: fab([11967, 12102, 12237, 12507, 12777, 13047, 13317, 13587, 13857, 14127, 14397, 14667, 14937, 15207, 15477, 15747]),
  leather: leather([15477, 16827, 17907, 18987], 270),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA128S-BTI-91-100", name: "Madison 91”-100” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9141,
  specs: ["One (1) Baker Comfort seat", "One (1) Baker Comfort back pillow", "Exposed leg", "No nail trim option", "Available in leather"],
  dims: dims({ width: 33, depth: 39, height: 36, widthInside: 19.5, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 23, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([9303, 9384, 9465, 9627, 9789, 9951, 10113, 10275, 10437, 10599, 10761, 10923, 11085, 11247, 11409, 11571]),
  leather: leather([11409, 12219, 12867, 13515], 162),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA416C", name: "Simmons Chair (Dressmaker Flounce)", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9441,
  specs: ["Kin One (1) Baker Comfort seat", "Tight sea One (1) Baker Comfort back pillow", "Tight bac Dressmaker Flounce", "Three (3 No nail trim option throw: O Not available in leather (2) (20”)", "Optional casters +$90", "Two (2) fstandard", "Carved M-"],
  dims: dims({ width: 33, depth: 39, height: 36, widthInside: 19.5, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 23, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 9.5, leatherReq: null }),
  fabric: fab([9612, 9699, 9783, 9954, 10125, 10296, 10467, 10638, 10809, 10980, 11151, 11322, 11493, 11664, 11835, 12006]),
  leather: leather(null, 171),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6130C-1", name: "Max Tufted Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7521,
  specs: ["One (1) Baker Comfort cushion", "One (1) Baker Comfort boxed back pillow (10” x 19”)", "Weltless base", "Exposed Maple wood", "Petite nails over top of legs, standard"],
  dims: dims({ width: 29.75, depth: 37, height: 32, widthInside: 20.5, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: 5, volume: 1, weight: null, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([7638, 7698, 7755, 7872, 7989, 8106, 8223, 8340, 8457, 8574, 8691, 8808, 8925, 9042, 9159, 9276]),
  leather: leather([9159, 9744, 10212, 10680], 117),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6130L", name: "Max Loveseat", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11325,
  specs: ["Two (2) Baker Comfort cushions", "Two (2) Baker Comfort boxed bacpillows (10” x 30”)", "Weltless base", "Exposed Maple wood", "Petite nails over top of legs, standard"],
  dims: dims({ width: 69.75, depth: 37, height: 32, widthInside: 60.5, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: 5, volume: 1, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([11631, 11784, 11937, 12243, 12549, 12855, 13161, 13467, 13773, 14079, 14385, 14691, 14997, 15303, 15609, 15915]),
  leather: leather([15609, 17139, 18363, 19587], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6130L-v2", name: "Max Tufted Loveseat", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11391,
  specs: ["(2) Baker Comfort cushions ck", "(2) Baker Comfort boxed back pillows (10” x 30”)", "Weltless base", "Exposed Wood - Maple", "Petite nails over top of legs, standard"],
  dims: dims({ width: 69.75, depth: 37, height: 32, widthInside: 60.5, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: 5, volume: 1, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([11697, 11850, 12003, 12309, 12615, 12921, 13227, 13533, 13839, 14145, 14451, 14757, 15063, 15369, 15675, 15981]),
  leather: leather([15675, 17205, 18429, 19653], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6130S", name: "Max Sofa (Tight Back)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12972,
  specs: ["Three (3) Baker Comfort cushions", "T Three (3) Baker Comfort boxed", "Tback pillows - Two (2) 10” x 29”, bOne (1) 10” x 30” O Weltless base", "W Exposed Maple wood", "E Petite nails over top of legs,", "Pstandard s-"],
  dims: dims({ width: 98.75, depth: 37, height: 32, widthInside: 89.5, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: 5, volume: 1, weight: null, fabricReq: 20, leatherReq: 340 }),
  fabric: fab([13332, 13512, 13692, 14052, 14412, 14772, 15132, 15492, 15852, 16212, 16572, 16932, 17292, 17652, 18012, 18372]),
  leather: leather([18012, 19812, 21252, 22692], 360),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6130S-v2", name: "Max Sofa (Tufted)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 13572,
  specs: ["Three (3) Baker Comfort cushions Three (3) Baker Comfort boxed back pillows - Two (2) 10” x 29”, One (1) 10” x 30” Weltless base Exposed Maple wood Petite nails over top of legs, standard"],
  dims: dims({ width: 98.75, depth: 37, height: 32, widthInside: 89.5, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: 5, volume: 1, weight: null, fabricReq: 23, leatherReq: 391 }),
  fabric: fab([13986, 14193, 14400, 14814, 15228, 15642, 16056, 16470, 16884, 17298, 17712, 18126, 18540, 18954, 19368, 19782]),
  leather: leather([19368, 21438, 23094, 24750], 414),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6132O", name: "Paris Ottoman (Modern Stitch)", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4092,
  specs: [],
  dims: dims({ width: 48, depth: 48, height: 13, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([4164, 4200, 4236, 4308, 4380, 4452, 4524, 4596, 4668, 4740, 4812, 4884, 4956, 5028, 5100, 5172]),
  leather: leather([5100, 5460, 5748, 6036], 72),
  finishTiers: null,
},

{
  sku: "BA6132O-v2", name: "Paris Ottoman (Tufted)", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5142,
  specs: ["Tufted", "Weltless construction", "Casters standard", "Double row nail trim optional", "Please reference loveseat pricing in g in chart for upcharges"],
  dims: dims({ width: 48, depth: 48, height: 13, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([5250, 5304, 5358, 5466, 5574, 5682, 5790, 5898, 6006, 6114, 6222, 6330, 6438, 6546, 6654, 6762]),
  leather: leather([6654, 7194, 7626, 8058], 108),
  finishTiers: null,
},

{
  sku: "BA6134C", name: "Athens Lounge Chair (Modern Stitch)", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7947,
  specs: ["Modern stitch", "T Tight seat and back", "T Welt trim standard", "W Bright Bronze hardware", "B Exposed Beech wood", "E Nail trim not available", "N-"],
  dims: dims({ width: 30.75, depth: 33, height: 29.75, widthInside: 25, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 21, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([8001, 8028, 8055, 8109, 8163, 8217, 8271, 8325, 8379, 8433, 8487, 8541, 8595, 8649, 8703, 8757]),
  leather: leather([8703, 8973, 9189, 9405], 54),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6134C-v2", name: "Athens Lounge Chair (Tufted)", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8247,
  specs: ["Tufted Tight seat and back Welt trim standard Bright Bronze hardware Exposed Beech wood Nail trim not available"],
  dims: dims({ width: 30.75, depth: 33, height: 29.75, widthInside: 25, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 21, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([8307, 8337, 8367, 8427, 8487, 8547, 8607, 8667, 8727, 8787, 8847, 8907, 8967, 9027, 9087, 9147]),
  leather: leather([9087, 9387, 9627, 9867], 60),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179C", name: "Celestite Lounge Chair", collection: "Jean Louis Deniot", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8691,
  specs: ["Standard Metal Finish(es): AntiquBronze, Oil Rubbed Bronze", "One (1) Baker Comfort seat", "Tight back", "One (1) Baker Comfort back pad 9” x 19”", "Exposed maple frame, brass ferrules, and welt on base"],
  dims: dims({ width: 37, depth: 35.5, height: 33, widthInside: 24, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 27, weight: 65, fabricReq: 6, leatherReq: 702 }),
  fabric: fab([8799, 8853, 8907, 9015, 9123, 9231, 9339, 9447, 9555, 9663, 9771, 9879, 9987, 10095, 10203, 10311]),
  leather: leather([10203, 10743, 11175, 11607], 108),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S", name: "Celestite Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 15171,
  specs: ["ue", "Metal Finish(es): Antique Bronze, Oil Rubbed Bronze", "(1) Baker Comfort bench cushion", "Tight back", "(5) Baker Comfort Plush KE TP: (2) 18” x 18”, (2) 16” x 22”, (1) 12” x 22”", "Exposed maple frame, brass ferrules, and welt on base"],
  dims: dims({ width: 100, depth: 38.5, height: 33, widthInside: 85.5, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([15456, 15600, 15741, 16026, 16311, 16596, 16881, 17166, 17451, 17736, 18021, 18306, 18591, 18876, 19161, 19446]),
  leather: leather([19161, 20586, 21726, 22866], 285),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-101-110", name: "Celestite 101”-110” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 15597,
  specs: ["Metal Finish(es): Antique, Oil", "MRubbed Bronze R (3) Baker Comfort seats", "( (3) Baker Comfort KE back pillows", "( (5) Baker Comfort Plush KE TP: (2)", "(18” x 18”, (2) 16” x 22”, (1) 12” 1x 22” x Exposed maple frame, brass", "Eferrules, and welt at base f-"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([15903, 16056, 16209, 16515, 16821, 17127, 17433, 17739, 18045, 18351, 18657, 18963, 19269, 19575, 19881, 20187]),
  leather: leather([19881, 21411, 22635, 23859], 306),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-111-120", name: "Celestite 111”-120” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 15897,
  specs: ["Metal Finish(es): Antique, Oil Rubbed Bronze (3) Baker Comfort seats (3) Baker Comfort KE back pillows (5) Baker Comfort Plush KE TP: (2) 18” x 18”, (2) 16” x 22”, (1) 12” x 22” Exposed maple frame, brass ferrules, and welt at base"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 19.5, leatherReq: 332 }),
  fabric: fab([16248, 16425, 16599, 16950, 17301, 17652, 18003, 18354, 18705, 19056, 19407, 19758, 20109, 20460, 20811, 21162]),
  leather: leather([20811, 22566, 23970, 25374], 351),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-60-70", name: "Celestite 60”-70” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11997,
  specs: ["Metal Finish(es): Antique, Oil Rubbed Bronze", "(1) Baker Comfort bench cushion", "Tight back", "(5) Baker Comfort Plush KE TP: (2) 18” x 18”, (2) 16” x 22”, (1) 12” x 22”", "Exposed maple frame, brass ferrules, and welt at base"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 11, leatherReq: 187 }),
  fabric: fab([12195, 12294, 12393, 12591, 12789, 12987, 13185, 13383, 13581, 13779, 13977, 14175, 14373, 14571, 14769, 14967]),
  leather: leather([14769, 15759, 16551, 17343], 198),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-71-80", name: "Celestite 71”-80” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12597,
  specs: ["Metal Finish(es): Antique, Oil Rubbed Bronze n", "(1) Baker Comfort bench cushion", "Tight back 2)", "(5) Baker Comfort Plush KE TP: (2) 18” x 18”, (2) 16” x 22”, (1) 12” x 22”", "Exposed maple frame, brass ferrules, and welt at base"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([12828, 12945, 13059, 13290, 13521, 13752, 13983, 14214, 14445, 14676, 14907, 15138, 15369, 15600, 15831, 16062]),
  leather: leather([15831, 16986, 17910, 18834], 231),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-81-90", name: "Celestite 81”-90” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13197,
  specs: ["Metal Finish(es): Antique, Oil", "MRubbed Bronze R (1) Baker Comfort bench cushion", "( Tight back", "T (5) Baker Comfort Plush KE TP: (2)", "(18” x 18”, (2) 16” x 22”, (1) 12” 1x 22” x Exposed maple frame, brass", "Eferrules, and welt at base f-"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 14.25, leatherReq: 242 }),
  fabric: fab([13455, 13584, 13713, 13971, 14229, 14487, 14745, 15003, 15261, 15519, 15777, 16035, 16293, 16551, 16809, 17067]),
  leather: leather([16809, 18099, 19131, 20163], 258),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6179S-BTI-91-100", name: "Celestite 91”-100” Sofa", collection: "Jean Louis Deniot", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 14097,
  specs: ["Metal Finish(es): Antique, Oil Rubbed Bronze (1) Baker Comfort bench cushion Tight back (5) Baker Comfort Plush KE TP: (2) 18” x 18”, (2) 16” x 22”, (1) 12” x 22” Exposed maple frame, brass ferrules, and welt at base"],
  dims: dims({ width: null, depth: 38.5, height: 33, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 71.5, weight: 150, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([14382, 14526, 14667, 14952, 15237, 15522, 15807, 16092, 16377, 16662, 16947, 17232, 17517, 17802, 18087, 18372]),
  leather: leather([18087, 19512, 20652, 21792], 285),
  finishTiers: { tier1: 0, tier2: 975, tier3: null, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6180C", name: "Carnelian Lounge Chair", collection: "Jean Louis Deniot", category: "chairs", limited: false,
  standardFinish: "-Antique Oil Rubb", frameMaterial: null, basePrice: 8223,
  specs: ["GaJ Standard Metal Finish(es): Antique", "One (1) Bronze, Oil Rubbed Bronze", "Tight bac One (1) Baker Comfort Welted", "Welted cCushion", "Brass ba Tight back", "Welted construction", "Exposed maple with brass ferrules"],
  dims: dims({ width: 34, depth: 32, height: 31, widthInside: 24.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 24, weight: 65, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([8340, 8400, 8457, 8574, 8691, 8808, 8925, 9042, 9159, 9276, 9393, 9510, 9627, 9744, 9861, 9978]),
  leather: leather([9861, 10446, 10914, 11382], 117),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6234C", name: "Dima Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7806,
  specs: ["One (1) Baker Comfort seat cushion", "One (1) Baker Comfort Plush KE throw pillow 10” x 22”", "Tight back", "Bullion must be purchased", "Optional: Bullion/ 4.25 yards +$180", "Optional swivel"],
  dims: dims({ width: 31.5, depth: 36, height: 31, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 6.25, leatherReq: 106.3 }),
  fabric: fab([7920, 7977, 8034, 8148, 8262, 8376, 8490, 8604, 8718, 8832, 8946, 9060, 9174, 9288, 9402, 9516]),
  leather: leather([9402, 9972, 10428, 10884], 114),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6283O", name: "Yves Ottoman", collection: "Baker Originals", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3420,
  specs: ["Tight seat", "Bullion must be purchased", "Optional: Bullion/ 3.25 +$180", "Exposed oak leg"],
  dims: dims({ width: 24, depth: 20, height: 16, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 2.5, leatherReq: 42.5 }),
  fabric: fab([3465, 3489, 3510, 3555, 3600, 3645, 3690, 3735, 3780, 3825, 3870, 3915, 3960, 4005, 4050, 4095]),
  leather: leather([4050, 4275, 4455, 4635], 45),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6283S", name: "Yves Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10746,
  specs: ["(3) Baker Comfort seats", "Tight back", "(3) Baker Comfort back pillows (10”x26”)", "Optional: Bullion/ 7.75 Yards +$300", "Bullion must be purchased", "Exposed Oak leg"],
  dims: dims({ width: 91, depth: 36, height: 31, widthInside: 78, seatHeight: 18, seatDepth: 21, armWidth: null, armHeight: 21.5, exposedLegHeight: null, volume: 1, weight: 173, fabricReq: 17.25, leatherReq: 293 }),
  fabric: fab([11058, 11214, 11370, 11682, 11994, 12306, 12618, 12930, 13242, 13554, 13866, 14178, 14490, 14802, 15114, 15426]),
  leather: leather([15114, 16674, 17922, 19170], 312),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-101-110", name: "Yves 101”-110” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11997,
  specs: ["(3) Baker Comfort seat cushions", "( (3) Baker Comfort back pillows", "((10”x26”) ( Tight back", "T Exposed Oak Leg", "E Optional: Bullion/9 Yards +$300", "Od-"],
  dims: dims({ width: null, depth: 36, height: 31, widthInside: null, seatHeight: 18, seatDepth: 21, armWidth: null, armHeight: 21.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 19, leatherReq: 323 }),
  fabric: fab([12339, 12510, 12681, 13023, 13365, 13707, 14049, 14391, 14733, 15075, 15417, 15759, 16101, 16443, 16785, 17127]),
  leather: leather([16785, 18495, 19863, 21231], 342),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-111-120", name: "Yves 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Optional: Bullion/9.5 Yards +", frameMaterial: null, basePrice: 300,
  specs: ["(4) Baker Comfort seat cushions (4) Baker Comfort back pillows (10”x26”) Tight back Exposed Oak Leg"],
  dims: dims({ width: null, depth: null, height: null, widthInside: 36, seatHeight: 31, seatDepth: null, armWidth: 18, armHeight: 21, exposedLegHeight: null, volume: 21.5, weight: null, fabricReq: null, leatherReq: null }),
  fabric: fab([21, 357, 13275, 13464, 13653, 14031, 14409, 14787, 15165, 15543, 15921, 16299, 16677, 17055, 17433, 17811]),
  leather: leather([18189, 18567, 18189, 20079], 21591),
  finishTiers: { tier1: null, tier2: 12897, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-60-70", name: "Yves 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Optional: Bullion/ 6.5 Yards +", frameMaterial: null, basePrice: 300,
  specs: ["(2) Baker Comfort seat cushions", "(2) Baker Comfort back pillows (10”x26”)", "Tight back", "Exposed Oak Leg"],
  dims: dims({ width: null, depth: null, height: null, widthInside: 36, seatHeight: 31, seatDepth: null, armWidth: 18, armHeight: 21, exposedLegHeight: null, volume: 21.5, weight: null, fabricReq: null, leatherReq: null }),
  fabric: fab([15, 255, 8967, 9102, 9237, 9507, 9777, 10047, 10317, 10587, 10857, 11127, 11397, 11667, 11937, 12207]),
  leather: leather([12477, 12747, 12477, 13827], 14907),
  finishTiers: { tier1: null, tier2: 8697, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-71-80", name: "Yves 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Optional: Bullion/7.25 Yards +", frameMaterial: null, basePrice: 300,
  specs: ["(2) Baker Comfort seat cushions", "(2) Baker Comfort back pillows (10”x26”)", "Tight back", "Exposed Oak Leg"],
  dims: dims({ width: null, depth: null, height: null, widthInside: 36, seatHeight: 31, seatDepth: null, armWidth: 18, armHeight: 21, exposedLegHeight: null, volume: 21.5, weight: null, fabricReq: null, leatherReq: null }),
  fabric: fab([16, 272, 9885, 10029, 10173, 10461, 10749, 11037, 11325, 11613, 11901, 12189, 12477, 12765, 13053, 13341]),
  leather: leather([13629, 13917, 13629, 15069], 16221),
  finishTiers: { tier1: null, tier2: 9597, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-81-90", name: "Yves 81”-90” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10197,
  specs: ["(2) Baker Comfort seat cushions", "( (2) Baker Comfort back pillows", "((10”x26”) ( Tight back", "T Exposed Oak Leg", "E Optional: Bullion/ 7.75 Yar", "Ods +$300 d-"],
  dims: dims({ width: null, depth: 36, height: 31, widthInside: null, seatHeight: 18, seatDepth: 21, armWidth: null, armHeight: 21.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([10503, 10656, 10809, 11115, 11421, 11727, 12033, 12339, 12645, 12951, 13257, 13563, 13869, 14175, 14481, 14787]),
  leather: leather([14481, 16011, 17235, 18459], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6283S-BTI-91-100", name: "Yves 91”-100” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Optional: Bullion /8.25 Yards +", frameMaterial: null, basePrice: 300,
  specs: ["(3) Baker Comfort seat cushions (3) Baker Comfort back pillows (10”x26”) Tight back Exposed Oak Leg"],
  dims: dims({ width: null, depth: null, height: null, widthInside: 36, seatHeight: 31, seatDepth: null, armWidth: 18, armHeight: 21, exposedLegHeight: null, volume: 21.5, weight: null, fabricReq: null, leatherReq: null }),
  fabric: fab([18, 306, 11421, 11583, 11745, 12069, 12393, 12717, 13041, 13365, 13689, 14013, 14337, 14661, 14985, 15309]),
  leather: leather([15633, 15957, 15633, 17253], 18549),
  finishTiers: { tier1: null, tier2: 11097, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-101-110", name: "Antoinette 101”-110” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Oak solids and veneer frame & leg-", frameMaterial: null, basePrice: 14106,
  specs: ["(3) Baker comfort seat cushions", "Upholstered Tight back with dressmaker flounce", "(4) 20” Baker Comfort Plush throw Not available in leather", "Oak solids and veneers"],
  dims: dims({ width: 101, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 18.5, leatherReq: null }),
  fabric: fab([14439, 14607, 14772, 15105, 15438, 15771, 16104, 16437, 16770, 17103, 17436, 17769, 18102, 18435, 18768, 19101]),
  leather: leather(null, 333),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-111-120", name: "Antoinette 111”-120” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 14526,
  specs: ["(4) Baker comfort seat cushions", "Upholstered Tight back with dressmaker flounce ws", "(4) 20” Baker Comfort Plush throws", "Not available in leather", "Oak solids and veneers egs", "Oak solids and veneer frame & legs"],
  dims: dims({ width: 111, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 21, leatherReq: null }),
  fabric: fab([14904, 15093, 15282, 15660, 16038, 16416, 16794, 17172, 17550, 17928, 18306, 18684, 19062, 19440, 19818, 20196]),
  leather: leather(null, 378),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-60-70", name: "Antoinette 60”-70” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12312,
  specs: ["A (1) Baker Comfort seat with", "(dressmaker flounce d Tight upholstered back", "T (4) 20” Baker Comfort Plush throws", "( Not available in leather", "N Oak solids and veneers", "O Oak solids and veneer frame & legs", "O-"],
  dims: dims({ width: 60, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 12.5, leatherReq: null }),
  fabric: fab([12537, 12651, 12762, 12987, 13212, 13437, 13662, 13887, 14112, 14337, 14562, 14787, 15012, 15237, 15462, 15687]),
  leather: leather(null, 225),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-71-80", name: "Antoinette 71”-80” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12657,
  specs: ["(1) Baker Comfort seat with dressmaker flounce Tight upholstered back (4) 20” Baker Comfort Plush throws Not available in leather Oak solids and veneers Oak solids and veneer frame & legs"],
  dims: dims({ width: 71, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 13.5, leatherReq: null }),
  fabric: fab([12900, 13023, 13143, 13386, 13629, 13872, 14115, 14358, 14601, 14844, 15087, 15330, 15573, 15816, 16059, 16302]),
  leather: leather(null, 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-81-90", name: "Antoinette 81”-90” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: "Oak solids and veneer frame & leg-", frameMaterial: null, basePrice: 13011,
  specs: [],
  dims: dims({ width: 81, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 14.5, leatherReq: null }),
  fabric: fab([13272, 13404, 13533, 13794, 14055, 14316, 14577, 14838, 15099, 15360, 15621, 15882, 16143, 16404, 16665, 16926]),
  leather: leather(null, 261),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S-BTI-91-100", name: "Antoinette 91”-100” Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13356,
  specs: ["(1) Baker Comfort seat dressmaker flounce", "Tight upholstered back ws", "(4) 20” Baker Comfort Plush throws", "Not available in leather", "Oak solids and veneers egs", "Oak solids and veneer frame & legs"],
  dims: dims({ width: 91, depth: 38.5, height: 32.5, widthInside: null, seatHeight: 18, seatDepth: 18, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 15.5, leatherReq: null }),
  fabric: fab([13635, 13776, 13914, 14193, 14472, 14751, 15030, 15309, 15588, 15867, 16146, 16425, 16704, 16983, 17262, 17541]),
  leather: leather(null, 279),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6286S", name: "Antoinette Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13656,
  specs: ["(1) Baker Comfort seat", "( Tight back", "U (4) Baker Comfort Plush throws", "((20”) ( Dressmaker Flounce", "P Not available in Leather", "O Oak solids and veneer frame & legs -"],
  dims: dims({ width: 100, depth: 38.5, height: 32.5, widthInside: 80, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 15.5, leatherReq: null }),
  fabric: fab([13935, 14076, 14214, 14493, 14772, 15051, 15330, 15609, 15888, 16167, 16446, 16725, 17004, 17283, 17562, 17841]),
  leather: leather(null, 279),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6287S", name: "Atlas Sofa Lounge", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10821,
  specs: ["(3) Baker Comfort Seat Cushions Upholstered Tight back (2) Baker Comfort Plush throws (20”) Petite option also available Oak solids and veneer frame"],
  dims: dims({ width: 99, depth: 39.75, height: 33.5, widthInside: 76, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 33.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([11106, 11250, 11391, 11676, 11961, 12246, 12531, 12816, 13101, 13386, 13671, 13956, 14241, 14526, 14811, 15096]),
  leather: leather([14811, 16236, 17376, 18516], 285),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6287SP", name: "Atlas Petite Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10407,
  specs: ["(2) Baker Comfort seats", "Tight back", "(2) Baker Comfort Plush throws (20”)", "Oak solids and veneer frame"],
  dims: dims({ width: 74, depth: 39.75, height: 33.5, widthInside: 51, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 33.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([10650, 10773, 10893, 11136, 11379, 11622, 11865, 12108, 12351, 12594, 12837, 13080, 13323, 13566, 13809, 14052]),
  leather: leather([13809, 15024, 15996, 16968], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6288C", name: "Darcy Wingback Chair", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: "Moonlight", frameMaterial: null, basePrice: 6741,
  specs: ["(1) Loose Baker Comfort Seat", "Upholstered Tight Back", "Oak Solids and Veneer Frame", "Contrasting welt +$120"],
  dims: dims({ width: 27.5, depth: 37, height: 42.5, widthInside: 21.5, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 21, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([6849, 6903, 6957, 7065, 7173, 7281, 7389, 7497, 7605, 7713, 7821, 7929, 8037, 8145, 8253, 8361]),
  leather: leather([8253, 8793, 9225, 9657], 108),
  finishTiers: null,
},

{
  sku: "BA6288O", name: "Darcy Ottoman", collection: "Baker Originals", category: "ottomans", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 3126,
  specs: ["(1) Semi attached Baker Comfort", "Tseat", "W Oak solids base", "E Contrasting welt +$105", "SMoonlight"],
  dims: dims({ width: 23.5, depth: 18.5, height: 17.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 2.5, leatherReq: 42.5 }),
  fabric: fab([3171, 3195, 3216, 3261, 3306, 3351, 3396, 3441, 3486, 3531, 3576, 3621, 3666, 3711, 3756, 3801]),
  leather: leather([3756, 3981, 4161, 4341], 45),
  finishTiers: null,
},

{
  sku: "BA6312-11", name: "Tuileries Ottoman", collection: "Jacques Garcia", category: "ottomans", limited: true,
  standardFinish: "Exposed Maple woodSmall nail trim +", frameMaterial: null, basePrice: 105,
  specs: ["Tight top Welt trim standard"],
  dims: dims({ width: null, depth: null, height: 30, widthInside: 22.5, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: null, fabricReq: 1, leatherReq: null }),
  fabric: fab([2.25, 38, 2853, 2874, 2895, 2937, 2979, 3021, 3063, 3105, 3147, 3189, 3231, 3273, 3315, 3357]),
  leather: leather([3399, 3441, 3399, 3609], 3777),
  finishTiers: { tier1: null, tier2: 2811, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6348", name: "Manor Wing Chair", collection: "Bill Sofield", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8991,
  specs: ["One (1) Baker Comfort seat", "One (1) Baker Comfort Plush back pillow 11” x 16”", "Tight back", "Welt trim standard (nail trim not available)", "Exposed Walnut wood"],
  dims: dims({ width: 31.5, depth: 33.5, height: 41.5, widthInside: 22, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([9126, 9195, 9261, 9396, 9531, 9666, 9801, 9936, 10071, 10206, 10341, 10476, 10611, 10746, 10881, 11016]),
  leather: leather([10881, 11556, 12096, 12636], 135),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354-87", name: "Wren Tufted Sofa", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11631,
  specs: ["Three (3) Baker Crown Support k seats", "Buttoned tight back", "Welt trim on base (nail trim not available)", "Burnished Bronze Brass finish on ferrules", "Exposed Maple wood"],
  dims: dims({ width: 87.5, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([11937, 12090, 12243, 12549, 12855, 13161, 13467, 13773, 14079, 14385, 14691, 14997, 15303, 15609, 15915, 16221]),
  leather: leather([15915, 17445, 18669, 19893], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-101-110", name: "Wren 101”-110” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 18297,
  specs: ["(3) Baker Crown Support seats", "( buttoned tight back", "b Welt trim on base (Nail trim N/A)", "W Exposed wood-Maple", "E Burnished Bronze brass finish on", "Bferrules standard f-"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 19.5, leatherReq: 332 }),
  fabric: fab([18648, 18825, 18999, 19350, 19701, 20052, 20403, 20754, 21105, 21456, 21807, 22158, 22509, 22860, 23211, 23562]),
  leather: leather([23211, 24966, 26370, 27774], 351),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-111-120", name: "Wren 111”-120” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 18597,
  specs: ["(4) Baker Crown Support seats buttoned tight back Welt trim on base (Nail trim N/A) Exposed wood-Maple Burnished Bronze brass finish on ferrules standard"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 20.75, leatherReq: 353 }),
  fabric: fab([18972, 19161, 19347, 19722, 20097, 20472, 20847, 21222, 21597, 21972, 22347, 22722, 23097, 23472, 23847, 24222]),
  leather: leather([23847, 25722, 27222, 28722], 375),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-60-70", name: "Wren 60”-70” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 14697,
  specs: ["(2) Baker Crown Support seats", "buttoned tight back", "Welt trim on base (Nail trim N/A)", "Exposed wood-Maple", "Burnished Bronze brass finish on ferrules standard"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 14.25, leatherReq: 242 }),
  fabric: fab([14955, 15084, 15213, 15471, 15729, 15987, 16245, 16503, 16761, 17019, 17277, 17535, 17793, 18051, 18309, 18567]),
  leather: leather([18309, 19599, 20631, 21663], 258),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-71-80", name: "Wren 71”-80” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 15297,
  specs: ["(2) Baker Crown Support seats", "buttoned tight back )", "Welt trim on base (Nail trim N/A)", "Exposed wood-Maple", "Burnished Bronze brass finish on ferrules standard"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([15582, 15726, 15867, 16152, 16437, 16722, 17007, 17292, 17577, 17862, 18147, 18432, 18717, 19002, 19287, 19572]),
  leather: leather([19287, 20712, 21852, 22992], 285),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-81-90", name: "Wren 81”-90” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 15897,
  specs: ["(3) Baker Crown Support seats", "( buttoned tight back", "b Welt trim on base (Nail trim N/A)", "W Exposed wood-Maple", "E Burnished Bronze brass finish on", "Bferrules standard f-"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([16203, 16356, 16509, 16815, 17121, 17427, 17733, 18039, 18345, 18651, 18957, 19263, 19569, 19875, 20181, 20487]),
  leather: leather([20181, 21711, 22935, 24159], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6354S-BTI-91-100", name: "Wren 91”-100” Sofa Lounge", collection: "Bill Sofield", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 17097,
  specs: ["(3) Baker Crown Support seats buttoned tight back Welt trim on base (Nail trim N/A) Exposed wood-Maple Burnished Bronze brass finish on ferrules standard"],
  dims: dims({ width: null, depth: 35.5, height: 29, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 18.25, leatherReq: 310 }),
  fabric: fab([17427, 17592, 17757, 18087, 18417, 18747, 19077, 19407, 19737, 20067, 20397, 20727, 21057, 21387, 21717, 22047]),
  leather: leather([21717, 23367, 24687, 26007], 330),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6369-32", name: "Paris Club Chair (Modern Stitch)", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Nail trim for medium & large nails +", frameMaterial: null, basePrice: 525,
  specs: [],
  dims: dims({ width: null, depth: null, height: 32.5, widthInside: 34, seatHeight: 28.5, seatDepth: 20, armWidth: 17.5, armHeight: null, exposedLegHeight: null, volume: 28.5, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([6.75, 115, 7350, 7413, 7473, 7596, 7719, 7842, 7965, 8088, 8211, 8334, 8457, 8580, 8703, 8826]),
  leather: leather([8949, 9072, 8949, 9564], 10056),
  finishTiers: { tier1: null, tier2: 7227, tier3: 0, tier4: 495, type1Rattan: 795, type2Rattan: 1050, specialtyRattan: null },
},

{
  sku: "BA6369-32-v2", name: "Paris Club Chair (Tufted)", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Nail trim for medium and large nails +", frameMaterial: null, basePrice: 525,
  specs: ["Tufted", "Tufted seat and back", "Exposed Maple wood", "Weltless construction standard", "Nail trim for small nails optional +$375"],
  dims: dims({ width: null, depth: null, height: 32.5, widthInside: 34, seatHeight: 28.5, seatDepth: 20, armWidth: 17.5, armHeight: null, exposedLegHeight: null, volume: 28.5, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([8, 136, 7971, 8043, 8115, 8259, 8403, 8547, 8691, 8835, 8979, 9123, 9267, 9411, 9555, 9699]),
  leather: leather([9843, 9987, 9843, 10563], 11139),
  finishTiers: { tier1: null, tier2: 7827, tier3: 0, tier4: 495, type1Rattan: 795, type2Rattan: 1050, specialtyRattan: null },
},

{
  sku: "BA6369-84", name: "Paris Loveseat (Modern Stitch)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8877,
  specs: ["Modern stitch", "T Tight seat and back", "T Exposed Maple wood", "E Weltless construction", "W Nail trim for small nails +$375", "N Nail trim for medium and large na", "Nils +$525 ls-"],
  dims: dims({ width: 84.5, depth: 34, height: 28.5, widthInside: 72, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 28.5, exposedLegHeight: 2, volume: 1, weight: null, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([9054, 9144, 9231, 9408, 9585, 9762, 9939, 10116, 10293, 10470, 10647, 10824, 11001, 11178, 11355, 11532]),
  leather: leather([11355, 12240, 12948, 13656], 177),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6369-84-v2", name: "Paris Loveseat (Tufted)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: "Nail trim for medium & large nails +", frameMaterial: null, basePrice: 525,
  specs: ["Tufted Tufted seat and back Exposed Maple wood Weltless construction Nail trim for small nails +$375"],
  dims: dims({ width: null, depth: null, height: 84.5, widthInside: 34, seatHeight: 28.5, seatDepth: 72, armWidth: 17.5, armHeight: null, exposedLegHeight: null, volume: 28.5, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([10, 170, 9657, 9747, 9837, 10017, 10197, 10377, 10557, 10737, 10917, 11097, 11277, 11457, 11637, 11817]),
  leather: leather([11997, 12177, 11997, 12897], 13617),
  finishTiers: { tier1: null, tier2: 9477, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6369-85", name: "Paris Chaise Lounge (Modern Stitch)", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Nail trim for medium and large nails +", frameMaterial: null, basePrice: 795,
  specs: ["Tight seat", "Two (2) Baker Fiberlux bolsters (6” x 27”)", "Exposed Maple wood", "Weltless construction standard", "Nail trim for small nails +$600"],
  dims: dims({ width: null, depth: null, height: 85, widthInside: 29, seatHeight: 22, seatDepth: 64, armWidth: 16.5, armHeight: null, exposedLegHeight: null, volume: 22, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([8.5, 145, 7770, 7848, 7923, 8076, 8229, 8382, 8535, 8688, 8841, 8994, 9147, 9300, 9453, 9606]),
  leather: leather([9759, 9912, 9759, 10524], 11136),
  finishTiers: { tier1: null, tier2: 7617, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6369-85-v2", name: "Paris Chaise Lounge (Tufted)", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Nail trim for medium & large nails +", frameMaterial: null, basePrice: 795,
  specs: ["Tufted seat and back", "Two (2) Baker Fiberlux bolsters (6” x 27”)", "Exposed wood - Maple", "Weltless construction standard", "Nail trim for small nails +$600 a"],
  dims: dims({ width: null, depth: null, height: 85, widthInside: 29, seatHeight: 22, seatDepth: 64, armWidth: 16.5, armHeight: null, exposedLegHeight: null, volume: 22, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([9, 153, 8379, 8460, 8541, 8703, 8865, 9027, 9189, 9351, 9513, 9675, 9837, 9999, 10161, 10323]),
  leather: leather([10485, 10647, 10485, 11295], 11943),
  finishTiers: { tier1: null, tier2: 8217, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BA6369-97", name: "Paris Sofa (Modern Stitch)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10962,
  specs: ["Modern stitch", "T Tight seat", "T Exposed Maple wood", "E Weltless construction standard", "W Nail trim for small nails +$600", "N Nail trim for medium and large na", "Nils +$795 il-"],
  dims: dims({ width: 97.5, depth: 34, height: 28.5, widthInside: 85, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 28.5, exposedLegHeight: 2, volume: 1, weight: null, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([11133, 11220, 11304, 11475, 11646, 11817, 11988, 12159, 12330, 12501, 12672, 12843, 13014, 13185, 13356, 13527]),
  leather: leather([13356, 14211, 14895, 15579], 171),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6369-97-v2", name: "Paris Sofa (Tufted)", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: "Nail trim for medium and large nails +", frameMaterial: null, basePrice: 795,
  specs: ["Tufted Tufted seat and back Exposed Maple wood Weltless construction standard Nail trim for small nails +$600"],
  dims: dims({ width: null, depth: null, height: 97.5, widthInside: 34, seatHeight: 28.5, seatDepth: 85, armWidth: 17.5, armHeight: null, exposedLegHeight: null, volume: 28.5, weight: 2, fabricReq: 1, leatherReq: null }),
  fabric: fab([11.25, 191, 11766, 11868, 11970, 12174, 12378, 12582, 12786, 12990, 13194, 13398, 13602, 13806, 14010, 14214]),
  leather: leather([14418, 14622, 14418, 15438], 16254),
  finishTiers: { tier1: null, tier2: 11562, tier3: 0, tier4: 495, type1Rattan: 795, type2Rattan: 1050, specialtyRattan: null },
},

{
  sku: "BA6372", name: "Wren Tufted Chair", collection: "Bill Sofield", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8526,
  specs: ["Baker Crown Support cushion", "Tufted back", "Welt trim standard", "Exposed Maple wood", "Burnished Bronze Brass ferrules standard"],
  dims: dims({ width: 39.5, depth: 35, height: 32, widthInside: 23, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 27, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 8.75, leatherReq: 149 }),
  fabric: fab([8685, 8766, 8844, 9003, 9162, 9321, 9480, 9639, 9798, 9957, 10116, 10275, 10434, 10593, 10752, 10911]),
  leather: leather([10752, 11547, 12183, 12819], 159),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386-80", name: "Camelback Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11862,
  specs: ["Two (2) Baker Comfort seats", "Tight back", "Two (2) Baker Comfort Plush bolsters 7” x 24”", "Welt trim only", "Not available in leather", "Exposed Maple wood"],
  dims: dims({ width: 80, depth: 33, height: 33, widthInside: 71, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 12.5, leatherReq: null }),
  fabric: fab([12087, 12201, 12312, 12537, 12762, 12987, 13212, 13437, 13662, 13887, 14112, 14337, 14562, 14787, 15012, 15237]),
  leather: leather(null, 225),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-101-110", name: "Camelback 101”-110” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12747,
  specs: ["(3) Baker Comfort cushion", "( Tight back", "T (2) Baker Comfort Plush bolsters", "((7” x 24”) ( Welt trim only", "W Exposed wood-Maple", "E Cushions and back pillow", "Nquantities change base on grids -"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: null, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 18.5, leatherReq: null }),
  fabric: fab([13080, 13248, 13413, 13746, 14079, 14412, 14745, 15078, 15411, 15744, 16077, 16410, 16743, 17076, 17409, 17742]),
  leather: leather(null, 333),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-111-120", name: "Camelback 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 13047,
  specs: ["(3) Baker Comfort cushion Tight back (2) Baker Comfort Plush bolsters (7” x 24”) Welt trim only Exposed wood-Maple Not available in Leather"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: 51, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 22.5, leatherReq: null }),
  fabric: fab([13452, 13656, 13857, 14262, 14667, 15072, 15477, 15882, 16287, 16692, 17097, 17502, 17907, 18312, 18717, 19122]),
  leather: leather(null, 405),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-60-70", name: "Camelback 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10347,
  specs: ["(1) Baker Comfort cushion", "Tight back", "(2) Baker Comfort Plush bolsters (7” x 24”)", "Welt trim only", "Exposed wood-Maple", "Not available in Leather"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: 51, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 11.25, leatherReq: null }),
  fabric: fab([10551, 10653, 10755, 10959, 11163, 11367, 11571, 11775, 11979, 12183, 12387, 12591, 12795, 12999, 13203, 13407]),
  leather: leather(null, 204),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-71-80", name: "Camelback 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10647,
  specs: ["(1) Baker Comfort cushion", "Tight back", "(2) Baker Comfort Plush bolsters (7” x 24”)", "Welt trim only", "Exposed wood-Maple", "Not available in Leather"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: 51, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 12.5, leatherReq: null }),
  fabric: fab([10872, 10986, 11097, 11322, 11547, 11772, 11997, 12222, 12447, 12672, 12897, 13122, 13347, 13572, 13797, 14022]),
  leather: leather(null, 225),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-81-90", name: "Camelback 81”-90” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11247,
  specs: ["(2) Baker Comfort cushion", "( Tight back", "T (2) Baker Comfort Plush bolsters", "((7” x 24”) ( Welt trim only", "W Exposed wood-Maple", "E Not available in Leather", "N-"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: 51, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 14, leatherReq: null }),
  fabric: fab([11499, 11625, 11751, 12003, 12255, 12507, 12759, 13011, 13263, 13515, 13767, 14019, 14271, 14523, 14775, 15027]),
  leather: leather(null, 252),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6386S-BTI-91-100", name: "Camelback 91”-100” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11847,
  specs: ["(2) Baker Comfort cushion Tight back (2) Baker Comfort Plush bolsters (7” x 24”) Welt trim only Exposed wood-Maple Not available in Leather"],
  dims: dims({ width: null, depth: 33, height: 33, widthInside: 51, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 16, leatherReq: null }),
  fabric: fab([12135, 12279, 12423, 12711, 12999, 13287, 13575, 13863, 14151, 14439, 14727, 15015, 15303, 15591, 15879, 16167]),
  leather: leather(null, 288),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6715C", name: "Signature Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "Leafing on front arm posts +$73-", frameMaterial: null, basePrice: 9342,
  specs: ["One (1) Baker Comfort cushion", "One (1) Baker Comfort boxed bacpillow 17”x22”", "Exposed Maple wood"],
  dims: dims({ width: 32, depth: 36, height: 32, widthInside: 25, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: null, volume: 1, weight: 80, fabricReq: 7, leatherReq: 119 }),
  fabric: fab([9468, 9531, 9594, 9720, 9846, 9972, 10098, 10224, 10350, 10476, 10602, 10728, 10854, 10980, 11106, 11232]),
  leather: leather([11106, 11736, 12240, 12744], 126),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6726C", name: "Piedmont Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6321,
  specs: ["Tight seat, tight back ck", "Welt trim on outside only", "Exposed Beech wood", "Due to complex pattern of this 35 style, please include sketch when contrasting fabrics"],
  dims: dims({ width: 30.5, depth: 30.5, height: 31.5, widthInside: 25, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 18, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([6438, 6498, 6555, 6672, 6789, 6906, 7023, 7140, 7257, 7374, 7491, 7608, 7725, 7842, 7959, 8076]),
  leather: leather([7959, 8544, 9012, 9480], 117),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S", name: "Presidio Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12906,
  specs: ["Baker Comfort seat", "B 2 Baker Comfort Plush boxed TPs", "T14” x 24” x 2.5” T 3 Baker Comfort Plush KE TPs (1)", "T11” x 25” (2) 19” x 19” K Brass ferrules on front 1legs +$300", "B Welt trim on base only l Exposed Beech wood", "E-"],
  dims: dims({ width: 90, depth: 39.5, height: 34, widthInside: 80.5, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 18.5, leatherReq: 315 }),
  fabric: fab([13239, 13407, 13572, 13905, 14238, 14571, 14904, 15237, 15570, 15903, 16236, 16569, 16902, 17235, 17568, 17901]),
  leather: leather([17568, 19233, 20565, 21897], 333),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-101-110", name: "Presidio 101”-110” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13497,
  specs: ["Baker Comfort seat Two (2) Baker Comfort Plush boxed TPs 14” x 24” x 2.5” Three (3) Baker Comfort Plush KE TPs one (1) 11” x 25” two (2) 19” x 19” Brass ferrules on front legs +$300 Exposed Wood - Beech"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 20.75, leatherReq: 353 }),
  fabric: fab([13872, 14061, 14247, 14622, 14997, 15372, 15747, 16122, 16497, 16872, 17247, 17622, 17997, 18372, 18747, 19122]),
  leather: leather([18747, 20622, 22122, 23622], 375),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-111-120", name: "Presidio 111”-120” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13797,
  specs: ["Baker Comfort seat", "Two (2) Baker Comfort Plush boxeTPs 14” x 24” x 2.5”", "Three (3) Baker Comfort Plush KE TPs one (1) 11” x 25” two (2) 19” x 19”", "Brass ferrules on front legs +$300", "Exposed Wood - Beech"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 22, leatherReq: 374 }),
  fabric: fab([14193, 14391, 14589, 14985, 15381, 15777, 16173, 16569, 16965, 17361, 17757, 18153, 18549, 18945, 19341, 19737]),
  leather: leather([19341, 21321, 22905, 24489], 396),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-60-70", name: "Presidio 60”-70” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10797,
  specs: ["Baker Comfort seat ed", "Two (2) Baker Comfort Plush boxed TPs 14” x 24” x 2.5”", "Three (3) Baker Comfort Plush KE TPs one (1) 11” x 25” two (2) 19” x 19”", "Brass ferrules on front legs +$300", "Exposed Wood - Beech"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 15.5, leatherReq: 264 }),
  fabric: fab([11076, 11217, 11355, 11634, 11913, 12192, 12471, 12750, 13029, 13308, 13587, 13866, 14145, 14424, 14703, 14982]),
  leather: leather([14703, 16098, 17214, 18330], 279),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-71-80", name: "Presidio 71”-80” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11397,
  specs: ["Baker Comfort seat", "B Two (2) Baker Comfort Plush boxed", "TTPs 14” x 24” x 2.5” T Three (3) Baker Comfort Plush", "TKE TPs one (1) 11” x 25” two (2) K19” x 19” 1 Brass ferrules on front", "Blegs +$300 l Exposed Wood - Beech", "E-"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([11703, 11856, 12009, 12315, 12621, 12927, 13233, 13539, 13845, 14151, 14457, 14763, 15069, 15375, 15681, 15987]),
  leather: leather([15681, 17211, 18435, 19659], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-81-90", name: "Presidio 81”-90” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11997,
  specs: ["Baker Comfort seat Two (2) Baker Comfort Plush boxed TPs 14” x 24” x 2.5” Three (3) Baker Comfort Plush KE TPs one (1) 11” x 25” two (2) 19” x 19” Brass ferrules on front legs +$300 Exposed Wood - Beech"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 18.5, leatherReq: 315 }),
  fabric: fab([12330, 12498, 12663, 12996, 13329, 13662, 13995, 14328, 14661, 14994, 15327, 15660, 15993, 16326, 16659, 16992]),
  leather: leather([16659, 18324, 19656, 20988], 333),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6729S-BTI-91-100", name: "Presidio 91”-100” Sofa", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12597,
  specs: ["Baker Comfort seat", "Two (2) Baker Comfort Plush boxeTPs 14” x 24” x 2.5”", "Three (3) Baker Comfort Plush KE TPs one (1) 11” x 25” two (2) 19” x 19”", "Brass ferrules on front legs +$300", "Exposed Wood - Beech"],
  dims: dims({ width: null, depth: 39.5, height: 34, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: null, weight: null, fabricReq: 19.5, leatherReq: 332 }),
  fabric: fab([12948, 13125, 13299, 13650, 14001, 14352, 14703, 15054, 15405, 15756, 16107, 16458, 16809, 17160, 17511, 17862]),
  leather: leather([17511, 19266, 20670, 22074], 351),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6734LA", name: "Surround Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 8406,
  specs: ["Two (2) Baker Comfort seat ed cushions", "Tight back", "Warm Bronze base", "Micro welt on cushions, pillows and body"],
  dims: dims({ width: 51.5, depth: 34, height: 26.5, widthInside: 51.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 0, exposedLegHeight: 4, volume: 1, weight: 140, fabricReq: 9.25, leatherReq: 157.3 }),
  fabric: fab([8574, 8658, 8742, 8910, 9078, 9246, 9414, 9582, 9750, 9918, 10086, 10254, 10422, 10590, 10758, 10926]),
  leather: leather([10758, 11598, 12270, 12942], 168),
  finishTiers: null,
},

{
  sku: "BA6734LO", name: "Surround One Arm Loveseat", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm BronzeW", frameMaterial: null, basePrice: 10011,
  specs: ["2 Baker Comfort seat cushions", "O Tight back C 3 Baker Comfort Plush throw", "Wpillows: (1) 20”x12” knife edge,", "M(1) 20”x14” knife edge, (1) boxed arm pillow", "Warm Bronze base", "Micro welt"],
  dims: dims({ width: 59.75, depth: 34, height: 30.5, widthInside: 49.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: 1, weight: 150, fabricReq: 11.5, leatherReq: 195.5 }),
  fabric: fab([10218, 10323, 10425, 10632, 10839, 11046, 11253, 11460, 11667, 11874, 12081, 12288, 12495, 12702, 12909, 13116]),
  leather: leather([12909, 13944, 14772, 15600], 207),
  finishTiers: null,
},

{
  sku: "BA6734O", name: "Surround Ottoman", collection: "Barbara Barry", category: "ottomans", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 5217,
  specs: ["One (1) Semi-attached Baker Comfort cushion Warm Bronze base Micro welt on cushions and body"],
  dims: dims({ width: 34.5, depth: 34.5, height: 17.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 0, exposedLegHeight: 4, volume: 1, weight: 71, fabricReq: 5.5, leatherReq: 93.5 }),
  fabric: fab([5316, 5367, 5415, 5514, 5613, 5712, 5811, 5910, 6009, 6108, 6207, 6306, 6405, 6504, 6603, 6702]),
  leather: leather([6603, 7098, 7494, 7890], 99),
  finishTiers: null,
},

{
  sku: "BA6734S", name: "Surround Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 12177,
  specs: ["3 Baker Comfort seat cushions", "Tight back", "6 Baker Comfort Plush throw pillows: (2) 20” x 12” KE, (2) 20” x 14” KE, (2) boxed arm pillows", "Warm Bronze base", "Micro welt"],
  dims: dims({ width: 93, depth: 34, height: 30.5, widthInside: 71.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: 1, weight: 210, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([12465, 12609, 12753, 13041, 13329, 13617, 13905, 14193, 14481, 14769, 15057, 15345, 15633, 15921, 16209, 16497]),
  leather: leather([16209, 17649, 18801, 19953], 288),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-101-110", name: "Surround 101”-110” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 12897,
  specs: ["(3) Baker comfort seat cushions", "Tight back", "(6)Baker Comfort Plush throws: (2) x (20” x 14”) KE, (2) (20” x 14”) KE and (2) boxed arm pillows", "Warm Bronze Base", "Micro welt"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([13221, 13383, 13545, 13869, 14193, 14517, 14841, 15165, 15489, 15813, 16137, 16461, 16785, 17109, 17433, 17757]),
  leather: leather([17433, 19053, 20349, 21645], 324),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-111-120", name: "Surround 111”-120” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "MWarm BronzeW", frameMaterial: null, basePrice: 13197,
  specs: ["(4) Baker comfort seat cushions", "( Tight back", "T (6)Baker Comfort Plush throws: (2)", "((20” x 14”) KE, (2) (20” x 14”) KE (and (2) boxed arm pillows a Warm Bronze Base", "W Micro welt"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 21, leatherReq: 357 }),
  fabric: fab([13575, 13764, 13953, 14331, 14709, 15087, 15465, 15843, 16221, 16599, 16977, 17355, 17733, 18111, 18489, 18867]),
  leather: leather([18489, 20379, 21891, 23403], 378),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-60-70", name: "Surround 60”-70” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 9897,
  specs: ["(2) Baker comfort seat cushions Tight back (4) Baker Comfort Plush throws, (2) (20” x 14”) knife edge, (2) boxed arm pillows Warm Bronze Base Micro welt"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([10128, 10245, 10359, 10590, 10821, 11052, 11283, 11514, 11745, 11976, 12207, 12438, 12669, 12900, 13131, 13362]),
  leather: leather([13131, 14286, 15210, 16134], 231),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-71-80", name: "Surround 71”-80” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 10497,
  specs: ["(2) Baker comfort seat cushions", "Tight back", "(4) Baker Comfort Plush throws, (2) (20” x 14”) KE, (2) boxed arm pillows", "Warm Bronze Base", "Micro welt"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([10740, 10863, 10983, 11226, 11469, 11712, 11955, 12198, 12441, 12684, 12927, 13170, 13413, 13656, 13899, 14142]),
  leather: leather([13899, 15114, 16086, 17058], 243),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-81-90", name: "Surround 81”-90” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 11097,
  specs: ["(3) Baker comfort seat cushions", "Tight back", "(6) Baker Comfort Plush throws, (2) (20” x 14”) KE, (2) 20”x12”) & (2) boxed arm pillows", "Warm Bronze Base", "Micro welt"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([11358, 11490, 11619, 11880, 12141, 12402, 12663, 12924, 13185, 13446, 13707, 13968, 14229, 14490, 14751, 15012]),
  leather: leather([14751, 16056, 17100, 18144], 261),
  finishTiers: null,
},

{
  sku: "BA6734S-BTI-91-100", name: "Surround91”-100” Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "MWarm BronzeW", frameMaterial: null, basePrice: 11697,
  specs: ["(3) Baker comfort seat cushions", "T Tight back c (6)Baker Comfort Plush throws: (2)", "T(20” x 14”) KE, (2)(20” x 12”) & (2)", "(boxed arm pillows O Warm Bronze Base ( Micro welt t W"],
  dims: dims({ width: null, depth: 34, height: 30.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([11985, 12129, 12273, 12561, 12849, 13137, 13425, 13713, 14001, 14289, 14577, 14865, 15153, 15441, 15729, 16017]),
  leather: leather([15729, 17169, 18321, 19473], 288),
  finishTiers: null,
},

{
  sku: "BA6734SA", name: "Surround Armless Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 12012,
  specs: ["Three (3) Baker Comfort seat cushions Tight back (3) Baker Comfort Plush throws: One (1)(20”x12”) KE, One (1) (20”x14”), One (1) boxed arm throw Warm Bronze base Micro welt"],
  dims: dims({ width: 77.25, depth: 34, height: 26.5, widthInside: 77.25, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 0, exposedLegHeight: 4, volume: 1, weight: 180, fabricReq: 12.5, leatherReq: 212.5 }),
  fabric: fab([12237, 12351, 12462, 12687, 12912, 13137, 13362, 13587, 13812, 14037, 14262, 14487, 14712, 14937, 15162, 15387]),
  leather: leather([15162, 16287, 17187, 18087], 225),
  finishTiers: null,
},

{
  sku: "BA6734SC", name: "Surround Corner Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Micro wWarm BronzeWarm Br", frameMaterial: null, basePrice: 12477,
  specs: ["Surr Three (3) Baker Comfort seat", "Three (3cushions cushions", "Tight back", "Tight bac (5) Baker Comfort Plush throws: (2)", "(3) Baker(20”x12”) KE, (2)(20”x14”) KE, One One (1)((1) boxed arm pillow (20”x14” Warm Bronze base pillow", "Micro welt", "Warm Br"],
  dims: dims({ width: 92.5, depth: 34, height: 30.5, widthInside: 75.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: 4, volume: 1, weight: 200, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([12765, 12909, 13053, 13341, 13629, 13917, 14205, 14493, 14781, 15069, 15357, 15645, 15933, 16221, 16509, 16797]),
  leather: leather([16509, 17949, 19101, 20253], 288),
  finishTiers: null,
},

{
  sku: "BA6734SO", name: "Surround One Arm Sofa", collection: "Barbara Barry", category: "sofas", limited: true,
  standardFinish: "Warm Bronze", frameMaterial: null, basePrice: 11382,
  specs: ["BA6741C Verve Lounge ChBarbara Barry 3) Baker Comfort seat", "One (1) Baker Comfort seas", "One (1) Baker Comfort KE ack pillow (14”x20”) er Comfort Plush throws:", "Optional swivel base (20”x12”) KE, One (1)", "Brass base ”) KE, One (1) boxed arm Bronze base elt Bronze"],
  dims: dims({ width: null, depth: null, height: null, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 85.5, volume: 31.5, weight: 34, fabricReq: 37, leatherReq: 30.5 }),
  fabric: fab([30.5, 75.5, 26, 17.5, 18.5, null, null, null, null, 26.5, null, 4, null, 1, 1, 190]),
  leather: leather([75, 15, 5.5, 255], 93.5),
  finishTiers: { tier1: 8394, tier2: null, tier3: null, tier4: null, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6741C", name: "Verve Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: "•Warm Bronze base +", frameMaterial: null, basePrice: 300,
  specs: ["Tight upholstery with Walnut Base"],
  dims: dims({ width: null, depth: null, height: 20, widthInside: 20, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: null, weight: null, fabricReq: 15, leatherReq: 46 }),
  fabric: fab([1.25, 21, 3390, 3402, 3414, 3438, 3462, 3486, 3510, 3534, 3558, 3582, 3606, 3630, 3654, 3678]),
  leather: leather([3702, 3726, 3702, 3822], 3918),
  finishTiers: { tier1: null, tier2: 3366, tier3: 0, tier4: 495, type1Rattan: 795, type2Rattan: 1050, specialtyRattan: null },
},

{
  sku: "BA6841C", name: "Ellipse Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6867,
  specs: ["Fully upholstered chair with oak feet", "One (1) Baker Comfort Cushion", "Tight back"],
  dims: dims({ width: 44, depth: 37, height: 29.5, widthInside: 29, seatHeight: 17, seatDepth: 25.5, armWidth: null, armHeight: 19.5, exposedLegHeight: 4, volume: 45, weight: 68, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([6966, 7017, 7065, 7164, 7263, 7362, 7461, 7560, 7659, 7758, 7857, 7956, 8055, 8154, 8253, 8352]),
  leather: leather([8253, 8748, 9144, 9540], 99),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6841CS", name: "Ellipse Chaise", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 9561,
  specs: ["Three (3) Baker Comfort seat cushions", "Tight back", "Fabric with repeat not recommended"],
  dims: dims({ width: 96, depth: 31, height: 19, widthInside: 82, seatHeight: 16.5, seatDepth: null, armWidth: null, armHeight: 19, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([9768, 9873, 9975, 10182, 10389, 10596, 10803, 11010, 11217, 11424, 11631, 11838, 12045, 12252, 12459, 12666]),
  leather: leather([12459, 13494, 14322, 15150], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6842C", name: "Diamond Lounge", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8061,
  specs: ["One (1) Baker Comfort seat", "T Tight back", "P Plain stitch", "E Exposed Mahogany frame -"],
  dims: dims({ width: 47.5, depth: 33, height: 30, widthInside: 35, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([8160, 8211, 8259, 8358, 8457, 8556, 8655, 8754, 8853, 8952, 9051, 9150, 9249, 9348, 9447, 9546]),
  leather: leather([9447, 9942, 10338, 10734], 99),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6842CS", name: "Diamond Chaise", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10281,
  specs: ["Three (3) Baker Comfort seats Plain stitch Exposed Mahogany frame"],
  dims: dims({ width: 101, depth: 26, height: 20.75, widthInside: 88, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 20.75, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([10425, 10497, 10569, 10713, 10857, 11001, 11145, 11289, 11433, 11577, 11721, 11865, 12009, 12153, 12297, 12441]),
  leather: leather([12297, 13017, 13593, 14169], 144),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6844C", name: "Sling Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8220,
  specs: ["Tight seat with tight back", "Exposed Mahogany frame with brass accents"],
  dims: dims({ width: 23.75, depth: 31.25, height: 28.75, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([8265, 8289, 8310, 8355, 8400, 8445, 8490, 8535, 8580, 8625, 8670, 8715, 8760, 8805, 8850, 8895]),
  leather: leather([8850, 9075, 9255, 9435], 45),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6845C", name: "Wedge Slipper Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6120,
  specs: ["Tight seat with tight back", "Exposed Mahogany frame with brass accents"],
  dims: dims({ width: 21.5, depth: 29.25, height: 27, widthInside: null, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([6165, 6189, 6210, 6255, 6300, 6345, 6390, 6435, 6480, 6525, 6570, 6615, 6660, 6705, 6750, 6795]),
  leather: leather([6750, 6975, 7155, 7335], 45),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6846O", name: "Blade Ottoman", collection: "Thomas Pheasant", category: "ottomans", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 5547,
  specs: ["Tight back", "O Brass base", "O Plain stitch Bright Bronze"],
  dims: dims({ width: 48, depth: 48, height: 14, widthInside: null, seatHeight: 14, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([5601, 5628, 5655, 5709, 5763, 5817, 5871, 5925, 5979, 6033, 6087, 6141, 6195, 6249, 6303, 6357]),
  leather: leather([6303, 6573, 6789, 7005], 54),
  finishTiers: null,
},

{
  sku: "BA6923C", name: "Track Arm Lounge Chair", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 5217,
  specs: ["One (1) Baker Comfort cushion One (1) Backer Comfort back pillow"],
  dims: dims({ width: 34.5, depth: 38.5, height: 35.5, widthInside: 23, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 4, volume: 1, weight: null, fabricReq: 8.5, leatherReq: 145 }),
  fabric: fab([5370, 5448, 5523, 5676, 5829, 5982, 6135, 6288, 6441, 6594, 6747, 6900, 7053, 7206, 7359, 7512]),
  leather: leather([7359, 8124, 8736, 9348], 153),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923L", name: "Track Arm Loveseat", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 7107,
  specs: ["Two (2) Baker Comfort seat cushions", "Two (2) Baker Comfort back pillow Two (2) Baker Comfort Plush throws 18” (not available in leather)"],
  dims: dims({ width: 59.5, depth: 38.5, height: 35.5, widthInside: 53, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 4, volume: 1, weight: null, fabricReq: 16.5, leatherReq: 281 }),
  fabric: fab([7404, 7554, 7701, 7998, 8295, 8592, 8889, 9186, 9483, 9780, 10077, 10374, 10671, 10968, 11265, 11562]),
  leather: leather([11265, 12750, 13938, 15126], 297),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S", name: "Track Arm Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 7791,
  specs: ["Two (2) Baker Comfort cushions", "Two (2) Baker Comfort back pillows ws", "Two (2) 18” Baker Comfort Plush throw pillows (not available in leather)"],
  dims: dims({ width: 82, depth: 38.5, height: 35.5, widthInside: 69, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 4, volume: 1, weight: null, fabricReq: 18.25, leatherReq: 306 }),
  fabric: fab([8121, 8286, 8451, 8781, 9111, 9441, 9771, 10101, 10431, 10761, 11091, 11421, 11751, 12081, 12411, 12741]),
  leather: leather([12411, 14061, 15381, 16701], 330),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-101-110", name: "Track Arm 101”-110” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8097,
  specs: ["(3) Baker Comfort seat cushion", "( (3) Baker Comfort back pillow", "( (2) Baker Comfort Plush throws", "((18”) p-"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 22, leatherReq: 374 }),
  fabric: fab([8493, 8691, 8889, 9285, 9681, 10077, 10473, 10869, 11265, 11661, 12057, 12453, 12849, 13245, 13641, 14037]),
  leather: leather([13641, 15621, 17205, 18789], 396),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-111-120", name: "Track Arm 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8097,
  specs: ["(3) Baker Comfort seat cushion (3) Baker Comfort back pillow (2) Baker Comfort Plush throw pillows (18”)"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 25, leatherReq: 425 }),
  fabric: fab([8547, 8772, 8997, 9447, 9897, 10347, 10797, 11247, 11697, 12147, 12597, 13047, 13497, 13947, 14397, 14847]),
  leather: leather([14397, 16647, 18447, 20247], 450),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-60-70", name: "Track Arm 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6297,
  specs: ["(2) Baker Comfort cushions", "(2) Baker Comfort back pillows", "(2) Baker Comfort Plush throw pillows (18”)"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 15.5, leatherReq: 264 }),
  fabric: fab([6576, 6717, 6855, 7134, 7413, 7692, 7971, 8250, 8529, 8808, 9087, 9366, 9645, 9924, 10203, 10482]),
  leather: leather([10203, 11598, 12714, 13830], 279),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-71-80", name: "Track Arm 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6597,
  specs: ["(2) Baker Comfort cushions", "(2) Baker Comfort back pillows", "(2) Baker Comfort Plush throw pillows (18”)"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 16.5, leatherReq: 281 }),
  fabric: fab([6894, 7044, 7191, 7488, 7785, 8082, 8379, 8676, 8973, 9270, 9567, 9864, 10161, 10458, 10755, 11052]),
  leather: leather([10755, 12240, 13428, 14616], 297),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-81-90", name: "Track Arm 81”-90” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6897,
  specs: ["(2) Baker Comfort seat cushion", "( (2) Baker Comfort back pillow", "( (2) Baker Comfort Plush throw", "(pillows (18”) p-"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([7221, 7383, 7545, 7869, 8193, 8517, 8841, 9165, 9489, 9813, 10137, 10461, 10785, 11109, 11433, 11757]),
  leather: leather([11433, 13053, 14349, 15645], 324),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA6923S-BTI-91-100", name: "Track Arm 91”-100” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 7497,
  specs: ["(2) Baker Comfort seat cushion (2) Baker Comfort back pillow (2) Baker Comfort Plush throw pillows (18”)"],
  dims: dims({ width: null, depth: 38.5, height: 35.5, widthInside: null, seatHeight: 24, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: 4, volume: null, weight: null, fabricReq: 19.5, leatherReq: 332 }),
  fabric: fab([7848, 8025, 8199, 8550, 8901, 9252, 9603, 9954, 10305, 10656, 11007, 11358, 11709, 12060, 12411, 12762]),
  leather: leather([12411, 14166, 15570, 16974], 351),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA857-11", name: "Ottoman", collection: "Barbara Barry", category: "ottomans", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4575,
  specs: ["Attached Baker Comfort cushion top", "Exposed Maple wood", "Weltless cushion"],
  dims: dims({ width: 36, depth: 36, height: 17, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 0, exposedLegHeight: null, volume: null, weight: null, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([4662, 4707, 4749, 4836, 4923, 5010, 5097, 5184, 5271, 5358, 5445, 5532, 5619, 5706, 5793, 5880]),
  leather: leather([5793, 6228, 6576, 6924], 87),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA857-36", name: "Armless Tuxedo Section", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7902,
  specs: ["One (1) Baker Comfort cushion", "One (1) Baker Comfort back pillow", "Exposed Maple wood", "Weltless cushions and back pillow"],
  dims: dims({ width: 36, depth: 38.5, height: 31, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 0, exposedLegHeight: null, volume: null, weight: null, fabricReq: 8.25, leatherReq: 141 }),
  fabric: fab([8052, 8127, 8202, 8352, 8502, 8652, 8802, 8952, 9102, 9252, 9402, 9552, 9702, 9852, 10002, 10152]),
  leather: leather([10002, 10752, 11352, 11952], 150),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA857-38", name: "Corner Tuxedo Section", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10086,
  specs: ["One (1) Baker Comfort cushion", "M Two (2) Baker Comfort back pillows N Exposed Maple wood", "T Weltless cushions and back pillow t D E N N-"],
  dims: dims({ width: 38.5, depth: 38.5, height: 31, widthInside: 25, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: null, weight: null, fabricReq: 10, leatherReq: 170 }),
  fabric: fab([10266, 10356, 10446, 10626, 10806, 10986, 11166, 11346, 11526, 11706, 11886, 12066, 12246, 12426, 12606, 12786]),
  leather: leather([12606, 13506, 14226, 14946], 180),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BA863S", name: "Chatsworth Sofa", collection: "Stately Homes", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 13521,
  specs: ["Metal Finish(es): Bright Brass (LTD), Nickel Two (2) Baker Comfort Plush throws 24” Double welt trim only on fabric Exposed Beech wood Nail trim on leather only Not available with large nail trim"],
  dims: dims({ width: 104, depth: 36, height: 36, widthInside: null, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 32.5, exposedLegHeight: null, volume: 1, weight: null, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([13806, 13950, 14091, 14376, 14661, 14946, 15231, 15516, 15801, 16086, 16371, 16656, 16941, 17226, 17511, 17796]),
  leather: leather([17511, 18936, 20076, 21216], 285),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2324O", name: "Colette Ottoman", collection: "Barbara Barry", category: "ottomans", limited: false,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 4083,
  specs: ["Tight upholstered round pouf", "Bronze base"],
  dims: dims({ width: 20, depth: 20, height: 16, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 13, weight: 20, fabricReq: 1.25, leatherReq: 21 }),
  fabric: fab([4107, 4119, 4131, 4155, 4179, 4203, 4227, 4251, 4275, 4299, 4323, 4347, 4371, 4395, 4419, 4443]),
  leather: leather([4419, 4539, 4635, 4731], 24),
  finishTiers: null,
},

{
  sku: "BAA2800C", name: "Ensley Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3987,
  specs: ["One (1) Baker Essential loose seat cushion", "One (1) Baker Essential loose back pillow", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 34, depth: 37, height: 37, widthInside: 27, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 45, weight: 86, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([4131, 4203, 4275, 4419, 4563, 4707, 4851, 4995, 5139, 5283, 5427, 5571, 5715, 5859, 6003, 6147]),
  leather: leather([6003, 6723, 7299, 7875], 144),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800L", name: "Ensley Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5757,
  specs: ["Two (2) Baker Essential loose seat", "Tcushions c Two (2) Baker Essential loose back", "Tpillows p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 65, depth: 37, height: 37, widthInside: 57, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 77, weight: 144, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([6000, 6123, 6243, 6486, 6729, 6972, 7215, 7458, 7701, 7944, 8187, 8430, 8673, 8916, 9159, 9402]),
  leather: leather([9159, 10374, 11346, 12318], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800LL", name: "Ensley Left Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5457,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 58, depth: 37, height: 37, widthInside: 61, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 77, weight: 120, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([5700, 5823, 5943, 6186, 6429, 6672, 6915, 7158, 7401, 7644, 7887, 8130, 8373, 8616, 8859, 9102]),
  leather: leather([8859, 10074, 11046, 12018], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800LR", name: "Ensley Right Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5457,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 58, depth: 37, height: 37, widthInside: 61, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 77, weight: 120, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([5700, 5823, 5943, 6186, 6429, 6672, 6915, 7158, 7401, 7644, 7887, 8130, 8373, 8616, 8859, 9102]),
  leather: leather([8859, 10074, 11046, 12018], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800O", name: "Ensley Ottoman", collection: "Baker Essentials Upholstery", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2232,
  specs: ["t", "Tight upholstered seat", "Beech legs ck", "Value fabric included in base price", "Performance fabric available at Grade 6 price ce"],
  dims: dims({ width: 27, depth: 23, height: 19, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 7, volume: 21, weight: 34, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([2283, 2310, 2334, 2385, 2436, 2487, 2538, 2589, 2640, 2691, 2742, 2793, 2844, 2895, 2946, 2997]),
  leather: leather([2946, 3201, 3405, 3609], 51),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800S", name: "Ensley Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6711,
  specs: ["Two (2) Baker Essential loose seat", "Tcushions c Two (2) Baker Essential loose back", "Fpillows p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 90, depth: 37, height: 37, widthInside: 83, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 97, weight: 168, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([6972, 7104, 7233, 7494, 7755, 8016, 8277, 8538, 8799, 9060, 9321, 9582, 9843, 10104, 10365, 10626]),
  leather: leather([10365, 11670, 12714, 13758], 261),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800SCL", name: "Ensley Left Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7902,
  specs: ["Three (3) Baker Essential loose seat cushions Four (4) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 98, depth: 37, height: 37, widthInside: 88, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 117, weight: 196, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([8271, 8457, 8640, 9009, 9378, 9747, 10116, 10485, 10854, 11223, 11592, 11961, 12330, 12699, 13068, 13437]),
  leather: leather([13068, 14913, 16389, 17865], 369),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800SCR", name: "Ensley Right Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7902,
  specs: ["Three (3) Baker Essential loose secushions", "Four (4) Baker Essential loose bacpillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 98, depth: 37, height: 37, widthInside: 88, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 117, weight: 196, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([8271, 8457, 8640, 9009, 9378, 9747, 10116, 10485, 10854, 11223, 11592, 11961, 12330, 12699, 13068, 13437]),
  leather: leather([13068, 14913, 16389, 17865], 369),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800SL", name: "Ensley Left Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6972,
  specs: ["eat", "Three (3) Baker Essential loose seat cushions ck", "Three (3) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 90, depth: 37, height: 37, widthInside: 86.5, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 97, weight: 154, fabricReq: 20, leatherReq: 340 }),
  fabric: fab([7332, 7512, 7692, 8052, 8412, 8772, 9132, 9492, 9852, 10212, 10572, 10932, 11292, 11652, 12012, 12372]),
  leather: leather([12012, 13812, 15252, 16692], 360),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2800SR", name: "Ensley Right Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "G-BS", frameMaterial: null, basePrice: 6972,
  specs: ["Three (3) Baker Essential loose seat", "Ocushions c Three (3) Baker Essential loose", "Oback pillows p Beech legs", "M Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price"],
  dims: dims({ width: 90, depth: 37, height: 37, widthInside: 86.5, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: 7, volume: 97, weight: 154, fabricReq: 20, leatherReq: 340 }),
  fabric: fab([7332, 7512, 7692, 8052, 8412, 8772, 9132, 9492, 9852, 10212, 10572, 10932, 11292, 11652, 12012, 12372]),
  leather: leather([12012, 13812, 15252, 16692], 360),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2801C", name: "Austin Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 4368,
  specs: ["One (1) Baker Essential loose seat cushion One (1) Baker Essential loose back pillow Metal legs Value fabric included in base price Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 40, depth: 38, height: 34, widthInside: 30, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 48, weight: 113, fabricReq: 8.25, leatherReq: 140 }),
  fabric: fab([4518, 4593, 4668, 4818, 4968, 5118, 5268, 5418, 5568, 5718, 5868, 6018, 6168, 6318, 6468, 6618]),
  leather: leather([6468, 7218, 7818, 8418], 150),
  finishTiers: null,
},

{
  sku: "BAA2801L", name: "Austin Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 6087,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Metal legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 65, depth: 38, height: 34, widthInside: 55, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 77, weight: 158, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([6318, 6435, 6549, 6780, 7011, 7242, 7473, 7704, 7935, 8166, 8397, 8628, 8859, 9090, 9321, 9552]),
  leather: leather([9321, 10476, 11400, 12324], 231),
  finishTiers: null,
},

{
  sku: "BAA2801LL", name: "Austin Left Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 5712,
  specs: ["t", "Two (2) Baker Essential loose seat cushions ck", "Two (2) Baker Essential loose back pillows", "Metal legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price d Brushed Antique Bronze, Polished"],
  dims: dims({ width: 61.5, depth: 38, height: 34, widthInside: 56.5, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 77, weight: 138, fabricReq: 12.5, leatherReq: 213 }),
  fabric: fab([5937, 6051, 6162, 6387, 6612, 6837, 7062, 7287, 7512, 7737, 7962, 8187, 8412, 8637, 8862, 9087]),
  leather: leather([8862, 9987, 10887, 11787], 225),
  finishTiers: null,
},

{
  sku: "BAA2801LR", name: "Austin Right Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless SteelBS", frameMaterial: null, basePrice: 5712,
  specs: ["Two (2) Baker Essential loose seat", "Ucushions", "M Two (2) Baker Essential loose back", "Vpillows", "P Metal legs G Value fabric included in base price", "Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 61.5, depth: 38, height: 34, widthInside: 56.5, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 77, weight: 138, fabricReq: 12.5, leatherReq: 213 }),
  fabric: fab([5937, 6051, 6162, 6387, 6612, 6837, 7062, 7287, 7512, 7737, 7962, 8187, 8412, 8637, 8862, 9087]),
  leather: leather([8862, 9987, 10887, 11787], 225),
  finishTiers: null,
},

{
  sku: "BAA2801O", name: "Austin Ottoman", collection: "Baker Essentials Upholstery", category: "ottomans", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 2613,
  specs: ["Upholstered tight seat Metal legs Value fabric included in base price Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 30, depth: 24, height: 18.5, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 5, volume: 15, weight: 40, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([2667, 2694, 2721, 2775, 2829, 2883, 2937, 2991, 3045, 3099, 3153, 3207, 3261, 3315, 3369, 3423]),
  leather: leather([3369, 3639, 3855, 4071], 54),
  finishTiers: null,
},

{
  sku: "BAA2801S-85", name: "Austin 85” Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 6438,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Metal legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 85, depth: 38, height: 34, widthInside: 75, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 97, weight: 180, fabricReq: 13.75, leatherReq: 234 }),
  fabric: fab([6687, 6813, 6936, 7185, 7434, 7683, 7932, 8181, 8430, 8679, 8928, 9177, 9426, 9675, 9924, 10173]),
  leather: leather([9924, 11169, 12165, 13161], 249),
  finishTiers: null,
},

{
  sku: "BAA2801S-95", name: "Austin 95” Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 7038,
  specs: ["t", "Two (2) Baker Essential loose seat cushions ck", "Two (2) Baker Essential loose back pillows", "Metal legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price d Brushed Antique Bronze, Polished"],
  dims: dims({ width: 95, depth: 38, height: 34, widthInside: 85, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 117, weight: null, fabricReq: 13.75, leatherReq: 234 }),
  fabric: fab([7287, 7413, 7536, 7785, 8034, 8283, 8532, 8781, 9030, 9279, 9528, 9777, 10026, 10275, 10524, 10773]),
  leather: leather([10524, 11769, 12765, 13761], 249),
  finishTiers: null,
},

{
  sku: "BAA2801SCL", name: "Austin Left Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless SteelBS", frameMaterial: null, basePrice: 8166,
  specs: ["Three (3) Baker Essential loose seat", "Tcushions c Four (4) Baker Essential loose back", "Fpillows p Metal legs", "M Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price GBrushed Antique Bronze, Polished"],
  dims: dims({ width: 100, depth: 38, height: 34, widthInside: 82, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 117, weight: 238, fabricReq: 19.75, leatherReq: 336 }),
  fabric: fab([8523, 8703, 8880, 9237, 9594, 9951, 10308, 10665, 11022, 11379, 11736, 12093, 12450, 12807, 13164, 13521]),
  leather: leather([13164, 14949, 16377, 17805], 357),
  finishTiers: null,
},

{
  sku: "BAA2801SCR", name: "Austin Right Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 8166,
  specs: ["Three (3) Baker Essential loose seat cushions Four (4) Baker Essential loose back pillows Metal legs Value fabric included in base price Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 100, depth: 38, height: 34, widthInside: 82, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 117, weight: 238, fabricReq: 19.75, leatherReq: 336 }),
  fabric: fab([8523, 8703, 8880, 9237, 9594, 9951, 10308, 10665, 11022, 11379, 11736, 12093, 12450, 12807, 13164, 13521]),
  leather: leather([13164, 14949, 16377, 17805], 357),
  finishTiers: null,
},

{
  sku: "BAA2801SL", name: "Austin Left Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 6867,
  specs: ["Three (3) Baker Essential loose secushions", "Three (3) Baker Essential loose back pillows", "Metal legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price Brushed Antique Bronze, Polished"],
  dims: dims({ width: 90, depth: 38, height: 34, widthInside: 85, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 97, weight: 176, fabricReq: 17.75, leatherReq: 302 }),
  fabric: fab([7188, 7350, 7509, 7830, 8151, 8472, 8793, 9114, 9435, 9756, 10077, 10398, 10719, 11040, 11361, 11682]),
  leather: leather([11361, 12966, 14250, 15534], 321),
  finishTiers: null,
},

{
  sku: "BAA2801SR", name: "Austin Right Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: "Stainless Steel", frameMaterial: null, basePrice: 6867,
  specs: ["eat", "Three (3) Baker Essential loose seat cushions", "Three (3) Baker Essential loose back pillows", "Metal legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price d Brushed Antique Bronze, Polished"],
  dims: dims({ width: 90, depth: 38, height: 34, widthInside: 85, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 5, volume: 97, weight: 176, fabricReq: 17.75, leatherReq: 302 }),
  fabric: fab([7188, 7350, 7509, 7830, 8151, 8472, 8793, 9114, 9435, 9756, 10077, 10398, 10719, 11040, 11361, 11682]),
  leather: leather([11361, 12966, 14250, 15534], 321),
  finishTiers: null,
},

{
  sku: "BAA2802C", name: "Channing Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4362,
  specs: ["One (1) Baker Essential loose seat", "Tcushion c One (1) Baker Essential loose back", "Tpillow p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 52, depth: 40, height: 33.5, widthInside: 32, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 26, weight: 186, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([4533, 4620, 4704, 4875, 5046, 5217, 5388, 5559, 5730, 5901, 6072, 6243, 6414, 6585, 6756, 6927]),
  leather: leather([6756, 7611, 8295, 8979], 171),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802L", name: "Channing Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6117,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 75, depth: 40, height: 33.5, widthInside: 55, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 77, weight: 222, fabricReq: 14.75, leatherReq: 251 }),
  fabric: fab([6384, 6519, 6651, 6918, 7185, 7452, 7719, 7986, 8253, 8520, 8787, 9054, 9321, 9588, 9855, 10122]),
  leather: leather([9855, 11190, 12258, 13326], 267),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802LL", name: "Channing Left Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5757,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 62, depth: 40, height: 33.5, widthInside: 52, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 77, weight: 166, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([6000, 6123, 6243, 6486, 6729, 6972, 7215, 7458, 7701, 7944, 8187, 8430, 8673, 8916, 9159, 9402]),
  leather: leather([9159, 10374, 11346, 12318], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802LR", name: "Channing Right Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5757,
  specs: ["t", "Two (2) Baker Essential loose seat cushions ck", "Two (2) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 62, depth: 40, height: 33.5, widthInside: 52, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 77, weight: 166, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([6000, 6123, 6243, 6486, 6729, 6972, 7215, 7458, 7701, 7944, 8187, 8430, 8673, 8916, 9159, 9402]),
  leather: leather([9159, 10374, 11346, 12318], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802O", name: "Channing Ottoman", collection: "Baker Essentials Upholstery", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2286,
  specs: ["Upholstered tight seat", "T Beech legs c Value fabric included in base price", "T Performance fabric available at pGrade 6 price", "B V PG-"],
  dims: dims({ width: 32, depth: 24, height: 17, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 21, weight: 44, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([2355, 2391, 2424, 2493, 2562, 2631, 2700, 2769, 2838, 2907, 2976, 3045, 3114, 3183, 3252, 3321]),
  leather: leather([3252, 3597, 3873, 4149], 69),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802S", name: "Channing Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6777,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 95, depth: 40, height: 33.5, widthInside: 75, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 97, weight: 214, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([7065, 7209, 7353, 7641, 7929, 8217, 8505, 8793, 9081, 9369, 9657, 9945, 10233, 10521, 10809, 11097]),
  leather: leather([10809, 12249, 13401, 14553], 288),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802SCL", name: "Channing Left Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8247,
  specs: [],
  dims: dims({ width: 102, depth: 40, height: 33.5, widthInside: 77, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 117, weight: 274, fabricReq: 21.5, leatherReq: 366 }),
  fabric: fab([8634, 8829, 9021, 9408, 9795, 10182, 10569, 10956, 11343, 11730, 12117, 12504, 12891, 13278, 13665, 14052]),
  leather: leather([13665, 15600, 17148, 18696], 387),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802SCR", name: "Channing Right Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8247,
  specs: ["eat", "Three (3) Baker Essential loose seat cushions ck", "Four (4) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 102, depth: 40, height: 33.5, widthInside: 77, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 117, weight: 274, fabricReq: 21.5, leatherReq: 366 }),
  fabric: fab([8634, 8829, 9021, 9408, 9795, 10182, 10569, 10956, 11343, 11730, 12117, 12504, 12891, 13278, 13665, 14052]),
  leather: leather([13665, 15600, 17148, 18696], 387),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802SL", name: "Channing Left Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6891,
  specs: ["Three (3) Baker Essential loose seat", "Tcushions c Three (3) Baker Essential loose", "Tback pillows b Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 88, depth: 40, height: 33.5, widthInside: 78, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 97, weight: 206, fabricReq: 18.25, leatherReq: 310 }),
  fabric: fab([7221, 7386, 7551, 7881, 8211, 8541, 8871, 9201, 9531, 9861, 10191, 10521, 10851, 11181, 11511, 11841]),
  leather: leather([11511, 13161, 14481, 15801], 330),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2802SR", name: "Channing Right Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6891,
  specs: ["Three (3) Baker Essential loose seat cushions Three (3) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 88, depth: 40, height: 33.5, widthInside: 78, seatHeight: 19, seatDepth: 24, armWidth: null, armHeight: 24.5, exposedLegHeight: 1, volume: 97, weight: 206, fabricReq: 18.25, leatherReq: 310 }),
  fabric: fab([7221, 7386, 7551, 7881, 8211, 8541, 8871, 9201, 9531, 9861, 10191, 10521, 10851, 11181, 11511, 11841]),
  leather: leather([11511, 13161, 14481, 15801], 330),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803C", name: "Rowan Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4362,
  specs: ["One (1) Baker Essential loose seat cushion", "One (1) Baker Essential loose back pillow", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 40, depth: 41, height: 34, widthInside: 28, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 48, weight: 122, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([4533, 4620, 4704, 4875, 5046, 5217, 5388, 5559, 5730, 5901, 6072, 6243, 6414, 6585, 6756, 6927]),
  leather: leather([6756, 7611, 8295, 8979], 171),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803L", name: "Rowan Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6171,
  specs: ["at", "Two (2) Baker Essential loose seat cushions ck", "Two (2) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 70, depth: 41, height: 34, widthInside: 58, seatHeight: 118, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 77, weight: 188, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([6456, 6600, 6741, 7026, 7311, 7596, 7881, 8166, 8451, 8736, 9021, 9306, 9591, 9876, 10161, 10446]),
  leather: leather([10161, 11586, 12726, 13866], 285),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803LL", name: "Rowan Left Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5847,
  specs: ["Two (2) Baker Essential loose seat", "Tcushions c Two (2) Baker Essential loose back", "Tpillows p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 61, depth: 41, height: 34, widthInside: 55, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 77, weight: 146, fabricReq: 15.25, leatherReq: 259 }),
  fabric: fab([6123, 6261, 6399, 6675, 6951, 7227, 7503, 7779, 8055, 8331, 8607, 8883, 9159, 9435, 9711, 9987]),
  leather: leather([9711, 11091, 12195, 13299], 276),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803LR", name: "Rowan Right Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5847,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 61, depth: 41, height: 34, widthInside: 55, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 77, weight: 146, fabricReq: 15.25, leatherReq: 259 }),
  fabric: fab([6123, 6261, 6399, 6675, 6951, 7227, 7503, 7779, 8055, 8331, 8607, 8883, 9159, 9435, 9711, 9987]),
  leather: leather([9711, 11091, 12195, 13299], 276),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803O", name: "Rowan Ottoman", collection: "Baker Essentials Upholstery", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2247,
  specs: ["Upholstered tight seat", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 28, depth: 23, height: 19, widthInside: null, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 2.5, volume: 21, weight: 32, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([2301, 2328, 2355, 2409, 2463, 2517, 2571, 2625, 2679, 2733, 2787, 2841, 2895, 2949, 3003, 3057]),
  leather: leather([3003, 3273, 3489, 3705], 54),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803S", name: "Rowan Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7116,
  specs: ["Two (2) Baker Essential loose seat cushions ce", "Two (2) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 95, depth: 41, height: 34, widthInside: 83, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 97, weight: 222, fabricReq: 16.75, leatherReq: 285 }),
  fabric: fab([7419, 7572, 7722, 8025, 8328, 8631, 8934, 9237, 9540, 9843, 10146, 10449, 10752, 11055, 11358, 11661]),
  leather: leather([11358, 12873, 14085, 15297], 303),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803SCL", name: "Rowan Left Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8586,
  specs: ["Three (3) Baker Essential loose seat", "Tcushions c Four (4) Baker Essential loose back", "Fpillows p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 103, depth: 41, height: 34, widthInside: 78, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 117, weight: 276, fabricReq: 22.25, leatherReq: 378 }),
  fabric: fab([8988, 9189, 9390, 9792, 10194, 10596, 10998, 11400, 11802, 12204, 12606, 13008, 13410, 13812, 14214, 14616]),
  leather: leather([14214, 16224, 17832, 19440], 402),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803SCR", name: "Rowan Right Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8586,
  specs: ["Three (3) Baker Essential loose seat cushions Four (4) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 103, depth: 41, height: 34, widthInside: 78, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 117, weight: 276, fabricReq: 22.25, leatherReq: 378 }),
  fabric: fab([8988, 9189, 9390, 9792, 10194, 10596, 10998, 11400, 11802, 12204, 12606, 13008, 13410, 13812, 14214, 14616]),
  leather: leather([14214, 16224, 17832, 19440], 402),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803SL", name: "Rowan Left Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7302,
  specs: ["Three (3) Baker Essential loose secushions", "Three (3) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 89, depth: 41, height: 34, widthInside: 83, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 97, weight: 198, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([7671, 7857, 8040, 8409, 8778, 9147, 9516, 9885, 10254, 10623, 10992, 11361, 11730, 12099, 12468, 12837]),
  leather: leather([12468, 14313, 15789, 17265], 369),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2803SR", name: "Rowan Right Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7302,
  specs: ["eat", "Three (3) Baker Essential loose seat cushions", "Three (3) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 89, depth: 41, height: 34, widthInside: 83, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 30.5, exposedLegHeight: 2.5, volume: 97, weight: 198, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([7671, 7857, 8040, 8409, 8778, 9147, 9516, 9885, 10254, 10623, 10992, 11361, 11730, 12099, 12468, 12837]),
  leather: leather([12468, 14313, 15789, 17265], 369),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804C", name: "Landon Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4386,
  specs: ["One (1) Baker Essential loose seat", "Tcushion c One (1) Baker Essential loose back", "Tpillow p Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 38, depth: 37, height: 31, widthInside: 28, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 45, weight: 100, fabricReq: 10, leatherReq: 170 }),
  fabric: fab([4566, 4656, 4746, 4926, 5106, 5286, 5466, 5646, 5826, 6006, 6186, 6366, 6546, 6726, 6906, 7086]),
  leather: leather([6906, 7806, 8526, 9246], 180),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804L", name: "Landon Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6111,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 65, depth: 37, height: 31, widthInside: 54, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 77, weight: 156.5, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([6372, 6504, 6633, 6894, 7155, 7416, 7677, 7938, 8199, 8460, 8721, 8982, 9243, 9504, 9765, 10026]),
  leather: leather([9765, 11070, 12114, 13158], 261),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804LL", name: "Landon Left Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5721,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 58, depth: 37, height: 31, widthInside: 63, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 77, weight: 120, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([5952, 6069, 6183, 6414, 6645, 6876, 7107, 7338, 7569, 7800, 8031, 8262, 8493, 8724, 8955, 9186]),
  leather: leather([8955, 10110, 11034, 11958], 231),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804LR", name: "Landon Right Arm Loveseat", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5721,
  specs: ["t", "Two (2) Baker Essential loose seat cushions ck", "Two (2) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 58, depth: 37, height: 31, widthInside: 63, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 77, weight: 120, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([5952, 6069, 6183, 6414, 6645, 6876, 7107, 7338, 7569, 7800, 8031, 8262, 8493, 8724, 8955, 9186]),
  leather: leather([8955, 10110, 11034, 11958], 231),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804O", name: "Landon Ottoman", collection: "Baker Essentials Upholstery", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2232,
  specs: ["Upholstered tight seat", "T Beech legs c Value fabric included in base price", "T Performance fabric available at pGrade 6 price", "B V PG-"],
  dims: dims({ width: 28, depth: 23, height: 17, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 1.5, volume: 21, weight: 36, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([2283, 2310, 2334, 2385, 2436, 2487, 2538, 2589, 2640, 2691, 2742, 2793, 2844, 2895, 2946, 2997]),
  leather: leather([2946, 3201, 3405, 3609], 51),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804S-80", name: "Landon 80” Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6747,
  specs: ["Two (2) Baker Essential loose seat cushions Two (2) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 80, depth: 37, height: 31, widthInside: 70, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 97, weight: null, fabricReq: 15.25, leatherReq: 259 }),
  fabric: fab([7023, 7161, 7299, 7575, 7851, 8127, 8403, 8679, 8955, 9231, 9507, 9783, 10059, 10335, 10611, 10887]),
  leather: leather([10611, 11991, 13095, 14199], 276),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804S-90", name: "Landon 90” Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7356,
  specs: ["Two (2) Baker Essential loose seat cushions", "Two (2) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 90, depth: 37, height: 31, widthInside: 80, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 97, weight: 192, fabricReq: 15.5, leatherReq: 264 }),
  fabric: fab([7635, 7776, 7914, 8193, 8472, 8751, 9030, 9309, 9588, 9867, 10146, 10425, 10704, 10983, 11262, 11541]),
  leather: leather([11262, 12657, 13773, 14889], 279),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804SCL", name: "Landon Left Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8172,
  specs: ["t", "Three (3) Baker Essential loose seat cushions ck", "Four (4) Baker Essential loose back pillows", "Beech legs ce", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 95, depth: 37, height: 31, widthInside: 84, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 117, weight: 198, fabricReq: 20, leatherReq: 340 }),
  fabric: fab([8532, 8712, 8892, 9252, 9612, 9972, 10332, 10692, 11052, 11412, 11772, 12132, 12492, 12852, 13212, 13572]),
  leather: leather([13212, 15012, 16452, 17892], 360),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804SCR", name: "Landon Right Arm Corner Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8172,
  specs: ["Three (3) Baker Essential loose seat", "Tcushions c Four (4) Baker Essential loose back", "Tpillows b Beech legs", "B Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price G-"],
  dims: dims({ width: 95, depth: 37, height: 31, widthInside: 84, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 117, weight: 198, fabricReq: 20, leatherReq: 340 }),
  fabric: fab([8532, 8712, 8892, 9252, 9612, 9972, 10332, 10692, 11052, 11412, 11772, 12132, 12492, 12852, 13212, 13572]),
  leather: leather([13212, 15012, 16452, 17892], 360),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804SL", name: "Landon Left Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7176,
  specs: ["Three (3) Baker Essential loose seat cushions Three (3) Baker Essential loose back pillows Beech legs Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 85, depth: 37, height: 31, widthInside: 80, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 97, weight: 178, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([7500, 7662, 7824, 8148, 8472, 8796, 9120, 9444, 9768, 10092, 10416, 10740, 11064, 11388, 11712, 12036]),
  leather: leather([11712, 13332, 14628, 15924], 324),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2804SR", name: "Landon Right Arm Sofa", collection: "Baker Essentials Upholstery", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7176,
  specs: ["Three (3) Baker Essential loose secushions", "Three (3) Baker Essential loose back pillows", "Beech legs", "Value fabric included in base price", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 85, depth: 37, height: 31, widthInside: 80, seatHeight: 15.5, seatDepth: 21, armWidth: null, armHeight: 28, exposedLegHeight: 1.5, volume: 97, weight: 178, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([7500, 7662, 7824, 8148, 8472, 8796, 9120, 9444, 9768, 10092, 10416, 10740, 11064, 11388, 11712, 12036]),
  leather: leather([11712, 13332, 14628, 15924], 324),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA2805C", name: "Celeste Swivel Lounge Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3282,
  specs: ["eat", "Fully upholstered chair frame", "Tight seat and back", "Standard 180 return swivel or optional 360 swivel", "Value fabric included in base price ce", "Performance fabric available at Grade 6 price"],
  dims: dims({ width: 32, depth: 34, height: 30, widthInside: 24, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 22.5, exposedLegHeight: null, volume: 45, weight: 76, fabricReq: 5.75, leatherReq: 98 }),
  fabric: fab([3387, 3441, 3492, 3597, 3702, 3807, 3912, 4017, 4122, 4227, 4332, 4437, 4542, 4647, 4752, 4857]),
  leather: leather([4752, 5277, 5697, 6117], 105),
  finishTiers: null,
},

{
  sku: "BAA2807C", name: "Lennox Lounge Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: true,
  standardFinish: "GPolished Stainless SteelB", frameMaterial: null, basePrice: 4080,
  specs: ["Upholstered tight seat and back", "U Stainless steel frame", "S Value fabric included in base price", "V Performance fabric available at", "PGrade 6 price"],
  dims: dims({ width: 30.5, depth: 35.5, height: 32, widthInside: 28.5, seatHeight: 16, seatDepth: 22.5, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 45, weight: 58, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([4149, 4185, 4218, 4287, 4356, 4425, 4494, 4563, 4632, 4701, 4770, 4839, 4908, 4977, 5046, 5115]),
  leather: leather([5046, 5391, 5667, 5943], 69),
  finishTiers: null,
},

{
  sku: "BAA2808C", name: "Liam Lounge Chair", collection: "Baker Essentials Upholstery", category: "chairs", limited: true,
  standardFinish: "Brushed Antique Bronze", frameMaterial: null, basePrice: 4080,
  specs: ["Upholstered tight seat and back Stainless steel frame Value fabric included in base price Performance fabric available at Grade 6 price"],
  dims: dims({ width: 30.5, depth: 35.5, height: 32, widthInside: 28.5, seatHeight: 16, seatDepth: 22.5, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 45, weight: 58, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([4149, 4185, 4218, 4287, 4356, 4425, 4494, 4563, 4632, 4701, 4770, 4839, 4908, 4977, 5046, 5115]),
  leather: leather([5046, 5391, 5667, 5943], 69),
  finishTiers: null,
},

{
  sku: "BAA3500S-BTI-102", name: "Amoura 101” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12990,
  specs: ["Tight channel back", "One (1) Baker Comfort bench cushion", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Available only in specific widths due to channeling", "Arm width: 6”"],
  dims: dims({ width: 101, depth: 40, height: 36, widthInside: 90, seatHeight: 18.5, seatDepth: 24.5, armWidth: 6, armHeight: 20, exposedLegHeight: 1, volume: 98, weight: 182, fabricReq: 14.25, leatherReq: 242 }),
  fabric: fab([13248, 13377, 13506, 13764, 14022, 14280, 14538, 14796, 15054, 15312, 15570, 15828, 16086, 16344, 16602, 16860]),
  leather: leather([16602, 17892, 18924, 19956], 258),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3500S-BTI-113", name: "Amoura 112” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 14001,
  specs: ["Tight channel back", "One (1) Baker Comfort bench cushion", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Available only in specific widths due to channeling", "Arm width: 6”"],
  dims: dims({ width: 112, depth: 40, height: 36, widthInside: 101, seatHeight: 18.5, seatDepth: 24.5, armWidth: 6, armHeight: 20, exposedLegHeight: 1, volume: 98, weight: 182, fabricReq: 16.5, leatherReq: 281 }),
  fabric: fab([14298, 14448, 14595, 14892, 15189, 15486, 15783, 16080, 16377, 16674, 16971, 17268, 17565, 17862, 18159, 18456]),
  leather: leather([18159, 19644, 20832, 22020], 297),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3500S-BTI-69", name: "Amoura 68” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 10971,
  specs: ["Tight channel back", "T One (1) Baker Comfort loose bench", "Ocushion c Two (2) 18” Baker Comfort Plush", "Tknife-edge throw pillows k Available only in specific widths", "Adue to channeling d Arm width: 6”", "A-"],
  dims: dims({ width: 68, depth: 40, height: 36, widthInside: 57, seatHeight: 18.5, seatDepth: 24.5, armWidth: 6, armHeight: 20, exposedLegHeight: 1, volume: 98, weight: 182, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([11148, 11238, 11325, 11502, 11679, 11856, 12033, 12210, 12387, 12564, 12741, 12918, 13095, 13272, 13449, 13626]),
  leather: leather([13449, 14334, 15042, 15750], 177),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3500S-BTI-80", name: "Amoura 79” Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11616,
  specs: ["Tight channel back One (1) Baker Comfort bench cushion Two (2) 18” Baker Comfort Plush knife-edge throw pillows Available only in specific widths due to channeling Arm width: 6”"],
  dims: dims({ width: 79, depth: 40, height: 36, widthInside: 68, seatHeight: 18.5, seatDepth: 24.5, armWidth: 6, armHeight: 20, exposedLegHeight: 1, volume: 98, weight: 182, fabricReq: 10.75, leatherReq: 183 }),
  fabric: fab([11811, 11910, 12006, 12201, 12396, 12591, 12786, 12981, 13176, 13371, 13566, 13761, 13956, 14151, 14346, 14541]),
  leather: leather([14346, 15321, 16101, 16881], 195),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3500S", name: "Amoura Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12291,
  specs: ["Tight channel back", "One (1) Baker Comfort bench cushion", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows"],
  dims: dims({ width: 90, depth: 40, height: 36, widthInside: 78, seatHeight: 18.5, seatDepth: 24.5, armWidth: 6, armHeight: 20, exposedLegHeight: 1, volume: 98, weight: 182, fabricReq: 12.25, leatherReq: 208 }),
  fabric: fab([12513, 12624, 12735, 12957, 13179, 13401, 13623, 13845, 14067, 14289, 14511, 14733, 14955, 15177, 15399, 15621]),
  leather: leather([15399, 16509, 17397, 18285], 222),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3501C", name: "Volute Swivel Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: "Jute", frameMaterial: null, basePrice: 8571,
  specs: ["White oak veneer on serpentine outside back", "Tight back", "One (1) Baker Comfort cushion", "Standard 360” Swivel"],
  dims: dims({ width: 30.5, depth: 30.5, height: 30.5, widthInside: 25.5, seatHeight: 16, seatDepth: 23.75, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: 17, weight: 94, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([8634, 8667, 8697, 8760, 8823, 8886, 8949, 9012, 9075, 9138, 9201, 9264, 9327, 9390, 9453, 9516]),
  leather: leather([9453, 9768, 10020, 10272], 63),
  finishTiers: { tier1: 600, tier2: 1095, tier3: 1395, tier4: 1950, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3502S", name: "Opera Sofa", collection: "Baker Originals", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 15951,
  specs: ["One (1) Baker Comfort cushion", "F Tight back", "T Fully upholstered kidney sofa", "O Two (2) 18” Baker Comfort Plush kknife-edge throw pillows", "A-"],
  dims: dims({ width: 89, depth: 36, height: 30.5, widthInside: 82, seatHeight: 17, seatDepth: 23, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 58, weight: 116, fabricReq: 10.25, leatherReq: 174 }),
  fabric: fab([16137, 16230, 16323, 16509, 16695, 16881, 17067, 17253, 17439, 17625, 17811, 17997, 18183, 18369, 18555, 18741]),
  leather: leather([18555, 19485, 20229, 20973], 186),
  finishTiers: null,
},

{
  sku: "BAA3504C", name: "Province Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6336,
  specs: ["Fully upholstered skirted chair Tight seat and back One (1) 18” Baker Comfort Plush knife-edge throw pillow Arm width: 8”"],
  dims: dims({ width: 40, depth: 33.5, height: 28, widthInside: 24, seatHeight: 17, seatDepth: 23, armWidth: null, armHeight: 28, exposedLegHeight: 2, volume: 45, weight: 78, fabricReq: 7, leatherReq: null }),
  fabric: fab([6462, 6525, 6588, 6714, 6840, 6966, 7092, 7218, 7344, 7470, 7596, 7722, 7848, 7974, 8100, 8226]),
  leather: leather(null, 126),
  finishTiers: null,
},

{
  sku: "BAA3504L", name: "Province Loveseat", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8256,
  specs: ["Fully upholstered skirted loveseat", "Tight seat and back", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Arm width: 8”"],
  dims: dims({ width: 72, depth: 33.5, height: 28, widthInside: 56, seatHeight: 17, seatDepth: 23, armWidth: null, armHeight: 28, exposedLegHeight: 2, volume: 83, weight: 126, fabricReq: 9.5, leatherReq: null }),
  fabric: fab([8427, 8514, 8598, 8769, 8940, 9111, 9282, 9453, 9624, 9795, 9966, 10137, 10308, 10479, 10650, 10821]),
  leather: leather(null, 171),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-101-110", name: "Province 101”-110” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11391,
  specs: ["t", "Fully upholstered skirted sofa", "Tight seat and back", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Arm width: 8”"],
  dims: dims({ width: 101, depth: 33.5, height: 28, widthInside: 85, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 12.25, leatherReq: null }),
  fabric: fab([11613, 11724, 11835, 12057, 12279, 12501, 12723, 12945, 13167, 13389, 13611, 13833, 14055, 14277, 14499, 14721]),
  leather: leather(null, 222),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-111-120", name: "Province 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12141,
  specs: ["Fully upholstered skirted sofa", "F Tight seat and back", "T Two (2) 18” Baker Comfort Plush", "Tknife-edge throw pillows k Arm width: 8”", "A-"],
  dims: dims({ width: 111, depth: 33.5, height: 28, widthInside: 95, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 15.25, leatherReq: null }),
  fabric: fab([12417, 12555, 12693, 12969, 13245, 13521, 13797, 14073, 14349, 14625, 14901, 15177, 15453, 15729, 16005, 16281]),
  leather: leather(null, 276),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-60-70", name: "Province 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8775,
  specs: ["Fully upholstered skirted sofa Tight seat and back Two (2) 18” Baker Comfort Plush knife-edge throw pillows Arm width: 8”"],
  dims: dims({ width: 60, depth: 33.5, height: 28, widthInside: 44, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 7.75, leatherReq: null }),
  fabric: fab([8916, 8988, 9057, 9198, 9339, 9480, 9621, 9762, 9903, 10044, 10185, 10326, 10467, 10608, 10749, 10890]),
  leather: leather(null, 141),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-71-80", name: "Province 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9420,
  specs: ["Fully upholstered skirted sofa", "Tight seat and back", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Arm width: 8”"],
  dims: dims({ width: 71, depth: 33.5, height: 28, widthInside: 55, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 8.75, leatherReq: null }),
  fabric: fab([9579, 9660, 9738, 9897, 10056, 10215, 10374, 10533, 10692, 10851, 11010, 11169, 11328, 11487, 11646, 11805]),
  leather: leather(null, 159),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-81-90", name: "Province 81”-90” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10071,
  specs: ["Fully upholstered skirted sofa", "Tight seat and back", "Two (2) 18” Baker Comfort Plush knife-edge throw pillows", "Arm width: 8”"],
  dims: dims({ width: 81, depth: 33.5, height: 28, widthInside: 65, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 9.75, leatherReq: null }),
  fabric: fab([10248, 10338, 10425, 10602, 10779, 10956, 11133, 11310, 11487, 11664, 11841, 12018, 12195, 12372, 12549, 12726]),
  leather: leather(null, 177),
  finishTiers: null,
},

{
  sku: "BAA3504S-BTI-91-100", name: "Province 91”-99” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10746,
  specs: ["Fully upholstered skirted sofa", "F Tight seat and back", "T Two (2) 18” Baker Comfort Plush", "Tknife-edge throw pillows k Arm width: 8” -"],
  dims: dims({ width: 91, depth: 33.5, height: 28, widthInside: 75, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 11.25, leatherReq: null }),
  fabric: fab([10950, 11052, 11154, 11358, 11562, 11766, 11970, 12174, 12378, 12582, 12786, 12990, 13194, 13398, 13602, 13806]),
  leather: leather(null, 204),
  finishTiers: null,
},

{
  sku: "BAA3504S", name: "Province Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10596,
  specs: ["Fully upholstered skirted sofa Tight seat and back Two (2) 18” Baker Comfort Plush knife-edge throw pillows"],
  dims: dims({ width: 100, depth: 33.5, height: 28, widthInside: 84, seatHeight: 17, seatDepth: 23, armWidth: 8, armHeight: 28, exposedLegHeight: 2, volume: 98, weight: 178, fabricReq: 11.25, leatherReq: null }),
  fabric: fab([10800, 10902, 11004, 11208, 11412, 11616, 11820, 12024, 12228, 12432, 12636, 12840, 13044, 13248, 13452, 13656]),
  leather: leather(null, 204),
  finishTiers: null,
},

{
  sku: "BAA3505C", name: "Madame Occasional Chair", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 5586,
  specs: ["Fully upholstered box-pleat skirt slipper chair", "Small bronze nail trim detail standard on center back", "180 Swivel standard"],
  dims: dims({ width: 27, depth: 33.5, height: 36.5, widthInside: 27, seatHeight: 16.75, seatDepth: 21, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 53, fabricReq: 4, leatherReq: null }),
  fabric: fab([5658, 5694, 5730, 5802, 5874, 5946, 6018, 6090, 6162, 6234, 6306, 6378, 6450, 6522, 6594, 6666]),
  leather: leather(null, 72),
  finishTiers: null,
},

{
  sku: "BAA3508C", name: "Marcus Lounge Chair", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: "Bronze", frameMaterial: null, basePrice: 6156,
  specs: ["Tight seat and back", "Bronze legs", "Bronze wrap-around frame", "Arm width: 1” Blackened Bronze, Sculptural"],
  dims: dims({ width: 29.75, depth: 34, height: 33.25, widthInside: 28, seatHeight: 18.25, seatDepth: 28.25, armWidth: null, armHeight: 24.5, exposedLegHeight: 7, volume: 45, weight: 70.5, fabricReq: 3.25, leatherReq: 56 }),
  fabric: fab([6216, 6246, 6276, 6336, 6396, 6456, 6516, 6576, 6636, 6696, 6756, 6816, 6876, 6936, 6996, 7056]),
  leather: leather([6996, 7296, 7536, 7776], 60),
  finishTiers: null,
},

{
  sku: "BAA3509C", name: "Madeline Slipper Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: "-J", frameMaterial: null, basePrice: 4260,
  specs: ["Fully upholstered slipper chair", "W Tight seat and back", "T One (1) 10” x 27” Baker Comfort Plush kidney pillow", "Optional bullion application; bullion not included: Requirements 4.25 yds +$180", "Optional swivel"],
  dims: dims({ width: 28.5, depth: 35.25, height: 33.75, widthInside: null, seatHeight: 17.25, seatDepth: 29.25, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 45, weight: 70, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([4395, 4464, 4530, 4665, 4800, 4935, 5070, 5205, 5340, 5475, 5610, 5745, 5880, 6015, 6150, 6285]),
  leather: leather([6150, 6825, 7365, 7905], 135),
  finishTiers: { tier1: 0, tier2: 225, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3511B", name: "Aemilius Bench", collection: "Baker Originals", category: "ottomans", limited: false,
  standardFinish: "Jute", frameMaterial: null, basePrice: 6246,
  specs: ["White oak veneer serpentine base Tight upholstered top"],
  dims: dims({ width: 60, depth: 18, height: 18.5, widthInside: 60, seatHeight: null, seatDepth: 18, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 12, weight: 56, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([6336, 6381, 6426, 6516, 6606, 6696, 6786, 6876, 6966, 7056, 7146, 7236, 7326, 7416, 7506, 7596]),
  leather: leather([7506, 7956, 8316, 8676], 90),
  finishTiers: { tier1: 600, tier2: 1575, tier3: 2175, tier4: 2700, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3512O", name: "Aemilius Pouf", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: "Jute", frameMaterial: null, basePrice: 3204,
  specs: ["White oak veneer serpentine bas Tight upholstered top"],
  dims: dims({ width: 18, depth: 18, height: 18, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 4, weight: 19.5, fabricReq: 1.5, leatherReq: 26 }),
  fabric: fab([3231, 3246, 3258, 3285, 3312, 3339, 3366, 3393, 3420, 3447, 3474, 3501, 3528, 3555, 3582, 3609]),
  leather: leather([3582, 3717, 3825, 3933], 27),
  finishTiers: { tier1: 600, tier2: 855, tier3: 1005, tier4: 1125, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3514O", name: "Mia Hassock", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4665,
  specs: ["se", "Curved octagonal fully upholstered skirted hassock"],
  dims: dims({ width: 36.5, depth: 36.5, height: 17, widthInside: null, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 2, volume: 21, weight: 48, fabricReq: 3.5, leatherReq: null }),
  fabric: fab([4728, 4761, 4791, 4854, 4917, 4980, 5043, 5106, 5169, 5232, 5295, 5358, 5421, 5484, 5547, 5610]),
  leather: leather(null, 63),
  finishTiers: null,
},

{
  sku: "BAA3515O", name: "Mariah Hassock", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4065,
  specs: ["Curved octagonal fully upholstered", "Ohassock", "T OC M-"],
  dims: dims({ width: 36.5, depth: 36.5, height: 17, widthInside: null, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 2, volume: 21, weight: 48, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([4128, 4161, 4191, 4254, 4317, 4380, 4443, 4506, 4569, 4632, 4695, 4758, 4821, 4884, 4947, 5010]),
  leather: leather([4947, 5262, 5514, 5766], 63),
  finishTiers: null,
},

{
  sku: "BAA3800C", name: "Bubble Chair", collection: "Barbara Barry", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8061,
  specs: ["One (1) Baker Comfort cushion Tight back One (1) 16”x 20” Knife Edge Baker Comfort Plush throw pillow Maple legs"],
  dims: dims({ width: 39.25, depth: 41, height: 32.5, widthInside: 22.25, seatHeight: 17.5, seatDepth: 20.5, armWidth: null, armHeight: 28.5, exposedLegHeight: 4.5, volume: 30, weight: 72, fabricReq: 5.25, leatherReq: 89 }),
  fabric: fab([8157, 8205, 8253, 8349, 8445, 8541, 8637, 8733, 8829, 8925, 9021, 9117, 9213, 9309, 9405, 9501]),
  leather: leather([9405, 9885, 10269, 10653], 96),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805CC", name: "Oasis Sectional Corner Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8100,
  specs: ["Tight seat", "One (1) Baker Comfort back pillow", "One (1) 20” Knife Edge Baker Comfort Plush throw pillow", "Pulled tuck on seat cushion and back pillow", "Exposed walnut wood"],
  dims: dims({ width: 38.5, depth: 38.5, height: 30.5, widthInside: 27.5, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: 27.5, exposedLegHeight: 3, volume: 26, weight: 126, fabricReq: 6.25, leatherReq: 106 }),
  fabric: fab([8214, 8271, 8328, 8442, 8556, 8670, 8784, 8898, 9012, 9126, 9240, 9354, 9468, 9582, 9696, 9810]),
  leather: leather([9696, 10266, 10722, 11178], 114),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805CSL", name: "Oasis Sectional Chaise - Left Arm", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11220,
  specs: ["Tight seat w", "One (1) Baker Comfort back pillow", "One (1) 20” Knife Edge Baker Comfort Plush throw pillow", "Pulled tuck on seat cushion and back pillow", "Exposed walnut wood"],
  dims: dims({ width: 46.5, depth: 78.5, height: 31, widthInside: 36, seatHeight: 16.25, seatDepth: 60.5, armWidth: null, armHeight: 27.5, exposedLegHeight: 3, volume: 66, weight: 160, fabricReq: 8.75, leatherReq: 149 }),
  fabric: fab([11379, 11460, 11538, 11697, 11856, 12015, 12174, 12333, 12492, 12651, 12810, 12969, 13128, 13287, 13446, 13605]),
  leather: leather([13446, 14241, 14877, 15513], 159),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805CSR", name: "Oasis Sectional Chaise - Right Arm", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11220,
  specs: ["Tight seat", "T One (1) Baker Comfort back pillow", "T One (1) 20” Knife Edge Baker pComfort Plush throw pillow", "P Pulled tuck on seat cushion and bback pillow", "E Exposed walnut wood -"],
  dims: dims({ width: 46.5, depth: 78.5, height: 31, widthInside: 36, seatHeight: 16.25, seatDepth: 60.5, armWidth: null, armHeight: 27.5, exposedLegHeight: 3, volume: 66, weight: 160, fabricReq: 8.75, leatherReq: 149 }),
  fabric: fab([11379, 11460, 11538, 11697, 11856, 12015, 12174, 12333, 12492, 12651, 12810, 12969, 13128, 13287, 13446, 13605]),
  leather: leather([13446, 14241, 14877, 15513], 159),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-108", name: "Oasis Sectional 108” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12210,
  specs: ["Tight seat Three (3) Baker Comfort back pillows Pulled tuck on seat cushion and back pillows Exposed walnut wood"],
  dims: dims({ width: 108, depth: 38.5, height: 31, widthInside: 108, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 75, weight: 146, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([12399, 12495, 12588, 12777, 12966, 13155, 13344, 13533, 13722, 13911, 14100, 14289, 14478, 14667, 14856, 15045]),
  leather: leather([14856, 15801, 16557, 17313], 189),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-117", name: "Oasis Sectional 117” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13305,
  specs: ["Tight seat", "Four (4) Baker Comfort back pillows", "Exposed walnut wood", "Pulled tuck on seat cushion and back pillows"],
  dims: dims({ width: 117, depth: 38.5, height: 31, widthInside: 117, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 81, weight: 146, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([13566, 13698, 13827, 14088, 14349, 14610, 14871, 15132, 15393, 15654, 15915, 16176, 16437, 16698, 16959, 17220]),
  leather: leather([16959, 18264, 19308, 20352], 261),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-63", name: "Oasis Sectional 63” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8760,
  specs: ["Tight seat", "Two (2) Baker Comfort back pillows", "Exposed walnut wood", "Pulled tuck on seat cushion and back pillows"],
  dims: dims({ width: 63, depth: 38.5, height: 31, widthInside: 63, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 44, weight: 146, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([8895, 8964, 9030, 9165, 9300, 9435, 9570, 9705, 9840, 9975, 10110, 10245, 10380, 10515, 10650, 10785]),
  leather: leather([10650, 11325, 11865, 12405], 135),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-81", name: "Oasis Sectional 81” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9960,
  specs: ["Tight seat", "T Two (2) Baker Comfort back pillows", "T Exposed walnut wood p Pulled tuck on seat cushion and", "Eback pillows", "Pb-"],
  dims: dims({ width: 81, depth: 38.5, height: 31, widthInside: 81, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 56, weight: 146, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([10095, 10164, 10230, 10365, 10500, 10635, 10770, 10905, 11040, 11175, 11310, 11445, 11580, 11715, 11850, 11985]),
  leather: leather([11850, 12525, 13065, 13605], 135),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-90", name: "Oasis Sectional 90” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10710,
  specs: ["Tight seat Three (3) Baker Comfort back pillows Exposed walnut wood Pulled tuck on seat cushion and back pillows"],
  dims: dims({ width: 90, depth: 38.5, height: 31, widthInside: 90, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 63, weight: 146, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([10899, 10995, 11088, 11277, 11466, 11655, 11844, 12033, 12222, 12411, 12600, 12789, 12978, 13167, 13356, 13545]),
  leather: leather([13356, 14301, 15057, 15813], 189),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA-BTI-99", name: "Oasis Sectional 99” Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11310,
  specs: ["Tight seat", "Three (3) Baker Comfort back pillows", "Exposed walnut wood", "Pulled tuck on seat cushion and back pillows"],
  dims: dims({ width: 99, depth: 38.5, height: 31, widthInside: 99, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 69, weight: 146, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([11499, 11595, 11688, 11877, 12066, 12255, 12444, 12633, 12822, 13011, 13200, 13389, 13578, 13767, 13956, 14145]),
  leather: leather([13956, 14901, 15657, 16413], 189),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3805LA", name: "Oasis Sectional Armless Loveseat", collection: "Barbara Barry", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9360,
  specs: ["Tight seat", "Two (2) Baker Comfort back pillows", "Pulled tuck on seat cushion and back pillows", "Exposed walnut wood"],
  dims: dims({ width: 72, depth: 38.5, height: 31, widthInside: 72, seatHeight: 16.25, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: 3, volume: 50, weight: 146, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([9495, 9564, 9630, 9765, 9900, 10035, 10170, 10305, 10440, 10575, 10710, 10845, 10980, 11115, 11250, 11385]),
  leather: leather([11250, 11925, 12465, 13005], 135),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA3945", name: "Bristol Arm Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "B-B", frameMaterial: null, basePrice: 8286,
  specs: ["Fully upholstered seat and back", "Fwith oak legs b Bronzino ferrules"],
  dims: dims({ width: 28, depth: 27, height: 30, widthInside: 20, seatHeight: 19, seatDepth: 18, armWidth: null, armHeight: 27, exposedLegHeight: 14.75, volume: 39, weight: 32, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([8358, 8394, 8430, 8502, 8574, 8646, 8718, 8790, 8862, 8934, 9006, 9078, 9150, 9222, 9294, 9366]),
  leather: leather([9294, 9654, 9942, 10230], 72),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4001C", name: "Balustrade Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Blackened Bronze, Bronzino", frameMaterial: null, basePrice: 9246,
  specs: ["Fully upholstered tight seat and back Bronze base"],
  dims: dims({ width: 33.5, depth: 30, height: 26, widthInside: 25, seatHeight: 16, seatDepth: 23, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 41, weight: 73.5, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([9336, 9381, 9426, 9516, 9606, 9696, 9786, 9876, 9966, 10056, 10146, 10236, 10326, 10416, 10506, 10596]),
  leather: leather([10506, 10956, 11316, 11676], 90),
  finishTiers: null,
},

{
  sku: "BAA4005C", name: "Sleigh Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Blackened Bronze, Bronzino", frameMaterial: null, basePrice: 6141,
  specs: ["Fully upholstered chair with bronzbase"],
  dims: dims({ width: 24.5, depth: 30, height: 28.25, widthInside: 24.5, seatHeight: 17, seatDepth: 20.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 26, weight: 68, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6195, 6222, 6249, 6303, 6357, 6411, 6465, 6519, 6573, 6627, 6681, 6735, 6789, 6843, 6897, 6951]),
  leather: leather([6897, 7167, 7383, 7599], 54),
  finishTiers: null,
},

{
  sku: "BAA4011O", name: "Strap Ottoman", collection: "Thomas Pheasant", category: "ottomans", limited: false,
  standardFinish: "Bronzino", frameMaterial: null, basePrice: 6141,
  specs: ["nze", "Fully upholstered ottoman with bronze feet"],
  dims: dims({ width: 49.5, depth: 49.5, height: 17, widthInside: null, seatHeight: 14.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 4, volume: 27, weight: 88, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6195, 6222, 6249, 6303, 6357, 6411, 6465, 6519, 6573, 6627, 6681, 6735, 6789, 6843, 6897, 6951]),
  leather: leather([6897, 7167, 7383, 7599], 54),
  finishTiers: null,
},

{
  sku: "BAA4011S", name: "Strap Sofa", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 9966,
  specs: ["Fully upholstered sofa with bronze", "Ffeet b Tight seat and back", "U O S OBronzino"],
  dims: dims({ width: 97, depth: 37, height: 26.5, widthInside: null, seatHeight: 15, seatDepth: 21, armWidth: null, armHeight: null, exposedLegHeight: 4, volume: 135.5, weight: 142, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([10101, 10170, 10236, 10371, 10506, 10641, 10776, 10911, 11046, 11181, 11316, 11451, 11586, 11721, 11856, 11991]),
  leather: leather([11856, 12531, 13071, 13611], 135),
  finishTiers: null,
},

{
  sku: "BAA4015C", name: "Cabochon Club Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8022,
  specs: ["Fully upholstered chair with oak base Upholstered tight back One (1) Baker Comfort cushion Standard 180 return swivel Optional 360 swivel or stationary"],
  dims: dims({ width: 39, depth: 36, height: 28.5, widthInside: 21, seatHeight: 16.5, seatDepth: 24, armWidth: null, armHeight: 25.25, exposedLegHeight: 2, volume: 48, weight: 116, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([8121, 8172, 8220, 8319, 8418, 8517, 8616, 8715, 8814, 8913, 9012, 9111, 9210, 9309, 9408, 9507]),
  leather: leather([9408, 9903, 10299, 10695], 99),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4015C-v2", name: "Cabochon Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7422,
  specs: ["Fully upholstered chair with oak base", "Tight seat and back", "Standard 180 return swivel", "Optional 360 swivel or stationary"],
  dims: dims({ width: 39, depth: 36, height: 28.5, widthInside: 21, seatHeight: 16, seatDepth: 24, armWidth: null, armHeight: 25.25, exposedLegHeight: 2, volume: 48, weight: 116, fabricReq: 4.5, leatherReq: 77 }),
  fabric: fab([7503, 7545, 7584, 7665, 7746, 7827, 7908, 7989, 8070, 8151, 8232, 8313, 8394, 8475, 8556, 8637]),
  leather: leather([8556, 8961, 9285, 9609], 81),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4015S", name: "Cabochon Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9975,
  specs: ["Fully upholstered sofa with oak feet", "Upholstered tight back", "Three (3) Baker Comfort cushions y"],
  dims: dims({ width: 96, depth: 36, height: 28.5, widthInside: 80, seatHeight: 16.5, seatDepth: 24, armWidth: null, armHeight: 25.25, exposedLegHeight: 2, volume: 116.5, weight: 156, fabricReq: 15, leatherReq: 255 }),
  fabric: fab([10245, 10380, 10515, 10785, 11055, 11325, 11595, 11865, 12135, 12405, 12675, 12945, 13215, 13485, 13755, 14025]),
  leather: leather([13755, 15105, 16185, 17265], 270),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4015S-v2", name: "Cabochon Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8775,
  specs: ["Te Fully upholstered sofa with oak", "Ffeet b Tight seat and back", "U O-"],
  dims: dims({ width: 96, depth: 36, height: 28.5, widthInside: 80, seatHeight: 16, seatDepth: 24, armWidth: null, armHeight: 25.25, exposedLegHeight: 2, volume: 116.5, weight: 156, fabricReq: 7.75, leatherReq: 132 }),
  fabric: fab([8916, 8988, 9057, 9198, 9339, 9480, 9621, 9762, 9903, 10044, 10185, 10326, 10467, 10608, 10749, 10890]),
  leather: leather([10749, 11454, 12018, 12582], 141),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017C", name: "Teatro Lounge Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8340,
  specs: ["Fully upholstered chair with beveled oak base Upholstered tight back One (1) Baker Comfort cushion"],
  dims: dims({ width: 41, depth: 34, height: 27.5, widthInside: 30, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: 23, exposedLegHeight: 6, volume: 48, weight: 114, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([8448, 8502, 8556, 8664, 8772, 8880, 8988, 9096, 9204, 9312, 9420, 9528, 9636, 9744, 9852, 9960]),
  leather: leather([9852, 10392, 10824, 11256], 108),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017C-v2", name: "Teatro Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7740,
  specs: ["Fully upholstered chair with beveled oak base", "Tight seat and back"],
  dims: dims({ width: 41, depth: 34, height: 27.5, widthInside: 30, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: 23, exposedLegHeight: 6, volume: 48, weight: 114, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([7830, 7875, 7920, 8010, 8100, 8190, 8280, 8370, 8460, 8550, 8640, 8730, 8820, 8910, 9000, 9090]),
  leather: leather([9000, 9450, 9810, 10170], 90),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CA", name: "Teatro Armless Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6207,
  specs: ["Fully upholstered chair with beveled oak base", "Upholstered tight back", "One (1) Baker Comfort cushion", "Please specify chair placement (left, right, or center)"],
  dims: dims({ width: 30, depth: 34, height: 27.5, widthInside: 30, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 48, weight: 72, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([6294, 6339, 6381, 6468, 6555, 6642, 6729, 6816, 6903, 6990, 7077, 7164, 7251, 7338, 7425, 7512]),
  leather: leather([7425, 7860, 8208, 8556], 87),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CA-v2", name: "Teatro Armless Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5607,
  specs: ["T Fully upholstered chair with", "Fbeveled oak base b Tight seat and back", "U Must have an armed chair on", "Oeach side -"],
  dims: dims({ width: 30, depth: 34, height: 27.5, widthInside: 30, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 48, weight: 72, fabricReq: 4.25, leatherReq: 72 }),
  fabric: fab([5685, 5724, 5763, 5841, 5919, 5997, 6075, 6153, 6231, 6309, 6387, 6465, 6543, 6621, 6699, 6777]),
  leather: leather([6699, 7089, 7401, 7713], 78),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CC", name: "Teatro Corner Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7446,
  specs: ["Fully upholstered chair with beveled oak base Upholstered tight back One (1) Baker Comfort cushion"],
  dims: dims({ width: 34, depth: 34, height: 27.5, widthInside: 24, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([7533, 7578, 7620, 7707, 7794, 7881, 7968, 8055, 8142, 8229, 8316, 8403, 8490, 8577, 8664, 8751]),
  leather: leather([8664, 9099, 9447, 9795], 87),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CC-v2", name: "Teatro Corner Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6846,
  specs: ["Fully upholstered chair with beveled oak base", "Tight seat and back"],
  dims: dims({ width: 34, depth: 34, height: 27.5, widthInside: 24, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: null, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([6936, 6981, 7026, 7116, 7206, 7296, 7386, 7476, 7566, 7656, 7746, 7836, 7926, 8016, 8106, 8196]),
  leather: leather([8106, 8556, 8916, 9276], 90),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CL", name: "Teatro Left Arm Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7422,
  specs: ["Fully upholstered chair with beveled oak base", "Tight seat and back"],
  dims: dims({ width: 36, depth: 34, height: 27.5, widthInside: 30, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: 23.75, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 4.5, leatherReq: 77 }),
  fabric: fab([7503, 7545, 7584, 7665, 7746, 7827, 7908, 7989, 8070, 8151, 8232, 8313, 8394, 8475, 8556, 8637]),
  leather: leather([8556, 8961, 9285, 9609], 81),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CL-v2", name: "Teatro Left Arm Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8022,
  specs: ["T Fully upholstered chair with", "Fbeveled oak base b Upholstered tight back", "U One (1) Baker Comfort cushion", "O-"],
  dims: dims({ width: 36, depth: 34, height: 27.5, widthInside: 30, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: 23.75, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([8121, 8172, 8220, 8319, 8418, 8517, 8616, 8715, 8814, 8913, 9012, 9111, 9210, 9309, 9408, 9507]),
  leather: leather([9408, 9903, 10299, 10695], 99),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CR", name: "Teatro Right Arm Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8022,
  specs: ["Fully upholstered chair with beveled oak base Upholstered tight back One (1) Baker Comfort cushion"],
  dims: dims({ width: 36, depth: 34, height: 27.5, widthInside: 30, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: 23.75, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([8121, 8172, 8220, 8319, 8418, 8517, 8616, 8715, 8814, 8913, 9012, 9111, 9210, 9309, 9408, 9507]),
  leather: leather([9408, 9903, 10299, 10695], 99),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017CR-v2", name: "Teatro Right Arm Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7422,
  specs: ["Fully upholstered chair with beveled oak base", "Tight seat and back"],
  dims: dims({ width: 36, depth: 34, height: 27.5, widthInside: 30, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: 23.75, exposedLegHeight: 6, volume: 48, weight: 100, fabricReq: 4.5, leatherReq: 77 }),
  fabric: fab([7503, 7545, 7584, 7665, 7746, 7827, 7908, 7989, 8070, 8151, 8232, 8313, 8394, 8475, 8556, 8637]),
  leather: leather([8556, 8961, 9285, 9609], 81),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017S", name: "Teatro Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 15501,
  specs: ["Fully upholstered sofa with beveled oak base", "Upholstered tight back", "Three (3) Baker Comfort cushions"],
  dims: dims({ width: 101, depth: 34, height: 27.5, widthInside: 87.5, seatHeight: 18, seatDepth: 22.75, armWidth: null, armHeight: 23, exposedLegHeight: 6, volume: 135.5, weight: 234, fabricReq: 13, leatherReq: 221 }),
  fabric: fab([15735, 15852, 15969, 16203, 16437, 16671, 16905, 17139, 17373, 17607, 17841, 18075, 18309, 18543, 18777, 19011]),
  leather: leather([18777, 19947, 20883, 21819], 234),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4017S-v2", name: "Teatro Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 14301,
  specs: ["Fully upholstered sofa with", "Fbeveled oak base f Tight seat and back", "U O OK-"],
  dims: dims({ width: 101, depth: 34, height: 27.5, widthInside: 87.5, seatHeight: 15.75, seatDepth: 22.75, armWidth: null, armHeight: 23, exposedLegHeight: 6, volume: 135.5, weight: 234, fabricReq: 10.25, leatherReq: 174 }),
  fabric: fab([14487, 14580, 14673, 14859, 15045, 15231, 15417, 15603, 15789, 15975, 16161, 16347, 16533, 16719, 16905, 17091]),
  leather: leather([16905, 17835, 18579, 19323], 186),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019C", name: "Venice Club Chair - Loose Seat", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6561,
  specs: ["Fully upholstered chair with oak feet Upholstered tight back One (1) Baker Comfort cushion One (1) Baker Comfort Plush Kidney Pillow (9” x 19”)"],
  dims: dims({ width: 34.5, depth: 39, height: 28, widthInside: 22, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: 48, weight: 72, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([6678, 6738, 6795, 6912, 7029, 7146, 7263, 7380, 7497, 7614, 7731, 7848, 7965, 8082, 8199, 8316]),
  leather: leather([8199, 8784, 9252, 9720], 117),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019C-v2", name: "Venice Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5961,
  specs: ["Fully upholstered chair with oak feet", "Tight seat and back"],
  dims: dims({ width: 34.5, depth: 39, height: 28, widthInside: 22, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: 48, weight: 72, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([6060, 6111, 6159, 6258, 6357, 6456, 6555, 6654, 6753, 6852, 6951, 7050, 7149, 7248, 7347, 7446]),
  leather: leather([7347, 7842, 8238, 8634], 99),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-101-110", name: "Venice 101”-110” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9615,
  specs: ["Fully upholstered sofa with oak feet", "Tight seat and back"],
  dims: dims({ width: 101, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 12.75, leatherReq: 217 }),
  fabric: fab([9846, 9963, 10077, 10308, 10539, 10770, 11001, 11232, 11463, 11694, 11925, 12156, 12387, 12618, 12849, 13080]),
  leather: leather([12849, 14004, 14928, 15852], 231),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-101-110-v2", name: "Venice 101”-110” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10815,
  specs: ["Fully upholstered sofa with oak", "Ffeet f Tight back", "T Three (3) Baker Comfort cushions", "Three (3) Baker Comfort Plush Kidney Pillows (9” x 28”) -"],
  dims: dims({ width: 101, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 15, leatherReq: 255 }),
  fabric: fab([11085, 11220, 11355, 11625, 11895, 12165, 12435, 12705, 12975, 13245, 13515, 13785, 14055, 14325, 14595, 14865]),
  leather: leather([14595, 15945, 17025, 18105], 270),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-111-120", name: "Venice 111”-120” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10665,
  specs: ["Fully upholstered sofa with oak feet Tight seat and back"],
  dims: dims({ width: 111, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([10950, 11094, 11235, 11520, 11805, 12090, 12375, 12660, 12945, 13230, 13515, 13800, 14085, 14370, 14655, 14940]),
  leather: leather([14655, 16080, 17220, 18360], 285),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-111-120-v2", name: "Venice 111”-120” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11865,
  specs: ["Fully upholstered sofa with oak feet", "Tight back", "Four (4) Baker Comfort cushions", "Four (4) Baker Comfort Plush Kidney Pillows (9” x 28”)"],
  dims: dims({ width: 111, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 16.5, leatherReq: 281 }),
  fabric: fab([12162, 12312, 12459, 12756, 13053, 13350, 13647, 13944, 14241, 14538, 14835, 15132, 15429, 15726, 16023, 16320]),
  leather: leather([16023, 17508, 18696, 19884], 297),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-60-70", name: "Venice 60”-70” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6321,
  specs: ["Fully upholstered sofa with oak feet", "Tight seat and back"],
  dims: dims({ width: 60, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 6.75, leatherReq: 115 }),
  fabric: fab([6444, 6507, 6567, 6690, 6813, 6936, 7059, 7182, 7305, 7428, 7551, 7674, 7797, 7920, 8043, 8166]),
  leather: leather([8043, 8658, 9150, 9642], 123),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-60-70-v2", name: "Venice 60”-70” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7521,
  specs: ["Fully upholstered sofa with oak", "Ffeet f Tight back", "T Two (2) Baker Comfort cushions", "Two (2) Baker Comfort Plush Kidney Pillows (9” x 28”) -"],
  dims: dims({ width: 60, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([7683, 7764, 7845, 8007, 8169, 8331, 8493, 8655, 8817, 8979, 9141, 9303, 9465, 9627, 9789, 9951]),
  leather: leather([9789, 10599, 11247, 11895], 162),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-71-80", name: "Venice 71”-80” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6960,
  specs: ["Fully upholstered sofa with oak feet Tight seat and back"],
  dims: dims({ width: 71, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([7095, 7164, 7230, 7365, 7500, 7635, 7770, 7905, 8040, 8175, 8310, 8445, 8580, 8715, 8850, 8985]),
  leather: leather([8850, 9525, 10065, 10605], 135),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-71-80-v2", name: "Venice 71”-80” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8160,
  specs: [],
  dims: dims({ width: 71, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([8349, 8445, 8538, 8727, 8916, 9105, 9294, 9483, 9672, 9861, 10050, 10239, 10428, 10617, 10806, 10995]),
  leather: leather([10806, 11751, 12507, 13263], 189),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-81-90", name: "Venice 81”-90” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7611,
  specs: ["Fully upholstered sofa with oak feet", "Tight seat and back"],
  dims: dims({ width: 81, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 8.5, leatherReq: 145 }),
  fabric: fab([7764, 7842, 7917, 8070, 8223, 8376, 8529, 8682, 8835, 8988, 9141, 9294, 9447, 9600, 9753, 9906]),
  leather: leather([9753, 10518, 11130, 11742], 153),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-81-90-v2", name: "Venice 81”-90” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8811,
  specs: ["Fully upholstered sofa with oak", "Ffeet f Tight back", "T Three (3) Baker Comfort cushions", "Three (3) Baker Comfort Plush Kidney Pillows (9” x 28”) -"],
  dims: dims({ width: 81, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([9027, 9135, 9243, 9459, 9675, 9891, 10107, 10323, 10539, 10755, 10971, 11187, 11403, 11619, 11835, 12051]),
  leather: leather([11835, 12915, 13779, 14643], 216),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-91-100", name: "Venice 91”-100” Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8610,
  specs: ["Fully upholstered sofa with oak feet Tight seat and back"],
  dims: dims({ width: 91, depth: 39.5, height: 30, widthInside: null, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([8799, 8895, 8988, 9177, 9366, 9555, 9744, 9933, 10122, 10311, 10500, 10689, 10878, 11067, 11256, 11445]),
  leather: leather([11256, 12201, 12957, 13713], 189),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-BTI-91-100-v2", name: "Venice 91”-100” Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9810,
  specs: ["Fully upholstered sofa with oak feet", "Tight back", "Three (3) Baker Comfort cushions", "Three (3) Baker Comfort Plush Kidney Pillows (9” x 28”)"],
  dims: dims({ width: 91, depth: 39, height: 28, widthInside: null, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: null, weight: null, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([10053, 10176, 10296, 10539, 10782, 11025, 11268, 11511, 11754, 11997, 12240, 12483, 12726, 12969, 13212, 13455]),
  leather: leather([13212, 14427, 15399, 16371], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S", name: "Venice Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8280,
  specs: ["Fully upholstered sofa with oak feet", "Tight seat and back s"],
  dims: dims({ width: 99, depth: 39, height: 28, widthInside: 87, seatHeight: 14.5, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: 116.5, weight: 158, fabricReq: 10, leatherReq: 170 }),
  fabric: fab([8460, 8550, 8640, 8820, 9000, 9180, 9360, 9540, 9720, 9900, 10080, 10260, 10440, 10620, 10800, 10980]),
  leather: leather([10800, 11700, 12420, 13140], 180),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4019S-v2", name: "Venice Sofa - Loose Seat", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9480,
  specs: ["Fully upholstered sofa with oak", "Tfeet", "Q Tight back", "S Three (3) Baker Comfort cushions o Three (3) Baker Comfort Plush Kidney Pillows (9” x 28”) -"],
  dims: dims({ width: 99, depth: 39, height: 28, widthInside: 87, seatHeight: 18, seatDepth: 24, armWidth: null, armHeight: 17, exposedLegHeight: 1.5, volume: 116.5, weight: 158, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([9723, 9846, 9966, 10209, 10452, 10695, 10938, 11181, 11424, 11667, 11910, 12153, 12396, 12639, 12882, 13125]),
  leather: leather([12882, 14097, 15069, 16041], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4402C", name: "Clifton Swivel Lounge Chair Baker Luxe", collection: null, category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6822,
  specs: [],
  dims: dims({ width: 30, depth: 34, height: 30, widthInside: 22, seatHeight: 18, seatDepth: 23.5, armWidth: null, armHeight: 19.5, exposedLegHeight: 5, volume: 45, weight: 83.5, fabricReq: 4.5, leatherReq: 77 }),
  fabric: fab([6903, 6945, 6984, 7065, 7146, 7227, 7308, 7389, 7470, 7551, 7632, 7713, 7794, 7875, 7956, 8037]),
  leather: leather([7956, 8361, 8685, 9009], 81),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4404C", name: "Drew Lounge Chair Baker Luxe", collection: null, category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6006,
  specs: [],
  dims: dims({ width: 33, depth: 37, height: 31, widthInside: 23, seatHeight: 18, seatDepth: 22, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: 45, weight: 81, fabricReq: 6.25, leatherReq: 106 }),
  fabric: fab([6120, 6177, 6234, 6348, 6462, 6576, 6690, 6804, 6918, 7032, 7146, 7260, 7374, 7488, 7602, 7716]),
  leather: leather([7602, 8172, 8628, 9084], 114),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406C", name: "Parlor Club Chair Baker Luxe", collection: null, category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 5715,
  specs: [],
  dims: dims({ width: 33, depth: 36, height: 28, widthInside: 23, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: 45, weight: 94, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([5832, 5892, 5949, 6066, 6183, 6300, 6417, 6534, 6651, 6768, 6885, 7002, 7119, 7236, 7353, 7470]),
  leather: leather([7353, 7938, 8406, 8874], 117),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406L", name: "Parlor Loveseat Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8862,
  specs: [],
  dims: dims({ width: 70, depth: 38, height: 28, widthInside: 60, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: 77, weight: 160.5, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([9033, 9120, 9204, 9375, 9546, 9717, 9888, 10059, 10230, 10401, 10572, 10743, 10914, 11085, 11256, 11427]),
  leather: leather([11256, 12111, 12795, 13479], 171),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-101-110", name: "Parlor 101”-110” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11151,
  specs: [],
  dims: dims({ width: 101, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 13.25, leatherReq: 225 }),
  fabric: fab([11391, 11511, 11631, 11871, 12111, 12351, 12591, 12831, 13071, 13311, 13551, 13791, 14031, 14271, 14511, 14751]),
  leather: leather([14511, 15711, 16671, 17631], 240),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-111-120", name: "Parlor 111”-120” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11796,
  specs: [],
  dims: dims({ width: 111, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 14.25, leatherReq: 242 }),
  fabric: fab([12054, 12183, 12312, 12570, 12828, 13086, 13344, 13602, 13860, 14118, 14376, 14634, 14892, 15150, 15408, 15666]),
  leather: leather([15408, 16698, 17730, 18762], 258),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-60-70", name: "Parlor 60”-70” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8286,
  specs: [],
  dims: dims({ width: 60, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 10, leatherReq: 170 }),
  fabric: fab([8466, 8556, 8646, 8826, 9006, 9186, 9366, 9546, 9726, 9906, 10086, 10266, 10446, 10626, 10806, 10986]),
  leather: leather([10806, 11706, 12426, 13146], 180),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-71-80", name: "Parlor 71”-80” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8922,
  specs: [],
  dims: dims({ width: 71, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 10.75, leatherReq: 183 }),
  fabric: fab([9117, 9216, 9312, 9507, 9702, 9897, 10092, 10287, 10482, 10677, 10872, 11067, 11262, 11457, 11652, 11847]),
  leather: leather([11652, 12627, 13407, 14187], 195),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-81-90", name: "Parlor 81”-90” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9561,
  specs: [],
  dims: dims({ width: 81, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([9768, 9873, 9975, 10182, 10389, 10596, 10803, 11010, 11217, 11424, 11631, 11838, 12045, 12252, 12459, 12666]),
  leather: leather([12459, 13494, 14322, 15150], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S-BTI-91-100", name: "Parlor 91”-100” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10197,
  specs: [],
  dims: dims({ width: 91, depth: 38, height: 28, widthInside: null, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: null, weight: null, fabricReq: 12.25, leatherReq: 208 }),
  fabric: fab([10419, 10530, 10641, 10863, 11085, 11307, 11529, 11751, 11973, 12195, 12417, 12639, 12861, 13083, 13305, 13527]),
  leather: leather([13305, 14415, 15303, 16191], 222),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4406S", name: "Parlor Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9561,
  specs: [],
  dims: dims({ width: 98, depth: 38, height: 28, widthInside: 88, seatHeight: 16.5, seatDepth: 26, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: 97, weight: 149, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([9768, 9873, 9975, 10182, 10389, 10596, 10803, 11010, 11217, 11424, 11631, 11838, 12045, 12252, 12459, 12666]),
  leather: leather([12459, 13494, 14322, 15150], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4407C", name: "Collar Lounge Chair Baker Luxe", collection: null, category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10746,
  specs: [],
  dims: dims({ width: 34.5, depth: 33.75, height: 26, widthInside: 23, seatHeight: 15.5, seatDepth: 24, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 45, weight: 90.5, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([10836, 10881, 10926, 11016, 11106, 11196, 11286, 11376, 11466, 11556, 11646, 11736, 11826, 11916, 12006, 12096]),
  leather: leather([12006, 12456, 12816, 13176], 90),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-101-110", name: "Tribute 101”-110” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12651,
  specs: [],
  dims: dims({ width: 101, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 13.25, leatherReq: 225 }),
  fabric: fab([12891, 13011, 13131, 13371, 13611, 13851, 14091, 14331, 14571, 14811, 15051, 15291, 15531, 15771, 16011, 16251]),
  leather: leather([16011, 17211, 18171, 19131], 240),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-111-120", name: "Tribute 111”-120” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13296,
  specs: [],
  dims: dims({ width: 111, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 14.25, leatherReq: 242 }),
  fabric: fab([13554, 13683, 13812, 14070, 14328, 14586, 14844, 15102, 15360, 15618, 15876, 16134, 16392, 16650, 16908, 17166]),
  leather: leather([16908, 18198, 19230, 20262], 258),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-60-70", name: "Tribute 60”-70” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9477,
  specs: [],
  dims: dims({ width: 60, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([9654, 9744, 9831, 10008, 10185, 10362, 10539, 10716, 10893, 11070, 11247, 11424, 11601, 11778, 11955, 12132]),
  leather: leather([11955, 12840, 13548, 14256], 177),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-71-80", name: "Tribute 71”-80” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10116,
  specs: [],
  dims: dims({ width: 71, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([10305, 10401, 10494, 10683, 10872, 11061, 11250, 11439, 11628, 11817, 12006, 12195, 12384, 12573, 12762, 12951]),
  leather: leather([12762, 13707, 14463, 15219], 189),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-81-90", name: "Tribute 81”-90” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10752,
  specs: [],
  dims: dims({ width: 81, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 11.25, leatherReq: 191 }),
  fabric: fab([10956, 11058, 11160, 11364, 11568, 11772, 11976, 12180, 12384, 12588, 12792, 12996, 13200, 13404, 13608, 13812]),
  leather: leather([13608, 14628, 15444, 16260], 204),
  finishTiers: null,
},

{
  sku: "BAA4408S-BTI-91-100", name: "Tribute 91”-100” Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11676,
  specs: [],
  dims: dims({ width: 91, depth: 39, height: 30, widthInside: null, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: null, weight: null, fabricReq: 11.75, leatherReq: 200 }),
  fabric: fab([11889, 11997, 12102, 12315, 12528, 12741, 12954, 13167, 13380, 13593, 13806, 14019, 14232, 14445, 14658, 14871]),
  leather: leather([14658, 15723, 16575, 17427], 213),
  finishTiers: null,
},

{
  sku: "BAA4408S", name: "Tribute Sofa Baker Luxe", collection: null, category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10452,
  specs: [],
  dims: dims({ width: 96, depth: 39, height: 30, widthInside: 78.5, seatHeight: 18.5, seatDepth: 24, armWidth: null, armHeight: 30, exposedLegHeight: null, volume: 97, weight: 208.5, fabricReq: 11.25, leatherReq: 191 }),
  fabric: fab([10656, 10758, 10860, 11064, 11268, 11472, 11676, 11880, 12084, 12288, 12492, 12696, 12900, 13104, 13308, 13512]),
  leather: leather([13308, 14328, 15144, 15960], 204),
  finishTiers: null,
},

{
  sku: "BAA4410B-BTI-32-55", name: "Gala 32”-55” Bench Baker Luxe", collection: null, category: "ottomans", limited: false,
  standardFinish: "BNatural BronzeN", frameMaterial: null, basePrice: 5610,
  specs: [],
  dims: dims({ width: 32, depth: 21, height: 21.75, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 21.75, exposedLegHeight: 15, volume: null, weight: null, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([5670, 5700, 5730, 5790, 5850, 5910, 5970, 6030, 6090, 6150, 6210, 6270, 6330, 6390, 6450, 6510]),
  leather: leather([6450, 6750, 6990, 7230], 60),
  finishTiers: null,
},

{
  sku: "BAA4410B-BTI-56-75", name: "Gala 56”-75” Bench Baker Luxe", collection: null, category: "ottomans", limited: false,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 6240,
  specs: [],
  dims: dims({ width: 56, depth: 21, height: 21.75, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 21.75, exposedLegHeight: 15, volume: null, weight: null, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([6312, 6348, 6384, 6456, 6528, 6600, 6672, 6744, 6816, 6888, 6960, 7032, 7104, 7176, 7248, 7320]),
  leather: leather([7248, 7608, 7896, 8184], 72),
  finishTiers: null,
},

{
  sku: "BAA4410B-BTI-76-95", name: "Gala 76”-95” Bench Baker Luxe", collection: null, category: "ottomans", limited: false,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 6879,
  specs: [],
  dims: dims({ width: 76, depth: 21, height: 21.75, widthInside: null, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 21.75, exposedLegHeight: 15, volume: null, weight: null, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([6966, 7011, 7053, 7140, 7227, 7314, 7401, 7488, 7575, 7662, 7749, 7836, 7923, 8010, 8097, 8184]),
  leather: leather([8097, 8532, 8880, 9228], 87),
  finishTiers: null,
},

{
  sku: "BAA4410B", name: "Gala Bench Baker Luxe", collection: null, category: "ottomans", limited: false,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 6210,
  specs: [],
  dims: dims({ width: 62, depth: 21, height: 21.75, widthInside: 49, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 21.75, exposedLegHeight: 15, volume: 16, weight: 50.5, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([6270, 6300, 6330, 6390, 6450, 6510, 6570, 6630, 6690, 6750, 6810, 6870, 6930, 6990, 7050, 7110]),
  leather: leather([7050, 7350, 7590, 7830], 60),
  finishTiers: null,
},

{
  sku: "BAA4641", name: "Waikiki Dining Chair", collection: "Baker Resort®", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 3756,
  specs: ["Tight upholstered seat and back", "F Oak legs", "T S O OW-"],
  dims: dims({ width: 25, depth: 24, height: 30, widthInside: 21, seatHeight: 19, seatDepth: 19.5, armWidth: null, armHeight: 25, exposedLegHeight: 12, volume: 26, weight: 38.5, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([3816, 3846, 3876, 3936, 3996, 4056, 4116, 4176, 4236, 4296, 4356, 4416, 4476, 4536, 4596, 4656]),
  leather: leather([4596, 4896, 5136, 5376], 60),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4700C", name: "Elba Lounge Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: "Optional L2300 TibetanWool +", frameMaterial: null, basePrice: 18000,
  specs: ["Fully upholstered frame Tight seat and back Standard 180 return swivel Optional 360 swivel or stationary"],
  dims: dims({ width: null, depth: null, height: 32, widthInside: 34.5, seatHeight: 29.5, seatDepth: 22, armWidth: 17.5, armHeight: 23, exposedLegHeight: null, volume: 25.5, weight: null, fabricReq: 45, leatherReq: 92 }),
  fabric: fab([4, 68, 6264, 6300, 6336, 6408, 6480, 6552, 6624, 6696, 6768, 6840, 6912, 6984, 7056, 7128]),
  leather: leather([7200, 7272, 7200, 7560], 7848),
  finishTiers: { tier1: null, tier2: 6192, tier3: null, tier4: null, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4704C", name: "Morocco Lounge Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4221,
  specs: ["Fully upholstered frame", "Tight seat and back"],
  dims: dims({ width: 27, depth: 28.5, height: 30.5, widthInside: 21, seatHeight: 19.5, seatDepth: 22, armWidth: null, armHeight: 23.5, exposedLegHeight: null, volume: 26, weight: 61.5, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([4338, 4398, 4455, 4572, 4689, 4806, 4923, 5040, 5157, 5274, 5391, 5508, 5625, 5742, 5859, 5976]),
  leather: leather([5859, 6444, 6912, 7380], 117),
  finishTiers: null,
},

{
  sku: "BAA4706CA", name: "Coast Armless Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4791,
  specs: ["Tight seat", "One (1) Baker Comfort boxed back pillow", "Cast resin feet"],
  dims: dims({ width: 39, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 45, weight: 96, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([4899, 4953, 5007, 5115, 5223, 5331, 5439, 5547, 5655, 5763, 5871, 5979, 6087, 6195, 6303, 6411]),
  leather: leather([6303, 6843, 7275, 7707], 108),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706CC", name: "Coast Corner Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5442,
  specs: ["Tight seat", "T Two (2) Baker Comfort boxed back", "Opillows p Cast resin feet", "C-"],
  dims: dims({ width: 42, depth: 42, height: 33, widthInside: 22, seatHeight: 14.5, seatDepth: 22, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 45, weight: 126, fabricReq: 7, leatherReq: 119 }),
  fabric: fab([5568, 5631, 5694, 5820, 5946, 6072, 6198, 6324, 6450, 6576, 6702, 6828, 6954, 7080, 7206, 7332]),
  leather: leather([7206, 7836, 8340, 8844], 126),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706CL", name: "Coast Left Arm Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6066,
  specs: ["Tight seat One (1) Baker Comfort boxed back pillow Cast resin feet"],
  dims: dims({ width: 50.5, depth: 42, height: 33, widthInside: 38, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 45, weight: 116, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([6201, 6270, 6336, 6471, 6606, 6741, 6876, 7011, 7146, 7281, 7416, 7551, 7686, 7821, 7956, 8091]),
  leather: leather([7956, 8631, 9171, 9711], 135),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706CR", name: "Coast Right Arm Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6066,
  specs: ["Tight seat", "One (1) Baker Comfort boxed bacpillow", "Cast resin feet"],
  dims: dims({ width: 50.5, depth: 42, height: 33, widthInside: 38, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 45, weight: 116, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([6201, 6270, 6336, 6471, 6606, 6741, 6876, 7011, 7146, 7281, 7416, 7551, 7686, 7821, 7956, 8091]),
  leather: leather([7956, 8631, 9171, 9711], 135),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706O", name: "Coast Ottoman", collection: "Baker Resort®", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3162,
  specs: ["Tight seat ck", "Cast resin feet"],
  dims: dims({ width: 42, depth: 42, height: 17.5, widthInside: null, seatHeight: 14.5, seatDepth: 0, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 21, weight: 72, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([3222, 3252, 3282, 3342, 3402, 3462, 3522, 3582, 3642, 3702, 3762, 3822, 3882, 3942, 4002, 4062]),
  leather: leather([4002, 4302, 4542, 4782], 60),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-101-110", name: "Coast 101”-110” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9072,
  specs: ["Tight seat", "T Two (2) Baker Comfort boxed back", "Tpillows p Cast resin feet", "C-"],
  dims: dims({ width: 101, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 13.75, leatherReq: 234 }),
  fabric: fab([9321, 9447, 9570, 9819, 10068, 10317, 10566, 10815, 11064, 11313, 11562, 11811, 12060, 12309, 12558, 12807]),
  leather: leather([12558, 13803, 14799, 15795], 249),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-111-120", name: "Coast 111”-120” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9681,
  specs: ["Tight seat Two (2) Baker Comfort boxed back pillows Cast resin feet"],
  dims: dims({ width: 111, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 14, leatherReq: 238 }),
  fabric: fab([9933, 10059, 10185, 10437, 10689, 10941, 11193, 11445, 11697, 11949, 12201, 12453, 12705, 12957, 13209, 13461]),
  leather: leather([13209, 14469, 15477, 16485], 252),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-60-70", name: "Coast 60”-70” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6441,
  specs: ["Tight seat", "Two (2) Baker Comfort boxed bacpillows", "Cast resin feet"],
  dims: dims({ width: 60, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([6603, 6684, 6765, 6927, 7089, 7251, 7413, 7575, 7737, 7899, 8061, 8223, 8385, 8547, 8709, 8871]),
  leather: leather([8709, 9519, 10167, 10815], 162),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-71-80", name: "Coast 71”-80” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7176,
  specs: ["Tight seat ck", "Two (2) Baker Comfort boxed back pillows", "Cast resin feet"],
  dims: dims({ width: 71, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 11.75, leatherReq: 200 }),
  fabric: fab([7389, 7497, 7602, 7815, 8028, 8241, 8454, 8667, 8880, 9093, 9306, 9519, 9732, 9945, 10158, 10371]),
  leather: leather([10158, 11223, 12075, 12927], 213),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-81-90", name: "Coast 81”-90” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7782,
  specs: ["Tight seat", "T Two (2) Baker Comfort boxed back", "Tpillows p Cast resin feet", "C-"],
  dims: dims({ width: 81, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([7998, 8106, 8214, 8430, 8646, 8862, 9078, 9294, 9510, 9726, 9942, 10158, 10374, 10590, 10806, 11022]),
  leather: leather([10806, 11886, 12750, 13614], 216),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S-BTI-91-100", name: "Coast 91”-100” Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8457,
  specs: ["Tight seat Two (2) Baker Comfort boxed back pillows Cast resin feet"],
  dims: dims({ width: 91, depth: 42, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([8700, 8823, 8943, 9186, 9429, 9672, 9915, 10158, 10401, 10644, 10887, 11130, 11373, 11616, 11859, 12102]),
  leather: leather([11859, 13074, 14046, 15018], 243),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706S", name: "Coast Sofa", collection: "Baker Resort®", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8481,
  specs: ["Tight seat", "Two (2) Baker Comfort boxed bacpillows", "Cast resin feet"],
  dims: dims({ width: 112, depth: 42, height: 33, widthInside: 87, seatHeight: 14.5, seatDepth: 22, armWidth: 12, armHeight: 27, exposedLegHeight: 1, volume: 117, weight: 276, fabricReq: 14, leatherReq: 238 }),
  fabric: fab([8733, 8859, 8985, 9237, 9489, 9741, 9993, 10245, 10497, 10749, 11001, 11253, 11505, 11757, 12009, 12261]),
  leather: leather([12009, 13269, 14277, 15285], 252),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4706W", name: "Coast Angled Corner Chair", collection: "Baker Resort®", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7761,
  specs: ["Tight seat ck", "Two (2) Baker Comfort boxed back pillows", "Cast resin feet"],
  dims: dims({ width: 82, depth: 53, height: 33, widthInside: null, seatHeight: 14.5, seatDepth: 22, armWidth: null, armHeight: null, exposedLegHeight: 1, volume: 97, weight: 166, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([7968, 8073, 8175, 8382, 8589, 8796, 9003, 9210, 9417, 9624, 9831, 10038, 10245, 10452, 10659, 10866]),
  leather: leather([10659, 11694, 12522, 13350], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4900C", name: "Torre Chair", collection: "Paola Navone", category: "chairs", limited: true,
  standardFinish: "W-M", frameMaterial: null, basePrice: 7161,
  specs: ["Tight upholstered seat and back", "T Beech feet", "M Optional Acrylic feet", "1"],
  dims: dims({ width: 34, depth: 35.5, height: 38.5, widthInside: 22, seatHeight: 17, seatDepth: 22, armWidth: null, armHeight: 23, exposedLegHeight: 3, volume: 45, weight: 58, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([7260, 7311, 7359, 7458, 7557, 7656, 7755, 7854, 7953, 8052, 8151, 8250, 8349, 8448, 8547, 8646]),
  leather: leather([8547, 9042, 9438, 9834], 99),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4902C", name: "Mediterraneo Chair", collection: "Paola Navone", category: "chairs", limited: true,
  standardFinish: "Matte Black", frameMaterial: null, basePrice: 6315,
  specs: ["Tight upholstered seat and back Matte Black swivel base 180 memory return swivel Welt trim standard"],
  dims: dims({ width: 44, depth: 36.5, height: 29, widthInside: 27, seatHeight: 17, seatDepth: 23, armWidth: null, armHeight: 22.5, exposedLegHeight: 3, volume: 27, weight: 128, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([6432, 6492, 6549, 6666, 6783, 6900, 7017, 7134, 7251, 7368, 7485, 7602, 7719, 7836, 7953, 8070]),
  leather: leather([7953, 8538, 9006, 9474], 117),
  finishTiers: null,
},

{
  sku: "BAA4902L", name: "Mediterraneo Loveseat", collection: "Paola Navone", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 8271,
  specs: ["Fully upholstered tight seat and back", "Cast resin feet", "Welt trim standard"],
  dims: dims({ width: 86, depth: 41, height: 31, widthInside: 64, seatHeight: 17, seatDepth: 24.5, armWidth: null, armHeight: 23, exposedLegHeight: 1, volume: 64, weight: 154, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([8448, 8538, 8625, 8802, 8979, 9156, 9333, 9510, 9687, 9864, 10041, 10218, 10395, 10572, 10749, 10926]),
  leather: leather([10749, 11634, 12342, 13050], 177),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4902S", name: "Mediterraneo Sofa", collection: "Paola Navone", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 9555,
  specs: ["Fully upholstered tight seat and back", "Cast resin feet", "Welt trim standard"],
  dims: dims({ width: 100.5, depth: 41, height: 31, widthInside: 80, seatHeight: 17, seatDepth: 24.5, armWidth: null, armHeight: 23, exposedLegHeight: 1, volume: 77, weight: 166, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([9762, 9867, 9969, 10176, 10383, 10590, 10797, 11004, 11211, 11418, 11625, 11832, 12039, 12246, 12453, 12660]),
  leather: leather([12453, 13488, 14316, 15144], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4904C", name: "Azzurro Chair", collection: "Paola Navone", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6285,
  specs: ["Fully upholstered frame", "F One (1) seat cushion (soft sit)", "O One (1) kidney pillow s Cast resin feet", "T Decorative stitching in Black,", "CMidnight Grey, or White +$600", "DM-"],
  dims: dims({ width: 41.5, depth: 37, height: 29, widthInside: 25, seatHeight: 18, seatDepth: 19, armWidth: null, armHeight: 23, exposedLegHeight: 1, volume: 24, weight: 78, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([6393, 6447, 6501, 6609, 6717, 6825, 6933, 7041, 7149, 7257, 7365, 7473, 7581, 7689, 7797, 7905]),
  leather: leather([7797, 8337, 8769, 9201], 108),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA4904L", name: "Azzurro Loveseat", collection: "Paola Navone", category: "sofas", limited: true,
  standardFinish: "Decorative stitching in Black,Midnight Grey, or White +", frameMaterial: null, basePrice: 600,
  specs: ["Fully upholstered frame One (1) bench seat cushion (soft sit) Two (2) kidney pillows Cast resin feet"],
  dims: dims({ width: null, depth: null, height: 85, widthInside: 42, seatHeight: 29, seatDepth: 63, armWidth: 18, armHeight: 22, exposedLegHeight: null, volume: 23, weight: 1, fabricReq: 58, leatherReq: 168 }),
  fabric: fab([11.25, 191, 8850, 8952, 9054, 9258, 9462, 9666, 9870, 10074, 10278, 10482, 10686, 10890, 11094, 11298]),
  leather: leather([11502, 11706, 11502, 12522], 13338),
  finishTiers: { tier1: null, tier2: 8646, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BAA4904S", name: "Azzurro Sofa", collection: "Paola Navone", category: "sofas", limited: true,
  standardFinish: "Decorative stitching in Black,Midnight Grey, or White +", frameMaterial: null, basePrice: 600,
  specs: ["Fully upholstered frame", "One (1) bench seat cushion (soft sit)", "Two (2) kidney pillows", "Cast resin feet"],
  dims: dims({ width: null, depth: null, height: 100.5, widthInside: 42, seatHeight: 29, seatDepth: 78, armWidth: 18, armHeight: 22, exposedLegHeight: null, volume: 23, weight: 1, fabricReq: 69, leatherReq: 184 }),
  fabric: fab([13, 221, 11064, 11181, 11298, 11532, 11766, 12000, 12234, 12468, 12702, 12936, 13170, 13404, 13638, 13872]),
  leather: leather([14106, 14340, 14106, 15276], 16212),
  finishTiers: { tier1: null, tier2: 10830, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "BAA5300S", name: "Smile Sofa", collection: "Orlando Diaz-Azcuy", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9450,
  specs: ["Fully upholstered", "Three (3) Baker Comfort cushions", "Upholstered tight back", "Cast resin feet 0"],
  dims: dims({ width: 87, depth: 39, height: 28.5, widthInside: 65, seatHeight: 15.5, seatDepth: 25, armWidth: null, armHeight: 22, exposedLegHeight: 1, volume: 97, weight: 140, fabricReq: 10.25, leatherReq: 175 }),
  fabric: fab([9636, 9729, 9822, 10008, 10194, 10380, 10566, 10752, 10938, 11124, 11310, 11496, 11682, 11868, 12054, 12240]),
  leather: leather([12054, 12984, 13728, 14472], 186),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5304S", name: "Dream Sofa", collection: "Orlando Diaz-Azcuy", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9111,
  specs: ["Fully upholstered", "F One (1) Baker Comfort bench", "Ocushion", "U Upholstered tight back", "C Two (2) Baker Comfort Plush throw", "Opillows (22” x 22”)", "One (1) Baker Comfort Plush lumbar throw pillow (12” x 30”)", "Cast resin feet -"],
  dims: dims({ width: 93, depth: 37, height: 36, widthInside: 64, seatHeight: 18, seatDepth: 25, armWidth: null, armHeight: 28, exposedLegHeight: 1, volume: 116, weight: 182, fabricReq: 13.75, leatherReq: 234 }),
  fabric: fab([9360, 9486, 9609, 9858, 10107, 10356, 10605, 10854, 11103, 11352, 11601, 11850, 12099, 12348, 12597, 12846]),
  leather: leather([12597, 13842, 14838, 15834], 249),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5305C", name: "Revelation Lounge Chair", collection: "Orlando Diaz-Azcuy", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6465,
  specs: ["Fully upholstered One (1) Baker Fiberlux cushion Upholstered tight back Cast resin feet Optional swivel base"],
  dims: dims({ width: 35, depth: 34, height: 33.5, widthInside: 26, seatHeight: 19, seatDepth: 25, armWidth: null, armHeight: 24, exposedLegHeight: 1, volume: 45, weight: 126, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([6582, 6642, 6699, 6816, 6933, 7050, 7167, 7284, 7401, 7518, 7635, 7752, 7869, 7986, 8103, 8220]),
  leather: leather([8103, 8688, 9156, 9624], 117),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5500C", name: "Holden Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4821,
  specs: ["Fully upholstered with envelope detail on out-back", "Tight upholstered seat and back", "Standard 180 return swivel or optional 360 swivel"],
  dims: dims({ width: 36, depth: 37, height: 30, widthInside: 24, seatHeight: 16.5, seatDepth: 24, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 45, weight: 118, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([4938, 4998, 5055, 5172, 5289, 5406, 5523, 5640, 5757, 5874, 5991, 6108, 6225, 6342, 6459, 6576]),
  leather: leather([6459, 7044, 7512, 7980], 117),
  finishTiers: null,
},

{
  sku: "BAA5500L", name: "Holden Loveseat", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6522,
  specs: ["Fully upholstered with envelope detail on out-back", "Tight upholstered seat and back", "Two (2) Baker Comfort Plush throw pillows 18”", "Cast resin feet"],
  dims: dims({ width: 73, depth: 37, height: 30, widthInside: 61, seatHeight: 16.5, seatDepth: 24, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 77, weight: 158, fabricReq: 10.75, leatherReq: 183 }),
  fabric: fab([6717, 6816, 6912, 7107, 7302, 7497, 7692, 7887, 8082, 8277, 8472, 8667, 8862, 9057, 9252, 9447]),
  leather: leather([9252, 10227, 11007, 11787], 195),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5500S", name: "Holden Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: "-P", frameMaterial: null, basePrice: 7137,
  specs: ["Fully upholstered with envelope", "Odetail on out-back B Tight upholstered seat and back", "T Two (2) Baker Comfort Plush throw spillows 18”", "M Cast resin feet"],
  dims: dims({ width: 95, depth: 37, height: 30, widthInside: 83, seatHeight: 16.5, seatDepth: 24, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 117, weight: 188, fabricReq: 11, leatherReq: 187 }),
  fabric: fab([7335, 7434, 7533, 7731, 7929, 8127, 8325, 8523, 8721, 8919, 9117, 9315, 9513, 9711, 9909, 10107]),
  leather: leather([9909, 10899, 11691, 12483], 198),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5502C", name: "Olivia Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: "Pure Brass", frameMaterial: null, basePrice: 5457,
  specs: ["Optional Finish(es): Nickel Plated Brass Tight upholstered back and loose seat cushion Metal legs"],
  dims: dims({ width: 39, depth: 33, height: 29, widthInside: 28, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 29, exposedLegHeight: 3.5, volume: 45, weight: 88, fabricReq: 7.25, leatherReq: 123 }),
  fabric: fab([5589, 5655, 5721, 5853, 5985, 6117, 6249, 6381, 6513, 6645, 6777, 6909, 7041, 7173, 7305, 7437]),
  leather: leather([7305, 7965, 8493, 9021], 132),
  finishTiers: null,
},

{
  sku: "BAA5502S", name: "Olivia Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: "Pure Brass", frameMaterial: null, basePrice: 8922,
  specs: ["Optional Finish(es): Nickel Plated Brass", "Tight upholstered back and loose seat cushion", "Metal legs", "Two (2) bolster pillows 9” x 23”"],
  dims: dims({ width: 96, depth: 33, height: 29, widthInside: 85, seatHeight: 16.5, seatDepth: 23, armWidth: null, armHeight: 29, exposedLegHeight: 3.5, volume: 117, weight: 158, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([9138, 9246, 9354, 9570, 9786, 10002, 10218, 10434, 10650, 10866, 11082, 11298, 11514, 11730, 11946, 12162]),
  leather: leather([11946, 13026, 13890, 14754], 216),
  finishTiers: null,
},

{
  sku: "BAA5504C", name: "Marya Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: "Nickel Plated Brass", frameMaterial: null, basePrice: 6222,
  specs: ["Tight upholstered seat and back", "Brass frame e"],
  dims: dims({ width: 27, depth: 31, height: 33.5, widthInside: 25, seatHeight: 19.5, seatDepth: 22, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 22, weight: 50.5, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([6294, 6330, 6366, 6438, 6510, 6582, 6654, 6726, 6798, 6870, 6942, 7014, 7086, 7158, 7230, 7302]),
  leather: leather([7230, 7590, 7878, 8166], 72),
  finishTiers: null,
},

{
  sku: "BAA5505C", name: "Brie Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: "Pure BrassN", frameMaterial: null, basePrice: 4821,
  specs: ["Optional Finish(es): Nickel Plated", "TBrass", "B Tight upholstered seat and back", "Brass leg"],
  dims: dims({ width: 33, depth: 32, height: 29.5, widthInside: 28, seatHeight: 17, seatDepth: 23, armWidth: null, armHeight: 25, exposedLegHeight: 4, volume: 45, weight: 0, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([4938, 4998, 5055, 5172, 5289, 5406, 5523, 5640, 5757, 5874, 5991, 6108, 6225, 6342, 6459, 6576]),
  leather: leather([6459, 7044, 7512, 7980], 117),
  finishTiers: null,
},

{
  sku: "BAA5506C", name: "Amelia Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: "Nickel Plated Brass", frameMaterial: null, basePrice: 5586,
  specs: ["Tight upholstered seat and back Brass frame"],
  dims: dims({ width: 28, depth: 32, height: 32.5, widthInside: 26, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 23, weight: 75, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([5655, 5691, 5724, 5793, 5862, 5931, 6000, 6069, 6138, 6207, 6276, 6345, 6414, 6483, 6552, 6621]),
  leather: leather([6552, 6897, 7173, 7449], 69),
  finishTiers: null,
},

{
  sku: "BAA5507C", name: "Talulah Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4791,
  specs: ["Fully upholstered frame", "Tight upholstered seat and back", "Standard 180 return swivel or optional 360 swivel"],
  dims: dims({ width: 34, depth: 33, height: 30, widthInside: 25, seatHeight: 18, seatDepth: 23, armWidth: null, armHeight: 19.5, exposedLegHeight: null, volume: 45, weight: 82, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([4899, 4953, 5007, 5115, 5223, 5331, 5439, 5547, 5655, 5763, 5871, 5979, 6087, 6195, 6303, 6411]),
  leather: leather([6303, 6843, 7275, 7707], 108),
  finishTiers: null,
},

{
  sku: "BAA5508C", name: "Asher Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: "Pure Brass", frameMaterial: null, basePrice: 5601,
  specs: ["Optional Finish(es): Nickel Plated Brass", "Tight upholstered seat and back", "Brass base", "Standard 180 return swivel", "Optional 360 swivel or stationary"],
  dims: dims({ width: 39, depth: 35.5, height: 29.5, widthInside: 27, seatHeight: 17.5, seatDepth: 23, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 45, weight: 114, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([5700, 5751, 5799, 5898, 5997, 6096, 6195, 6294, 6393, 6492, 6591, 6690, 6789, 6888, 6987, 7086]),
  leather: leather([6987, 7482, 7878, 8274], 99),
  finishTiers: null,
},

{
  sku: "BAA5509C", name: "Mila Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: "BPure BrassP", frameMaterial: null, basePrice: 6168,
  specs: ["Tight upholstered seat and back", "T Brass frame"],
  dims: dims({ width: 27, depth: 31, height: 33.5, widthInside: 25, seatHeight: 19.5, seatDepth: 22, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 22, weight: 50.5, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([6240, 6276, 6312, 6384, 6456, 6528, 6600, 6672, 6744, 6816, 6888, 6960, 7032, 7104, 7176, 7248]),
  leather: leather([7176, 7536, 7824, 8112], 72),
  finishTiers: null,
},

{
  sku: "BAA5510C", name: "Lily Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: "Pure Brass", frameMaterial: null, basePrice: 6135,
  specs: ["Tight upholstered seat and back Brass frame"],
  dims: dims({ width: 28, depth: 32, height: 32.5, widthInside: 26, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 23, weight: 75, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([6204, 6240, 6273, 6342, 6411, 6480, 6549, 6618, 6687, 6756, 6825, 6894, 6963, 7032, 7101, 7170]),
  leather: leather([7101, 7446, 7722, 7998], 69),
  finishTiers: null,
},

{
  sku: "BAA5800O", name: "Teide Stool", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "Hraun", frameMaterial: null, basePrice: 3738,
  specs: ["Bronze plated stainless steel dowedesign", "Upholstered tight seat", "Oak wood accent strip", "Standard 360 swivel", "Stationary option available"],
  dims: dims({ width: 16, depth: 16, height: 20.5, widthInside: null, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14, weight: 23.5, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([3783, 3807, 3828, 3873, 3918, 3963, 4008, 4053, 4098, 4143, 4188, 4233, 4278, 4323, 4368, 4413]),
  leather: leather([4368, 4593, 4773, 4953], 45),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA5801C", name: "Lull Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4686,
  specs: ["el", "Fully upholstered", "One (1) Baker Comfort cushion with grid tufting", "One (1) Baker Comfort back pillow"],
  dims: dims({ width: 40, depth: 40, height: 37, widthInside: 30.5, seatHeight: 19.5, seatDepth: 23, armWidth: null, armHeight: 31, exposedLegHeight: null, volume: 45, weight: 122, fabricReq: 10, leatherReq: 170 }),
  fabric: fab([4866, 4956, 5046, 5226, 5406, 5586, 5766, 5946, 6126, 6306, 6486, 6666, 6846, 7026, 7206, 7386]),
  leather: leather([7206, 8106, 8826, 9546], 180),
  finishTiers: null,
},

{
  sku: "BAA5802C", name: "Vesuvia Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "oHraunH", frameMaterial: null, basePrice: 8250,
  specs: ["One (1) Baker Comfort cushion", "O Upholstered diamond tufted back", "U One (1) Baker Comfort lumbar", "Bthrow pillow 17” x 10”", "S Bronze base"],
  dims: dims({ width: 37, depth: 37.5, height: 48.5, widthInside: 30.5, seatHeight: 18, seatDepth: 0, armWidth: null, armHeight: 19, exposedLegHeight: null, volume: 45, weight: 98, fabricReq: 8.5, leatherReq: 145 }),
  fabric: fab([8403, 8481, 8556, 8709, 8862, 9015, 9168, 9321, 9474, 9627, 9780, 9933, 10086, 10239, 10392, 10545]),
  leather: leather([10392, 11157, 11769, 12381], 153),
  finishTiers: null,
},

{
  sku: "BAA5803C", name: "Hercule Swivel Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "Hraun", frameMaterial: null, basePrice: 7950,
  specs: ["One (1) Baker Comfort cushion Upholstered tight back Bronze base Standard 180 return swivel or optional 360 swivel"],
  dims: dims({ width: 32.5, depth: 33, height: 31, widthInside: 25, seatHeight: 18, seatDepth: 24.5, armWidth: null, armHeight: 20.5, exposedLegHeight: null, volume: 45, weight: 110, fabricReq: 7, leatherReq: 119 }),
  fabric: fab([8076, 8139, 8202, 8328, 8454, 8580, 8706, 8832, 8958, 9084, 9210, 9336, 9462, 9588, 9714, 9840]),
  leather: leather([9714, 10344, 10848, 11352], 126),
  finishTiers: null,
},

{
  sku: "BAA5804C", name: "Caldera Swivel Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "Ferrous", frameMaterial: null, basePrice: 9042,
  specs: ["One (1) Baker Comfort cushion", "Upholstered tight back", "One (1) Baker Comfort lumbar throw pillow 17” x 10”", "Cast bronze base", "Standard 180 return swivel or optional 360 swivel"],
  dims: dims({ width: 30, depth: 38.5, height: 44, widthInside: 25, seatHeight: 19, seatDepth: 0, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 45, weight: 158, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([9177, 9246, 9312, 9447, 9582, 9717, 9852, 9987, 10122, 10257, 10392, 10527, 10662, 10797, 10932, 11067]),
  leather: leather([10932, 11607, 12147, 12687], 135),
  finishTiers: null,
},

{
  sku: "BAA5805C", name: "Buoyant Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "Magma with Hraun", frameMaterial: null, basePrice: 7611,
  specs: ["One (1) Baker Comfort cushion", "One (1) Baker Comfort back pillow", "Bronze base"],
  dims: dims({ width: 34, depth: 36.5, height: 32.5, widthInside: 27, seatHeight: 18, seatDepth: 21, armWidth: null, armHeight: 22.5, exposedLegHeight: null, volume: 48, weight: 104, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([7755, 7827, 7899, 8043, 8187, 8331, 8475, 8619, 8763, 8907, 9051, 9195, 9339, 9483, 9627, 9771]),
  leather: leather([9627, 10347, 10923, 11499], 144),
  finishTiers: null,
},

{
  sku: "BAA5810C", name: "Fira Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "UAnnealT", frameMaterial: null, basePrice: 8202,
  specs: ["Cast bronze frame", "C Upholstered tight seat and back"],
  dims: dims({ width: 29, depth: 27.5, height: 31.5, widthInside: null, seatHeight: 18, seatDepth: 23.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 62, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([8247, 8271, 8292, 8337, 8382, 8427, 8472, 8517, 8562, 8607, 8652, 8697, 8742, 8787, 8832, 8877]),
  leather: leather([8832, 9057, 9237, 9417], 45),
  finishTiers: null,
},

{
  sku: "BAA5811C", name: "Pollara Lounge Chair", collection: "Susan Ferrier", category: "chairs", limited: false,
  standardFinish: "Temper", frameMaterial: null, basePrice: 8202,
  specs: ["Cast bronze frame Upholstered tight seat and back"],
  dims: dims({ width: 29, depth: 27.5, height: 31.5, widthInside: null, seatHeight: 18, seatDepth: 23.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 62, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([8247, 8271, 8292, 8337, 8382, 8427, 8472, 8517, 8562, 8607, 8652, 8697, 8742, 8787, 8832, 8877]),
  leather: leather([8832, 9057, 9237, 9417], 45),
  finishTiers: null,
},

{
  sku: "BAA5812B", name: "Catania End of Bed Bench", collection: "Susan Ferrier", category: "beds", limited: false,
  standardFinish: "Anneal", frameMaterial: null, basePrice: 8931,
  specs: ["Cast bronze frame", "Upholstered tight seat"],
  dims: dims({ width: 64, depth: 18, height: 18.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 13.5, volume: 77, weight: 73, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([8973, 8994, 9015, 9057, 9099, 9141, 9183, 9225, 9267, 9309, 9351, 9393, 9435, 9477, 9519, 9561]),
  leather: leather([9519, 9729, 9897, 10065], 42),
  finishTiers: null,
},

{
  sku: "BAA5813B", name: "Stabiae End of Bed Bench", collection: "Susan Ferrier", category: "beds", limited: false,
  standardFinish: "Temper", frameMaterial: null, basePrice: 8931,
  specs: ["Cast bronze frame", "Upholstered tight seat"],
  dims: dims({ width: 64, depth: 18, height: 18.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 13.5, volume: 77, weight: 73, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([8973, 8994, 9015, 9057, 9099, 9141, 9183, 9225, 9267, 9309, 9351, 9393, 9435, 9477, 9519, 9561]),
  leather: leather([9519, 9729, 9897, 10065], 42),
  finishTiers: null,
},

{
  sku: "BAA5814B", name: "Copilco Bunching Bench", collection: "Susan Ferrier", category: "ottomans", limited: false,
  standardFinish: "UAnnealT", frameMaterial: null, basePrice: 6396,
  specs: ["Cast bronze frame", "C Upholstered tight seat"],
  dims: dims({ width: 29, depth: 18, height: 18.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 13.5, volume: 14, weight: 48.5, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([6438, 6459, 6480, 6522, 6564, 6606, 6648, 6690, 6732, 6774, 6816, 6858, 6900, 6942, 6984, 7026]),
  leather: leather([6984, 7194, 7362, 7530], 42),
  finishTiers: null,
},

{
  sku: "BAA5815B", name: "Oplontis Bunching Bench", collection: "Susan Ferrier", category: "ottomans", limited: false,
  standardFinish: "Temper", frameMaterial: null, basePrice: 6396,
  specs: ["Cast bronze frame Upholstered tight seat"],
  dims: dims({ width: 29, depth: 18, height: 18.5, widthInside: null, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 13.5, volume: 14, weight: 48.5, fabricReq: 2.25, leatherReq: 38 }),
  fabric: fab([6438, 6459, 6480, 6522, 6564, 6606, 6648, 6690, 6732, 6774, 6816, 6858, 6900, 6942, 6984, 7026]),
  leather: leather([6984, 7194, 7362, 7530], 42),
  finishTiers: null,
},

{
  sku: "BAA6400C", name: "Barbara Barry - Loose Back Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5118,
  specs: ["- Loose Back ChaBaker-McGuire Reserve", "Tight back", "One (1) Baker Crown Support cushion", "One (1) Baker Comfort back pillow (20” x 25”)", "One (1) Baker Comfort boxed bacpillow (16” x 21”)", "Beech legs"],
  dims: dims({ width: 37, depth: 39.5, height: 36.5, widthInside: 26, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 48, weight: 88, fabricReq: 11.5, leatherReq: 196 }),
  fabric: fab([5325, 5430, 5532, 5739, 5946, 6153, 6360, 6567, 6774, 6981, 7188, 7395, 7602, 7809, 8016, 8223]),
  leather: leather([8016, 9051, 9879, 10707], 207),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S", name: "Barbara Barry - Loose Back Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9402,
  specs: ["- Loose Back Sofa Baker-McGuire Reserve", "Three (3) Baker Crown Support cushions", "Three (3) Baker Comfort back w pillows (20” x 25”)", "Three (3) Baker Comfort boxed ck back pillows (16” x 21”)", "Beech legs"],
  dims: dims({ width: 86, depth: 39.5, height: 35.5, widthInside: 75, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 97, weight: 174, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([9771, 9957, 10140, 10509, 10878, 11247, 11616, 11985, 12354, 12723, 13092, 13461, 13830, 14199, 14568, 14937]),
  leather: leather([14568, 16413, 17889, 19365], 369),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-101-110", name: "Barbara Barry - Loose Back 101”- 110” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11568,
  specs: ["- Loose Back 101”- 110” Sofa Baker-McGuire Reserve Ba Three (3) Baker Crown Support", "Fcushions c Three (3) Baker Comfort back", "Fpillows (20” x 25”) p Three (3) Baker Comfort boxed", "Fback pillows (16” x 21”) p Beech legs", "B-"],
  dims: dims({ width: 101, depth: 0, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 25.5, leatherReq: 434 }),
  fabric: fab([12027, 12258, 12486, 12945, 13404, 13863, 14322, 14781, 15240, 15699, 16158, 16617, 17076, 17535, 17994, 18453]),
  leather: leather([17994, 20289, 22125, 23961], 459),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-111-120", name: "Barbara Barry - Loose Back 111”- 120” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12309,
  specs: ["Four (4) Baker Crown Support cushions Four (4) Baker Comfort back pillows (20” x 25’) Four (4) Baker Comfort boxed back pillows (16” x 21”) Beech legs"],
  dims: dims({ width: 111, depth: 39.5, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 27, leatherReq: 459 }),
  fabric: fab([12795, 13038, 13281, 13767, 14253, 14739, 15225, 15711, 16197, 16683, 17169, 17655, 18141, 18627, 19113, 19599]),
  leather: leather([19113, 21543, 23487, 25431], 486),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-60-70", name: "Barbara Barry - Loose Back 60”- 70” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8790,
  specs: ["- Loose Back 6070” Sofa Baker-McGuire Reserve", "Two (2) Baker Crown Support cushions", "Two (2) Baker Comfort back pillow(20’ x 25”)", "Two (2) Baker Comfort boxed bacpillows (16” x 21”)", "Beech legs"],
  dims: dims({ width: 60, depth: 39.5, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 17.5, leatherReq: 298 }),
  fabric: fab([9105, 9264, 9420, 9735, 10050, 10365, 10680, 10995, 11310, 11625, 11940, 12255, 12570, 12885, 13200, 13515]),
  leather: leather([13200, 14775, 16035, 17295], 315),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-71-80", name: "Barbara Barry - Loose Back 71”- 80” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9351,
  specs: ["- Loose Back 71”- 80” Sofa Baker-McGuire Reserve", "Two (2) Baker Crown Support cushions ws", "Two (2) Baker Comfort back pillows (20” x 25”) ck", "Two (2) Baker Comfort boxed back pillows (16” x 21”)", "Beech legs"],
  dims: dims({ width: 71, depth: 39.5, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 18.5, leatherReq: 315 }),
  fabric: fab([9684, 9852, 10017, 10350, 10683, 11016, 11349, 11682, 12015, 12348, 12681, 13014, 13347, 13680, 14013, 14346]),
  leather: leather([14013, 15678, 17010, 18342], 333),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-81-90", name: "Barbara Barry - Loose Back 81”- 90” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10119,
  specs: ["- Loose Back 81”- 90” Sofa Baker-McGuire Reserve B Two (2) Baker Crown Support", "Tcushions c Two (2) Baker Comfort back pillows", "T(20” x 25”) p Two (2) Baker Comfort boxed back", "Tpillows (16” x 21”) b Beech legs", "B Cushion and pillow counts increase to 3 at 86” -"],
  dims: dims({ width: 81, depth: 39.5, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 23, leatherReq: 391 }),
  fabric: fab([10533, 10740, 10947, 11361, 11775, 12189, 12603, 13017, 13431, 13845, 14259, 14673, 15087, 15501, 15915, 16329]),
  leather: leather([15915, 17985, 19641, 21297], 414),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6400S-BTI-91-100", name: "Barbara Barry - Loose Back 91”- 100” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10665,
  specs: ["- Loose Back 91”- 100” Sofa Baker-McGuire Reserve Three (3) Baker Crown Support cushions Three (3) Baker Comfort back pillows (20” x 25”) Three (3) Baker Comfort boxed back pillows (16” x 21”) Beech legs"],
  dims: dims({ width: 91, depth: 39.5, height: 35.5, widthInside: 0, seatHeight: 17.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 4, volume: 0, weight: 0, fabricReq: 24, leatherReq: 408 }),
  fabric: fab([11097, 11313, 11529, 11961, 12393, 12825, 13257, 13689, 14121, 14553, 14985, 15417, 15849, 16281, 16713, 17145]),
  leather: leather([16713, 18873, 20601, 22329], 432),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401C", name: "Laura Kirar - Medida Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5331,
  specs: ["- Medida Chair Baker-McGuire Reserve", "One (1) Baker Comfort back pillow", "One (1) Baker Comfort cushion", "Beech legs"],
  dims: dims({ width: 35, depth: 37.5, height: 39.5, widthInside: 21.5, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 45, weight: 92, fabricReq: 9.5, leatherReq: 162 }),
  fabric: fab([5502, 5589, 5673, 5844, 6015, 6186, 6357, 6528, 6699, 6870, 7041, 7212, 7383, 7554, 7725, 7896]),
  leather: leather([7725, 8580, 9264, 9948], 171),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S", name: "Laura Kirar - Medida Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9225,
  specs: ["- Medida Sofa Baker-McGuire Reserve w", "Three (3) Baker Comfort back pillows", "One (1) Baker Comfort cushion", "Two (2) Baker Comfort Plush throw pillows (20” x 20”)", "Beech legs"],
  dims: dims({ width: 98, depth: 37.5, height: 38.5, widthInside: 83, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 116, weight: 185, fabricReq: 17.5, leatherReq: 298 }),
  fabric: fab([9540, 9699, 9855, 10170, 10485, 10800, 11115, 11430, 11745, 12060, 12375, 12690, 13005, 13320, 13635, 13950]),
  leather: leather([13635, 15210, 16470, 17730], 315),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-101-110", name: "Laura Kirar - Medida 101”-110” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10149,
  specs: ["- Medida 101”-110” Sofa Baker-McGuire Reserve L Three (3) Baker Comfort back", "Tpillows p Three (3) Baker Comfort cushions", "T Two (2) Baker Comfort Plush throw", "Tpillows (20” x 20”) p Beech legs", "B-"],
  dims: dims({ width: 101, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 25, leatherReq: 425 }),
  fabric: fab([10599, 10824, 11049, 11499, 11949, 12399, 12849, 13299, 13749, 14199, 14649, 15099, 15549, 15999, 16449, 16899]),
  leather: leather([16449, 18699, 20499, 22299], 450),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-111-120", name: "Laura Kirar - Medida 111”-120” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10350,
  specs: ["- Medida 111”-120” Sofa Baker-McGuire Reserve Three (3) Baker Comfort back pillows Three (3) Baker Comfort cushions Two (2) Baker Comfort Plush throw pillows (20” x 20”) Beech legs"],
  dims: dims({ width: 111, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 28, leatherReq: 476 }),
  fabric: fab([10854, 11106, 11358, 11862, 12366, 12870, 13374, 13878, 14382, 14886, 15390, 15894, 16398, 16902, 17406, 17910]),
  leather: leather([17406, 19926, 21942, 23958], 504),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-60-70", name: "Laura Kirar - Medida 60”-70” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7674,
  specs: ["- Medida 60”-70” Sofa Baker-McGuire Reserve", "Two (2) Baker Comfort back pillow One (1) Baker Comfort bench cushion", "Two (2) Baker Comfort Plush thropillows (20” x 20”)", "Beech legs"],
  dims: dims({ width: 60, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 15, leatherReq: 255 }),
  fabric: fab([7944, 8079, 8214, 8484, 8754, 9024, 9294, 9564, 9834, 10104, 10374, 10644, 10914, 11184, 11454, 11724]),
  leather: leather([11454, 12804, 13884, 14964], 270),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-71-80", name: "Laura Kirar - Medida 71”-80” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8133,
  specs: ["- Medida 71”-80” Sofa Baker-McGuire Reserve ws", "Two (2) Baker Comfort back pillows", "One (1) Baker Comfort bench cushion ow", "Two (2) Baker Comfort Plush throw pillows (20” x 20”)", "Beech legs"],
  dims: dims({ width: 71, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([8421, 8565, 8709, 8997, 9285, 9573, 9861, 10149, 10437, 10725, 11013, 11301, 11589, 11877, 12165, 12453]),
  leather: leather([12165, 13605, 14757, 15909], 288),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-81-90", name: "Laura Kirar - Medida 81”-90” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8616,
  specs: ["- Medida 81”-90” Sofa Baker-McGuire Reserve L Two (2) Baker Comfort back pillows", "T One (1) Baker Comfort bench pcushion", "O Two (2) Baker Comfort Plush throw cpillows (20” x 20”)", "T Beech legs p Back pillows increase to 3 at 88”", "B B-"],
  dims: dims({ width: 81, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([8922, 9075, 9228, 9534, 9840, 10146, 10452, 10758, 11064, 11370, 11676, 11982, 12288, 12594, 12900, 13206]),
  leather: leather([12900, 14430, 15654, 16878], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6401S-BTI-91-100", name: "Laura Kirar - Medida 91”-100” Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9225,
  specs: ["- Medida 91”-100” Sofa Baker-McGuire Reserve Three (3) Baker Comfort back pillows One (1) Baker Comfort bench cushion Two (2) Baker Comfort Plush throw pillows (20” x 20”) Beech legs Back pillows increase to 4 at 97”"],
  dims: dims({ width: 91, depth: 37.5, height: 38.5, widthInside: 0, seatHeight: 20, seatDepth: 0, armWidth: null, armHeight: 31, exposedLegHeight: 5, volume: 0, weight: 0, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([9549, 9711, 9873, 10197, 10521, 10845, 11169, 11493, 11817, 12141, 12465, 12789, 13113, 13437, 13761, 14085]),
  leather: leather([13761, 15381, 16677, 17973], 324),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6402S", name: "Laura Kirar - Neue Sofa", collection: "Baker-McGuire Reserve", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11733,
  specs: ["- Neue Sofa Baker-McGuire Reserve", "Three (3) Baker Comfort back pillows", "One (1) Baker Comfort cushion", "Exposed Beech wood"],
  dims: dims({ width: 94, depth: 39, height: 35, widthInside: 84, seatHeight: 16.5, seatDepth: 0, armWidth: null, armHeight: 23, exposedLegHeight: 6, volume: 116, weight: 182, fabricReq: 17, leatherReq: 289 }),
  fabric: fab([12039, 12192, 12345, 12651, 12957, 13263, 13569, 13875, 14181, 14487, 14793, 15099, 15405, 15711, 16017, 16323]),
  leather: leather([16017, 17547, 18771, 19995], 306),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6403C", name: "Laura Kirar - Cradle Wing Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6198,
  specs: ["- Cradle Wing Chair Baker-McGuire Reserve", "Tight back", "One (1) Baker Comfort Plush cushion", "One (1) Baker Comfort Plush lumbar throw pillow (11” x 20”)", "Exposed Beech wood"],
  dims: dims({ width: 29, depth: 35, height: 48, widthInside: 23, seatHeight: 19, seatDepth: 23.5, armWidth: null, armHeight: 24, exposedLegHeight: 12, volume: 45, weight: 84, fabricReq: 10.25, leatherReq: 175 }),
  fabric: fab([6384, 6477, 6570, 6756, 6942, 7128, 7314, 7500, 7686, 7872, 8058, 8244, 8430, 8616, 8802, 8988]),
  leather: leather([8802, 9732, 10476, 11220], 186),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6404C", name: "Sorbonne Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6084,
  specs: ["Tight back", "F Tight seat", "H One (1) Baker Comfort Plush", "Llumbar throw pillow knife edge lwith welt (10” x 20”) a Beech legs", "Cp-"],
  dims: dims({ width: 32, depth: 32.5, height: 40.5, widthInside: null, seatHeight: 16.5, seatDepth: 23.5, armWidth: null, armHeight: null, exposedLegHeight: 5, volume: 45, weight: 54, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([6192, 6246, 6300, 6408, 6516, 6624, 6732, 6840, 6948, 7056, 7164, 7272, 7380, 7488, 7596, 7704]),
  leather: leather([7596, 8136, 8568, 9000], 108),
  finishTiers: { tier1: 0, tier2: 255, tier3: null, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6405C", name: "Auguste Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 3900,
  specs: ["Fonderie metal frame Hammered iron with a patina finish Leather slings available in all Baker leathers excluding hair on hides and shearlings Can take COL on custom basis with prior approval only"],
  dims: dims({ width: 28.5, depth: 29, height: 30.5, widthInside: 25, seatHeight: 18, seatDepth: 20.5, armWidth: null, armHeight: 26, exposedLegHeight: null, volume: 19, weight: 44, fabricReq: null, leatherReq: 75 }),
  fabric: null,
  leather: leather([4488, 4698, 4866, 5034], 42),
  finishTiers: null,
},

{
  sku: "BAA6406C", name: "Barbara Barry - Deco Classic Lounge Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6621,
  specs: ["- Deco Classic Lounge Chair Baker-McGuire Reserve", "Tight back", "Tight upholstered inback and outback", "One (1) Baker Comfort cushion", "Exposed Walnut wood"],
  dims: dims({ width: 26, depth: 26, height: 32, widthInside: 20, seatHeight: 20, seatDepth: 20, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 26, weight: 30, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([6708, 6753, 6795, 6882, 6969, 7056, 7143, 7230, 7317, 7404, 7491, 7578, 7665, 7752, 7839, 7926]),
  leather: leather([7839, 8274, 8622, 8970], 87),
  finishTiers: { tier1: 0, tier2: 600, tier3: 900, tier4: 1350, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6407C", name: "Barbara Barry - Oval X Back Lounge Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: "Leaf, Silver Leaf, and White GoldLeaf (upcharge) +", frameMaterial: null, basePrice: 300,
  specs: ["- Oval X Back Lounge Chair Baker-McGuire Reserve", "Upholstered tight seat and back", "Upholstered outback", "Walnut frame", "Contrasting X available in: Gold"],
  dims: dims({ width: null, depth: null, height: 29.5, widthInside: 27.5, seatHeight: 39, seatDepth: 24, armWidth: 18, armHeight: 20, exposedLegHeight: null, volume: 26, weight: 12, fabricReq: 26, leatherReq: 24 }),
  fabric: fab([3, 51, 6381, 6408, 6435, 6489, 6543, 6597, 6651, 6705, 6759, 6813, 6867, 6921, 6975, 7029]),
  leather: leather([7083, 7137, 7083, 7353], 7569),
  finishTiers: { tier1: null, tier2: 6327, tier3: 0, tier4: 600, type1Rattan: 900, type2Rattan: 1350, specialtyRattan: null },
},

{
  sku: "BAA6408C", name: "Barbara Barry - Double X Back Lounge Chair", collection: "Baker-McGuire Reserve", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4848,
  specs: ["- Double X Back Lounge Chair Baker-McGuire Reserve", "One (1) Baker Comfort back pillow", "O One (1) Baker Fiberlux cushion", "O Beech solids", "S-"],
  dims: dims({ width: 27, depth: 27, height: 31, widthInside: 23.5, seatHeight: 19, seatDepth: 18, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 26, weight: 27, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([4911, 4944, 4974, 5037, 5100, 5163, 5226, 5289, 5352, 5415, 5478, 5541, 5604, 5667, 5730, 5793]),
  leather: leather([5730, 6045, 6297, 6549], 63),
  finishTiers: { tier1: 0, tier2: 600, tier3: null, tier4: 1350, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6600C", name: "Morris Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6450,
  specs: ["One (1) Baker Comfort back pillow One (1) Baker Comfort cushion Solid walnut frame"],
  dims: dims({ width: 29.5, depth: 36, height: 36, widthInside: 26, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: null, volume: 45, weight: 60, fabricReq: 7, leatherReq: 119 }),
  fabric: fab([6576, 6639, 6702, 6828, 6954, 7080, 7206, 7332, 7458, 7584, 7710, 7836, 7962, 8088, 8214, 8340]),
  leather: leather([8214, 8844, 9348, 9852], 126),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1500, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6600S", name: "Morris Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10950,
  specs: ["Two (2) Baker Comfort back pillow One (1) Baker Comfort bench cushion", "Solid walnut frame"],
  dims: dims({ width: 75.5, depth: 36, height: 36, widthInside: 72, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 20, exposedLegHeight: null, volume: 97, weight: 110, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([11211, 11343, 11472, 11733, 11994, 12255, 12516, 12777, 13038, 13299, 13560, 13821, 14082, 14343, 14604, 14865]),
  leather: leather([14604, 15909, 16953, 17997], 261),
  finishTiers: { tier1: 0, tier2: 300, tier3: 600, tier4: 3000, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6601C", name: "Oslo Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4650,
  specs: ["ws", "Fully upholstered tight seat and back"],
  dims: dims({ width: 38, depth: 37, height: 37, widthInside: 23, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: 45, weight: 0, fabricReq: 7.25, leatherReq: 124 }),
  fabric: fab([4782, 4848, 4914, 5046, 5178, 5310, 5442, 5574, 5706, 5838, 5970, 6102, 6234, 6366, 6498, 6630]),
  leather: leather([6498, 7158, 7686, 8214], 132),
  finishTiers: null,
},

{
  sku: "BAA6601S", name: "Oslo Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7200,
  specs: ["B Fully upholstered tight seat and", "Oback", "O S SBL Sm-"],
  dims: dims({ width: 85, depth: 37, height: 37, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: 97, weight: 164, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([7416, 7524, 7632, 7848, 8064, 8280, 8496, 8712, 8928, 9144, 9360, 9576, 9792, 10008, 10224, 10440]),
  leather: leather([10224, 11304, 12168, 13032], 216),
  finishTiers: null,
},

{
  sku: "BAA6602C", name: "Bruges Lounge Chair - Slipcover", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5850,
  specs: ["One (1) Baker Comfort back pillow One (1) Baker Comfort cushion Solid oak legs Slipcover available in the following Baker Leathers: L1040, L1666, L1665 and L2102 Slipcover comes standard with muslin tailored base"],
  dims: dims({ width: 33.5, depth: 38, height: 37, widthInside: 21, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 28, exposedLegHeight: 5, volume: 45, weight: 0, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([6027, 6117, 6204, 6381, 6558, 6735, 6912, 7089, 7266, 7443, 7620, 7797, 7974, 8151, 8328, 8505]),
  leather: leather([8328, 9213, 9921, 10629], 177),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6602C-v2", name: "Bruges Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: "Available with an optional slipcov-", frameMaterial: null, basePrice: 5250,
  specs: ["One (1) Baker Comfort back pillow", "One (1) Baker Comfort cushion", "Solid oak legs"],
  dims: dims({ width: 33.5, depth: 38, height: 37, widthInside: 21, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 28, exposedLegHeight: 5, volume: 45, weight: 0, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([5412, 5493, 5574, 5736, 5898, 6060, 6222, 6384, 6546, 6708, 6870, 7032, 7194, 7356, 7518, 7680]),
  leather: leather([7518, 8328, 8976, 9624], 162),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6602S", name: "Bruges Sofa - Slipcover", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8250,
  specs: ["w", "Three (3) Baker Comfort back pillows", "One (1) Baker Comfort bench ver cushion", "Solid oak legs", "Slipcover available in the following Baker Leathers: L1040, L1666, L1665 and L2102", "Slipcover comes standard in muslin"],
  dims: dims({ width: 88, depth: 38, height: 37, widthInside: 76, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 28, exposedLegHeight: 5, volume: 97, weight: 126, fabricReq: 20.5, leatherReq: 349 }),
  fabric: fab([8619, 8805, 8988, 9357, 9726, 10095, 10464, 10833, 11202, 11571, 11940, 12309, 12678, 13047, 13416, 13785]),
  leather: leather([13416, 15261, 16737, 18213], 369),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6602S-v2", name: "Bruges Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7650,
  specs: ["Three (3) Baker Comfort back", "Opillows", "O One (1) Baker Comfort bench", "Bcushion i Solid oak legs", "S Available with an optional slipcover -"],
  dims: dims({ width: 88, depth: 38, height: 37, widthInside: 76, seatHeight: 18.5, seatDepth: 22, armWidth: null, armHeight: 28, exposedLegHeight: 5, volume: 97, weight: 126, fabricReq: 18.75, leatherReq: 319 }),
  fabric: fab([7989, 8160, 8328, 8667, 9006, 9345, 9684, 10023, 10362, 10701, 11040, 11379, 11718, 12057, 12396, 12735]),
  leather: leather([12396, 14091, 15447, 16803], 339),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6603C", name: "Anders Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5400,
  specs: ["One (1) Baker Comfort back pillow One (1) Baker Comfort cushion Bolster-pillow arm detail lining inside of arm Solid walnut legs"],
  dims: dims({ width: 36, depth: 34.5, height: 34, widthInside: 23, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 25, exposedLegHeight: 6.5, volume: 45, weight: 85.5, fabricReq: 10.25, leatherReq: 175 }),
  fabric: fab([5586, 5679, 5772, 5958, 6144, 6330, 6516, 6702, 6888, 7074, 7260, 7446, 7632, 7818, 8004, 8190]),
  leather: leather([8004, 8934, 9678, 10422], 186),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6603L", name: "Anders Loveseat", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6900,
  specs: ["Two (2) Baker Comfort back pillow Two (2) Baker Comfort cushions", "Bolster-pillow arm detail lining inside of arm", "Solid walnut legs"],
  dims: dims({ width: 62, depth: 34.5, height: 34, widthInside: 49, seatHeight: 21.5, seatDepth: null, armWidth: null, armHeight: 25, exposedLegHeight: 6.5, volume: 77, weight: 125, fabricReq: 11.25, leatherReq: 192 }),
  fabric: fab([7104, 7206, 7308, 7512, 7716, 7920, 8124, 8328, 8532, 8736, 8940, 9144, 9348, 9552, 9756, 9960]),
  leather: leather([9756, 10776, 11592, 12408], 204),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6603S", name: "Anders Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8700,
  specs: ["ws", "Three (3) Baker Comfort back pillows", "Three (3) Baker Comfort cushions", "Bolster-pillow arm detail lining inside of arm", "Solid walnut legs"],
  dims: dims({ width: 86, depth: 34.5, height: 34, widthInside: 74, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 25, exposedLegHeight: 6.5, volume: 97, weight: 0, fabricReq: 13.25, leatherReq: 226 }),
  fabric: fab([8940, 9060, 9180, 9420, 9660, 9900, 10140, 10380, 10620, 10860, 11100, 11340, 11580, 11820, 12060, 12300]),
  leather: leather([12060, 13260, 14220, 15180], 240),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6604C", name: "Sussex Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5550,
  specs: ["One (1) Baker Comfort back pillow", "T One (1) Baker Comfort cushion p Walnut base", "T W-"],
  dims: dims({ width: 32, depth: 38, height: 33.5, widthInside: 24, seatHeight: 21, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 8, volume: 45, weight: 76.5, fabricReq: 6.25, leatherReq: 107 }),
  fabric: fab([5664, 5721, 5778, 5892, 6006, 6120, 6234, 6348, 6462, 6576, 6690, 6804, 6918, 7032, 7146, 7260]),
  leather: leather([7146, 7716, 8172, 8628], 114),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1500, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6604S-104", name: "Sussex Sofa - 104", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12150,
  specs: ["Three (3) Baker Comfort back pillows Three (3) Baker Comfort cushions Walnut base"],
  dims: dims({ width: 104, depth: 38, height: 33.5, widthInside: 96, seatHeight: 21, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 8, volume: 117, weight: 188, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([12474, 12636, 12798, 13122, 13446, 13770, 14094, 14418, 14742, 15066, 15390, 15714, 16038, 16362, 16686, 17010]),
  leather: leather([16686, 18306, 19602, 20898], 324),
  finishTiers: { tier1: 0, tier2: 300, tier3: 600, tier4: 3000, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6604S-85", name: "Sussex Sofa - 85", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10050,
  specs: ["Two (2) Baker Comfort back pillow Two (2) Baker Comfort cushions", "Walnut base"],
  dims: dims({ width: 85, depth: 38, height: 33.5, widthInside: 77, seatHeight: 20, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 8, volume: 97, weight: 158, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([10293, 10416, 10536, 10779, 11022, 11265, 11508, 11751, 11994, 12237, 12480, 12723, 12966, 13209, 13452, 13695]),
  leather: leather([13452, 14667, 15639, 16611], 243),
  finishTiers: { tier1: 0, tier2: 225, tier3: 450, tier4: 2250, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6605C", name: "Left Bank Lounge Chair - Tight Back", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 4800,
  specs: ["ws", "Upholstered tight back", "One (1) Baker Comfort cushion", "Carved solid oak legs"],
  dims: dims({ width: 35, depth: 38, height: 34, widthInside: 24, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 27, exposedLegHeight: 2, volume: 45, weight: 110, fabricReq: 7.75, leatherReq: 132 }),
  fabric: fab([4941, 5013, 5082, 5223, 5364, 5505, 5646, 5787, 5928, 6069, 6210, 6351, 6492, 6633, 6774, 6915]),
  leather: leather([6774, 7479, 8043, 8607], 141),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6605C-LS", name: "Left Bank Lounge Chair - Loose Back", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5100,
  specs: ["One (1) Baker Comfort back pillow", "S One (1) Baker Comfort cushion c Carved solid oak legs", "C-"],
  dims: dims({ width: 35, depth: 38, height: 41, widthInside: 24, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 27, exposedLegHeight: 2, volume: 45, weight: 126, fabricReq: 9, leatherReq: 153 }),
  fabric: fab([5262, 5343, 5424, 5586, 5748, 5910, 6072, 6234, 6396, 6558, 6720, 6882, 7044, 7206, 7368, 7530]),
  leather: leather([7368, 8178, 8826, 9474], 162),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6605O", name: "Left Bank Ottoman", collection: "Baker Originals", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2475,
  specs: ["Semi attached Baker Comfort cushion Carved solid oak legs"],
  dims: dims({ width: 25, depth: 21, height: 17, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 2, volume: 21, weight: 35, fabricReq: 3.25, leatherReq: 56 }),
  fabric: fab([2535, 2565, 2595, 2655, 2715, 2775, 2835, 2895, 2955, 3015, 3075, 3135, 3195, 3255, 3315, 3375]),
  leather: leather([3315, 3615, 3855, 4095], 60),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6605S", name: "Left Bank Sofa - Tight Back", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8400,
  specs: ["Upholstered tight back", "Three (3) Baker Comfort cushions", "Carved solid oak legs"],
  dims: dims({ width: 89, depth: 38, height: 34, widthInside: 79, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 27, exposedLegHeight: 2, volume: 97, weight: 200, fabricReq: 19, leatherReq: 323 }),
  fabric: fab([8742, 8913, 9084, 9426, 9768, 10110, 10452, 10794, 11136, 11478, 11820, 12162, 12504, 12846, 13188, 13530]),
  leather: leather([13188, 14898, 16266, 17634], 342),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6605S-LS", name: "Left Bank Sofa - Loose Back", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10200,
  specs: ["Three (3) Baker Comfort back s pillows", "Three (3) Baker Comfort cushions", "Carved solid oak legs"],
  dims: dims({ width: 89, depth: 38, height: 41, widthInside: 79, seatHeight: 19.5, seatDepth: null, armWidth: null, armHeight: 27, exposedLegHeight: 2, volume: 97, weight: 206, fabricReq: 23.5, leatherReq: 400 }),
  fabric: fab([10623, 10836, 11046, 11469, 11892, 12315, 12738, 13161, 13584, 14007, 14430, 14853, 15276, 15699, 16122, 16545]),
  leather: leather([16122, 18237, 19929, 21621], 423),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6606C", name: "Laesing Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5400,
  specs: ["Upholstered tight seat and back", "U Button pull detail on in-back", "S Solid oak legs -"],
  dims: dims({ width: 37, depth: 38, height: 40, widthInside: 25, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 27.5, exposedLegHeight: null, volume: 45, weight: 94, fabricReq: 6.75, leatherReq: 115 }),
  fabric: fab([5523, 5586, 5646, 5769, 5892, 6015, 6138, 6261, 6384, 6507, 6630, 6753, 6876, 6999, 7122, 7245]),
  leather: leather([7122, 7737, 8229, 8721], 123),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6606O", name: "Laesing Ottoman", collection: "Baker Originals", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 2400,
  specs: ["Upholstered tight seat Solid oak bun foot"],
  dims: dims({ width: 28, depth: 28, height: 20, widthInside: null, seatHeight: 16.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 26, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([2436, 2454, 2472, 2508, 2544, 2580, 2616, 2652, 2688, 2724, 2760, 2796, 2832, 2868, 2904, 2940]),
  leather: leather([2904, 3084, 3228, 3372], 36),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6607L", name: "Ronde Settee", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7800,
  specs: ["Upholstered tight seat", "One (1) Baker Comfort cushion", "Solid oak legs"],
  dims: dims({ width: 64, depth: 22.5, height: 34, widthInside: 51, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 35, exposedLegHeight: null, volume: 77, weight: 92, fabricReq: 11.25, leatherReq: 192 }),
  fabric: fab([8004, 8106, 8208, 8412, 8616, 8820, 9024, 9228, 9432, 9636, 9840, 10044, 10248, 10452, 10656, 10860]),
  leather: leather([10656, 11676, 12492, 13308], 204),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6608C", name: "Thames Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6000,
  specs: ["Upholstered tight back", "One (1) Baker Comfort cushion", "One (1) Baker Comfort Plush knife edge kidney pillow (8” x 21”)", "Solid oak base", "French Brass metal ferrules on front legs"],
  dims: dims({ width: 36, depth: 36, height: 38.5, widthInside: 22, seatHeight: 19, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: 11, volume: 45, weight: 0, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([6144, 6216, 6288, 6432, 6576, 6720, 6864, 7008, 7152, 7296, 7440, 7584, 7728, 7872, 8016, 8160]),
  leather: leather([8016, 8736, 9312, 9888], 144),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1200, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6610C", name: "Ella Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6150,
  specs: ["Upholstered tight back", "U One (1) Baker Comfort cushion", "O Oak legs", "T French Brass metal ferrules", "A-"],
  dims: dims({ width: 36.5, depth: 38.5, height: 45, widthInside: 24, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 5, volume: 45, weight: 102, fabricReq: 7.25, leatherReq: 124 }),
  fabric: fab([6282, 6348, 6414, 6546, 6678, 6810, 6942, 7074, 7206, 7338, 7470, 7602, 7734, 7866, 7998, 8130]),
  leather: leather([7998, 8658, 9186, 9714], 132),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6611C", name: "Brussels Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5400,
  specs: ["Upholstered tight back One (1) Baker Comfort cushion Tall tapered walnut legs Available with an optional slipcover"],
  dims: dims({ width: 34, depth: 35, height: 33.5, widthInside: 23, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: 6.5, volume: 45, weight: 84, fabricReq: 8.25, leatherReq: 141 }),
  fabric: fab([5550, 5625, 5700, 5850, 6000, 6150, 6300, 6450, 6600, 6750, 6900, 7050, 7200, 7350, 7500, 7650]),
  leather: leather([7500, 8250, 8850, 9450], 150),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6611C-v2", name: "Brussels Lounge Chair - Slipcover", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5700,
  specs: [],
  dims: dims({ width: 34, depth: 35, height: 33.5, widthInside: 23, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 29.5, exposedLegHeight: 6.5, volume: 45, weight: 84, fabricReq: 8.5, leatherReq: 145 }),
  fabric: fab([5853, 5931, 6006, 6159, 6312, 6465, 6618, 6771, 6924, 7077, 7230, 7383, 7536, 7689, 7842, 7995]),
  leather: leather([7842, 8607, 9219, 9831], 153),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6612C", name: "Ines Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5100,
  specs: ["Upholstered tight back", "One (1) Baker Comfort cushion", "Solid oak base with saber legs ng"],
  dims: dims({ width: 29.5, depth: 35, height: 42.5, widthInside: 23, seatHeight: 20, seatDepth: 23, armWidth: null, armHeight: 21.5, exposedLegHeight: 7.5, volume: 45, weight: 0, fabricReq: 7, leatherReq: 119 }),
  fabric: fab([5226, 5289, 5352, 5478, 5604, 5730, 5856, 5982, 6108, 6234, 6360, 6486, 6612, 6738, 6864, 6990]),
  leather: leather([6864, 7494, 7998, 8502], 126),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1200, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6613C", name: "Oxford Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6300,
  specs: ["One (1) Baker Comfort back pillow", "U One (1) Baker Comfort cushion", "F Solid oak frame", "Self decking is standard -"],
  dims: dims({ width: 29, depth: 38, height: 40, widthInside: 24, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 45, weight: 52, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([6372, 6408, 6444, 6516, 6588, 6660, 6732, 6804, 6876, 6948, 7020, 7092, 7164, 7236, 7308, 7380]),
  leather: leather([7308, 7668, 7956, 8244], 72),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1500, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6614C", name: "Mouton Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6300,
  specs: ["Upholstered tight seat and back French Brass metal frame"],
  dims: dims({ width: 30, depth: 34.5, height: 35.5, widthInside: 20.5, seatHeight: null, seatDepth: null, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 45, weight: 0, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6354, 6381, 6408, 6462, 6516, 6570, 6624, 6678, 6732, 6786, 6840, 6894, 6948, 7002, 7056, 7110]),
  leather: leather([7056, 7326, 7542, 7758], 54),
  finishTiers: null,
},

{
  sku: "BAA6615C", name: "Kensington Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8700,
  specs: ["Upholstered tight back", "One (1) Baker Comfort cushion", "One (1) Baker Comfort Plush knife edge kidney pillow (15.5” x 21.5” Walnut frame"],
  dims: dims({ width: 31, depth: 39, height: 40, widthInside: 23, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 28.5, exposedLegHeight: null, volume: 45, weight: 72, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([8835, 8904, 8970, 9105, 9240, 9375, 9510, 9645, 9780, 9915, 10050, 10185, 10320, 10455, 10590, 10725]),
  leather: leather([10590, 11265, 11805, 12345], 135),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6616C", name: "Vida Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5850,
  specs: ["Upholstered tight back", "One (1) Baker Comfort cushion fe", "Oak legs ” )"],
  dims: dims({ width: 34, depth: 34, height: 34, widthInside: 21.5, seatHeight: 18.5, seatDepth: null, armWidth: null, armHeight: 23, exposedLegHeight: 6.5, volume: 45, weight: 62.5, fabricReq: 7.5, leatherReq: 128 }),
  fabric: fab([5985, 6054, 6120, 6255, 6390, 6525, 6660, 6795, 6930, 7065, 7200, 7335, 7470, 7605, 7740, 7875]),
  leather: leather([7740, 8415, 8955, 9495], 135),
  finishTiers: { tier1: 0, tier2: 75, tier3: 150, tier4: 600, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6617C", name: "Manchester Swivel Lounge Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 7950,
  specs: ["Barrel back swivel chair with deep", "Udiamond-tufted tight seat and back", "T Fully upholstered", "Hidden 180 degree swivel base standard", "Optional 360 swivel or stationary -"],
  dims: dims({ width: 32, depth: 32, height: 34.5, widthInside: 23, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 45, weight: 88, fabricReq: 6.5, leatherReq: 111 }),
  fabric: fab([8067, 8127, 8184, 8301, 8418, 8535, 8652, 8769, 8886, 9003, 9120, 9237, 9354, 9471, 9588, 9705]),
  leather: leather([9588, 10173, 10641, 11109], 117),
  finishTiers: null,
},

{
  sku: "BAA6618C", name: "Ari Arm Chair", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5400,
  specs: ["Upholstered tight seat and back Tall tapered oak legs"],
  dims: dims({ width: 29.5, depth: 26, height: 35, widthInside: 20, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 25.5, exposedLegHeight: 12, volume: 45, weight: 36, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([5499, 5550, 5598, 5697, 5796, 5895, 5994, 6093, 6192, 6291, 6390, 6489, 6588, 6687, 6786, 6885]),
  leather: leather([6786, 7281, 7677, 8073], 99),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1200, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6619C", name: "Niles Lounge Chair - Oak", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6000,
  specs: ["Niles Upholstered tight seat and back", "Upholste Tight upholstered inback and", "Tight upoutback outback", "Oak frame", "Sandblas-"],
  dims: dims({ width: 28, depth: 30, height: 34, widthInside: 24, seatHeight: 20.5, seatDepth: null, armWidth: null, armHeight: 34, exposedLegHeight: null, volume: 45, weight: 30, fabricReq: 4.25, leatherReq: 73 }),
  fabric: fab([6078, 6117, 6156, 6234, 6312, 6390, 6468, 6546, 6624, 6702, 6780, 6858, 6936, 7014, 7092, 7170]),
  leather: leather([7092, 7482, 7794, 8106], 78),
  finishTiers: { tier1: 0, tier2: 150, tier3: 300, tier4: 1500, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAA6619C-v2", name: "Niles Lounge Chair - Pine", collection: "Baker Originals", category: "chairs", limited: false,
  standardFinish: "$5550", frameMaterial: null, basePrice: 2925,
  specs: ["BAA6620B Sovereign BencBaker Originals tered tight seat and back", "Upholstered tight seat pholstered inback and", "French Brass metal frame k", "Faux bamboo metalwork asted pine frame -"],
  dims: dims({ width: null, depth: null, height: null, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: 28, exposedLegHeight: 22, volume: 30, weight: 17, fabricReq: 34, leatherReq: 20 }),
  fabric: fab([24, null, 20.5, 20, null, null, null, null, 34, null, null, 17.5, 45, 45, 30, 26]),
  leather: leather([4.25, 1.25, 73, 22], 5628),
  finishTiers: { tier1: 0, tier2: null, tier3: 150, tier4: null, type1Rattan: 300, type2Rattan: null, specialtyRattan: 1500 },
},

{
  sku: "BAA6620B", name: "Sovereign Bench", collection: "Baker Originals", category: "ottomans", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9567,
  specs: ["Tight seat and back with maple solid legs Four (4) Baker Comfort Plush KE throws two (2) 22” & two (2) 24” Nail trim optional"],
  dims: dims({ width: 115, depth: 38.25, height: 35.5, widthInside: 76, seatHeight: 17.5, seatDepth: 23, armWidth: null, armHeight: 35.5, exposedLegHeight: null, volume: 144, weight: 200, fabricReq: 14.75, leatherReq: 251 }),
  fabric: fab([9834, 9969, 10101, 10368, 10635, 10902, 11169, 11436, 11703, 11970, 12237, 12504, 12771, 13038, 13305, 13572]),
  leather: leather([13305, 14640, 15708, 16776], 267),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU2006C", name: "King George IV Highback Chair", collection: "Stately Homes", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4491,
  specs: [],
  dims: dims({ width: 25.5, depth: 30.75, height: 48.25, widthInside: 21.5, seatHeight: 19, seatDepth: 21.5, armWidth: null, armHeight: 21, exposedLegHeight: null, volume: 52, weight: 45, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([4599, 4653, 4707, 4815, 4923, 5031, 5139, 5247, 5355, 5463, 5571, 5679, 5787, 5895, 6003, 6111]),
  leather: leather([6003, 6543, 6975, 7407], 108),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU2500C", name: "Margeaux Lounge Chair", collection: "Baker Originals", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 7086,
  specs: ["Tight back", "Loose seat cushion", "Nail trim not available e", "Mahogany"],
  dims: dims({ width: 26.5, depth: 26.75, height: 32.5, widthInside: 20, seatHeight: 17.5, seatDepth: 20.5, armWidth: null, armHeight: 27, exposedLegHeight: null, volume: 21, weight: 40, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([7158, 7194, 7230, 7302, 7374, 7446, 7518, 7590, 7662, 7734, 7806, 7878, 7950, 8022, 8094, 8166]),
  leather: leather([8094, 8454, 8742, 9030], 72),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU2501S", name: "Form Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12636,
  specs: ["Tight seat and back", "T Four (4) Baker Comfort Plush", "Tthrow pillows 20”", "( Nail trim not available p Fully upholstered", "F N-"],
  dims: dims({ width: 96, depth: 45, height: 33, widthInside: 83, seatHeight: 15, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 200, fabricReq: 13, leatherReq: 221 }),
  fabric: fab([12870, 12987, 13104, 13338, 13572, 13806, 14040, 14274, 14508, 14742, 14976, 15210, 15444, 15678, 15912, 16146]),
  leather: leather([15912, 17082, 18018, 18954], 234),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-101-110", name: "Form” 101-110” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 12897,
  specs: ["Tight seat cushion Tight back (4) Baker Comfort Plush throw pillows (20”) Fully upholstered Nail trim not available"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 15, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 14.5, leatherReq: 247 }),
  fabric: fab([13158, 13290, 13419, 13680, 13941, 14202, 14463, 14724, 14985, 15246, 15507, 15768, 16029, 16290, 16551, 16812]),
  leather: leather([16551, 17856, 18900, 19944], 261),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-111-120", name: "Form 111”-120” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 13497,
  specs: ["Tight seat cushion", "Tight back", "(4) Baker Comfort Plush throw pillows (20”)", "Fully upholstered", "Nail trim not available"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 15, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 14.75, leatherReq: 251 }),
  fabric: fab([13764, 13899, 14031, 14298, 14565, 14832, 15099, 15366, 15633, 15900, 16167, 16434, 16701, 16968, 17235, 17502]),
  leather: leather([17235, 18570, 19638, 20706], 267),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-60-70", name: "Form 60”-70” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9897,
  specs: ["Tight seat cushion", "Tight back", "(4) Baker Comfort Plush throw pillows (20”)", "Fully Upholstered", "Nail trim not available"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 15, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([10113, 10221, 10329, 10545, 10761, 10977, 11193, 11409, 11625, 11841, 12057, 12273, 12489, 12705, 12921, 13137]),
  leather: leather([12921, 14001, 14865, 15729], 216),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-71-80", name: "Form 71”-80” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10497,
  specs: ["Tight seat cushion", "T Tight back", "T (4) Baker Comfort Plush throw", "(pillows (20”) p Fully uhpholsterd", "F No Nail trim available", "N-"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 25, seatDepth: 15, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 12.5, leatherReq: 213 }),
  fabric: fab([10722, 10836, 10947, 11172, 11397, 11622, 11847, 12072, 12297, 12522, 12747, 12972, 13197, 13422, 13647, 13872]),
  leather: leather([13647, 14772, 15672, 16572], 225),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-81-90", name: "Form 81”-90” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11097,
  specs: ["Tight seat cushion Tight back (4) Baker Comfort Plush throw pillows (20”) Fully upholstered No Nail trim available"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 25, seatDepth: 15, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 13, leatherReq: 221 }),
  fabric: fab([11331, 11448, 11565, 11799, 12033, 12267, 12501, 12735, 12969, 13203, 13437, 13671, 13905, 14139, 14373, 14607]),
  leather: leather([14373, 15543, 16479, 17415], 234),
  finishTiers: null,
},

{
  sku: "BAU2501S-BTI-91-100", name: "Form 91”-100” Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11997,
  specs: ["Tight seat cushion", "Tight back", "(4) Baker Comfort Plush throw pillows (20”)", "Fully upholstered", "No nail trim available"],
  dims: dims({ width: null, depth: 45, height: 33, widthInside: null, seatHeight: 25, seatDepth: 15, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([12240, 12363, 12483, 12726, 12969, 13212, 13455, 13698, 13941, 14184, 14427, 14670, 14913, 15156, 15399, 15642]),
  leather: leather([15399, 16614, 17586, 18558], 243),
  finishTiers: null,
},

{
  sku: "BAU2501SE", name: "Form Extended Sofa", collection: "Baker Originals", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 14217,
  specs: ["Tight seat and back", "Four (4) Baker Comfort Plush throw pillows 20”", "Nail trim not available", "Fully upholstered"],
  dims: dims({ width: 120, depth: 45, height: 33, widthInside: 106, seatHeight: 15, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 135, weight: 230, fabricReq: 14.75, leatherReq: 251 }),
  fabric: fab([14484, 14619, 14751, 15018, 15285, 15552, 15819, 16086, 16353, 16620, 16887, 17154, 17421, 17688, 17955, 18222]),
  leather: leather([17955, 19290, 20358, 21426], 267),
  finishTiers: null,
},

{
  sku: "BAU3101C", name: "Lapel Lounge Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4092,
  specs: ["Tight seat and back", "O Fully upholstered", "T A-"],
  dims: dims({ width: 29.5, depth: 30, height: 33, widthInside: 24.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 20, weight: 45, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([4164, 4200, 4236, 4308, 4380, 4452, 4524, 4596, 4668, 4740, 4812, 4884, 4956, 5028, 5100, 5172]),
  leather: leather([5100, 5460, 5748, 6036], 72),
  finishTiers: null,
},

{
  sku: "BAU3102C", name: "Taylor Lounge Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6225,
  specs: ["One (1) Baker Comfort cushion Tight back Acrylic legs"],
  dims: dims({ width: 29, depth: 32, height: 27, widthInside: 19, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: 26, exposedLegHeight: null, volume: 20, weight: 35, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([6312, 6357, 6399, 6486, 6573, 6660, 6747, 6834, 6921, 7008, 7095, 7182, 7269, 7356, 7443, 7530]),
  leather: leather([7443, 7878, 8226, 8574], 87),
  finishTiers: null,
},

{
  sku: "BAU3102O", name: "Taylor Ottoman", collection: "Baker Luxe", category: "ottomans", limited: true,
  standardFinish: "Optional-Natural B", frameMaterial: null, basePrice: 3120,
  specs: ["La Semi attached Baker comfort", "Tight seacushion", "Bronze b Acrylic legs", "Nail trimupcharglist)"],
  dims: dims({ width: 28.5, depth: 20.5, height: 15, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14, weight: 23, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([3165, 3189, 3210, 3255, 3300, 3345, 3390, 3435, 3480, 3525, 3570, 3615, 3660, 3705, 3750, 3795]),
  leather: leather([3750, 3975, 4155, 4335], 45),
  finishTiers: null,
},

{
  sku: "BAU3103C", name: "Lambert Swivel Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: "Natural Bronze", frameMaterial: null, basePrice: 6441,
  specs: ["BAU3104C Enzo Lounge ChaBaker Luxe at and back", "Tight seat and back base", "Bronze frame and legs m optional (reference", "Optional L2300 Tibetan ge amount in front of price Wool +$4998 al swivel base Bronze"],
  dims: dims({ width: null, depth: null, height: null, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: 28.5, volume: 28.5, weight: 34.5, fabricReq: 35.5, leatherReq: 31 }),
  fabric: fab([31, 20, 24, 16.5, 18, null, null, null, null, 27, 22.5, null, null, 20, 33, 82]),
  leather: leather([63, 3.75, 3, 64], 51),
  finishTiers: { tier1: 6147, tier2: null, tier3: null, tier4: null, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3104C", name: "Enzo Lounge Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9456,
  specs: ["Tight seat and back", "Rolled tapered arms", "Two (2) Baker Comfort Ultraplush throws 16”x22”", "Waterfall front with blind seams and micro welt"],
  dims: dims({ width: 85, depth: 38, height: 34, widthInside: 72, seatHeight: 17.25, seatDepth: null, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 74, weight: 120, fabricReq: 9.25, leatherReq: 157 }),
  fabric: fab([9624, 9708, 9792, 9960, 10128, 10296, 10464, 10632, 10800, 10968, 11136, 11304, 11472, 11640, 11808, 11976]),
  leather: leather([11808, 12648, 13320, 13992], 168),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S", name: "Anton Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11301,
  specs: ["Tight seat and back", "Rolled tapered arms", "Four (4) Baker Comfort Ultraplush throws 16”x22”", "Waterfall front with blind seams and micro welt"],
  dims: dims({ width: 96, depth: 38, height: 34, widthInside: 83, seatHeight: 17.25, seatDepth: null, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 10.25, leatherReq: 174 }),
  fabric: fab([11487, 11580, 11673, 11859, 12045, 12231, 12417, 12603, 12789, 12975, 13161, 13347, 13533, 13719, 13905, 14091]),
  leather: leather([13905, 14835, 15579, 16323], 186),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-101-110", name: "Anton 101”-110” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11247,
  specs: ["Tight seat", "Tight back h", "Four (4) Baker Comfort Ultraplush throws 16”x22”", "Rolled tapered arms", "Waterfall front with blind seams & micro welt"],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 13, leatherReq: 221 }),
  fabric: fab([11481, 11598, 11715, 11949, 12183, 12417, 12651, 12885, 13119, 13353, 13587, 13821, 14055, 14289, 14523, 14757]),
  leather: leather([14523, 15693, 16629, 17565], 234),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-111-120", name: "Anton 111”-120” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 11847,
  specs: ["Tight seat", "T Tight back", "T Four (4) Baker Comfort Ultraplush", "Tthrows 16”x22” t Rolled tapered arms", "R Waterfall front with blind seams & fmicro welt w-"],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 14, leatherReq: 238 }),
  fabric: fab([12099, 12225, 12351, 12603, 12855, 13107, 13359, 13611, 13863, 14115, 14367, 14619, 14871, 15123, 15375, 15627]),
  leather: leather([15375, 16635, 17643, 18651], 252),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-60-70", name: "Anton 60”-70” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 8547,
  specs: ["Tight seat Tight back Two (2) Baker Comfort Ultraplush throws 16”x22” Rolled tapered arms and waterfall front with blind seams and micro welt."],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 8.75, leatherReq: 149 }),
  fabric: fab([8706, 8787, 8865, 9024, 9183, 9342, 9501, 9660, 9819, 9978, 10137, 10296, 10455, 10614, 10773, 10932]),
  leather: leather([10773, 11568, 12204, 12840], 159),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-71-80", name: "Anton 71”-80” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9147,
  specs: ["Tight seat", "Tight back", "Two (2) Baker Comfort Ultraplush throws 16”x22”", "Rolled tapered arms and waterfall front with blind seams and micro welt."],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 9.25, leatherReq: 157 }),
  fabric: fab([9315, 9399, 9483, 9651, 9819, 9987, 10155, 10323, 10491, 10659, 10827, 10995, 11163, 11331, 11499, 11667]),
  leather: leather([11499, 12339, 13011, 13683], 168),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-81-90", name: "Anton 81”-90” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 9747,
  specs: ["Tight seat", "Tight back h", "Two (2) Baker Comfort Ultraplush throws 16”x22” ll", "Rolled tapered arms and waterfall o front with blind seams and micro welt."],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([9924, 10014, 10101, 10278, 10455, 10632, 10809, 10986, 11163, 11340, 11517, 11694, 11871, 12048, 12225, 12402]),
  leather: leather([12225, 13110, 13818, 14526], 177),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3106S-BTI-91-100", name: "Anton 91”-100” Sofa", collection: "Baker Luxe", category: "sofas", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 10647,
  specs: ["Tight seat", "O Tight back", "T Two (2) throws up to 96” then", "Fchanges to four (4)", "N Baker Comfort Ultraplush throws 16”x22”", "Rolled tapered arms and waterfall front with blind seams and micro welt. -"],
  dims: dims({ width: null, depth: 38, height: 34, widthInside: null, seatHeight: 17.25, seatDepth: 15, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([10836, 10932, 11025, 11214, 11403, 11592, 11781, 11970, 12159, 12348, 12537, 12726, 12915, 13104, 13293, 13482]),
  leather: leather([13293, 14238, 14994, 15750], 189),
  finishTiers: { tier1: 0, tier2: 255, tier3: 405, tier4: 525, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3112C", name: "Derby Lounge Chair", collection: "Baker Luxe", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6606,
  specs: ["One (1) Baker Comfort seat Tight back Fully upholstered legs No welt"],
  dims: dims({ width: 34, depth: 37, height: 29.5, widthInside: 20.5, seatHeight: 17.5, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 74, weight: 65, fabricReq: 6.25, leatherReq: 106 }),
  fabric: fab([6720, 6777, 6834, 6948, 7062, 7176, 7290, 7404, 7518, 7632, 7746, 7860, 7974, 8088, 8202, 8316]),
  leather: leather([8202, 8772, 9228, 9684], 114),
  finishTiers: null,
},

{
  sku: "BAU3114S", name: "Ashton Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 14571,
  specs: ["One (1) Baker Comfort cushion", "Two (2) Baker Comfort Ultraplush KE throw pillows 20”", "Tight channeled tufted back"],
  dims: dims({ width: 96, depth: 39, height: 30.5, widthInside: 84, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 205, fabricReq: 15.75, leatherReq: 268 }),
  fabric: fab([14856, 15000, 15141, 15426, 15711, 15996, 16281, 16566, 16851, 17136, 17421, 17706, 17991, 18276, 18561, 18846]),
  leather: leather([18561, 19986, 21126, 22266], 285),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-101-110", name: "Ashton 101”-110” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 15297,
  specs: ["(3) Baker Comfort seat cushion h", "(2) Baker Comfort Ultraplush KE throws (20”)", "Tight channel tufted back"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 18, leatherReq: 306 }),
  fabric: fab([15621, 15783, 15945, 16269, 16593, 16917, 17241, 17565, 17889, 18213, 18537, 18861, 19185, 19509, 19833, 20157]),
  leather: leather([19833, 21453, 22749, 24045], 324),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-111-120", name: "Ashton 111”-120” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 15897,
  specs: ["(4) Baker Comfort seats", "( (2) Baker Comfort Ultraplush KE", "(throws (20”) t Tight channel tufted back", "T-"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 21, leatherReq: 357 }),
  fabric: fab([16275, 16464, 16653, 17031, 17409, 17787, 18165, 18543, 18921, 19299, 19677, 20055, 20433, 20811, 21189, 21567]),
  leather: leather([21189, 23079, 24591, 26103], 378),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-60-70", name: "Ashton 60”-70” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 11697,
  specs: ["(1) Baker Comfort bench seat (2) Baker Comfort Ultraplush KE throws (20”) Tight channel tufted back"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([11913, 12021, 12129, 12345, 12561, 12777, 12993, 13209, 13425, 13641, 13857, 14073, 14289, 14505, 14721, 14937]),
  leather: leather([14721, 15801, 16665, 17529], 216),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-71-80", name: "Ashton 71”-80” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12297,
  specs: ["(1) Baker Comfort bench seat", "(2) Baker Comfort Ultraplush KE throws (20”)", "Tight channel tufted back"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 13.5, leatherReq: 230 }),
  fabric: fab([12540, 12663, 12783, 13026, 13269, 13512, 13755, 13998, 14241, 14484, 14727, 14970, 15213, 15456, 15699, 15942]),
  leather: leather([15699, 16914, 17886, 18858], 243),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-81-90", name: "Ashton 81”-90” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12897,
  specs: ["(1) Baker Comfort bench seat", "(2) Baker Comfort Ultraplush KE throws (20”)", "Tight channel tufted back"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 15, leatherReq: 255 }),
  fabric: fab([13167, 13302, 13437, 13707, 13977, 14247, 14517, 14787, 15057, 15327, 15597, 15867, 16137, 16407, 16677, 16947]),
  leather: leather([16677, 18027, 19107, 20187], 270),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3114S-BTI-91-100", name: "Ashton 91”-100” Sofa", collection: "Baker Luxe", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 13797,
  specs: ["(1) Baker Comfort bench seat", "T (2) Baker Comfort Ultraplush KE", "Uthrows (20”)", "E Tight channel tufted back", "N-"],
  dims: dims({ width: null, depth: 39, height: 30.5, widthInside: null, seatHeight: 17.75, seatDepth: 26, armWidth: null, armHeight: 30.5, exposedLegHeight: null, volume: 116, weight: 190, fabricReq: 16, leatherReq: 272 }),
  fabric: fab([14085, 14229, 14373, 14661, 14949, 15237, 15525, 15813, 16101, 16389, 16677, 16965, 17253, 17541, 17829, 18117]),
  leather: leather([17829, 19269, 20421, 21573], 288),
  finishTiers: { tier1: 0, tier2: 495, tier3: null, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "BAU3306C", name: "Sophie Chair", collection: "Baker Luxe", category: "chairs", limited: false,
  standardFinish: "Exposed wood legsNail trim head to head +", frameMaterial: null, basePrice: 300,
  specs: ["Tight seat and back Upholstery with scalloped profile"],
  dims: dims({ width: null, depth: null, height: 25, widthInside: 25, seatHeight: 31, seatDepth: 25, armWidth: 17.5, armHeight: null, exposedLegHeight: null, volume: null, weight: null, fabricReq: 23, leatherReq: 43 }),
  fabric: fab([2.5, 43, 3921, 3945, 3966, 4011, 4056, 4101, 4146, 4191, 4236, 4281, 4326, 4371, 4416, 4461]),
  leather: leather([4506, 4551, 4506, 4731], 4911),
  finishTiers: { tier1: null, tier2: 3876, tier3: 0, tier4: 255, type1Rattan: 405, type2Rattan: 525, specialtyRattan: null },
},

{
  sku: "MCA100", name: "Solano Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6372,
  specs: ["(1) Loose, double stitch seat", "(1) Loose, double stitch back pillo Rattan frame with cane webbing on inside and outside of frame. Rawhide bindings"],
  dims: dims({ width: 30.25, depth: 31, height: 29.25, widthInside: null, seatHeight: 17, seatDepth: 19, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 34, weight: 50, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6426, 6453, 6480, 6534, 6588, 6642, 6696, 6750, 6804, 6858, 6912, 6966, 7020, 7074, 7128, 7182]),
  leather: leather([7128, 7398, 7614, 7830], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCA101", name: "Plaid Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Dark Tobacco, Slate", frameMaterial: null, basePrice: 5127,
  specs: ["(1) Loose, double stitch seat with ow Velcro straps.", "(1) Loose, double stitch back pillow", "Rattan frame with cane webbing on inside of frame. Rawhide bindings"],
  dims: dims({ width: 30.25, depth: 29.5, height: 28.75, widthInside: null, seatHeight: 17, seatDepth: 17, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 34, weight: 50, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([5181, 5208, 5235, 5289, 5343, 5397, 5451, 5505, 5559, 5613, 5667, 5721, 5775, 5829, 5883, 5937]),
  leather: leather([5883, 6153, 6369, 6585], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 1500, type2Rattan: 2100, specialtyRattan: null },
},

{
  sku: "MCA102", name: "Knot Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "obSatin Walnut, Blonde AshD", frameMaterial: null, basePrice: 7113,
  specs: ["(1) Loose, double stitch seat", "( (1) Loose, double stitch back pillow", "( Caned back with leather bindings", "Ron back and arms"],
  dims: dims({ width: 29.5, depth: 32.5, height: 33.5, widthInside: null, seatHeight: 17.25, seatDepth: 18, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 34, weight: 38, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([7167, 7194, 7221, 7275, 7329, 7383, 7437, 7491, 7545, 7599, 7653, 7707, 7761, 7815, 7869, 7923]),
  leather: leather([7869, 8139, 8355, 8571], 54),
  finishTiers: null,
},

{
  sku: "MCA104", name: "Petal Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Dark Tobacco", frameMaterial: null, basePrice: 4560,
  specs: ["(1) Loose, seat with velcro strapes (1) Loose, welt back pillow Rattan frame with caned webbing on inside of frame and rawhide bindings"],
  dims: dims({ width: 30.75, depth: 33.75, height: 36.75, widthInside: null, seatHeight: 18, seatDepth: 18.5, armWidth: null, armHeight: 21.75, exposedLegHeight: null, volume: 49, weight: 74, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([4614, 4641, 4668, 4722, 4776, 4830, 4884, 4938, 4992, 5046, 5100, 5154, 5208, 5262, 5316, 5370]),
  leather: leather([5316, 5586, 5802, 6018], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 300, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCA105", name: "Guernica Lounge Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Black leather fringe, Brown leathefringe", frameMaterial: null, basePrice: 24285,
  specs: ["(1) Loose, double stitch seat", "(1) Loose, double stitch back pillo Leather fringe on outside back", "Arms are wrapped in leather", "Rattan and solid wood frame; soliAsh wood feet"],
  dims: dims({ width: 31.5, depth: 32.5, height: 31.5, widthInside: 27, seatHeight: 16.75, seatDepth: 18, armWidth: null, armHeight: 23.25, exposedLegHeight: null, volume: 34, weight: 141, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([24393, 24447, 24501, 24609, 24717, 24825, 24933, 25041, 25149, 25257, 25365, 25473, 25581, 25689, 25797, 25905]),
  leather: leather([25797, 26337, 26769, 27201], 108),
  finishTiers: null,
},

{
  sku: "MCA106", name: "Coastal Braided Swivel Lounge Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Natural Danish cord", frameMaterial: null, basePrice: 9699,
  specs: ["(1) Loose, double stitch seat ow", "(1) Loose, double stitch back pillow", "Outside back in Abaca rope braid; frame wrapped in Danish cord lid", "Specify welt or single stitch", "Swivel base", "Rattan and wood frame", "Please note, this chair does not come standard with throw pillow er"],
  dims: dims({ width: 32.5, depth: 34.5, height: 29, widthInside: null, seatHeight: 16.75, seatDepth: 18, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 34, weight: 142, fabricReq: 6, leatherReq: 102 }),
  fabric: fab([9807, 9861, 9915, 10023, 10131, 10239, 10347, 10455, 10563, 10671, 10779, 10887, 10995, 11103, 11211, 11319]),
  leather: leather([11211, 11751, 12183, 12615], 108),
  finishTiers: null,
},

{
  sku: "MCA106B", name: "Coastal Swivel Lounge Chair", collection: "Laura Kirar", category: "chairs", limited: false,
  standardFinish: "Natural Danish cordS", frameMaterial: null, basePrice: 7560,
  specs: ["(1) Loose, double stitch seat", "( (1) Loose, double stitch back pillow s Specify welt or single stitch if", "(desired", "L Swivel base C Rattan and wood frame; frame is awrapped in Danish cord", "R Please note, this chair does not", "Tcome standard with throw pillow"],
  dims: dims({ width: 32.5, depth: 34.5, height: 29, widthInside: null, seatHeight: 16.75, seatDepth: 18, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 34, weight: 142, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([7704, 7776, 7848, 7992, 8136, 8280, 8424, 8568, 8712, 8856, 9000, 9144, 9288, 9432, 9576, 9720]),
  leather: leather([9576, 10296, 10872, 11448], 144),
  finishTiers: null,
},

{
  sku: "MCA115", name: "Bercut Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Slate", frameMaterial: null, basePrice: 6132,
  specs: ["(1) Loose seat attached with velcro straps (1) Loose, back pillow Leather panels available only in Chocolate, Camel, Pebble, Ivory, and Black Rattan frame with leather panels Two Metal buckles on each panel"],
  dims: dims({ width: 31.25, depth: 29.75, height: 34.75, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 34, weight: 44, fabricReq: 2.75, leatherReq: 47 }),
  fabric: fab([6183, 6210, 6234, 6285, 6336, 6387, 6438, 6489, 6540, 6591, 6642, 6693, 6744, 6795, 6846, 6897]),
  leather: leather([6846, 7101, 7305, 7509], 51),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCA116", name: "Petal Rocking Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 6318,
  specs: ["(1) Loose, seat attached with velcro straps", "(1) Loose, back pillow", "Rattan frame with woven single cane and rawhide bindings"],
  dims: dims({ width: 32.75, depth: 33.75, height: 36.75, widthInside: null, seatHeight: 16.75, seatDepth: 29.5, armWidth: null, armHeight: 21.75, exposedLegHeight: null, volume: 34, weight: 57, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6372, 6399, 6426, 6480, 6534, 6588, 6642, 6696, 6750, 6804, 6858, 6912, 6966, 7020, 7074, 7128]),
  leather: leather([7074, 7344, 7560, 7776], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCA117", name: "Alameda Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Matte Slate", frameMaterial: null, basePrice: 4971,
  specs: ["(1) Loose, seat attached with velcro straps", "(1) Loose, back pillow", "Rattan and rawhide frame, paddle arms wrapped in rawhide", "Non-standard finish ships in 20-24 weeks", "Custom rawhide program available in 1 tone, 2 tone, and 3"],
  dims: dims({ width: 30, depth: 31.5, height: 32, widthInside: null, seatHeight: 16.5, seatDepth: null, armWidth: null, armHeight: 24.25, exposedLegHeight: null, volume: 34, weight: 44, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([5034, 5067, 5097, 5160, 5223, 5286, 5349, 5412, 5475, 5538, 5601, 5664, 5727, 5790, 5853, 5916]),
  leather: leather([5853, 6168, 6420, 6672], 63),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 600, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCA119", name: "Cambric Lounge Chair", collection: "Steven Volpe", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 4890,
  specs: ["Tight seat", "( (1) loose, back pillow p Rattan and woven rawhide frame,", "(square mesh caned back p Ui R SMatte Coffee, Matte Dark Tobacco, Matte Mineral, Ritz"],
  dims: dims({ width: 26.5, depth: 30.25, height: 30.5, widthInside: null, seatHeight: 16, seatDepth: 16.5, armWidth: null, armHeight: 24.75, exposedLegHeight: null, volume: 27, weight: 35, fabricReq: 2, leatherReq: 34 }),
  fabric: fab([4926, 4944, 4962, 4998, 5034, 5070, 5106, 5142, 5178, 5214, 5250, 5286, 5322, 5358, 5394, 5430]),
  leather: leather([5394, 5574, 5718, 5862], 36),
  finishTiers: null,
},

{
  sku: "MCA121", name: "Ojai Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5451,
  specs: ["(1) Double stitch welted, tufted pad atop the seat (1) Double stitch welted, back pillow Upholstered interior back and inside arms Rattan caning Specify welt if desired"],
  dims: dims({ width: 29, depth: 31.5, height: 28.25, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 25.25, exposedLegHeight: null, volume: 34, weight: 31, fabricReq: 4.25, leatherReq: 72 }),
  fabric: fab([5529, 5568, 5607, 5685, 5763, 5841, 5919, 5997, 6075, 6153, 6231, 6309, 6387, 6465, 6543, 6621]),
  leather: leather([6543, 6933, 7245, 7557], 78),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCA132", name: "Kanan Lounge Chair", collection: "Marmol Radziner", category: "chairs", limited: false,
  standardFinish: null, frameMaterial: null, basePrice: 5727,
  specs: ["Tight seat and backrest with double needle stitching", "Lounge Chair with flat planed rattan frame", "Solid oak back leg"],
  dims: dims({ width: 35, depth: 30, height: 29, widthInside: null, seatHeight: 19.5, seatDepth: 25, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 46, weight: 42, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([5790, 5823, 5853, 5916, 5979, 6042, 6105, 6168, 6231, 6294, 6357, 6420, 6483, 6546, 6609, 6672]),
  leather: leather([6609, 6924, 7176, 7428], 63),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: null },
},

{
  sku: "MCA140", name: "Tresser Lounge Chair (with Woven Leather)", collection: "Nicole Hollis", category: "chairs", limited: true,
  standardFinish: "Quercia Bianca, Quercia Nera", frameMaterial: null, basePrice: 6837,
  specs: ["One (1) Loose seat", "One (1) Loose back pillow", "Woven black leather sides and back", "White Oak Frame"],
  dims: dims({ width: 28, depth: 28, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 19, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 25, weight: 84, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([6927, 6972, 7017, 7107, 7197, 7287, 7377, 7467, 7557, 7647, 7737, 7827, 7917, 8007, 8097, 8187]),
  leather: leather([8097, 8547, 8907, 9267], 90),
  finishTiers: null,
},

{
  sku: "MCA140-v2", name: "Tresser Lounge Chair (Fully Upholstered)", collection: "Nicole Hollis", category: "chairs", limited: true,
  standardFinish: "AQuercia Bianca, Quercia NeraM", frameMaterial: null, basePrice: 5187,
  specs: ["One (1) Loose seat", "R One (1) Loose back pillow", "T Fully upholstered sides and back", "C White Oak Frame"],
  dims: dims({ width: 28, depth: 28, height: 24, widthInside: null, seatHeight: 16.5, seatDepth: 19, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 25, weight: 84, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([5331, 5403, 5475, 5619, 5763, 5907, 6051, 6195, 6339, 6483, 6627, 6771, 6915, 7059, 7203, 7347]),
  leather: leather([7203, 7923, 8499, 9075], 144),
  finishTiers: null,
},

{
  sku: "MCA1807C", name: "Taru Chair", collection: "Laura Kirar", category: "chairs", limited: true,
  standardFinish: "Matte Ebony, Matte Mineral", frameMaterial: null, basePrice: 15261,
  specs: ["Rattan frame with woven rawhide Tight upholstered seat and back Center of bottom rail to floor: 7” Arm width: 1.25”"],
  dims: dims({ width: 32, depth: 31, height: 31.25, widthInside: 29.5, seatHeight: 18, seatDepth: 22, armWidth: null, armHeight: 23.25, exposedLegHeight: 11.5, volume: 45, weight: 42, fabricReq: 5.5, leatherReq: 94 }),
  fabric: fab([15360, 15411, 15459, 15558, 15657, 15756, 15855, 15954, 16053, 16152, 16251, 16350, 16449, 16548, 16647, 16746]),
  leather: leather([16647, 17142, 17538, 17934], 99),
  finishTiers: null,
},

{
  sku: "MCA1807L", name: "Taru Settee", collection: "Laura Kirar", category: "sofas", limited: true,
  standardFinish: "Matte Ebony, Matte Mineral", frameMaterial: null, basePrice: 18327,
  specs: ["Rattan frame with woven rawhide", "Tight upholstered seat and back", "Center of bottom rail to floor: 7”"],
  dims: dims({ width: 54, depth: 30.5, height: 31.5, widthInside: 51.5, seatHeight: 18, seatDepth: 22.25, armWidth: null, armHeight: 23, exposedLegHeight: 11.5, volume: 53, weight: 80, fabricReq: 6.75, leatherReq: 115 }),
  fabric: fab([18450, 18513, 18573, 18696, 18819, 18942, 19065, 19188, 19311, 19434, 19557, 19680, 19803, 19926, 20049, 20172]),
  leather: leather([20049, 20664, 21156, 21648], 123),
  finishTiers: null,
},

{
  sku: "MCA1807S", name: "Taru Sofa", collection: "Laura Kirar", category: "sofas", limited: true,
  standardFinish: "Matte Ebony, Matte Mineral", frameMaterial: null, basePrice: 21387,
  specs: ["e", "Rattan frame with woven rawhide", "Tight upholstered seat and back", "Center of bottom rail to floor: 7”"],
  dims: dims({ width: 85.25, depth: 30.75, height: 31.25, widthInside: 82.5, seatHeight: 18.25, seatDepth: 23, armWidth: null, armHeight: 23, exposedLegHeight: 11.5, volume: 81, weight: 114, fabricReq: 8, leatherReq: 136 }),
  fabric: fab([21531, 21603, 21675, 21819, 21963, 22107, 22251, 22395, 22539, 22683, 22827, 22971, 23115, 23259, 23403, 23547]),
  leather: leather([23403, 24123, 24699, 25275], 144),
  finishTiers: null,
},

{
  sku: "MCA2201C", name: "Knot Lounge Chair - Rattan", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "(pGunmetal, Matte MineralG", frameMaterial: null, basePrice: 6138,
  specs: ["Rattan chair with rawhide bindings", "R Loose seat and back cushion", "T ("],
  dims: dims({ width: 29.5, depth: 30.75, height: 34, widthInside: 26.25, seatHeight: 18, seatDepth: 19, armWidth: null, armHeight: 23.25, exposedLegHeight: null, volume: 18, weight: 30, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6192, 6219, 6246, 6300, 6354, 6408, 6462, 6516, 6570, 6624, 6678, 6732, 6786, 6840, 6894, 6948]),
  leather: leather([6894, 7164, 7380, 7596], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 300, type2Rattan: 600, specialtyRattan: null },
},

{
  sku: "MCA2301C", name: "Brazos Chair", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Gunmetal, Matte Mineral", frameMaterial: null, basePrice: 5586,
  specs: ["Rattan chair with rawhide bindings Tight seat and back (2) fabric covered buttons in back (1) 19” x 19” Knife Edge throw pillow"],
  dims: dims({ width: 30, depth: 32, height: 40.25, widthInside: 27, seatHeight: 16.5, seatDepth: 23.5, armWidth: null, armHeight: 24.25, exposedLegHeight: null, volume: 23, weight: 35.5, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([5658, 5694, 5730, 5802, 5874, 5946, 6018, 6090, 6162, 6234, 6306, 6378, 6450, 6522, 6594, 6666]),
  leather: leather([6594, 6954, 7242, 7530], 72),
  finishTiers: null,
},

{
  sku: "MCA2303C", name: "Balcones Chair", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Gunmetal, Matte Mineral", frameMaterial: null, basePrice: 6420,
  specs: ["Rattan chair with rawhide binding (1) Tight seat cushion", "(1) Loose back pillow"],
  dims: dims({ width: 30, depth: 29, height: 32.5, widthInside: 27, seatHeight: 17, seatDepth: 18, armWidth: null, armHeight: 22.25, exposedLegHeight: null, volume: 17, weight: 40.5, fabricReq: 2.5, leatherReq: 43 }),
  fabric: fab([6465, 6489, 6510, 6555, 6600, 6645, 6690, 6735, 6780, 6825, 6870, 6915, 6960, 7005, 7050, 7095]),
  leather: leather([7050, 7275, 7455, 7635], 45),
  finishTiers: null,
},

{
  sku: "MCA2390C", name: "Llano Chair", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Gunmetal, Matte Mineral", frameMaterial: null, basePrice: 7380,
  specs: ["gs", "Rattan barrel chair with rawhide bindings", "Tight upholstered inback and caned outback", "Tight seat", "(1) 15” x 20” Knife Edge throw pillow"],
  dims: dims({ width: 30, depth: 30.25, height: 33.5, widthInside: 27.25, seatHeight: 17, seatDepth: 17.5, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 15, weight: 40, fabricReq: 3.75, leatherReq: 64 }),
  fabric: fab([7449, 7485, 7518, 7587, 7656, 7725, 7794, 7863, 7932, 8001, 8070, 8139, 8208, 8277, 8346, 8415]),
  leather: leather([8346, 8691, 8967, 9243], 69),
  finishTiers: null,
},

{
  sku: "MCA2393C", name: "Lantana Lounge Chair", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "pGunmetal, Matte MineralG", frameMaterial: null, basePrice: 4956,
  specs: ["Rattan lounge chair with rawhide", "Sbindings b Tight upholstered inback and", "Toutback", "( Tight seat"],
  dims: dims({ width: 30.5, depth: 29.75, height: 33, widthInside: 27.25, seatHeight: 16.5, seatDepth: 23.75, armWidth: null, armHeight: 22.5, exposedLegHeight: null, volume: 18, weight: 29, fabricReq: 3.25, leatherReq: 55 }),
  fabric: fab([5016, 5046, 5076, 5136, 5196, 5256, 5316, 5376, 5436, 5496, 5556, 5616, 5676, 5736, 5796, 5856]),
  leather: leather([5796, 6096, 6336, 6576], 60),
  finishTiers: null,
},

{
  sku: "MCA2397C", name: "Bandera Chair", collection: "McGuire Originals", category: "chairs", limited: false,
  standardFinish: "Gunmetal, Matte Mineral", frameMaterial: null, basePrice: 6486,
  specs: ["Sling rattan chair with rawhide bindings Tight seat (1) 23” x 23” Knife Edge throw pillow"],
  dims: dims({ width: 30, depth: 31.5, height: 39.75, widthInside: 24.25, seatHeight: 16.5, seatDepth: 17, armWidth: null, armHeight: 24, exposedLegHeight: null, volume: 14, weight: 32.5, fabricReq: 4, leatherReq: 68 }),
  fabric: fab([6558, 6594, 6630, 6702, 6774, 6846, 6918, 6990, 7062, 7134, 7206, 7278, 7350, 7422, 7494, 7566]),
  leather: leather([7494, 7854, 8142, 8430], 72),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 600, type2Rattan: 900, specialtyRattan: 1650 },
},

{
  sku: "MCA2399C", name: "Ridge Chair", collection: "McGuire Originals", category: "chairs", limited: true,
  standardFinish: "Gunmetal, Matte Mineral", frameMaterial: null, basePrice: 6765,
  specs: ["Rattan chair with rawhide binding Cane on outback", "Tight seat and back"],
  dims: dims({ width: 28.25, depth: 27, height: 30, widthInside: 25.25, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 14, weight: 33, fabricReq: 3.5, leatherReq: 60 }),
  fabric: fab([6828, 6861, 6891, 6954, 7017, 7080, 7143, 7206, 7269, 7332, 7395, 7458, 7521, 7584, 7647, 7710]),
  leather: leather([7647, 7962, 8214, 8466], 63),
  finishTiers: null,
},

{
  sku: "MCA2600S", name: "Cord Sofa", collection: "Thomas Pheasant", category: "sofas", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 21366,
  specs: ["gs", "Tight seat and back", "(3) Throw pillows (12”x27”)", "Solid oak top arm panels", "Desert sand leather cord wrapped frame"],
  dims: dims({ width: 100, depth: 34.5, height: 28.5, widthInside: 96, seatHeight: 15.75, seatDepth: null, armWidth: null, armHeight: 19.5, exposedLegHeight: null, volume: 65, weight: 200, fabricReq: 10.5, leatherReq: 179 }),
  fabric: fab([21555, 21651, 21744, 21933, 22122, 22311, 22500, 22689, 22878, 23067, 23256, 23445, 23634, 23823, 24012, 24201]),
  leather: leather([24012, 24957, 25713, 26469], 189),
  finishTiers: { tier1: 0, tier2: 975, tier3: 1575, tier4: 2100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MCA2601C", name: "Cord Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 12321,
  specs: ["Desert sand leather cord wrapped", "Tframe", "S Solid oak top arm panels", "D Tight seat and back f (1)12”x27” throw pillow -"],
  dims: dims({ width: 35, depth: 34, height: 29, widthInside: 31, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: 19.75, exposedLegHeight: null, volume: 25, weight: 61, fabricReq: 6.75, leatherReq: 115 }),
  fabric: fab([12444, 12507, 12567, 12690, 12813, 12936, 13059, 13182, 13305, 13428, 13551, 13674, 13797, 13920, 14043, 14166]),
  leather: leather([14043, 14658, 15150, 15642], 123),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MCA2602C", name: "Cord Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: null, frameMaterial: null, basePrice: 6447,
  specs: ["Tight seat and back Solid oak top arm panels Desert sand leather cord wrapped frame"],
  dims: dims({ width: 23, depth: 30.5, height: 30.75, widthInside: 19, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: 19.5, exposedLegHeight: null, volume: 18, weight: 35, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([6501, 6528, 6555, 6609, 6663, 6717, 6771, 6825, 6879, 6933, 6987, 7041, 7095, 7149, 7203, 7257]),
  leather: leather([7203, 7473, 7689, 7905], 54),
  finishTiers: { tier1: 0, tier2: 495, tier3: 795, tier4: 1050, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MCA2605C", name: "Nami Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Straw", frameMaterial: null, basePrice: 8019,
  specs: ["Tight seat and back", "Quartered oak veneer cuff with square mesh caning"],
  dims: dims({ width: 44, depth: 37, height: 28.5, widthInside: 23.5, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 46, weight: 115, fabricReq: 5, leatherReq: 85 }),
  fabric: fab([8109, 8154, 8199, 8289, 8379, 8469, 8559, 8649, 8739, 8829, 8919, 9009, 9099, 9189, 9279, 9369]),
  leather: leather([9279, 9729, 10089, 10449], 90),
  finishTiers: { tier1: 1500, tier2: 1995, tier3: 2295, tier4: 2550, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MCA2605CSR", name: "Nami Chaise, Right Arm", collection: "Thomas Pheasant", category: "chairs", limited: true,
  standardFinish: "Straw", frameMaterial: null, basePrice: 13956,
  specs: ["Tight seat, tight back", "Quartered oak veneer cuff with square mesh caning", "Only available in Right Arm Facing"],
  dims: dims({ width: 86, depth: 32, height: 29.5, widthInside: 76, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 101, weight: 110, fabricReq: 6.25, leatherReq: 106 }),
  fabric: fab([14070, 14127, 14184, 14298, 14412, 14526, 14640, 14754, 14868, 14982, 15096, 15210, 15324, 15438, 15552, 15666]),
  leather: leather([15552, 16122, 16578, 17034], 114),
  finishTiers: null,
},

{
  sku: "MCA2605S", name: "Nami Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
  standardFinish: "StrawI", frameMaterial: null, basePrice: 18003,
  specs: ["Tight seat and back", "T Quartered oak veneer cuff with", "Rsquare mesh caning"],
  dims: dims({ width: 110.5, depth: 41, height: 28.5, widthInside: 89, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 108, weight: 180, fabricReq: 9.75, leatherReq: 166 }),
  fabric: fab([18180, 18270, 18357, 18534, 18711, 18888, 19065, 19242, 19419, 19596, 19773, 19950, 20127, 20304, 20481, 20658]),
  leather: leather([20481, 21366, 22074, 22782], 177),
  finishTiers: { tier1: 3000, tier2: 3975, tier3: 4575, tier4: 5100, type1Rattan: null, type2Rattan: null, specialtyRattan: null },
},

{
  sku: "MCA2800C", name: "Montserrat Lounge Chair", collection: "Orlando Diaz-Azcuy", category: "chairs", limited: true,
  standardFinish: "Ink", frameMaterial: null, basePrice: 5778,
  specs: ["Tight seat and back Rattan frame"],
  dims: dims({ width: 29, depth: 31, height: 30, widthInside: 26, seatHeight: 19, seatDepth: 23, armWidth: null, armHeight: 24, exposedLegHeight: 4, volume: 45, weight: 47, fabricReq: 3, leatherReq: 51 }),
  fabric: fab([5832, 5859, 5886, 5940, 5994, 6048, 6102, 6156, 6210, 6264, 6318, 6372, 6426, 6480, 6534, 6588]),
  leather: leather([6534, 6804, 7020, 7236], 54),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 600, type2Rattan: 750, specialtyRattan: 2400 },
},

{
  sku: "MCA2802C", name: "Grenada Chair", collection: "Orlando Diaz-Azcuy", category: "chairs", limited: true,
  standardFinish: "White Gold Leaf", frameMaterial: null, basePrice: 5775,
  specs: ["Loose seat, tight back", "Rattan legs"],
  dims: dims({ width: 28, depth: 32, height: 29, widthInside: 20.5, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 24, exposedLegHeight: 4.75, volume: 45, weight: 57.5, fabricReq: 4.75, leatherReq: 81 }),
  fabric: fab([5862, 5907, 5949, 6036, 6123, 6210, 6297, 6384, 6471, 6558, 6645, 6732, 6819, 6906, 6993, 7080]),
  leather: leather([6993, 7428, 7776, 8124], 87),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: 2100 },
},

{
  sku: "MCA2802S-BTI-101-110", name: "Grenada 101”-110” Sofa", collection: "Orlando Diaz-Azcuy", category: "sofas", limited: true,
  standardFinish: "White Gold Leaf", frameMaterial: null, basePrice: 11976,
  specs: ["Loose seat, tight back", "Rattan legs"],
  dims: dims({ width: 101, depth: 32, height: 29, widthInside: null, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 24, exposedLegHeight: 4.75, volume: null, weight: null, fabricReq: 12, leatherReq: 204 }),
  fabric: fab([12192, 12300, 12408, 12624, 12840, 13056, 13272, 13488, 13704, 13920, 14136, 14352, 14568, 14784, 15000, 15216]),
  leather: leather([15000, 16080, 16944, 17808], 216),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: 2100 },
},

{
  sku: "MCA2802S-BTI-111-120", name: "Grenada 111”-120” Sofa", collection: "Orlando Diaz-Azcuy", category: "sofas", limited: true,
  standardFinish: "RWhite Gold LeafW", frameMaterial: null, basePrice: 12630,
  specs: ["Loose seat, tight back", "L Rattan legs"],
  dims: dims({ width: 111, depth: 32, height: 29, widthInside: null, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 24, exposedLegHeight: 4.75, volume: null, weight: null, fabricReq: 13, leatherReq: 221 }),
  fabric: fab([12864, 12981, 13098, 13332, 13566, 13800, 14034, 14268, 14502, 14736, 14970, 15204, 15438, 15672, 15906, 16140]),
  leather: leather([15906, 17076, 18012, 18948], 234),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: 2100 },
},

{
  sku: "MCA2802S-BTI-60-70", name: "Grenada 60”-70” Sofa", collection: "Orlando Diaz-Azcuy", category: "sofas", limited: true,
  standardFinish: "White Gold Leaf", frameMaterial: null, basePrice: 8796,
  specs: ["Loose seat, tight back Rattan legs"],
  dims: dims({ width: 60, depth: 32, height: 29, widthInside: null, seatHeight: 20, seatDepth: 22, armWidth: null, armHeight: 24, exposedLegHeight: 4.75, volume: null, weight: null, fabricReq: 8.25, leatherReq: 149 }),
  fabric: fab([8946, 9021, 9096, 9246, 9396, 9546, 9696, 9846, 9996, 10146, 10296, 10446, 10596, 10746, 10896, 11046]),
  leather: leather([10896, 11646, 12246, 12846], 150),
  finishTiers: { tier1: null, tier2: null, tier3: null, tier4: null, type1Rattan: 0, type2Rattan: 300, specialtyRattan: 2100 },
},

];
