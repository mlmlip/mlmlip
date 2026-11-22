import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// P1-8: sitemap per-url lastmod — 用源文件在 git 中的最后提交时间（比文件 mtime 稳定，
// 不受本地 checkout/CI 缓存影响）。serialize 回调按 URL 反查源文件。
function gitLastmod(files) {
  try {
    return execSync(
      `git log -1 --format=%cI -- ${files.map((f) => JSON.stringify(f)).join(' ')}`,
      { encoding: 'utf8', timeout: 15_000 }
    ).trim() || undefined;
  } catch {
    return undefined;
  }
}

// URL → 站点源文件候选（页面 .astro / 博客 .md）
function sourceCandidatesFor(url) {
  const path = new URL(url).pathname.replace(/\/$/, '') || '/';
  const cands = [];
  if (path === '/') {
    cands.push('src/pages/index.astro', 'src/data/site.ts');
  } else if (path.startsWith('/blog/')) {
    cands.push(`src/content/blog${path.slice('/blog'.length)}.md`);
  } else if (path.startsWith('/products/')) {
    cands.push(
      `src/pages/products/[slug].astro`,
      `src/data/products.ts`
    );
  } else if (/^\/[a-z-]+-manufacturer\/?$/.test(path) || ['lip-gloss', 'lip-mud'].some((k) => path === `/${k}`)) {
    // 分类落地页由 src/pages/[slug].astro 动态生成
    cands.push(`src/pages/[slug].astro`, `src/data/categories.ts`);
  } else {
    const clean = path.replace(/^\/(fr|es)/, '').replace(/^/, '');
    cands.push(
      `src/pages${clean}.astro`,
      `src/pages${clean}/index.astro`,
      `src/pages/fr${clean}.astro`,
      `src/pages/es${clean}.astro`
    );
  }
  return cands.filter((f) => existsSync(join(process.cwd(), f)));
}

export default defineConfig({
  site: 'https://mlmlip.com',
  // Server output is required for the owned inquiry endpoint (src/pages/api/inquiry.ts).
  output: 'server',
  adapter: vercel(),
  security: {
    checkOrigin: false
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        fr: 'fr',
        es: 'es'
      }
    },
    // P1-8: per-url lastmod（源文件 git 最后提交时间；查不到则留空，不硬编码假日期）
    serialize(item) {
      const files = sourceCandidatesFor(item.url);
      if (files.length === 0) return item;
      const lastmod = gitLastmod(files);
      return lastmod ? { ...item, lastmod } : item;
    }
  })],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
