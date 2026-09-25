// 品类 SEO 落地页数据 —— 对标 DLAB / MetaCNBeauty 的「每品类一个独立落地页」打法
// 每个品类页面目标关键词：private label {category} manufacturer / custom {category} OEM ...
export interface Category {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image?: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

const commonSpecs = [
  { label: 'Minimum order', value: '500 pcs per SKU — same across every lip category' },
  { label: 'Sampling', value: '7 days, fee 100% credited to your bulk order' },
  { label: 'Customization', value: 'Packaging · formulation · logo · custom mold tooling' },
  { label: 'Compliance', value: 'GMPC, ISO 22716, EU CPNP support, FDA-ready documentation' },
  { label: 'Markets', value: 'North America & Europe' }
];

export const categories: Category[] = [
  {
    slug: 'lip-gloss-manufacturer',
    name: 'Lip Gloss',
    h1: 'Private Label Lip Gloss Manufacturer',
    metaTitle: 'Private Label Lip Gloss Manufacturer | Custom OEM from 500 pcs — MLM Lip',
    metaDescription:
      'Custom lip gloss manufacturer from 500 pcs MOQ. 7-day lab samples, non-sticky formulas, custom doe-foot packaging & ISO 22716 / FDA compliance. Request quote.',
    intro:
      'High-shine, cushion-feel lip gloss built to your shade card — from crystal clear and sheer reactive tints to multi-dimensional shimmer. Tube, cap and applicator chosen from our packaging library, or tooled exclusively for your brand.',
    image: '/products/lipgloss-26-01.jpg',
    highlights: [
      'Clear, tinted, jelly, shimmer and plumping gloss concepts',
      'Non-sticky lightweight bases with comfortable cushion feel',
      'Pantone shade matching or full custom shade card development',
      'Doe-foot, brush, ceramic and cooling-metal applicator options',
      'Heavyweight acrylic, frosted, metallized and slim-profile tubes',
      'Silk screen, hot stamping and UV printing for your logo'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the minimum order quantity for private label lip gloss?',
        a: '500 pcs per SKU, the same minimum across all six lip categories. Different shades or SKUs can be combined in one project.'
      },
      {
        q: 'Can you match a reference gloss I already sell?',
        a: 'Yes. Send us a physical reference or photos plus the finish you want. We develop samples against it and refine texture, viscosity and shine until it matches.'
      },
      {
        q: 'How long does lip gloss production take after approval?',
        a: 'Samples are ready in 7 days. Bulk production typically runs 15–25 business days after artwork and sample approval, plus shipping.'
      }
    ]
  },
  {
    slug: 'lip-mud-manufacturer',
    name: 'Lip Mud & Velvet Tint',
    h1: 'Private Label Lip Mud & Velvet Tint Manufacturer',
    metaTitle: 'Custom Lip Mud & Velvet Tint Manufacturer | Private Label OEM — MLM Lip',
    metaDescription:
      'Private label lip mud & velvet air tint factory: 500 pcs MOQ, 7-day lab samples, transfer-proof matte formulas and ISO 22716 / CPNP compliance dossiers.',
    intro:
      'Weightless, soft-focus matte colour that blurs the lip line and wears comfortably all day. Lip mud and velvet tints are the format driving social-first beauty brands — we build yours from formula to component.',
    highlights: [
      'Soft-focus matte and velvet mousse textures',
      'Buildable pigment load, transfer-resistant wear',
      'Shade development from nude everyday to bold statement',
      'Squeeze tubes, frosted tubes and applicator-matched packs',
      'Fragrance and flavour options (vanilla, berry, unflavoured)',
      'Vegan and clean-positioned formulas available'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the MOQ for custom lip mud?',
        a: '500 pcs per SKU. You can launch several shades at 500 pcs each and scale the winners on reorder.'
      },
      {
        q: 'Can you make a transfer-proof lip mud?',
        a: 'Yes. We tune the film formers and pigment load for transfer resistance; samples let you test wear, bleed and comfort before you commit.'
      },
      {
        q: 'Do you supply the applicator and tube together?',
        a: 'Yes — packaging, applicator and formulation are handled in-house so the sample you approve is the product you receive.'
      }
    ]
  },
  {
    slug: 'lip-liner-manufacturer',
    name: 'Lip Liner',
    h1: 'Private Label Lip Liner Manufacturer',
    metaTitle: 'Private Label Lip Liner Manufacturer | Custom Lip Pencil OEM — MLM Lip',
    metaDescription:
      'Custom lip liner & lip pencil manufacturing from 500 pcs MOQ. Cedarwood & mechanical formats, 7-day lab sampling, waterproof formulas & FDA compliance.',
    intro:
      'Precision lip liners that hold the contour and pair with your colour range. Cedarwood or twist-up mechanical barrels, sharpening format to order, shades matched to your lipsticks and tints.',
    highlights: [
      'Cedarwood barrel or twist-up mechanical formats',
      'Ultra-smooth, smudge-resistant pencil cores',
      'Shade matching to your existing lip colour range',
      'Barrel colour, cap finish and printed branding',
      'Waterproof and long-wear options',
      'Bundled 2-in-1 sets with gloss or liquid lipstick'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the minimum order for custom lip liners?',
        a: '500 pcs per SKU, the same as every other lip category we manufacture.'
      },
      {
        q: 'Wooden or plastic lip liner — which should I choose?',
        a: 'Cedarwood gives a premium, traditional feel and needs sharpening. Twist-up mechanical formats are more convenient and mess-free. We help you choose based on your price point and market.'
      },
      {
        q: 'Can lip liners be packed as a kit with other products?',
        a: 'Yes. Liners are frequently bundled with lipsticks, muds or glosses into 2-in-1 or 3-in-1 kits at the same low minimum per component.'
      }
    ]
  },
  {
    slug: 'lipstick-manufacturer',
    name: 'Lipstick',
    h1: 'Private Label Lipstick Manufacturer',
    metaTitle: 'Private Label Lipstick Manufacturer | Custom Bullet & Case OEM — MLM Lip',
    metaDescription:
      'Private label lipstick manufacturer from 500 pcs MOQ: matte & satin bullets, magnetic zamac cases, 7-day lab samples and ISO 22716 / CPNP compliance.',
    intro:
      'A bullet lipstick signals a serious brand. We cast velvet matte, satin and high-shine finishes in heavyweight cases — stock components from our library or bespoke tooling for an unmistakable silhouette.',
    highlights: [
      'Velvet matte, satin, cream and high-shine finishes',
      'Bullet weight and shape to your brief',
      'Magnetic zamac, aluminium and heavy acrylic cases',
      'Custom mold opening for exclusive silhouettes',
      'Bullet and case engraving or debossing',
      'Full shade card development with Pantone matching'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the MOQ for private label lipstick?',
        a: '500 pcs per SKU — the same universal minimum across all lip products we produce.'
      },
      {
        q: 'Can you open a custom mold for my lipstick case?',
        a: 'Yes. We offer in-house custom tooling. Mold cost and lead time depend on the case complexity; we quote it against your design brief.'
      },
      {
        q: 'Do you provide stability and safety documentation?',
        a: 'Yes — batch documentation, stability data, MSDS and INCI documentation are prepared as part of production, with EU CPNP notification support.'
      }
    ]
  },
  {
    slug: 'lip-oil-manufacturer',
    name: 'Lip Oil',
    h1: 'Private Label Lip Oil Manufacturer',
    metaTitle: 'Private Label Lip Oil Manufacturer | Custom Peptide Lip Oil OEM — MLM Lip',
    metaDescription:
      'Custom peptide lip oil manufacturing from 500 pcs MOQ. Skinified squalane formulas, ceramic cooling tips, 7-day lab samples and ISO 22716 / FDA compliance.',
    intro:
      'Lip care and colour in one: botanical squalane bases, peptide and ceramide actives, finished with a cushioned, glass-like shine. The format that turns a makeup brand into a routine brand.',
    highlights: [
      'Squalane, jojoba and meadowfoam oil bases',
      'Peptide, ceramide and vitamin actives for treatment claims',
      'Glass-shine, sheer tint and pH-reactive options',
      'Oversized doe-foot, ceramic and cooling metal applicators',
      'Fragrance and flavour development to brief',
      'Clean, vegan and paraben-free positioning'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the MOQ for custom lip oil?',
        a: '500 pcs per SKU. Launch two or three shades and reorder the winner without holding heavy inventory.'
      },
      {
        q: 'Can you support ingredient-led marketing claims?',
        a: 'We formulate with your ingredient story in mind — actives, oils and flavour — and provide the INCI documentation your label and claims require.'
      },
      {
        q: 'How do lip oils differ from lip gloss in production?',
        a: 'Oil bases need different filling and viscosity handling than gloss. Both are produced in-house, so we advise on the right base and component for your target feel and price point.'
      }
    ]
  },
  {
    slug: 'lip-mask-manufacturer',
    name: 'Lip Mask',
    h1: 'Private Label Lip Mask & Treatment Manufacturer',
    metaTitle: 'Private Label Lip Mask Manufacturer | Custom Overnight Lip Treatment OEM — MLM Lip',
    metaDescription:
      'Private label lip mask & overnight treatment factory: 500 pcs MOQ, ceramide barrier formulas, 7-day lab sampling, ISO 22716 cleanroom & EU CPNP dossiers.',
    intro:
      'Overnight and daily-care lip treatments that extend your brand into the customer’s routine. Rich butter and ceramide formulas in jars or soft-touch tubes, scented and positioned to your brief.',
    highlights: [
      'Overnight repair masks and daily barrier balms',
      'Shea, cocoa and plant butter rich bases',
      'Ceramide, peptide and vitamin treatment actives',
      'Jars, soft-touch squeeze tubes and stick formats',
      'Scent, flavour and texture to brief',
      'Suitable as a follow-on SKU to a colour product launch'
    ],
    specs: commonSpecs,
    faqs: [
      {
        q: 'What is the minimum order for a private label lip mask?',
        a: '500 pcs per SKU, identical to our other lip categories.'
      },
      {
        q: 'Can I launch a mask as my second product?',
        a: 'Yes — many brands launch one hero colour product first, then add a mask or treatment to build routine and repeat purchase. Both run at the same 500 pcs minimum.'
      },
      {
        q: 'Do you support claims like 24-hour hydration?',
        a: 'We can formulate and document for substantiated hydration claims, and provide the supporting batch and stability documentation for your market.'
      }
    ]
  }
];
