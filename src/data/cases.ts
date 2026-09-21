// 案例数据 —— 真实素材由老板提供后替换占位条目
// 图片放 site/public/cases/ 目录，路径写 '/cases/xxx.jpg'
// 视频支持两种：mp4 直链（放 public 或外链）/ YouTube embed 链接（自动识别渲染 iframe）
export interface CaseItem {
  title: string;
  category: string;
  summary: string;
  image?: string;                       // 案例主图，如 '/cases/lipgloss-01.jpg'
  videoUrl?: string;                    // mp4 直链或 YouTube 链接
  links?: { label: string; href: string }[];  // 产品链接（独立站/平台链接均可）
  placeholder?: boolean;                // true = 版式占位，非真实案例
}

export const cases: CaseItem[] = [
  {
    title: 'Case slot 01 · Lip product project',
    category: 'Lip Gloss',
    summary: 'Product photos, project story and links go here — waiting for real case assets.',
    placeholder: true
  },
  {
    title: 'Case slot 02 · Lip product project',
    category: 'Lip Mud & Velvet Tint',
    summary: 'Product photos, project story and links go here — waiting for real case assets.',
    placeholder: true
  },
  {
    title: 'Case slot 03 · Lip product project',
    category: 'Lipstick',
    summary: 'Product photos, project story and links go here — waiting for real case assets.',
    placeholder: true
  }
];

// 工厂生产视频专区 —— videoUrl 到位后自动渲染播放器
export const factoryVideos: { title: string; note: string; videoUrl?: string }[] = [
  { title: 'Production line', note: 'Video slot — factory production footage (mp4 or YouTube link)' },
  { title: 'Filling & assembly', note: 'Video slot — filling and assembly process' },
  { title: 'Quality inspection', note: 'Video slot — QC and inspection process' }
];
