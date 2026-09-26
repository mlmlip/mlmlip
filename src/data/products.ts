// MLM Lip 核心产品矩阵数据源 (6 大品类，每类 10 款独立单品，总计 60 款)
// 包含完整的 B2B 核心参数：id, slug, name, category, categorySlug, tag, headline, description,
// heroImage, galleryImages, moq, leadTime, formulaSpecs, packagingOptions, shadeCount, regulatory,
// seoTitle, seoDescription

export interface FormulaSpecs {
  viscosity: string;
  texture: string;
  actives: string;
  finish: string;
}

export interface PackagingOptions {
  tubeType: string;
  wandType: string;
  capFinish: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tag: string;
  headline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  moq: string;
  leadTime: string;
  shadeCount: number;
  formulaSpecs: FormulaSpecs;
  packagingOptions: PackagingOptions;
  regulatory: string;
  seoTitle: string;
  seoDescription: string;
}

export const productsCatalog: ProductItem[] = [
  {
    "id": "LG-01",
    "slug": "lg-01-crystal-mirror-plumping-gloss",
    "name": "Crystal Mirror Plumping Lip Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Ultra-glassy crystal gloss",
    "headline": "High-refraction glassy shine with micro-hyaluronic spheres & menthol",
    "description": "Custom B2B manufacturing for Crystal Mirror Plumping Lip Gloss. Featuring Cross-linked HA, Menthol, Squalane with non-sticky mirror. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-26-01.jpg",
    "galleryImages": [
      "/products/lipgloss-26-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "1800 mPa·s cushion",
      "texture": "Ultra-glassy crystal gloss",
      "actives": "Cross-linked HA, Menthol, Squalane",
      "finish": "Non-sticky mirror"
    },
    "packagingOptions": {
      "tubeType": "Diamond-cut acrylic vial",
      "wandType": "Jumbo doe-foot applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Crystal Mirror Plumping Lip Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label crystal mirror plumping lip gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-02",
    "slug": "lg-02-holographic-glitter-lip-topper",
    "name": "Holographic Multi-Chrome Lip Topper",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Prismatic multi-chrome shine",
    "headline": "Multi-dimensional prismatic pearls in a sheer suspension gel",
    "description": "Custom B2B manufacturing for Holographic Multi-Chrome Lip Topper. Featuring Synthetic fluorphlogopite, Vitamin E with sparkling duochrome. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-collection-01.jpg",
    "galleryImages": [
      "/products/lipgloss-collection-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 10,
    "formulaSpecs": {
      "viscosity": "1500 mPa·s fluid",
      "texture": "Prismatic multi-chrome shine",
      "actives": "Synthetic fluorphlogopite, Vitamin E",
      "finish": "Sparkling duochrome"
    },
    "packagingOptions": {
      "tubeType": "Square clear PETG vial",
      "wandType": "Silicone paddle brush",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Holographic Multi-Chrome Lip Topper Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label holographic multi-chrome lip topper contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-03",
    "slug": "lg-03-sheer-tinted-nourishing-lacquer",
    "name": "Sheer Tinted Nourishing Lip Lacquer",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Juicy tinted dewy sheen",
    "headline": "Translucent juicy tint with organic jojoba & camellia seed oil",
    "description": "Custom B2B manufacturing for Sheer Tinted Nourishing Lip Lacquer. Featuring Jojoba oil, Camellia oil, Rosa canina with sheer juicy tint. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-nude-01.jpg",
    "galleryImages": [
      "/products/lipgloss-nude-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "1600 mPa·s balm-gel",
      "texture": "Juicy tinted dewy sheen",
      "actives": "Jojoba oil, Camellia oil, Rosa canina",
      "finish": "Sheer juicy tint"
    },
    "packagingOptions": {
      "tubeType": "Cylindrical frosted tube",
      "wandType": "Precision teardrop doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Sheer Tinted Nourishing Lip Lacquer Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label sheer tinted nourishing lip lacquer contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-04",
    "slug": "lg-04-glass-shine-non-sticky-glaze",
    "name": "Glass-Shine Non-Sticky Lip Glaze",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Weightless cushion glaze",
    "headline": "Polymer barrier matrix delivering zero tackiness and all-day comfort",
    "description": "Custom B2B manufacturing for Glass-Shine Non-Sticky Lip Glaze. Featuring Hydrogenated polyisobutene, Shea butter with zero-tack glass finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-slim-01.jpg",
    "galleryImages": [
      "/products/lipgloss-slim-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 14,
    "formulaSpecs": {
      "viscosity": "1400 mPa·s light gel",
      "texture": "Weightless cushion glaze",
      "actives": "Hydrogenated polyisobutene, Shea butter",
      "finish": "Zero-tack glass finish"
    },
    "packagingOptions": {
      "tubeType": "Thick-base prestige acrylic vial",
      "wandType": "Flocked contour wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Glass-Shine Non-Sticky Lip Glaze Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label glass-shine non-sticky lip glaze contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-05",
    "slug": "lg-05-duochrome-pearl-liquid-gloss",
    "name": "Duochrome Pearl Liquid Lip Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Color-shifting optical sheen",
    "headline": "Color-shifting optical pigments engineered for editorial impact",
    "description": "Custom B2B manufacturing for Duochrome Pearl Liquid Lip Gloss. Featuring Interference mica, Meadowfoam seed oil with duochrome pearl. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-shades.jpg",
    "galleryImages": [
      "/products/lipgloss-shades.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 8,
    "formulaSpecs": {
      "viscosity": "1700 mPa·s medium gel",
      "texture": "Color-shifting optical sheen",
      "actives": "Interference mica, Meadowfoam seed oil",
      "finish": "Duochrome pearl"
    },
    "packagingOptions": {
      "tubeType": "Slim sleek PETG tube",
      "wandType": "Flexible flat brush",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Duochrome Pearl Liquid Lip Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label duochrome pearl liquid lip gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-06",
    "slug": "lg-06-collagen-infused-volumizing-gloss",
    "name": "Collagen-Infused Volumizing Lip Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Lip-smoothing plumper",
    "headline": "Marine peptide & soluble collagen matrix to smooth vertical lip lines",
    "description": "Custom B2B manufacturing for Collagen-Infused Volumizing Lip Gloss. Featuring Marine collagen, Palmitoyl tripeptide-38 with plump cushion sheen. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-01.jpg",
    "galleryImages": [
      "/products/lipgloss-39-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "1900 mPa·s rich gel",
      "texture": "Lip-smoothing plumper",
      "actives": "Marine collagen, Palmitoyl tripeptide-38",
      "finish": "Plump cushion sheen"
    },
    "packagingOptions": {
      "tubeType": "Heavyweight cylindrical vial",
      "wandType": "Curved reservoir doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Collagen-Infused Volumizing Lip Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label collagen-infused volumizing lip gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-07",
    "slug": "lg-07-metallic-foil-high-impact-gloss",
    "name": "Metallic Foil High-Impact Lip Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Molten liquid metal gloss",
    "headline": "Molten liquid metal foil suspension for stage & party collections",
    "description": "Custom B2B manufacturing for Metallic Foil High-Impact Lip Gloss. Featuring Aluminum borosilicate, Argan oil with high-voltage metallic foil. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-26-03.jpg",
    "galleryImages": [
      "/products/lipgloss-26-03.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 8,
    "formulaSpecs": {
      "viscosity": "2000 mPa·s rich suspension",
      "texture": "Molten liquid metal gloss",
      "actives": "Aluminum borosilicate, Argan oil",
      "finish": "High-voltage metallic foil"
    },
    "packagingOptions": {
      "tubeType": "Hexagonal faceted vial",
      "wandType": "Dual-sided flock wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Metallic Foil High-Impact Lip Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label metallic foil high-impact lip gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-08",
    "slug": "lg-08-jelly-tint-staining-lip-gloss",
    "name": "Jelly Tint Long-Wear Staining Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Water-break staining gloss",
    "headline": "Water-break technology that deposits an indelible stain beneath gloss",
    "description": "Custom B2B manufacturing for Jelly Tint Long-Wear Staining Gloss. Featuring Water-dispersed pigment, Hyaluronic acid with dewy stain finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-02.jpg",
    "galleryImages": [
      "/products/lipgloss-39-02.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 10,
    "formulaSpecs": {
      "viscosity": "1200 mPa·s water-gel",
      "texture": "Water-break staining gloss",
      "actives": "Water-dispersed pigment, Hyaluronic acid",
      "finish": "Dewy stain finish"
    },
    "packagingOptions": {
      "tubeType": "Transparent soft-touch squeeze vial",
      "wandType": "Beveled silicone tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Jelly Tint Long-Wear Staining Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label jelly tint long-wear staining gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-09",
    "slug": "lg-09-cbd-calming-lip-nectar-gloss",
    "name": "Botanical Calming Lip Nectar Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Skin-repair botanical gloss",
    "headline": "Herbal lipid complex with bisabolol & sunflower seed wax",
    "description": "Custom B2B manufacturing for Botanical Calming Lip Nectar Gloss. Featuring Bisabolol, Sunflower wax, Vitamin C ester with conditioning soft gloss. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-03.jpg",
    "galleryImages": [
      "/products/lipgloss-39-03.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 6,
    "formulaSpecs": {
      "viscosity": "1650 mPa·s nectar balm",
      "texture": "Skin-repair botanical gloss",
      "actives": "Bisabolol, Sunflower wax, Vitamin C ester",
      "finish": "Conditioning soft gloss"
    },
    "packagingOptions": {
      "tubeType": "Amber UV-blocking PETG tube",
      "wandType": "Micro-flocked doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Botanical Calming Lip Nectar Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label botanical calming lip nectar gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LG-10",
    "slug": "lg-10-ph-color-changing-glow-gloss",
    "name": "pH Color-Changing Glow Lip Gloss",
    "category": "Lip Gloss",
    "categorySlug": "lip-gloss-manufacturer",
    "tag": "Custom personalized pink bloom",
    "headline": "Thermo-reactive dyes adapting to individual lip chemistry within 60s",
    "description": "Custom B2B manufacturing for pH Color-Changing Glow Lip Gloss. Featuring Red 27 (CI 45410), Squalane, Tocopherol with ph-reactive crystal glow. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-slim-06.jpg",
    "galleryImages": [
      "/products/lipgloss-slim-06.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 4,
    "formulaSpecs": {
      "viscosity": "1350 mPa·s clear gel",
      "texture": "Custom personalized pink bloom",
      "actives": "Red 27 (CI 45410), Squalane, Tocopherol",
      "finish": "pH-reactive crystal glow"
    },
    "packagingOptions": {
      "tubeType": "Electroplated rose gold cap vial",
      "wandType": "Fine filament brush",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "pH Color-Changing Glow Lip Gloss Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label ph color-changing glow lip gloss contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-01",
    "slug": "lm-01-airy-velvet-matte-lip-mud",
    "name": "Airy Velvet Matte Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Micro-blur velvet mud",
    "headline": "Whipped micro-silicone powder clay delivering instant blurred soft-focus",
    "description": "Custom B2B manufacturing for Airy Velvet Matte Lip Mud. Featuring Dimethicone crosspolymer, Silica microspheres with soft-focus powdery matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-1.jpg",
    "galleryImages": [
      "/products/nas-sync-39-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 24,
    "formulaSpecs": {
      "viscosity": "High-shear whipped paste",
      "texture": "Micro-blur velvet mud",
      "actives": "Dimethicone crosspolymer, Silica microspheres",
      "finish": "Soft-focus powdery matte"
    },
    "packagingOptions": {
      "tubeType": "Frosted square mini-pot / wand tube",
      "wandType": "Mini fingertip doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Airy Velvet Matte Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label airy velvet matte lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-02",
    "slug": "lm-02-cloud-mousse-blurring-lip-clay",
    "name": "Cloud Mousse Blurring Lip Clay",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Cloud-feel pore-blurring clay",
    "headline": "Ultra-featherweight marshmallow cloud texture that blurs deep lip creases",
    "description": "Custom B2B manufacturing for Cloud Mousse Blurring Lip Clay. Featuring Polymethylsilsesquioxane, Macadamia oil with diffused cloud matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-2.jpg",
    "galleryImages": [
      "/products/nas-sync-39-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 18,
    "formulaSpecs": {
      "viscosity": "Averaged 42000 mPa·s mousse",
      "texture": "Cloud-feel pore-blurring clay",
      "actives": "Polymethylsilsesquioxane, Macadamia oil",
      "finish": "Diffused cloud matte"
    },
    "packagingOptions": {
      "tubeType": "Soft-touch matte coated tube",
      "wandType": "Wide-surface sponge spatula",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Cloud Mousse Blurring Lip Clay Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label cloud mousse blurring lip clay contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-03",
    "slug": "lm-03-silky-marshmallow-transfer-proof-mud",
    "name": "Silky Marshmallow Transfer-Proof Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Mask-proof velvet mud",
    "headline": "Quick-setting volatile elastomer matrix ensuring minimal mask transfer",
    "description": "Custom B2B manufacturing for Silky Marshmallow Transfer-Proof Lip Mud. Featuring Isododecane, Trimethylsiloxysilicate with transfer-resistant matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-3.jpg",
    "galleryImages": [
      "/products/nas-sync-39-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "Smooth buttery mud",
      "texture": "Mask-proof velvet mud",
      "actives": "Isododecane, Trimethylsiloxysilicate",
      "finish": "Transfer-resistant matte"
    },
    "packagingOptions": {
      "tubeType": "Airtight leak-proof wiper tube",
      "wandType": "Angle-cut flocked wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Silky Marshmallow Transfer-Proof Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label silky marshmallow transfer-proof lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-04",
    "slug": "lm-04-dual-use-lip-and-cheek-soft-clay",
    "name": "Dual-Use Lip & Cheek Soft Velvet Clay",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Hybrid 2-in-1 lip & cheek clay",
    "headline": "Blendable multi-use paste melting effortlessly into lips and cheekbones",
    "description": "Custom B2B manufacturing for Dual-Use Lip & Cheek Soft Velvet Clay. Featuring Caprylic/Capric triglyceride, Kaolin clay with natural matte flush. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-4.jpg",
    "galleryImages": [
      "/products/nas-sync-39-4.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 14,
    "formulaSpecs": {
      "viscosity": "Semi-solid cream-to-powder",
      "texture": "Hybrid 2-in-1 lip & cheek clay",
      "actives": "Caprylic/Capric triglyceride, Kaolin clay",
      "finish": "Natural matte flush"
    },
    "packagingOptions": {
      "tubeType": "Compact acrylic jar with magnetic seal",
      "wandType": "Spatula or finger application",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Dual-Use Lip & Cheek Soft Velvet Clay Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label dual-use lip & cheek soft velvet clay contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-05",
    "slug": "lm-05-deep-pigment-vintage-matte-lip-mud",
    "name": "Deep Pigment Vintage Matte Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Single-swipe opaque saturation",
    "headline": "High-density mineral lake pigments for single-swipe opaque coverage",
    "description": "Custom B2B manufacturing for Deep Pigment Vintage Matte Lip Mud. Featuring Cosmetic lake dispersions, Jojoba ester with vintage flat matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-5.jpg",
    "galleryImages": [
      "/products/nas-sync-39-5.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 20,
    "formulaSpecs": {
      "viscosity": "Dense silky clay",
      "texture": "Single-swipe opaque saturation",
      "actives": "Cosmetic lake dispersions, Jojoba ester",
      "finish": "Vintage flat matte"
    },
    "packagingOptions": {
      "tubeType": "Heavy-weight architectural square tube",
      "wandType": "Precision sculpted paddle",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Deep Pigment Vintage Matte Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label deep pigment vintage matte lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-06",
    "slug": "lm-06-whipped-souffle-hydration-matte-mud",
    "name": "Whipped Soufflé Hydration Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Hydrated non-drying matte",
    "headline": "Moisturizing ceramide complex encapsulated inside matte elastomer powder",
    "description": "Custom B2B manufacturing for Whipped Soufflé Hydration Lip Mud. Featuring Ceramide NP, Sodium hyaluronate, Vitamin E with comfort moisture-matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-7.jpg",
    "galleryImages": [
      "/products/nas-sync-39-7.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Aerated soufflé cream",
      "texture": "Hydrated non-drying matte",
      "actives": "Ceramide NP, Sodium hyaluronate, Vitamin E",
      "finish": "Comfort moisture-matte"
    },
    "packagingOptions": {
      "tubeType": "Double-wall acrylic pot with airless pump",
      "wandType": "Precision pump or wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Whipped Soufflé Hydration Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label whipped soufflé hydration lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-07",
    "slug": "lm-07-ultra-light-featherweight-lip-paste",
    "name": "Ultra-Light Featherweight Lip Paste",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Weightless invisible feel",
    "headline": "Zero-weight sensation that feels like wearing nothing on the lips",
    "description": "Custom B2B manufacturing for Ultra-Light Featherweight Lip Paste. Featuring Dimethicone/Vinyl crosspolymer with bespoke sheer velvet. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39.jpg",
    "galleryImages": [
      "/products/nas-sync-39.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 15,
    "formulaSpecs": {
      "viscosity": "Low-viscosity aerated mud",
      "texture": "Weightless invisible feel",
      "actives": "Dimethicone/Vinyl crosspolymer",
      "finish": "Bespoke sheer velvet"
    },
    "packagingOptions": {
      "tubeType": "Slim pocket-friendly pen tube",
      "wandType": "Fine fiber brush tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Ultra-Light Featherweight Lip Paste Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label ultra-light featherweight lip paste contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-08",
    "slug": "lm-08-cashmere-touch-creamy-lip-mud",
    "name": "Cashmere-Touch Creamy Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Cashmere drape & softness",
    "headline": "Luxury grade sensory emollients creating rich cashmere-smooth glide",
    "description": "Custom B2B manufacturing for Cashmere-Touch Creamy Lip Mud. Featuring Astrocaryum murumuru butter, Peptides with luxury demi-matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-2.jpg",
    "galleryImages": [
      "/products/nas-sync-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "Rich whipped butter-mud",
      "texture": "Cashmere drape & softness",
      "actives": "Astrocaryum murumuru butter, Peptides",
      "finish": "Luxury demi-matte"
    },
    "packagingOptions": {
      "tubeType": "Metallic zamac-collared vial",
      "wandType": "Ergonomic leaf-shape doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Cashmere-Touch Creamy Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label cashmere-touch creamy lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-09",
    "slug": "lm-09-tea-extract-anti-oxidant-lip-mud",
    "name": "Green Tea Polyphenol Matte Lip Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "Antioxidant skin-care matte",
    "headline": "Infused with Camellia sinensis extract to defend against daily oxidants",
    "description": "Custom B2B manufacturing for Green Tea Polyphenol Matte Lip Mud. Featuring Green tea EGCG, Squalane, Mica with earthy soft matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-1.jpg",
    "galleryImages": [
      "/products/nas-sync-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 10,
    "formulaSpecs": {
      "viscosity": "Smooth antioxidant mud",
      "texture": "Antioxidant skin-care matte",
      "actives": "Green tea EGCG, Squalane, Mica",
      "finish": "Earthy soft matte"
    },
    "packagingOptions": {
      "tubeType": "Eco-friendly biodegradable PLA casing",
      "wandType": "Soft organic fiber tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Green Tea Polyphenol Matte Lip Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label green tea polyphenol matte lip mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LM-10",
    "slug": "lm-10-long-wear-smooth-gliding-matte-mud",
    "name": "Long-Wear Smooth Gliding Matte Mud",
    "category": "Lip Mud",
    "categorySlug": "lip-mud-manufacturer",
    "tag": "10-hour flexible wear mud",
    "headline": "Film-former fortified velvet mud tested for 10-hour non-flaking wear",
    "description": "Custom B2B manufacturing for Long-Wear Smooth Gliding Matte Mud. Featuring Acrylates copolymer, Castor seed oil with flexible non-cracking matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-h5957d2fb5d5a4ed4a207672f1f9d904cd.jpg",
    "galleryImages": [
      "/products/nas-sync-h5957d2fb5d5a4ed4a207672f1f9d904cd.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 18,
    "formulaSpecs": {
      "viscosity": "Silky self-smoothing paste",
      "texture": "10-hour flexible wear mud",
      "actives": "Acrylates copolymer, Castor seed oil",
      "finish": "Flexible non-cracking matte"
    },
    "packagingOptions": {
      "tubeType": "Clear-window graduated tube",
      "wandType": "Pointed-edge flock applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Long-Wear Smooth Gliding Matte Mud Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label long-wear smooth gliding matte mud contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-01",
    "slug": "ll-01-waterproof-gel-twist-lip-liner",
    "name": "Waterproof Gel Twist Mechanical Lip Liner",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Precision waterproof contour",
    "headline": "Retractable 2mm micro-gel core with instant waterproof setting power",
    "description": "Custom B2B manufacturing for Waterproof Gel Twist Mechanical Lip Liner. Featuring Synthetic wax, Isododecane, Microcrystalline wax with matte waterproof film. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-01-1.jpg",
    "galleryImages": [
      "/products/auto-01-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 20,
    "formulaSpecs": {
      "viscosity": "Silicone wax gel stick",
      "texture": "Precision waterproof contour",
      "actives": "Synthetic wax, Isododecane, Microcrystalline wax",
      "finish": "Matte waterproof film"
    },
    "packagingOptions": {
      "tubeType": "Retractable mechanical barrel with built-in sharpener",
      "wandType": "2.0mm micro-twist core",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Waterproof Gel Twist Mechanical Lip Liner Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label waterproof gel twist mechanical lip liner contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-02",
    "slug": "ll-02-traditional-cedar-wood-precision-pencil",
    "name": "Traditional Cedarwood Precision Lip Pencil",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Artisan ultra-sharp definition",
    "headline": "Sustainable Californian cedarwood barrel offering ultra-sharp line fidelity",
    "description": "Custom B2B manufacturing for Traditional Cedarwood Precision Lip Pencil. Featuring Hydrogenated palm kernel glycerides, Carnauba with classic velvet matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-01-2.jpg",
    "galleryImages": [
      "/products/auto-01-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 28,
    "formulaSpecs": {
      "viscosity": "High-density pigment wax",
      "texture": "Artisan ultra-sharp definition",
      "actives": "Hydrogenated palm kernel glycerides, Carnauba",
      "finish": "Classic velvet matte"
    },
    "packagingOptions": {
      "tubeType": "Sharpenable Californian cedarwood",
      "wandType": "Standard cosmetic pencil tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Traditional Cedarwood Precision Lip Pencil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label traditional cedarwood precision lip pencil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-03",
    "slug": "ll-03-ultra-fine-micro-sculpting-lip-liner",
    "name": "1.5mm Micro-Sculpting Lip Contour Liner",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Micro-contour lip definition",
    "headline": "Ultra-slim lead engineered for micro-filling and realistic lip enhancement",
    "description": "Custom B2B manufacturing for 1.5mm Micro-Sculpting Lip Contour Liner. Featuring Cyclopentasiloxane, Trimethylsiloxysilicate with transfer-resistant matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-01-3.jpg",
    "galleryImages": [
      "/products/auto-01-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 14,
    "formulaSpecs": {
      "viscosity": "Reinforced micro-gel core",
      "texture": "Micro-contour lip definition",
      "actives": "Cyclopentasiloxane, Trimethylsiloxysilicate",
      "finish": "Transfer-resistant matte"
    },
    "packagingOptions": {
      "tubeType": "1.5mm ultra-slim mechanical barrel",
      "wandType": "1.5mm micro-lead",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "1.5mm Micro-Sculpting Lip Contour Liner Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 1.5mm micro-sculpting lip contour liner contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-04",
    "slug": "ll-04-matte-contouring-plumping-lip-shaper",
    "name": "3D Contouring Plumping Lip Shaper",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "3D plumping boundary definer",
    "headline": "Infused with ginger root resin & menthyl lactate for subtle edge contour",
    "description": "Custom B2B manufacturing for 3D Contouring Plumping Lip Shaper. Featuring Zingiber officinale extract, Menthol with velvety contour matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-01-4.jpg",
    "galleryImages": [
      "/products/auto-01-4.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Cushioned glide wax",
      "texture": "3D plumping boundary definer",
      "actives": "Zingiber officinale extract, Menthol",
      "finish": "Velvety contour matte"
    },
    "packagingOptions": {
      "tubeType": "Chubby mechanical twist-up pencil",
      "wandType": "Conical teardrop tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "3D Contouring Plumping Lip Shaper Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 3d contouring plumping lip shaper contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-05",
    "slug": "ll-05-smudge-proof-24h-stay-lip-pencil",
    "name": "24H Smudge-Proof Lock Lip Pencil",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "24H high-endurance barrier",
    "headline": "Tested resistant to sweat, sebum, and beverage transfer across 24 hours",
    "description": "Custom B2B manufacturing for 24H Smudge-Proof Lock Lip Pencil. Featuring Dimethicone, Polyethylene, Ceresin with indelible matte barrier. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-01-5.jpg",
    "galleryImages": [
      "/products/auto-01-5.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "Rapid-dry film-forming wax",
      "texture": "24H high-endurance barrier",
      "actives": "Dimethicone, Polyethylene, Ceresin",
      "finish": "Indelible matte barrier"
    },
    "packagingOptions": {
      "tubeType": "Airtight capped mechanical barrel",
      "wandType": "Precision bevel tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "24H Smudge-Proof Lock Lip Pencil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 24h smudge-proof lock lip pencil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-06",
    "slug": "ll-06-dual-ended-liner-with-blending-brush",
    "name": "Dual-Ended Lip Liner with Kabuki Brush",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Pro-artist ombre blending",
    "headline": "Precision liner on one end and synthetic micro-blending brush on the other",
    "description": "Custom B2B manufacturing for Dual-Ended Lip Liner with Kabuki Brush. Featuring Meadowfoam seed oil, Candelilla wax with seamless gradient matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-02-1.jpg",
    "galleryImages": [
      "/products/auto-02-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 18,
    "formulaSpecs": {
      "viscosity": "Cream-to-powder gel wax",
      "texture": "Pro-artist ombre blending",
      "actives": "Meadowfoam seed oil, Candelilla wax",
      "finish": "Seamless gradient matte"
    },
    "packagingOptions": {
      "tubeType": "Dual-ended aluminum-accented barrel",
      "wandType": "Liner tip + angled synthetic kabuki brush",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Dual-Ended Lip Liner with Kabuki Brush Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label dual-ended lip liner with kabuki brush contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-07",
    "slug": "ll-07-vegan-plant-wax-nourishing-liner",
    "name": "Clean Vegan Plant-Wax Nourishing Liner",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Clean beauty certified contour",
    "headline": "100% beeswax-free clean formula utilizing sunflower and rice bran wax",
    "description": "Custom B2B manufacturing for Clean Vegan Plant-Wax Nourishing Liner. Featuring Oryza sativa bran wax, Sunflower wax, Shea with comfortable satin matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-02-2.jpg",
    "galleryImages": [
      "/products/auto-02-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 15,
    "formulaSpecs": {
      "viscosity": "Nourishing botanical wax core",
      "texture": "Clean beauty certified contour",
      "actives": "Oryza sativa bran wax, Sunflower wax, Shea",
      "finish": "Comfortable satin matte"
    },
    "packagingOptions": {
      "tubeType": "Eco-certified FSC wood pencil",
      "wandType": "Sharpenable wooden lead",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Clean Vegan Plant-Wax Nourishing Liner Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label clean vegan plant-wax nourishing liner contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-08",
    "slug": "ll-08-nude-base-correcting-lip-definer",
    "name": "Nude Base Correcting & Neutralizing Definer",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Hyperpigmentation lip corrector",
    "headline": "Formulated to neutralize uneven lip hyperpigmentation prior to color application",
    "description": "Custom B2B manufacturing for Nude Base Correcting & Neutralizing Definer. Featuring Titanium dioxide, Zinc oxide, Squalane with color-neutralizing matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-02-3.jpg",
    "galleryImages": [
      "/products/auto-02-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 8,
    "formulaSpecs": {
      "viscosity": "High-coverage opaque wax",
      "texture": "Hyperpigmentation lip corrector",
      "actives": "Titanium dioxide, Zinc oxide, Squalane",
      "finish": "Color-neutralizing matte"
    },
    "packagingOptions": {
      "tubeType": "Medium mechanical twist pencil",
      "wandType": "Bullet-shaped contour lead",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Nude Base Correcting & Neutralizing Definer Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label nude base correcting & neutralizing definer contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-09",
    "slug": "ll-09-creamy-glide-pigmented-lip-contour",
    "name": "Creamy-Glide High-Pigment Lip Contour",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Skip-free buttery glide",
    "headline": "Effortless skip-free glide that never tugs or pulls fragile lip skin",
    "description": "Custom B2B manufacturing for Creamy-Glide High-Pigment Lip Contour. Featuring Cocoa seed butter, Tocopheryl acetate with rich satin-matte finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-03-1.jpg",
    "galleryImages": [
      "/products/auto-03-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 22,
    "formulaSpecs": {
      "viscosity": "Soft-touch creamy wax",
      "texture": "Skip-free buttery glide",
      "actives": "Cocoa seed butter, Tocopheryl acetate",
      "finish": "Rich satin-matte finish"
    },
    "packagingOptions": {
      "tubeType": "Matte finish twist-up barrel",
      "wandType": "Rounded crayon point",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Creamy-Glide High-Pigment Lip Contour Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label creamy-glide high-pigment lip contour contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LL-10",
    "slug": "ll-10-fade-resistant-all-day-lip-barrier",
    "name": "Invisible Anti-Feathering Lip Barrier Pencil",
    "category": "Lip Liner",
    "categorySlug": "lip-liner-manufacturer",
    "tag": "Universal anti-feathering barrier",
    "headline": "Transparent silica-wax core preventing bleeding and feathering of rich glosses",
    "description": "Custom B2B manufacturing for Invisible Anti-Feathering Lip Barrier Pencil. Featuring Silica, Ozokerite, Dimethicone with invisible lock barrier. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-03-2.jpg",
    "galleryImages": [
      "/products/auto-03-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 1,
    "formulaSpecs": {
      "viscosity": "Clear silica-wax polymer",
      "texture": "Universal anti-feathering barrier",
      "actives": "Silica, Ozokerite, Dimethicone",
      "finish": "Invisible lock barrier"
    },
    "packagingOptions": {
      "tubeType": "Clear-capped white twist barrel",
      "wandType": "Universal clear core",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Invisible Anti-Feathering Lip Barrier Pencil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label invisible anti-feathering lip barrier pencil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-01",
    "slug": "ls-01-classic-satin-moisturizing-bullet",
    "name": "Classic Satin Moisturizing Bullet Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Iconic luxury satin lipstick",
    "headline": "Timeless luxury satin formula offering rich payoff and deep conditioning",
    "description": "Custom B2B manufacturing for Classic Satin Moisturizing Bullet Lipstick. Featuring Castor seed oil, Candelilla wax, Vitamin E with luminous satin sheen. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-04-1.jpg",
    "galleryImages": [
      "/products/auto-04-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 36,
    "formulaSpecs": {
      "viscosity": "Extruded high-tensile bullet",
      "texture": "Iconic luxury satin lipstick",
      "actives": "Castor seed oil, Candelilla wax, Vitamin E",
      "finish": "Luminous satin sheen"
    },
    "packagingOptions": {
      "tubeType": "Heavyweight brass or aluminum bullet casing",
      "wandType": "Classic tear-drop bullet mold",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Classic Satin Moisturizing Bullet Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label classic satin moisturizing bullet lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-02",
    "slug": "ls-02-ultra-matte-weightless-lipstick",
    "name": "Ultra-Matte Weightless Powder Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Powder-cloud modern matte",
    "headline": "Airbrushed powdery matte lipstick delivering intense color with zero drag",
    "description": "Custom B2B manufacturing for Ultra-Matte Weightless Powder Lipstick. Featuring Polymethylsilsesquioxane, Shea butter with airbrushed soft matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-04-2.jpg",
    "galleryImages": [
      "/products/auto-04-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 24,
    "formulaSpecs": {
      "viscosity": "Dry-touch powder-gel stick",
      "texture": "Powder-cloud modern matte",
      "actives": "Polymethylsilsesquioxane, Shea butter",
      "finish": "Airbrushed soft matte"
    },
    "packagingOptions": {
      "tubeType": "Square soft-touch matte case",
      "wandType": "Sharp-angle architectural bullet",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Ultra-Matte Weightless Powder Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label ultra-matte weightless powder lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-03",
    "slug": "ls-03-magnetic-luxury-creamy-lipstick",
    "name": "Magnetic Luxury Creamy Lip Bullet",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Prestige magnetic click lipstick",
    "headline": "Prestige 350g magnetic snap closure with opulent rich emollient formulation",
    "description": "Custom B2B manufacturing for Magnetic Luxury Creamy Lip Bullet. Featuring Murumuru butter, Camellia japonica oil with rich luminous cream. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-04-3.jpg",
    "galleryImages": [
      "/products/auto-04-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 20,
    "formulaSpecs": {
      "viscosity": "Buttery dense lipstick core",
      "texture": "Prestige magnetic click lipstick",
      "actives": "Murumuru butter, Camellia japonica oil",
      "finish": "Rich luminous cream"
    },
    "packagingOptions": {
      "tubeType": "Custom magnetic snap-closure zamac shell",
      "wandType": "Diamond-embossed bullet tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Magnetic Luxury Creamy Lip Bullet Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label magnetic luxury creamy lip bullet contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-04",
    "slug": "ls-04-sheer-shine-butter-balm-lipstick",
    "name": "Sheer Shine Butter Balm Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Melting butter shine lipstick",
    "headline": "Melt-on-contact glossy balm bullet that turns into a reflective oil veil",
    "description": "Custom B2B manufacturing for Sheer Shine Butter Balm Lipstick. Featuring Mango seed butter, Polybutene, Phytosteryl with high-gloss reflective glaze. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-05-1.jpg",
    "galleryImages": [
      "/products/auto-05-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "Low-melting-point lipid stick",
      "texture": "Melting butter shine lipstick",
      "actives": "Mango seed butter, Polybutene, Phytosteryl",
      "finish": "High-gloss reflective glaze"
    },
    "packagingOptions": {
      "tubeType": "Slim-line click-pen or aluminum tube",
      "wandType": "Slanted flat-top bullet",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Sheer Shine Butter Balm Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label sheer shine butter balm lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-05",
    "slug": "ls-05-long-lasting-transfer-resistant-lipstick",
    "name": "Long-Lasting Transfer-Resistant Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "All-day smudge-free lipstick",
    "headline": "Dual-phase lipstick locking pigment molecules securely against lip tissue",
    "description": "Custom B2B manufacturing for Long-Lasting Transfer-Resistant Lipstick. Featuring Silicone resin, Carnauba wax, Silica with transfer-resistant semi-matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-05-2.jpg",
    "galleryImages": [
      "/products/auto-05-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 18,
    "formulaSpecs": {
      "viscosity": "Firm structured film-stick",
      "texture": "All-day smudge-free lipstick",
      "actives": "Silicone resin, Carnauba wax, Silica",
      "finish": "Transfer-resistant semi-matte"
    },
    "packagingOptions": {
      "tubeType": "Airtight gasket-sealed metal case",
      "wandType": "Slim drop bullet mold",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Long-Lasting Transfer-Resistant Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label long-lasting transfer-resistant lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-06",
    "slug": "ls-06-anti-aging-peptide-firming-lipstick",
    "name": "Anti-Aging Peptide Firming Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Anti-wrinkle peptide lipstick",
    "headline": "Encapsulated Matrixyl 3000 & hyaluronic spheres to visibly restore lip density",
    "description": "Custom B2B manufacturing for Anti-Aging Peptide Firming Lipstick. Featuring Palmitoyl tripeptide-1, Sodium hyaluronate with plumping dewy satin. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-05-3.jpg",
    "galleryImages": [
      "/products/auto-05-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 16,
    "formulaSpecs": {
      "viscosity": "Nutritive anti-aging core",
      "texture": "Anti-wrinkle peptide lipstick",
      "actives": "Palmitoyl tripeptide-1, Sodium hyaluronate",
      "finish": "Plumping dewy satin"
    },
    "packagingOptions": {
      "tubeType": "Rose gold electroplated luxury case",
      "wandType": "Classic teardrop bullet",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Anti-Aging Peptide Firming Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label anti-aging peptide firming lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-07",
    "slug": "ls-07-semi-matte-velvet-cushion-lipstick",
    "name": "Semi-Matte Velvet Cushion Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "All-day comfort velvet",
    "headline": "Balance between hydration and soft-focus texture for comfortable day-to-night wear",
    "description": "Custom B2B manufacturing for Semi-Matte Velvet Cushion Lipstick. Featuring Jojoba esters, Hydrogenated polycyclopentadiene with velvety demi-matte. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-06-1.jpg",
    "galleryImages": [
      "/products/auto-06-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 22,
    "formulaSpecs": {
      "viscosity": "Silky elastic lipid bullet",
      "texture": "All-day comfort velvet",
      "actives": "Jojoba esters, Hydrogenated polycyclopentadiene",
      "finish": "Velvety demi-matte"
    },
    "packagingOptions": {
      "tubeType": "Minimalist Scandinavian acrylic-cased bullet",
      "wandType": "Contour-hugging curved tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Semi-Matte Velvet Cushion Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label semi-matte velvet cushion lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-08",
    "slug": "ls-08-shimmer-foil-metallic-party-lipstick",
    "name": "Shimmer Foil Metallic Party Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Jeweled glitter-core lipstick",
    "headline": "Surface coated with micro-fine diamond glitter spray for dazzling retail presentation",
    "description": "Custom B2B manufacturing for Shimmer Foil Metallic Party Lipstick. Featuring Calcium sodium borosilicate, Squalane with multidimensional diamond sparkle. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/auto-06-2.jpg",
    "galleryImages": [
      "/products/auto-06-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "High-luster metallic bullet",
      "texture": "Jeweled glitter-core lipstick",
      "actives": "Calcium sodium borosilicate, Squalane",
      "finish": "Multidimensional diamond sparkle"
    },
    "packagingOptions": {
      "tubeType": "Glitter-lacquered magnetic case",
      "wandType": "Faceted gemstone bullet mold",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Shimmer Foil Metallic Party Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label shimmer foil metallic party lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-09",
    "slug": "ls-09-clean-mineral-pigment-lipstick",
    "name": "Clean Mineral Pigment Sensitive Lip Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Clean beauty sensitive lipstick",
    "headline": "EWG-compliant, fragrance-free formula created exclusively with purified mineral oxides",
    "description": "Custom B2B manufacturing for Clean Mineral Pigment Sensitive Lip Lipstick. Featuring Zinc oxide, Iron oxides, Organic jojoba with healthy nourishing cream. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-img-0266.jpg",
    "galleryImages": [
      "/products/nas-sync-img-0266.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 14,
    "formulaSpecs": {
      "viscosity": "Gentle hypoallergenic stick",
      "texture": "Clean beauty sensitive lipstick",
      "actives": "Zinc oxide, Iron oxides, Organic jojoba",
      "finish": "Healthy nourishing cream"
    },
    "packagingOptions": {
      "tubeType": "Post-consumer recycled (PCR) aluminum tube",
      "wandType": "Classic rounded bullet",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Clean Mineral Pigment Sensitive Lip Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label clean mineral pigment sensitive lip lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LS-10",
    "slug": "ls-10-refillable-eco-luxury-lipstick",
    "name": "Refillable Eco-Luxury Aluminum Lipstick",
    "category": "Lipstick",
    "categorySlug": "lipstick-manufacturer",
    "tag": "Sustainable refillable luxury",
    "headline": "Removable inner cartridge system reducing secondary packaging waste by 65%",
    "description": "Custom B2B manufacturing for Refillable Eco-Luxury Aluminum Lipstick. Featuring Botanical waxes, Tripeptide-38, Vitamin E with prestige satin or matte finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-img-0293.jpg",
    "galleryImages": [
      "/products/nas-sync-img-0293.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 24,
    "formulaSpecs": {
      "viscosity": "Interchangeable bullet core",
      "texture": "Sustainable refillable luxury",
      "actives": "Botanical waxes, Tripeptide-38, Vitamin E",
      "finish": "Prestige satin or matte finish"
    },
    "packagingOptions": {
      "tubeType": "Precision-milled aerospace aluminum refill shell",
      "wandType": "Refillable magnetic modular bullet",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Refillable Eco-Luxury Aluminum Lipstick Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label refillable eco-luxury aluminum lipstick contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-01",
    "slug": "lo-01-pure-botanical-nourishing-lip-oil",
    "name": "7-Botanical Pure Nourishing Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Pure botanical golden elixir",
    "headline": "Golden cold-pressed lipid blend: jojoba, rosehip, avocado, argan, marula, almond, camellia",
    "description": "Custom B2B manufacturing for 7-Botanical Pure Nourishing Lip Oil. Featuring Rosehip oil, Jojoba oil, Marula oil with mirror-finish nourishing veil. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-collection-01.jpg",
    "galleryImages": [
      "/products/lipgloss-collection-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 8,
    "formulaSpecs": {
      "viscosity": "1100 mPa·s cushion oil",
      "texture": "Pure botanical golden elixir",
      "actives": "Rosehip oil, Jojoba oil, Marula oil",
      "finish": "Mirror-finish nourishing veil"
    },
    "packagingOptions": {
      "tubeType": "Clear thick-wall acrylic vial with gold collar",
      "wandType": "Extra-large plush cloud applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "7-Botanical Pure Nourishing Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 7-botanical pure nourishing lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-02",
    "slug": "lo-02-color-reviving-ph-smart-lip-oil",
    "name": "pH-Smart Color-Reviving Glow Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Intuitive personalized tint oil",
    "headline": "Micro-encapsulated red pigments that react to skin warmth for an organic flush",
    "description": "Custom B2B manufacturing for pH-Smart Color-Reviving Glow Lip Oil. Featuring CI 45410, Meadowfoam seed oil, Tocopherol with luminous bespoke pink glow. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-shades.jpg",
    "galleryImages": [
      "/products/lipgloss-shades.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 5,
    "formulaSpecs": {
      "viscosity": "950 mPa·s sheer oil",
      "texture": "Intuitive personalized tint oil",
      "actives": "CI 45410, Meadowfoam seed oil, Tocopherol",
      "finish": "Luminous bespoke pink glow"
    },
    "packagingOptions": {
      "tubeType": "Gradient printed clear vial",
      "wandType": "Flex-paddle flock wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "pH-Smart Color-Reviving Glow Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label ph-smart color-reviving glow lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-03",
    "slug": "lo-03-hyaluronic-acid-plumping-lip-nectar",
    "name": "5D Hyaluronic Acid Plumping Lip Nectar",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Multi-depth cellular hydration oil",
    "headline": "5 molecular weights of hyaluronic acid delivering multi-depth cellular hydration",
    "description": "Custom B2B manufacturing for 5D Hyaluronic Acid Plumping Lip Nectar. Featuring 5D Hyaluronic complex, Squalane with ultra-plump water shine. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-26-01.jpg",
    "galleryImages": [
      "/products/lipgloss-26-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 10,
    "formulaSpecs": {
      "viscosity": "1300 mPa·s nectar fluid",
      "texture": "Multi-depth cellular hydration oil",
      "actives": "5D Hyaluronic complex, Squalane",
      "finish": "Ultra-plump water shine"
    },
    "packagingOptions": {
      "tubeType": "Frosted cylindrical glass-touch vial",
      "wandType": "Large reservoir doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "5D Hyaluronic Acid Plumping Lip Nectar Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 5d hyaluronic acid plumping lip nectar contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-04",
    "slug": "lo-04-rosehip-squalane-barrier-repair-oil",
    "name": "Rosehip & Squalane Barrier Repair Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Lipid barrier recovery oil",
    "headline": "Lipid-replenishing formula targeting chronically dry, peeling and chapped lips",
    "description": "Custom B2B manufacturing for Rosehip & Squalane Barrier Repair Lip Oil. Featuring Organic Rosa canina, Olive squalane with soothing restorative cushion. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-26-03.jpg",
    "galleryImages": [
      "/products/lipgloss-26-03.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 6,
    "formulaSpecs": {
      "viscosity": "1250 mPa·s comfort oil",
      "texture": "Lipid barrier recovery oil",
      "actives": "Organic Rosa canina, Olive squalane",
      "finish": "Soothing restorative cushion"
    },
    "packagingOptions": {
      "tubeType": "Heavy-weight square vial with silver cap",
      "wandType": "Curved ergonomic silicone brush",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Rosehip & Squalane Barrier Repair Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label rosehip & squalane barrier repair lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-05",
    "slug": "lo-05-honey-peptide-conditioning-lip-serum",
    "name": "Manuka Honey & Peptide Lip Serum Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Medicinal honey treatment oil",
    "headline": "Pharmaceutical grade Manuka honey MGO 400+ paired with biomimetic copper peptides",
    "description": "Custom B2B manufacturing for Manuka Honey & Peptide Lip Serum Oil. Featuring Manuka honey extract, Copper tripeptide-1 with glossy restorative barrier. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-nude-01.jpg",
    "galleryImages": [
      "/products/lipgloss-nude-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 4,
    "formulaSpecs": {
      "viscosity": "1400 mPa·s rich serum-oil",
      "texture": "Medicinal honey treatment oil",
      "actives": "Manuka honey extract, Copper tripeptide-1",
      "finish": "Glossy restorative barrier"
    },
    "packagingOptions": {
      "tubeType": "Amber dropper vial or wand applicator",
      "wandType": "Dual-groove flock tip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Manuka Honey & Peptide Lip Serum Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label manuka honey & peptide lip serum oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-06",
    "slug": "lo-06-non-sticky-glossy-jelly-lip-oil",
    "name": "Non-Sticky Jelly Glaze Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Zero-stick glass glaze oil",
    "headline": "High molecular weight polymer creating wet-look shine with completely dry, non-tacky touch",
    "description": "Custom B2B manufacturing for Non-Sticky Jelly Glaze Lip Oil. Featuring Polyglyceryl-2 isostearate, Sunflower wax with non-sticky glass finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-slim-01.jpg",
    "galleryImages": [
      "/products/lipgloss-slim-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "900 mPa·s slip oil",
      "texture": "Zero-stick glass glaze oil",
      "actives": "Polyglyceryl-2 isostearate, Sunflower wax",
      "finish": "Non-sticky glass finish"
    },
    "packagingOptions": {
      "tubeType": "Crystal-clear faceted tube",
      "wandType": "High-capacity doe-foot wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Non-Sticky Jelly Glaze Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label non-sticky jelly glaze lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-07",
    "slug": "lo-07-night-recovery-intensive-lip-oil",
    "name": "Overnight Intensive Recovery Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Nocturnal cellular renewal oil",
    "headline": "Rich nighttime lip sleep serum infused with retinol palmitate & squalane",
    "description": "Custom B2B manufacturing for Overnight Intensive Recovery Lip Oil. Featuring Retinyl palmitate, Phytosterols, Bisabolol with rich protective sleep cushion. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-slim-06.jpg",
    "galleryImages": [
      "/products/lipgloss-slim-06.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 1,
    "formulaSpecs": {
      "viscosity": "1600 mPa·s concentrated oil",
      "texture": "Nocturnal cellular renewal oil",
      "actives": "Retinyl palmitate, Phytosterols, Bisabolol",
      "finish": "Rich protective sleep cushion"
    },
    "packagingOptions": {
      "tubeType": "Midnight plum coated UV glass vial",
      "wandType": "Oversized velvet applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Overnight Intensive Recovery Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label overnight intensive recovery lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-08",
    "slug": "lo-08-golden-sparkle-treatment-lip-oil",
    "name": "24K Golden Flake Infused Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "24K luxury gold treatment",
    "headline": "Suspended real 24-karat gold micro-leaf floating in a transparent nourishing squalane base",
    "description": "Custom B2B manufacturing for 24K Golden Flake Infused Lip Oil. Featuring 24K gold flakes, Plant squalane, Jojoba with radiant dewy gold reflection. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-01.jpg",
    "galleryImages": [
      "/products/lipgloss-39-01.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 3,
    "formulaSpecs": {
      "viscosity": "1050 mPa·s crystal fluid",
      "texture": "24K luxury gold treatment",
      "actives": "24K gold flakes, Plant squalane, Jojoba",
      "finish": "Radiant dewy gold reflection"
    },
    "packagingOptions": {
      "tubeType": "Octagonal luxury prestige vial",
      "wandType": "Gold-plated accent wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "24K Golden Flake Infused Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label 24k golden flake infused lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-09",
    "slug": "lo-09-cooling-mint-refreshing-lip-oil",
    "name": "Glacial Mint Invigorating Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "Glacial sensory refresh oil",
    "headline": "Swiss peppermint and spearmint essential oils delivering instant cooling sensations",
    "description": "Custom B2B manufacturing for Glacial Mint Invigorating Lip Oil. Featuring Mentha piperita oil, Eucalyptus extract with crisp fresh water shine. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-02.jpg",
    "galleryImages": [
      "/products/lipgloss-39-02.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 4,
    "formulaSpecs": {
      "viscosity": "980 mPa·s light fluid",
      "texture": "Glacial sensory refresh oil",
      "actives": "Mentha piperita oil, Eucalyptus extract",
      "finish": "Crisp fresh water shine"
    },
    "packagingOptions": {
      "tubeType": "Icy frosted acrylic tube with silver hardware",
      "wandType": "Cooling ceramic ball or doe-foot",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Glacial Mint Invigorating Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label glacial mint invigorating lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LO-10",
    "slug": "lo-10-sun-defense-spf15-protective-lip-oil",
    "name": "Broad Spectrum SPF 15 Daily Lip Oil",
    "category": "Lip Oil",
    "categorySlug": "lip-oil-manufacturer",
    "tag": "UV defensive sun shield oil",
    "headline": "Clear non-whitening chemical-free mineral sunscreen defense against photo-aging",
    "description": "Custom B2B manufacturing for Broad Spectrum SPF 15 Daily Lip Oil. Featuring Zinc oxide (nano-free dispersion), Vitamin E with non-greasy sun protection sheen. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/lipgloss-39-03.jpg",
    "galleryImages": [
      "/products/lipgloss-39-03.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 6,
    "formulaSpecs": {
      "viscosity": "1200 mPa·s protective veil",
      "texture": "UV defensive sun shield oil",
      "actives": "Zinc oxide (nano-free dispersion), Vitamin E",
      "finish": "Non-greasy sun protection sheen"
    },
    "packagingOptions": {
      "tubeType": "UV-stabilized barrier vial with safety cap",
      "wandType": "Soft angled velvet wand",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Broad Spectrum SPF 15 Daily Lip Oil Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label broad spectrum spf 15 daily lip oil contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-01",
    "slug": "lmk-01-berry-overnight-repair-lip-mask",
    "name": "Berry Complex Overnight Repair Lip Mask",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Overnight keratin repair mask",
    "headline": "Enriched with wild strawberry, raspberry, and goji berry extracts to dissolve dead lip cells",
    "description": "Custom B2B manufacturing for Berry Complex Overnight Repair Lip Mask. Featuring Berry fruit complex, Ascorbic acid, Shea with velvety protective film. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-1.jpg",
    "galleryImages": [
      "/products/nas-sync-39-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 4,
    "formulaSpecs": {
      "viscosity": "Rich balm-to-melt salve",
      "texture": "Overnight keratin repair mask",
      "actives": "Berry fruit complex, Ascorbic acid, Shea",
      "finish": "Velvety protective film"
    },
    "packagingOptions": {
      "tubeType": "20g frosted acrylic pot with silicone spatula",
      "wandType": "Jar with built-in spatula pouch",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Berry Complex Overnight Repair Lip Mask Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label berry complex overnight repair lip mask contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-02",
    "slug": "lmk-02-hydrogel-collagen-lip-patch-treatment",
    "name": "Hydrogel Collagen Plumping Lip Patches",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "15-minute emergency plump patch",
    "headline": "Transdermal hydrogel patches saturated in marine collagen, niacinamide & rose water",
    "description": "Custom B2B manufacturing for Hydrogel Collagen Plumping Lip Patches. Featuring Hydrolyzed collagen, Niacinamide, Rose water with intense moisture infusion. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-2.jpg",
    "galleryImages": [
      "/products/nas-sync-39-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Pre-soaked biocellulose hydrogel",
      "texture": "15-minute emergency plump patch",
      "actives": "Hydrolyzed collagen, Niacinamide, Rose water",
      "finish": "Intense moisture infusion"
    },
    "packagingOptions": {
      "tubeType": "Individually sealed foil sachet / 20-pack jar",
      "wandType": "Contoured lip-shaped hydrogel sheets",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Hydrogel Collagen Plumping Lip Patches Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label hydrogel collagen plumping lip patches contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-03",
    "slug": "lmk-03-propolis-moisture-barrier-sleeping-pack",
    "name": "Royal Jelly & Propolis Barrier Sleeping Pack",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Occlusive nutritive hive balm",
    "headline": "Concentrated hive nutrients creating an occlusive restorative cocoon for dry cracked lips",
    "description": "Custom B2B manufacturing for Royal Jelly & Propolis Barrier Sleeping Pack. Featuring Propolis extract, Royal jelly, Beeswax with nourishing dew wrap. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-3.jpg",
    "galleryImages": [
      "/products/nas-sync-39-3.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Dense honeyed ointment",
      "texture": "Occlusive nutritive hive balm",
      "actives": "Propolis extract, Royal jelly, Beeswax",
      "finish": "Nourishing dew wrap"
    },
    "packagingOptions": {
      "tubeType": "15g hexagonal pot with mini wooden honey dipper",
      "wandType": "Jar or squeeze tube",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Royal Jelly & Propolis Barrier Sleeping Pack Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label royal jelly & propolis barrier sleeping pack contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-04",
    "slug": "lmk-04-gentle-sugar-buff-exfoliating-lip-scrub",
    "name": "Natural Cane Sugar Gentle Lip Polish Scrub",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Gentle resurfacing polish",
    "headline": "Microfine brown sugar crystals suspended in coconut oil and sweet almond butter",
    "description": "Custom B2B manufacturing for Natural Cane Sugar Gentle Lip Polish Scrub. Featuring Sucrose, Coconut oil, Sweet almond oil with polished velvety soft canvas. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-4.jpg",
    "galleryImages": [
      "/products/nas-sync-39-4.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 3,
    "formulaSpecs": {
      "viscosity": "Micro-crystal sugar paste",
      "texture": "Gentle resurfacing polish",
      "actives": "Sucrose, Coconut oil, Sweet almond oil",
      "finish": "Polished velvety soft canvas"
    },
    "packagingOptions": {
      "tubeType": "30g wide-mouth glass jar",
      "wandType": "Fingertip or spatula scrub",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Natural Cane Sugar Gentle Lip Polish Scrub Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label natural cane sugar gentle lip polish scrub contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-05",
    "slug": "lmk-05-ceramide-rescue-lip-butter-salve",
    "name": "Triple Ceramide SOS Chapped Lip Salve",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Dermatological lipid recovery salve",
    "headline": "Physiological lipid ratio: Ceramides EOP, NP, AP + cholesterol for cracked lips",
    "description": "Custom B2B manufacturing for Triple Ceramide SOS Chapped Lip Salve. Featuring Ceramide 1, 3, 6-II, Phytosphingosine with non-sticky occlusive seal. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-5.jpg",
    "galleryImages": [
      "/products/nas-sync-39-5.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Rich pharmaceutical ointment",
      "texture": "Dermatological lipid recovery salve",
      "actives": "Ceramide 1, 3, 6-II, Phytosphingosine",
      "finish": "Non-sticky occlusive seal"
    },
    "packagingOptions": {
      "tubeType": "15ml medical-grade laminate squeeze tube",
      "wandType": "Slanted applicator nozzle",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Triple Ceramide SOS Chapped Lip Salve Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label triple ceramide sos chapped lip salve contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-06",
    "slug": "lmk-06-matcha-soothing-antioxidant-lip-balm",
    "name": "Uji Matcha Soothing Antioxidant Lip Balm",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Antioxidant calming green balm",
    "headline": "Organic ceremonial-grade Japanese green tea butter to calm inflamed lip borders",
    "description": "Custom B2B manufacturing for Uji Matcha Soothing Antioxidant Lip Balm. Featuring Organic matcha powder, Squalane, Murumuru with soft soothing matte barrier. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39-7.jpg",
    "galleryImages": [
      "/products/nas-sync-39-7.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Smooth herbal butter-balm",
      "texture": "Antioxidant calming green balm",
      "actives": "Organic matcha powder, Squalane, Murumuru",
      "finish": "Soft soothing matte barrier"
    },
    "packagingOptions": {
      "tubeType": "Bamboo-wrapped eco pot or tin",
      "wandType": "Spatula or clean fingertip",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Uji Matcha Soothing Antioxidant Lip Balm Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label uji matcha soothing antioxidant lip balm contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-07",
    "slug": "lmk-07-shea-vanilla-deep-conditioning-pot",
    "name": "Raw Shea & Bourbon Vanilla Conditioning Pot",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Ultra-rich comforting nourishment",
    "headline": "Unrefined African shea butter blended with real Madagascar vanilla bean oleoresin",
    "description": "Custom B2B manufacturing for Raw Shea & Bourbon Vanilla Conditioning Pot. Featuring Butyrospermum parkii, Vanilla planifolia extract with warm supple protective sheen. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-39.jpg",
    "galleryImages": [
      "/products/nas-sync-39.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Decadent whipped butter",
      "texture": "Ultra-rich comforting nourishment",
      "actives": "Butyrospermum parkii, Vanilla planifolia extract",
      "finish": "Warm supple protective sheen"
    },
    "packagingOptions": {
      "tubeType": "25g brushed aluminum recyclable tin",
      "wandType": "Pocket-friendly finger swirl",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Raw Shea & Bourbon Vanilla Conditioning Pot Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label raw shea & bourbon vanilla conditioning pot contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-08",
    "slug": "lmk-08-hyaluronic-acid-melt-in-lip-treatment",
    "name": "Melt-In Water Burst Hyaluronic Lip Cream",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Instant water-burst cream",
    "headline": "Emulsion technology that bursts into refreshing micro-droplets upon lip contact",
    "description": "Custom B2B manufacturing for Melt-In Water Burst Hyaluronic Lip Cream. Featuring Hyaluronic acid, Betaine, Trehalose with weightless dewy moisture veil. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-2.jpg",
    "galleryImages": [
      "/products/nas-sync-2.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Light transforming gel-cream",
      "texture": "Instant water-burst cream",
      "actives": "Hyaluronic acid, Betaine, Trehalose",
      "finish": "Weightless dewy moisture veil"
    },
    "packagingOptions": {
      "tubeType": "15ml airless pump tube with metal tip",
      "wandType": "Cooling zamac massage applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Melt-In Water Burst Hyaluronic Lip Cream Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label melt-in water burst hyaluronic lip cream contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-09",
    "slug": "lmk-09-peptide-firming-anti-wrinkle-lip-cream",
    "name": "Oligopeptide-1 Intensive Anti-Wrinkle Lip Cream",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Perioral wrinkle reduction cream",
    "headline": "Targeted formula reducing smoker lines, perioral wrinkles, and loss of vermilion definition",
    "description": "Custom B2B manufacturing for Oligopeptide-1 Intensive Anti-Wrinkle Lip Cream. Featuring Palmitoyl tripeptide-5, Oligopeptide-1, Retinol with silky semi-matte firming film. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-1.jpg",
    "galleryImages": [
      "/products/nas-sync-1.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 12,
    "formulaSpecs": {
      "viscosity": "Concentrated velvety emulsion",
      "texture": "Perioral wrinkle reduction cream",
      "actives": "Palmitoyl tripeptide-5, Oligopeptide-1, Retinol",
      "finish": "Silky semi-matte firming film"
    },
    "packagingOptions": {
      "tubeType": "10ml airless syringe-style precision pen",
      "wandType": "Silicone contour micro-applicator",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Oligopeptide-1 Intensive Anti-Wrinkle Lip Cream Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label oligopeptide-1 intensive anti-wrinkle lip cream contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  },
  {
    "id": "LMK-10",
    "slug": "lmk-10-tinted-glow-day-repair-lip-butter",
    "name": "Dewy Tinted Barrier Day Lip Butter",
    "category": "Lip Mask",
    "categorySlug": "lip-mask-manufacturer",
    "tag": "Multi-action tinted daily butter",
    "headline": "Multi-tasking day formula providing deep barrier moisture and fresh wash of color",
    "description": "Custom B2B manufacturing for Dewy Tinted Barrier Day Lip Butter. Featuring Cupuacu butter, Jojoba esters, Mineral tint with fresh dewy petal finish. Fully customizable formula viscosity, active concentrations, packaging components, and Pantone shade matching from 500 pieces MOQ.",
    "heroImage": "/products/nas-sync-h5957d2fb5d5a4ed4a207672f1f9d904cd.jpg",
    "galleryImages": [
      "/products/nas-sync-h5957d2fb5d5a4ed4a207672f1f9d904cd.jpg",
      "/factory/cleanroom-01.jpg",
      "/factory/production-line-01.jpg"
    ],
    "moq": "500 pcs per shade",
    "leadTime": "7 days sampling / 15-20 days bulk",
    "shadeCount": 6,
    "formulaSpecs": {
      "viscosity": "Melting cushion butter-salve",
      "texture": "Multi-action tinted daily butter",
      "actives": "Cupuacu butter, Jojoba esters, Mineral tint",
      "finish": "Fresh dewy petal finish"
    },
    "packagingOptions": {
      "tubeType": "15ml soft-touch squeeze tube with angled tip",
      "wandType": "Slanted ergonomic lip nozzle",
      "capFinish": "Custom UV metallized, soft-touch matte, or clear anodized"
    },
    "regulatory": "ISO 22716, GMPC, FDA Registered, EU CPNP Ready",
    "seoTitle": "Dewy Tinted Barrier Day Lip Butter Manufacturer | Custom Private Label — MLM Lip",
    "seoDescription": "Private label dewy tinted barrier day lip butter contract manufacturing. 500 pcs MOQ, 7-day lab prototypes, ISO 22716 cleanroom filling & full regulatory compliance."
  }
];
