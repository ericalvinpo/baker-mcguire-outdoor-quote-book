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

];
