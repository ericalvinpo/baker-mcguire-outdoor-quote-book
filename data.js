/* Baker McGuire Outdoor — source price list data
   Extracted and cross-checked from "Baker-McGuire Outdoor Price List" (pages 162-173, updated 06/23/26).
   All monetary values below are RAW SOURCE PRICES IN USD. Conversion to PHP (x70) and VAT (12%)
   are applied at render time in pricing.js — this file must never contain PHP or VAT-adjusted values.
   A value of null means the source PDF shows a dash ("-") — i.e. NOT AVAILABLE. Never treat null as free/zero.
*/

const SOURCE_DATE = "06/23/26";

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
  // ---------------- Page 162 ----------------
  {
    sku: "MCC171", name: "Loop Settee", collection: "Jamie Durie", category: "sofas", limited: true,
    standardFinish: "Dark Tobacco", frameMaterial: null, basePrice: 3921,
    specs: ["Tight seat", "(1) Loose back pillow", "Settee in Rattan and Honeycomb, with Greystone leather cord"],
    dims: dims({ width: 53, depth: 27.5, height: 28, widthInside: null, seatHeight: 17.75, seatDepth: 23.75, armWidth: null, armHeight: 22.75, exposedLegHeight: null, volume: 78, weight: 65, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([3984, 4017, 4047, 4110, 4173, 4236, 4299, 4362, 4425, 4488, 4551, 4614, 4677, 4740, 4803, 4866]),
    leather: leather([4803, 5118, 5370, 5622], 63),
  },
  {
    sku: "MCLAO10", name: "Ottoman", collection: "McGuire Originals", category: "ottomans", limited: true,
    standardFinish: "Pecan", frameMaterial: "Rawhide and rattan", basePrice: 4047,
    specs: ["(1) Semi-attached cushion", "Rawhide and rattan frame"],
    dims: dims({ width: 26, depth: 26, height: 16, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 4, fabricReq: 3, leatherReq: 51 }),
    fabric: fab([4101, 4128, 4155, 4209, 4263, 4317, 4371, 4425, 4479, 4533, 4587, 4641, 4695, 4749, 4803, 4857]),
    leather: leather([4803, 5073, 5289, 5505], 54),
  },
  {
    sku: "MCO3011L", name: "Gondola Outdoor Settee", collection: "Gondola", category: "sofas", limited: false,
    standardFinish: "Moonstone", frameMaterial: "Powder coated aluminum", basePrice: 3276,
    specs: ["(1) Loose bench seat", "(3) Loose throws (20\")", "Powder coated aluminum frame joined by a series of stretchers and x-braces", "Suitable Outdoor Cover: MCCV47"],
    dims: dims({ width: 60, depth: 23, height: 32, widthInside: null, seatHeight: 19, seatDepth: 20.5, armWidth: null, armHeight: 28, exposedLegHeight: null, volume: 31, weight: 60, fabricReq: 5.75, leatherReq: null }),
    fabric: fab([3381, 3435, 3486, 3591, 3696, 3801, 3906, 4011, 4116, 4221, 4326, 4431, 4536, 4641, 4746, 4851]),
    leather: leather(null, 105),
  },
  {
    sku: "MCO3211C", name: "Cuerda Slipper Chair", collection: "Laura Kirar", category: "chairs", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 5541,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat and back cushion", "Suitable Outdoor Cover: MCCV51"],
    dims: dims({ width: 23, depth: 32.75, height: 32, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 45, weight: 23.5, fabricReq: 3, leatherReq: null }),
    fabric: fab([5595, 5622, 5649, 5703, 5757, 5811, 5865, 5919, 5973, 6027, 6081, 6135, 6189, 6243, 6297, 6351]),
    leather: leather(null, 54),
  },
  // ---------------- Page 163 ----------------
  {
    sku: "MCO3211CS", name: "Cuerda Chaise Lounge", collection: "Laura Kirar", category: "chairs", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 8736,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat and back cushion", "(1) 7\"x26\" bolster pillow", "Two wheels for easy mobility", "Suitable Outdoor Cover: MCCV52"],
    dims: dims({ width: 31, depth: 74.5, height: 34.5, widthInside: null, seatHeight: 18, seatDepth: 63.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 43, weight: 66, fabricReq: 7, leatherReq: null }),
    fabric: fab([8862, 8925, 8988, 9114, 9240, 9366, 9492, 9618, 9744, 9870, 9996, 10122, 10248, 10374, 10500, 10626]),
    leather: leather(null, 126),
  },
  {
    sku: "MCO3211O", name: "Cuerda Ottoman", collection: "Laura Kirar", category: "ottomans", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 2790,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose cushion", "Suitable Outdoor Cover: MCCV53"],
    dims: dims({ width: 23, depth: 23, height: 17.5, widthInside: null, seatHeight: 17, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 14.5, weight: 17, fabricReq: 2, leatherReq: null }),
    fabric: fab([2826, 2844, 2862, 2898, 2934, 2970, 3006, 3042, 3078, 3114, 3150, 3186, 3222, 3258, 3294, 3330]),
    leather: leather(null, 36),
  },
  {
    sku: "MCO3211S", name: "Cuerda Sofa", collection: "Laura Kirar", category: "sofas", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 11511,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose bench seat cushion", "Three (3) loose back cushions: two (2) 25.75\"x13\", one (1) 36.25\"x13\"", "Two (2) 7.5\" bolster pillows", "Suitable Outdoor Cover: MCCV54"],
    dims: dims({ width: 90, depth: 32, height: 29.25, widthInside: 87, seatHeight: 18, seatDepth: 22, armWidth: null, armHeight: 29.25, exposedLegHeight: null, volume: 48.5, weight: 119.5, fabricReq: 8.5, leatherReq: null }),
    fabric: fab([11664, 11742, 11817, 11970, 12123, 12276, 12429, 12582, 12735, 12888, 13041, 13194, 13347, 13500, 13653, 13806]),
    leather: leather(null, 153),
  },
  {
    sku: "MCO3212C", name: "Cuerda Lounge Chair", collection: "Laura Kirar", category: "chairs", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 6141,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat and back cushion", "Suitable Outdoor Cover: MCCV55"],
    dims: dims({ width: 28.5, depth: 34.5, height: 34.5, widthInside: 25.5, seatHeight: 18, seatDepth: 22.5, armWidth: null, armHeight: 22.75, exposedLegHeight: null, volume: 45, weight: 32.5, fabricReq: 3, leatherReq: null }),
    fabric: fab([6195, 6222, 6249, 6303, 6357, 6411, 6465, 6519, 6573, 6627, 6681, 6735, 6789, 6843, 6897, 6951]),
    leather: leather(null, 54),
  },
  // ---------------- Page 164 ----------------
  {
    sku: "MCO3214CA", name: "Cuerda Armless Chair", collection: "Laura Kirar", category: "chairs", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 6225,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat and back cushion", "(1) 7\"x22\" bolster pillow", "Suitable Outdoor Cover: MCCV65"],
    dims: dims({ width: 33.25, depth: 33.25, height: 30.5, widthInside: null, seatHeight: 18, seatDepth: 18.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 45, weight: 42, fabricReq: 4.75, leatherReq: null }),
    fabric: fab([6312, 6357, 6399, 6486, 6573, 6660, 6747, 6834, 6921, 7008, 7095, 7182, 7269, 7356, 7443, 7530]),
    leather: leather(null, 87),
  },
  {
    sku: "MCO3214CC", name: "Cuerda Corner Chair", collection: "Laura Kirar", category: "chairs", limited: false,
    standardFinish: "Bark Weave", frameMaterial: "Aluminum wrapped with acrylic rope", basePrice: 7755,
    specs: ["Aluminum frame wrapped with acrylic rope", "Loose seat", "(2) loose back cushions", "(1) 7\"x22\" bolster pillow", "Suitable Outdoor Cover: MCCV66"],
    dims: dims({ width: 33.25, depth: 33.25, height: 30.5, widthInside: 0, seatHeight: 18, seatDepth: 18.5, armWidth: null, armHeight: 26.5, exposedLegHeight: null, volume: 45, weight: 47.5, fabricReq: 5.25, leatherReq: null }),
    fabric: fab([7851, 7899, 7947, 8043, 8139, 8235, 8331, 8427, 8523, 8619, 8715, 8811, 8907, 9003, 9099, 9195]),
    leather: leather(null, 96),
  },
  {
    sku: "MCO3341C", name: "Bow Outdoor Lounge Chair", collection: "Barbara Barry", category: "chairs", limited: false,
    standardFinish: "Gravel with Bark Weave, Gravel with Stone Weave", frameMaterial: "Cast aluminum with flat woven acrylic rope", basePrice: 1791,
    specs: ["Cast aluminum dining chair with flat woven acrylic rope", "Suitable Outdoor Cover: MCCV01"],
    dims: dims({ width: 29, depth: 28.5, height: 31.75, widthInside: null, seatHeight: 14.75, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 19, fabricReq: null, leatherReq: null }),
    fabric: null,
    leather: leather(null, null),
  },
  {
    sku: "MCO3341O", name: "Bow Outdoor Ottoman", collection: "Barbara Barry", category: "ottomans", limited: false,
    standardFinish: "Gravel with Bark Weave, Gravel with Stone Weave", frameMaterial: "Cast aluminum with flat woven acrylic rope", basePrice: 1191,
    specs: ["Cast aluminum ottoman in Gravel finish with flat, woven acrylic rope", "Suitable Outdoor Cover: MCCV09"],
    dims: dims({ width: 26.75, depth: 16, height: 14.5, widthInside: null, seatHeight: null, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 12, fabricReq: null, leatherReq: null }),
    fabric: null,
    leather: leather(null, null),
  },
  // ---------------- Page 165 ----------------
  {
    sku: "MCO3361CA", name: "Catalina Outdoor Armless Chair", collection: "Barbara Barry", category: "chairs", limited: false,
    standardFinish: "Gravel", frameMaterial: "Recessed aluminum plinth base", basePrice: 7296,
    specs: ["(1) Loose seat", "(1) loose back pillow", "Recessed aluminum plinth base", "Recommended Outdoor Cover: MCCV49"],
    dims: dims({ width: 36, depth: 38.5, height: 31, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 46, weight: 65, fabricReq: 8.25, leatherReq: null }),
    fabric: fab([7446, 7521, 7596, 7746, 7896, 8046, 8196, 8346, 8496, 8646, 8796, 8946, 9096, 9246, 9396, 9546]),
    leather: leather(null, 150),
  },
  {
    sku: "MCO3361CC", name: "Catalina Outdoor Corner Chair", collection: "Barbara Barry", category: "chairs", limited: false,
    standardFinish: "Gravel", frameMaterial: "Recessed aluminum plinth base", basePrice: 9480,
    specs: ["(1) Loose seat", "(1) loose back pillow", "Recessed aluminum plinth base", "Recommended Outdoor Cover: MCCV48"],
    dims: dims({ width: 38.5, depth: 38.5, height: 31, widthInside: 25, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: 29, exposedLegHeight: null, volume: 46, weight: 80, fabricReq: 10, leatherReq: null }),
    fabric: fab([9660, 9750, 9840, 10020, 10200, 10380, 10560, 10740, 10920, 11100, 11280, 11460, 11640, 11820, 12000, 12180]),
    leather: leather(null, 180),
  },
  {
    sku: "MCO3361O", name: "Catalina Outdoor Ottoman", collection: "Barbara Barry", category: "ottomans", limited: false,
    standardFinish: "Gravel", frameMaterial: "Recessed aluminum plinth base", basePrice: 4725,
    specs: ["Tight seat", "Recessed aluminum plinth base", "Recommended Outdoor Cover: MCCV50"],
    dims: dims({ width: 36, depth: 36, height: 17, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 22, weight: 43, fabricReq: 4.75, leatherReq: null }),
    fabric: fab([4812, 4857, 4899, 4986, 5073, 5160, 5247, 5334, 5421, 5508, 5595, 5682, 5769, 5856, 5943, 6030]),
    leather: leather(null, 87),
  },
  {
    sku: "MCO3500B", name: "Navagio Bench", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 4011,
    specs: ["Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping", "Loose bench cushion (non-reversible)", "Suitable Outdoor Cover: MCCV76"],
    dims: dims({ width: 60, depth: 20, height: 22, widthInside: null, seatHeight: 21, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 16, weight: 44.5, fabricReq: 2.25, leatherReq: 38 }),
    fabric: fab([4053, 4074, 4095, 4137, 4179, 4221, 4263, 4305, 4347, 4389, 4431, 4473, 4515, 4557, 4599, 4641]),
    leather: leather([4599, 4809, 4977, 5145], 42),
  },
  // ---------------- Page 166 ----------------
  {
    sku: "MCO3500CS", name: "Phuket Chaise Lounge", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 7326,
    specs: ["Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping", "Loose lounge pillow (non-reversible)", "Reclines to six (6) positions", "Casters on back legs", "Suitable Outdoor Cover: MCCV77"],
    dims: dims({ width: 30, depth: 92, height: 19, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 33, weight: 76.5, fabricReq: 8.75, leatherReq: 149 }),
    fabric: fab([7485, 7566, 7644, 7803, 7962, 8121, 8280, 8439, 8598, 8757, 8916, 9075, 9234, 9393, 9552, 9711]),
    leather: leather([9552, 10347, 10983, 11619], 159),
  },
  {
    sku: "MCO3502CA", name: "Abaco Armless Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 4671,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV65"],
    dims: dims({ width: 29, depth: 33.5, height: 34, widthInside: null, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 20, weight: 91.5, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([4734, 4767, 4797, 4860, 4923, 4986, 5049, 5112, 5175, 5238, 5301, 5364, 5427, 5490, 5553, 5616]),
    leather: leather([5553, 5868, 6120, 6372], 63),
  },
  {
    sku: "MCO3502CC", name: "Abaco Corner Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 5646,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV32"],
    dims: dims({ width: 33.5, depth: 33.5, height: 34, widthInside: 22.5, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 23, weight: 106, fabricReq: 5, leatherReq: 85 }),
    fabric: fab([5736, 5781, 5826, 5916, 6006, 6096, 6186, 6276, 6366, 6456, 6546, 6636, 6726, 6816, 6906, 6996]),
    leather: leather([6906, 7356, 7716, 8076], 90),
  },
  {
    sku: "MCO3502CL", name: "Abaco Left Arm Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 4971,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 30.5, depth: 33.5, height: 34, widthInside: 29, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 21, weight: 96, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([5034, 5067, 5097, 5160, 5223, 5286, 5349, 5412, 5475, 5538, 5601, 5664, 5727, 5790, 5853, 5916]),
    leather: leather([5853, 6168, 6420, 6672], 63),
  },
  // ---------------- Page 167 ----------------
  {
    sku: "MCO3502CR", name: "Abaco Right Arm Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 4971,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Cushion toggles and sectional clamps", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 30.5, depth: 33.5, height: 34, widthInside: 29, seatHeight: 17, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 21, weight: 96, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([5034, 5067, 5097, 5160, 5223, 5286, 5349, 5412, 5475, 5538, 5601, 5664, 5727, 5790, 5853, 5916]),
    leather: leather([5853, 6168, 6420, 6672], 63),
  },
  {
    sku: "MCO3502O", name: "Abaco Ottoman — Large", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 5607,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose cushion (non-reversible)", "Cushion toggles", "Suitable Outdoor Cover: MCCV78"],
    dims: dims({ width: 54, depth: 40, height: 17, widthInside: null, seatHeight: 16, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 18, weight: 139.5, fabricReq: 4.25, leatherReq: 72 }),
    fabric: fab([5685, 5724, 5763, 5841, 5919, 5997, 6075, 6153, 6231, 6309, 6387, 6465, 6543, 6621, 6699, 6777]),
    leather: leather([6699, 7089, 7401, 7713], 78),
  },
  {
    sku: "MCO3503C", name: "Abaco Lounge Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 6771,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Standard 360° swivel (included)", "Cushion toggles", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 32, depth: 33.5, height: 36, widthInside: 29, seatHeight: 20, seatDepth: 22.5, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 22, weight: 113, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([6834, 6867, 6897, 6960, 7023, 7086, 7149, 7212, 7275, 7338, 7401, 7464, 7527, 7590, 7653, 7716]),
    leather: leather([7653, 7968, 8220, 8472], 63),
  },
  {
    sku: "MCO3503O", name: "Abaco Ottoman — Small", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 3411,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose cushion (non-reversible)", "Cushion toggles", "Suitable Outdoor Cover: MCCV30"],
    dims: dims({ width: 29, depth: 20, height: 17, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 5, weight: 51.5, fabricReq: 2.25, leatherReq: 38 }),
    fabric: fab([3453, 3474, 3495, 3537, 3579, 3621, 3663, 3705, 3747, 3789, 3831, 3873, 3915, 3957, 3999, 4041]),
    leather: leather([3999, 4209, 4377, 4545], 42),
  },
  // ---------------- Page 168 ----------------
  {
    sku: "MCO3504C", name: "Abaco Slipper Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 6171,
    specs: ["Powder-coated cast and extruded aluminum frame", "Loose seat and back cushion (non-reversible)", "Standard 360° swivel (included)", "Cushion toggles", "Suitable Outdoor Cover: MCCV65"],
    dims: dims({ width: 29, depth: 33.5, height: 36, widthInside: null, seatHeight: 20, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 21, weight: 100, fabricReq: 3.5, leatherReq: 60 }),
    fabric: fab([6234, 6267, 6297, 6360, 6423, 6486, 6549, 6612, 6675, 6738, 6801, 6864, 6927, 6990, 7053, 7116]),
    leather: leather([7053, 7368, 7620, 7872], 63),
  },
  {
    sku: "MCO3507L", name: "Phuket Settee", collection: "Baker Resort® for McGuire", category: "sofas", limited: false,
    standardFinish: "Sea Salt", frameMaterial: "Powder-coated cast and extruded aluminum", basePrice: 6231,
    specs: ["Powder-coated cast and extruded aluminum frame", "Outdoor grade strapping", "Loose seat and back cushion (non-reversible)", "Suitable Outdoor Cover: MCCV79"],
    dims: dims({ width: 60, depth: 25, height: 36, widthInside: 57, seatHeight: 21, seatDepth: 17, armWidth: null, armHeight: 25, exposedLegHeight: null, volume: 37, weight: 54, fabricReq: 4.75, leatherReq: 81 }),
    fabric: fab([6318, 6363, 6405, 6492, 6579, 6666, 6753, 6840, 6927, 7014, 7101, 7188, 7275, 7362, 7449, 7536]),
    leather: leather([7449, 7884, 8232, 8580], 87),
  },
  {
    sku: "MCO3550B", name: "Cutter Bench", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 2532,
    specs: ["Loose cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV76"],
    dims: dims({ width: 60, depth: 20, height: 17, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 19, weight: 49.5, fabricReq: 2.75, leatherReq: 47 }),
    fabric: fab([2583, 2610, 2634, 2685, 2736, 2787, 2838, 2889, 2940, 2991, 3042, 3093, 3144, 3195, 3246, 3297]),
    leather: leather([3246, 3501, 3705, 3909], 51),
  },
  {
    sku: "MCO3552C", name: "Schooner Lounge Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4317,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 30, depth: 31.5, height: 30.5, widthInside: 26.5, seatHeight: 17.5, seatDepth: 22, armWidth: null, armHeight: 24.5, exposedLegHeight: null, volume: 24, weight: 49, fabricReq: 8.5, leatherReq: 145 }),
    fabric: fab([4470, 4548, 4623, 4776, 4929, 5082, 5235, 5388, 5541, 5694, 5847, 6000, 6153, 6306, 6459, 6612]),
    leather: leather([6459, 7224, 7836, 8448], 153),
  },
  // ---------------- Page 169 ----------------
  {
    sku: "MCO3552O", name: "Schooner Ottoman", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 1296,
    specs: ["Loose cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV08"],
    dims: dims({ width: 27, depth: 27, height: 19, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 11, weight: 84.5, fabricReq: 2, leatherReq: 34 }),
    fabric: fab([1332, 1350, 1368, 1404, 1440, 1476, 1512, 1548, 1584, 1620, 1656, 1692, 1728, 1764, 1800, 1836]),
    leather: leather([1800, 1980, 2124, 2268], 36),
  },
  {
    sku: "MCO3553C", name: "Schooner Swivel Lounge Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 5262,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Standard 360° swivel (included)", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 33, depth: 33, height: 36, widthInside: 29, seatHeight: 18, seatDepth: 22, armWidth: null, armHeight: 25.5, exposedLegHeight: null, volume: 29, weight: 90, fabricReq: 9.5, leatherReq: 162 }),
    fabric: fab([5433, 5520, 5604, 5775, 5946, 6117, 6288, 6459, 6630, 6801, 6972, 7143, 7314, 7485, 7656, 7827]),
    leather: leather([7656, 8511, 9195, 9879], 171),
  },
  {
    sku: "MCO3553CA", name: "Schooner Armless Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 3687,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV65"],
    dims: dims({ width: 30.5, depth: 33, height: 36, widthInside: null, seatHeight: 18.5, seatDepth: 22.5, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 28, weight: 61, fabricReq: 8, leatherReq: 136 }),
    fabric: fab([3831, 3903, 3975, 4119, 4263, 4407, 4551, 4695, 4839, 4983, 5127, 5271, 5415, 5559, 5703, 5847]),
    leather: leather([5703, 6423, 6999, 7575], 144),
  },
  {
    sku: "MCO3553CC", name: "Schooner Corner Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4962,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 33, depth: 33, height: 36, widthInside: 23.5, seatHeight: 18.5, seatDepth: 22.5, armWidth: null, armHeight: 0, exposedLegHeight: null, volume: 30, weight: 85, fabricReq: 9.5, leatherReq: 162 }),
    fabric: fab([5133, 5220, 5304, 5475, 5646, 5817, 5988, 6159, 6330, 6501, 6672, 6843, 7014, 7185, 7356, 7527]),
    leather: leather([7356, 8211, 8895, 9579], 171),
  },
  // ---------------- Page 170 ----------------
  {
    sku: "MCO3553CL", name: "Schooner Left Arm Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4617,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 32.5, depth: 33, height: 36, widthInside: 30.5, seatHeight: 18.5, seatDepth: 22.5, armWidth: null, armHeight: 25.5, exposedLegHeight: null, volume: 28, weight: 63, fabricReq: 8.5, leatherReq: 145 }),
    fabric: fab([4770, 4848, 4923, 5076, 5229, 5382, 5535, 5688, 5841, 5994, 6147, 6300, 6453, 6606, 6759, 6912]),
    leather: leather([6759, 7524, 8136, 8748], 153),
  },
  {
    sku: "MCO3553CR", name: "Schooner Right Arm Chair", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4617,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV83"],
    dims: dims({ width: 32.5, depth: 33, height: 36, widthInside: 30.5, seatHeight: 18.5, seatDepth: 22.5, armWidth: null, armHeight: 25.5, exposedLegHeight: null, volume: 28, weight: 63, fabricReq: 8.5, leatherReq: 145 }),
    fabric: fab([4770, 4848, 4923, 5076, 5229, 5382, 5535, 5688, 5841, 5994, 6147, 6300, 6453, 6606, 6759, 6912]),
    leather: leather([6759, 7524, 8136, 8748], 153),
  },
  {
    sku: "MCO3553O", name: "Schooner Cocktail Ottoman", collection: "Baker Resort® for McGuire", category: "ottomans", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4461,
    specs: ["Semi-attached cushion", "Teak frame", "Suitable Outdoor Cover: MCCV80"],
    dims: dims({ width: 48, depth: 42, height: 18, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 28, weight: 75, fabricReq: 5.25, leatherReq: 90 }),
    fabric: fab([4557, 4605, 4653, 4749, 4845, 4941, 5037, 5133, 5229, 5325, 5421, 5517, 5613, 5709, 5805, 5901]),
    leather: leather([5805, 6285, 6669, 7053], 96),
  },
  {
    sku: "MCO3553S", name: "Schooner Sofa", collection: "Baker Resort® for McGuire", category: "sofas", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 9732,
    specs: ["Loose back cushion", "Loose seat cushion (non-reversible)", "Teak frame", "Suitable Outdoor Cover: MCCV81"],
    dims: dims({ width: 95, depth: 33, height: 36, widthInside: 91, seatHeight: 18.5, seatDepth: 22.5, armWidth: null, armHeight: 25.5, exposedLegHeight: null, volume: 73, weight: 174, fabricReq: 15, leatherReq: 255 }),
    fabric: fab([10002, 10137, 10272, 10542, 10812, 11082, 11352, 11622, 11892, 12162, 12432, 12702, 12972, 13242, 13512, 13782]),
    leather: leather([13512, 14862, 15942, 17022], 270),
  },
  // ---------------- Page 171 ----------------
  {
    sku: "MCO3555CS", name: "Schooner Chaise Lounge", collection: "Baker Resort® for McGuire", category: "chairs", limited: false,
    standardFinish: "Natural Teak", frameMaterial: "Teak", basePrice: 4962,
    specs: ["Loose lounge pillow (non-reversible)", "Teak frame", "Reclines to four (4) positions", "Casters on back legs", "Suitable Outdoor Cover: MCCV52"],
    dims: dims({ width: 74, depth: 28, height: 19, widthInside: null, seatHeight: 18, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 27, weight: 67.5, fabricReq: 9.5, leatherReq: 162 }),
    fabric: fab([5133, 5220, 5304, 5475, 5646, 5817, 5988, 6159, 6330, 6501, 6672, 6843, 7014, 7185, 7356, 7527]),
    leather: leather([7356, 8211, 8895, 9579], 171),
  },
  {
    sku: "MCO3702C", name: "Naxos Club Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 7500,
    specs: ["One (1) non-reversible loose seat cushion", "One (1) non-reversible back pillow", "One (1) lumbar pillow (26\" x 10\")", "Two (2) throw pillows (27.5\" x 10\")", "Blackened Stainless Steel frame"],
    dims: dims({ width: 42, depth: 36, height: 32, widthInside: 29, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 26, exposedLegHeight: null, volume: 28, weight: 85, fabricReq: 7.25, leatherReq: 124 }),
    fabric: fab([7632, 7698, 7764, 7896, 8028, 8160, 8292, 8424, 8556, 8688, 8820, 8952, 9084, 9216, 9348, 9480]),
    leather: leather([9348, 10008, 10536, 11064], 132),
  },
  {
    sku: "MCO3704C", name: "Naxos Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 5100,
    specs: ["One (1) non-reversible loose seat cushion", "One (1) non-reversible back pillow", "One (1) lumbar pillow (23\" x 10\")", "Blackened Stainless Steel frame"],
    dims: dims({ width: 30, depth: 34, height: 30, widthInside: 28.5, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 18, weight: 58.5, fabricReq: 4.5, leatherReq: 77 }),
    fabric: fab([5181, 5223, 5262, 5343, 5424, 5505, 5586, 5667, 5748, 5829, 5910, 5991, 6072, 6153, 6234, 6315]),
    leather: leather([6234, 6639, 6963, 7287], 81),
  },
  {
    sku: "MCO3704O", name: "Naxos Ottoman", collection: "Thomas Pheasant", category: "ottomans", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 2850,
    specs: ["One (1) non-reversible loose seat cushion", "Blackened Stainless Steel frame"],
    dims: dims({ width: 28, depth: 20, height: 17, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 6, weight: 26.5, fabricReq: 1.75, leatherReq: 30 }),
    fabric: fab([2883, 2901, 2916, 2949, 2982, 3015, 3048, 3081, 3114, 3147, 3180, 3213, 3246, 3279, 3312, 3345]),
    leather: leather([3312, 3477, 3609, 3741], 33),
  },
  // ---------------- Page 172 ----------------
  {
    sku: "MCO3710L", name: "Naxos Loveseat", collection: "Thomas Pheasant", category: "sofas", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 9600,
    specs: ["Two (2) non-reversible loose seat cushions", "Two (2) non-reversible back pillows", "Two (2) lumbar pillows (24\" x 10\")", "Blackened Stainless Steel frame"],
    dims: dims({ width: 64.5, depth: 34, height: 30, widthInside: 63, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 39, weight: 119.5, fabricReq: 9, leatherReq: 153 }),
    fabric: fab([9762, 9843, 9924, 10086, 10248, 10410, 10572, 10734, 10896, 11058, 11220, 11382, 11544, 11706, 11868, 12030]),
    leather: leather([11868, 12678, 13326, 13974], 162),
  },
  {
    sku: "MCO3710S", name: "Naxos Sofa", collection: "Thomas Pheasant", category: "sofas", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 14550,
    specs: ["Three (3) non-reversible loose seat cushions", "Three (3) non-reversible back pillows", "Three (3) lumbar pillows (24\" x 10\")", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV81"],
    dims: dims({ width: 96, depth: 34, height: 30, widthInside: 94.5, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: 22, exposedLegHeight: null, volume: 57, weight: 175, fabricReq: 13.25, leatherReq: 226 }),
    fabric: fab([14790, 14910, 15030, 15270, 15510, 15750, 15990, 16230, 16470, 16710, 16950, 17190, 17430, 17670, 17910, 18150]),
    leather: leather([17910, 19110, 20070, 21030], 240),
  },
  {
    sku: "MCO3712CS", name: "Naxos Slim Chaise", collection: "Thomas Pheasant", category: "chairs", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 7500,
    specs: ["Non-reversible bench seat and angled arms", "Two (2) bolster pillows (6\" x 22\")", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV05"],
    dims: dims({ width: 80.5, depth: 25, height: 21, widthInside: 52, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 98, weight: 86.5, fabricReq: 5.25, leatherReq: 90 }),
    fabric: fab([7596, 7644, 7692, 7788, 7884, 7980, 8076, 8172, 8268, 8364, 8460, 8556, 8652, 8748, 8844, 8940]),
    leather: leather([8844, 9324, 9708, 10092], 96),
  },
  {
    sku: "MCO3714CA", name: "Naxos Slipper Chair", collection: "Thomas Pheasant", category: "chairs", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 4050,
    specs: ["One (1) non-reversible loose seat cushion", "One (1) non-reversible back pillow", "One (1) lumbar pillow (17.5\" x 7\")", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV51"],
    dims: dims({ width: 24, depth: 30, height: 25, widthInside: null, seatHeight: 16, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 11, weight: 35.5, fabricReq: 2.75, leatherReq: 47 }),
    fabric: fab([4101, 4128, 4152, 4203, 4254, 4305, 4356, 4407, 4458, 4509, 4560, 4611, 4662, 4713, 4764, 4815]),
    leather: leather([4764, 5019, 5223, 5427], 51),
  },
  // ---------------- Page 173 ----------------
  {
    sku: "MCO3716CS", name: "Naxos Chaise Lounge", collection: "Thomas Pheasant", category: "chairs", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 8700,
    specs: ["Non-reversible loose bench seat and back", "One (1) removable round bolster headrest", "Reclines to four (4) positions", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV05"],
    dims: dims({ width: 78, depth: 30, height: 16.5, widthInside: null, seatHeight: 15.5, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 98, weight: 104, fabricReq: 7.75, leatherReq: 132 }),
    fabric: fab([8841, 8913, 8982, 9123, 9264, 9405, 9546, 9687, 9828, 9969, 10110, 10251, 10392, 10533, 10674, 10815]),
    leather: leather([10674, 11379, 11943, 12507], 141),
  },
  {
    sku: "MCO3718B", name: "Naxos Oval Bench", collection: "Thomas Pheasant", category: "ottomans", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 3000,
    specs: ["Non-reversible loose seat cushion", "Blackened Stainless Steel frame", "Suitable Outdoor Cover: MCCV09"],
    dims: dims({ width: 30, depth: 18, height: 16, widthInside: null, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 23.5, fabricReq: 1.5, leatherReq: 26 }),
    fabric: fab([3027, 3042, 3054, 3081, 3108, 3135, 3162, 3189, 3216, 3243, 3270, 3297, 3324, 3351, 3378, 3405]),
    leather: leather([3378, 3513, 3621, 3729], 27),
  },
  {
    sku: "MCO3720B", name: "Naxos Slim Bench", collection: "Thomas Pheasant", category: "ottomans", limited: false,
    standardFinish: null, frameMaterial: "Blackened Stainless Steel", basePrice: 3000,
    specs: ["Non-reversible loose seat cushion", "Blackened Stainless Steel frame"],
    dims: dims({ width: 24, depth: 17, height: 16, widthInside: null, seatHeight: 15, seatDepth: null, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 15, weight: 23.5, fabricReq: 1.25, leatherReq: 22 }),
    fabric: fab([3024, 3036, 3048, 3072, 3096, 3120, 3144, 3168, 3192, 3216, 3240, 3264, 3288, 3312, 3336, 3360]),
    leather: leather([3336, 3456, 3552, 3648], 24),
  },
  {
    sku: "MCTP50", name: "Outdoor Lounge Chair", collection: "Thomas Pheasant", category: "chairs", limited: true,
    standardFinish: "Java resin with Bronze frame", frameMaterial: "Woven resin over powder-coated aluminum", basePrice: 3165,
    specs: ["(1) Loose seat", "(1) Loose back pillow", "(1) Lumbar throw", "Contrasting yardage for lumbar pillow: 0.75 yards", "Woven resin over powder-coated aluminum frame", "Suitable Outdoor Cover: MCCV01"],
    dims: dims({ width: 30, depth: 33, height: 30, widthInside: null, seatHeight: 16.5, seatDepth: 19, armWidth: null, armHeight: null, exposedLegHeight: null, volume: 27, weight: null, fabricReq: 3.5, leatherReq: null }),
    fabric: fab([3228, 3261, 3291, 3354, 3417, 3480, 3543, 3606, 3669, 3732, 3795, 3858, 3921, 3984, 4047, 4110]),
    leather: leather(null, 63),
  },
];

// Sanity check total = 48 products
if (typeof console !== "undefined" && PRODUCTS.length !== 48) {
  console.warn("Expected 48 products, found", PRODUCTS.length);
}
