/* Baker McGuire Outdoor — source price list data
   Extracted and cross-checked from Baker's complete retail price list ("BAKER price-list-retail-9-22-26.pdf"),
   McGuire Outdoor section (main block), updated 09/22/26. This is Stage 1a of a larger catalog rebuild —
   additional outdoor product clusters and other Baker/McGuire collections are added in later stages.
   All monetary values below are RAW SOURCE PRICES IN USD. Conversion to PHP (x70) and VAT (12%)
   are applied at render time in pricing.js — this file must never contain PHP or VAT-adjusted values.
   A value of null means the source PDF shows a dash ("-") — i.e. NOT AVAILABLE. Never treat null as free/zero.
   Note: a handful of standardFinish / specs text fields may carry minor extraction artifacts from column
   text parsing (word-boundary noise) — pricing, dimensions, and grade data are verified exact.
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

];
