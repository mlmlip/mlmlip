// 业务口径已于 2026-09-21 经老板确认，依据见 ../../PLAN.md
// 改动业务事实（产品线/MOQ/打样/认证/主体名）前必须先看 PLAN.md，禁止凭推测修改
export const site = {
  name: 'MLM Lip',
  domain: 'https://mlmlip.com',
  tagline: 'Your own lip brand, from 500 pcs',
  manufacturer: 'Beautychain Limited',
  moq: '500 pcs',
  contact: {
    whatsapp: '+86 136 5238 0291',
    whatsappLink: 'https://wa.me/8613652380291',
    email: 'info@mlmlip.com',
    address: 'Shenzhen, China'
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Customization', href: '/customization' },
    { label: 'Process', href: '/process' },
    { label: 'Cases', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]
};

export const pillars = [
  {
    title: 'Packaging customization',
    body: 'Choose from our in-house packaging library — tubes, caps, applicators and finishes — or go further: we can open a custom mold for a pack that belongs to your brand alone.'
  },
  {
    title: 'Formulation customization',
    body: 'Texture, finish, pigment load, wear and feel are tuned to your brief — from glossy and sheer to matte and full-coverage.'
  },
  {
    title: 'Logo & brand customization',
    body: 'Your logo on the tube, cap, carton and outer packaging. Labels, colors and printed details produced to your artwork.'
  }
];

export const products = [
  {
    name: 'Lip Gloss',
    body: 'High-shine, non-sticky gloss in clear, tinted and shimmer finishes.',
    detail: 'Tube, cap and applicator customizable'
  },
  {
    name: 'Lip Mud & Velvet Tint',
    body: 'Soft matte, airy texture with buildable pigment for daily wear.',
    detail: 'Dozens of shades or matched to your reference'
  },
  {
    name: 'Lip Liner',
    body: 'Smooth, precise pencil in wood or plastic barrel formats.',
    detail: 'Barrel color and sharpening format to order'
  },
  {
    name: 'Lipstick',
    body: 'Classic bullet, gloss and satin finishes in custom cases.',
    detail: 'Bullet weight and case design your choice'
  },
  {
    name: 'Lip Oil',
    body: 'Nourishing oil-gloss hybrid with a cushioned, comfortable feel.',
    detail: 'Fragrance and ingredient story customizable'
  },
  {
    name: 'Lip Mask',
    body: 'Hydrating overnight and daily-care masks that complete a lip range.',
    detail: 'Jar or tube formats, scent and actives to brief'
  },
  {
    name: 'Body Oil (side line)',
    body: 'Shimmering and nourishing body oils that pair with your lip range.',
    detail: 'Same 500 pcs minimum, bundled with lip orders on request'
  }
];

export const steps = [
  { n: '01', title: 'Inquiry & brief', body: 'Tell us the product, target price point, finish and quantity. We advise on the most practical route to your own brand.' },
  { n: '02', title: 'Sample in 7 days', body: 'We develop samples against your brief within 7 days — texture, shade, packaging and logo. Place your order and the sampling fee is deducted from it, so sampling effectively costs nothing.' },
  { n: '03', title: 'Order & production', body: 'Once approved, production runs from 500 pcs per SKU — the same low minimum across every product category — with your packaging, formulation and branding.' },
  { n: '04', title: 'QC & delivery', body: 'Inspection before packing, then shipping to your door or your warehouse, with documents prepared for the North American and European markets.' }
];

export const certifications = [
  { name: 'GMPC', body: 'Cosmetic good manufacturing practice certified production' },
  { name: 'ISO', body: 'Quality management system certified' },
  { name: 'CPNP', body: 'EU cosmetic product notification support for your market entry' }
];
