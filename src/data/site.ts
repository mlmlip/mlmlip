// 业务口径已于 2026-09-21 经老板确认，依据见 ../../PLAN.md
// 文案声线由 OpenClaw (OC) 协同审定，对标欧美顶级代工标准 (HCT, Meiyume)
export const site = {
  name: 'MLM Lip',
  domain: 'https://mlmlip.com',
  tagline: 'Private Label Lip Cosmetics Engineered for High-Growth Beauty Brands',
  manufacturer: 'Beautychain Limited',
  moq: '500 pcs',
  contact: {
    whatsapp: '+86 136 5238 0291',
    whatsappLink: 'https://wa.me/8613652380291',
    email: 'nancy@mlmlip.com',
    address: 'Shenzhen, China'
  },
  nav: [
    { label: 'Products', href: '/products' },
    { label: 'Customization', href: '/customization' },
    { label: 'Process', href: '/process' },
    { label: 'Cases', href: '/cases' },
    { label: 'Samples', href: '/samples' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ]
};

// 国际化翻译字典 (i18n)
export const ui = {
  en: {
    nav: {
      products: 'Products', customization: 'Customization', process: 'Process', cases: 'Cases',
      samples: 'Samples', blog: 'Blog', about: 'About', quote: 'Get a quote', lang: 'Language:'
    },
    footer: {
      mfg: 'Manufacturing', touch: 'Get in touch',
      desc: 'Private label lip cosmetics manufacturing — packaging, formulation and logo customization from 500 pcs per SKU.'
    }
  },
  fr: {
    nav: {
      products: 'Produits', customization: 'Personnalisation', process: 'Processus', cases: 'Réalisations',
      samples: 'Échantillons', blog: 'Blog', about: 'À propos', quote: 'Devis', lang: 'Langue :'
    },
    footer: {
      mfg: 'Fabrication', touch: 'Contact',
      desc: 'Fabrication de cosmétiques pour les lèvres en marque blanche — personnalisation du packaging, de la formule et du logo dès 500 pcs.'
    }
  },
  es: {
    nav: {
      products: 'Productos', customization: 'Personalización', process: 'Proceso', cases: 'Proyectos',
      samples: 'Muestras', blog: 'Blog', about: 'Nosotros', quote: 'Presupuesto', lang: 'Idioma:'
    },
    footer: {
      mfg: 'Fabricación', touch: 'Contacto',
      desc: 'Fabricación de cosméticos labiales marca blanca — personalización de envases, fórmulas y logotipos desde 500 uds.'
    }
  }
};

export const navKeys = ['products', 'customization', 'process', 'cases', 'samples', 'blog', 'about'] as const;
export const navLinks = { products: '/products', customization: '/customization', process: '/process', cases: '/cases', samples: '/samples', blog: '/blog', about: '/about' };

// 页脚内链（SEO：品类落地页 + 关键页）
export const footerCategories = [
  { label: 'Lip Gloss Manufacturer', href: '/lip-gloss-manufacturer' },
  { label: 'Lip Mud & Velvet Tint', href: '/lip-mud-manufacturer' },
  { label: 'Lip Liner Manufacturer', href: '/lip-liner-manufacturer' },
  { label: 'Lipstick Manufacturer', href: '/lipstick-manufacturer' },
  { label: 'Lip Oil Manufacturer', href: '/lip-oil-manufacturer' },
  { label: 'Lip Mask Manufacturer', href: '/lip-mask-manufacturer' }
];

export const footerCompany = [
  { label: 'Products', href: '/products' },
  { label: 'Customization', href: '/customization' },
  { label: 'How We Work', href: '/process' },
  { label: 'Cases & Factory', href: '/cases' },
  { label: 'Order Samples', href: '/samples' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const pillars = [
  {
    title: '500-Piece Universal MOQ & 7-Day Prototyping',
    subtitle: 'Capital Agility Without Compromise',
    body: 'Test viral social textures and seasonal colorways with virtually zero dead-stock risk. We offer an industry-disrupting 500-piece MOQ across all lip categories. Custom formulation samples arrive on your desk in 7 business days, with 100% of sampling costs credited back to your bulk order.'
  },
  {
    title: 'Componentry Library & Bespoke Custom Tooling',
    subtitle: 'Formulation Artistry Meets Packaging Engineering',
    body: 'Your packaging is your brand’s primary physical equity. Leverage our extensive inventory of premium, heavyweight acrylic, zamac, aluminum, and ceramic lip components. Want an exclusive silhouette? Our in-house engineering team opens bespoke custom molds tailored to your brand’s tactile and visual DNA.'
  },
  {
    title: 'Audit-Proof Global Retail Compliance',
    subtitle: 'Turn-Key Readiness for US & European Channels',
    body: 'Beautychain Limited manufactures strictly within certified GMPC and ISO 22716 cleanroom facilities. Every batch includes full toxicological dossiers, heavy-metal safety audits, MSDS, and turn-key EU CPNP notification support for seamless launch across Amazon, TikTok Shop, and specialty retail.'
  }
];

export const products = [
  {
    name: 'High-Impact Lip Gloss',
    body: 'Non-sticky, cushion-feel gloss in crystal clear, sheer reactive tints, and multi-dimensional coated micro-shimmer finishes.',
    detail: '500 pcs MOQ · Thick-Walled Acrylic Tubes',
    image: '/products/lipgloss-26-01.jpg',
    categoryHref: '/lip-gloss-manufacturer'
  },
  {
    name: 'Velvet Cloud Lip Mud & Tint',
    body: 'Weightless, soft-focus matte formula delivering buildable, transfer-resistant color that blurs fine lip lines effortlessly.',
    detail: '500 pcs MOQ · Pantone Precision Shade Matching',
    image: '/products/nas-sync-39-4.jpg',
    categoryHref: '/lip-mud-manufacturer'
  },
  {
    name: 'Skinified Peptide Lip Oil',
    body: 'Hybrid treatment pairing botanical squalane and tripeptides with lightweight, glass-like optical shine. Features oversized doe-foot or cooling ceramic tips.',
    detail: '500 pcs MOQ · Custom Flavor & Active Story',
    image: '/products/nas-sync-01.jpg',
    categoryHref: '/lip-oil-manufacturer'
  },
  {
    name: 'Precision Glide Lip Liner',
    body: 'Ultra-smooth, smudge-proof pencil formulation in cedarwood barrel or twist-up mechanical formats for crisp contouring.',
    detail: '500 pcs MOQ · Custom Barrel & Cap Finishes',
    image: '/products/nas-sync-img-0053.jpg',
    categoryHref: '/lip-liner-manufacturer'
  },
  {
    name: 'Signature Bullet Lipstick',
    body: 'Silky satin, velvet matte, and high-shine finishes cast in heavyweight magnetic zamac, aluminum, or custom-embossed cases.',
    detail: '500 pcs MOQ · Custom Bullet Engraving & Tooling',
    image: '/products/nas-sync-img-0292.jpg',
    categoryHref: '/lipstick-manufacturer'
  },
  {
    name: 'Barrier Repair Lip Mask',
    body: 'Intensive overnight treatment balms with ceramide complexes and rich plant butters for 24-hour hydration and restorative care.',
    detail: '500 pcs MOQ · Jar or Soft-Touch Squeeze Tubes',
    image: '/products/nas-sync-img-0050.jpg',
    categoryHref: '/lip-mask-manufacturer'
  }
];

export const steps = [
  { n: '01', title: 'Consultation & Product Brief', body: 'Align on target price tier, packaging silhouette, texture profile, and market compliance parameters.' },
  { n: '02', title: '7-Day Rapid Sampling', body: 'Custom formulation and shade matching dispatched in 7 days. 100% of sampling fees are credited back upon bulk order confirmation.' },
  { n: '03', title: '500-Unit Production Run', body: 'Mass manufacturing executed under certified GMPC/ISO cleanroom standards with strict batch-to-batch colorimetric control.' },
  { n: '04', title: 'Global QC & Market Dossier', body: 'Final pre-shipment quality audit with comprehensive documentation ready for US FDA and European CPNP import clearance.' }
];

export const certifications = [
  { name: 'GMPC Certified', body: 'Good Manufacturing Practice for Cosmetics certified facility ensuring sterile batch integrity.' },
  { name: 'ISO 22716 Standard', body: 'Internationally recognized quality management standard for cosmetics manufacturing processes.' },
  { name: 'EU CPNP Dossier Support', body: 'Full technical dossier and safety assessment documentation for European market registration.' }
];
