export interface CaseItem {
  title: string;
  category: string;
  summary: string;
  image?: string;
  videoUrl?: string;
  poster?: string;
  links?: { label: string; href: string }[];
  placeholder?: boolean;
  specs?: { label: string; value: string }[];
}

// 真实做过的唇部项目素材（来自 NAS 素材文件夹/产品图片/美妆类产品）
export const cases: CaseItem[] = [
  {
    title: '26-Shade Rose-Gold Lip Gloss Line',
    category: 'Lip Gloss',
    summary: 'Full-range nude-to-berry lip gloss collection in heavyweight rose-gold capped tubes, color-matched across 26 market-ready shades.',
    image: '/products/nas-sync-39-3.jpg',
    specs: [
      { label: 'Shades', value: '26' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Packaging', value: 'Acrylic + zamac cap' },
      { label: 'Market', value: 'North America' }
    ],
    links: [
      { label: 'Request shade card', href: '/contact' },
      { label: 'See full range', href: '/products' }
    ]
  },
  {
    title: 'Slim-Tube Nude Lip Collection',
    category: 'Lip Gloss',
    summary: 'Minimalist slim tubes with silver caps and a matching carton — ideal for DTC and TikTok Shop launches at low MOQ.',
    image: '/products/nas-sync-2.jpg',
    specs: [
      { label: 'Shades', value: '6' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Packaging', value: 'Slim acrylic tube' },
      { label: 'Market', value: 'DTC / TikTok' }
    ],
    links: [
      { label: 'Request sample', href: '/contact' }
    ]
  },
  {
    title: 'Nude & Gloss Lip Gloss Series',
    category: 'Lip Gloss',
    summary: 'Neutral wearable gloss range developed for a private-label US brand, with custom box and Pantone-matched caps.',
    image: '/products/nas-sync-img-0291.jpg',
    specs: [
      { label: 'Shades', value: '4' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Packaging', value: 'Custom carton + cap' },
      { label: 'Market', value: 'United States' }
    ],
    links: [
      { label: 'Request sample', href: '/contact' }
    ]
  },
  {
    title: 'Diamond-Cut Tube Lip Gloss',
    category: 'Lip Gloss',
    summary: 'Prismatic diamond-cut tubes filled with shimmer gloss — a packaging-forward SKU built for social-driven beauty brands.',
    videoUrl: '/cases/case-diamond-tube.mp4',
    poster: '/cases/case-diamond-tube-poster.jpg',
    specs: [
      { label: 'Shades', value: '3' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Packaging', value: 'Custom-molded tube' },
      { label: 'Market', value: 'Social beauty' }
    ],
    links: [
      { label: 'Ask about custom tooling', href: '/customization' }
    ]
  },
  {
    title: 'LP-10 Custom 12-Color Lip Gloss',
    category: 'Custom Project',
    summary: 'End-to-end custom development for a 12-color lip gloss set: shade matching, component selection, labeling and production-ready samples.',
    videoUrl: '/cases/case-lp10-custom.mp4',
    poster: '/cases/case-lp10-custom-poster.jpg',
    specs: [
      { label: 'Shades', value: '12' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Scope', value: 'Full OEM/ODM' },
      { label: 'Deliverable', value: 'Set + display' }
    ],
    links: [
      { label: 'Start your project', href: '/contact' }
    ]
  },
  {
    title: 'Private Label Packaging Library',
    category: 'Packaging',
    summary: 'In-stock premium tubes, caps and applicators ready for your logo — or brief us for bespoke custom tooling.',
    image: '/factory/packaging-tubes-01.jpg',
    specs: [
      { label: 'Components', value: '200+ in library' },
      { label: 'MOQ', value: '500 pcs' },
      { label: 'Tooling', value: 'Library or custom' },
      { label: 'Lead time', value: 'Library: ready' }
    ],
    links: [
      { label: 'View customization options', href: '/customization' }
    ]
  }
];

// 工厂实力视频
export const factoryVideos = [
  {
    title: 'Automated Production & Assembly',
    note: 'High-speed precision filling and capping line for lip components.',
    videoUrl: '/factory/factory-production.mp4',
    poster: '/factory/factory-production-poster.jpg'
  },
  {
    title: 'GMPC Cleanroom Operation',
    note: 'Standardized sterile cleanroom production meeting international cosmetics standards.',
    videoUrl: '/factory/factory-cleanroom.mp4',
    poster: '/factory/factory-cleanroom-poster.jpg'
  },
  {
    title: 'Precision Quality Inspection',
    note: 'Full pre-shipment QC check on formulation stability, shade consistency and tube airtightness.',
    image: '/factory/sampling-packaging-01.jpg'
  }
];
