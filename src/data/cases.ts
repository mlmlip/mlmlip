export interface CaseItem {
  title: string;
  category: string;
  summary: string;
  image?: string;
  videoUrl?: string;
  links?: { label: string; href: string }[];
  placeholder?: boolean;
}

export const cases: CaseItem[] = [
  {
    title: 'Custom 39-Shade Lip Gloss Line',
    category: 'Lip Gloss',
    summary: 'High-shine, hydrating lip gloss project with 39 customizable shades across nude, pink, berry and shimmer finishes.',
    image: '/products/lipgloss-39-01.jpg',
    videoUrl: '/cases/case-lip-detail.mp4',
    links: [
      { label: 'View shade range', href: '/products' },
      { label: 'Request sample', href: '/contact' }
    ]
  },
  {
    title: 'Velvet Lip Mud & Tint Series',
    category: 'Lip Mud & Velvet Tint',
    summary: 'Soft-focus matte finish with buildable coverage, developed with custom square-tube packaging and silk-screen branding.',
    image: '/products/lipgloss-39-02.jpg',
    links: [
      { label: 'View product', href: '/products' },
      { label: 'Request sample', href: '/contact' }
    ]
  },
  {
    title: 'Shimmer & Care Hybrid Lip Oil',
    category: 'Lip Oil',
    summary: 'Nourishing botanical oil base paired with micro-shimmer pearls, matched to custom componentry from our in-house library.',
    image: '/products/lipgloss-39-03.jpg',
    links: [
      { label: 'View product', href: '/products' },
      { label: 'Request sample', href: '/contact' }
    ]
  }
];

export const factoryVideos = [
  {
    title: 'Automated Production & Assembly',
    note: 'Watch our automated assembly line filling and cap-sealing lip components.',
    videoUrl: '/factory/factory-production.mp4'
  },
  {
    title: 'GMPC Cleanroom Operation',
    note: 'Standardized sterile cleanroom production meeting international cosmetics standards.',
    videoUrl: '/factory/factory-cleanroom.mp4'
  },
  {
    title: 'Precision Quality Inspection',
    note: 'Full pre-shipment QC check on formulation stability, shade consistency and tube airtightness.',
    image: '/factory/sampling-packaging-01.jpg'
  }
];
