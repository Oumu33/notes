#!/usr/bin/env node
/**
 * 崔亮博客笔记爬虫 v2
 * 通过Django REST Framework API抓取笔记内容
 *
 * 作者: Claude Code
 * 日期: 2026-01-11
 */

const https = require('https');
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const { URL } = require('url');

const API_BASE = 'https://api.cuiliangblog.cn/v1/blog';
const OUTPUT_DIR = './cuiliangblog_notes';
const IMAGES_DIR = './cuiliangblog_notes/images';

// 统计数据
const stats = {
  notes: 0,
  sections: 0,
  images: 0,
  errors: []
};

// HTTP请求封装
function fetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    const opts = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: options.method || 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.cuiliangblog.cn/',
        ...options.headers
      }
    };

    const req = protocol.request(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ data, statusCode: res.statusCode, headers: res.headers });
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data.substring(0, 200)}`));
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

// 下载图片
async function downloadImage(imageUrl, localPath) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(imageUrl);
    const protocol = urlObj.protocol === 'https:' ? https : http;

    const opts = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.cuiliangblog.cn/',
        'Accept': 'image/*,*/*'
      }
    };

    const req = protocol.request(opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadImage(res.headers.location, localPath).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', async () => {
        try {
          await fs.mkdir(path.dirname(localPath), { recursive: true });
          await fs.writeFile(localPath, Buffer.concat(chunks));
          resolve(localPath);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.setTimeout(60000, () => {
      req.destroy();
      reject(new Error('Image download timeout'));
    });
    req.end();
  });
}

// 处理Markdown中的图片
async function processImages(content, noteName) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let newContent = content;
  const matches = [...content.matchAll(imageRegex)];

  for (const match of matches) {
    const [fullMatch, altText, imageUrl] = match;

    if (!imageUrl.startsWith('http')) continue;

    try {
      const urlObj = new URL(imageUrl);
      const ext = path.extname(urlObj.pathname) || '.png';
      const hash = Buffer.from(imageUrl).toString('base64').replace(/[/+=]/g, '_').substring(0, 16);
      const safeName = `${hash}${ext}`;
      const localImagePath = path.join(IMAGES_DIR, noteName, safeName);
      const relativeImagePath = `../images/${noteName}/${safeName}`;

      await downloadImage(imageUrl, localImagePath);
      newContent = newContent.replace(fullMatch, `![${altText}](${relativeImagePath})`);
      stats.images++;
      process.stdout.write(`📷`);
    } catch (e) {
      stats.errors.push(`图片下载失败: ${imageUrl.substring(0, 50)}... - ${e.message}`);
    }
  }

  return newContent;
}

// 清理文件名
function sanitizeFileName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_').substring(0, 100);
}

// 获取所有笔记
async function getNotes() {
  const { data } = await fetch(`${API_BASE}/note/`);
  return JSON.parse(data);
}

// 获取所有目录
async function getAllCatalogues() {
  const { data } = await fetch(`${API_BASE}/catalogue/`);
  return JSON.parse(data);
}

// 获取单个目录
async function getCatalogue(catalogueId) {
  const { data } = await fetch(`${API_BASE}/catalogue/${catalogueId}/`);
  return JSON.parse(data);
}

// 获取章节内容
async function getSection(sectionId) {
  const { data } = await fetch(`${API_BASE}/section/${sectionId}/`);
  return JSON.parse(data);
}

// 处理单个目录
async function processCatalogue(catalogueId, catalogueIndex, totalCatalogues) {
  console.log(`\n📖 正在处理目录 ${catalogueId} [${catalogueIndex + 1}/${totalCatalogues}]`);

  try {
    const catalogue = await getCatalogue(catalogueId);
    const items = catalogue.catalogue || [];

    // 找到第一个DOC来确定笔记名称
    let noteName = null;
    let noteId = null;

    for (const item of items) {
      if (item.type === 'DOC' && item.doc_id) {
        try {
          const section = await getSection(item.doc_id);
          noteName = section.note;
          noteId = section.note_id;
          break;
        } catch (e) {
          continue;
        }
      }
    }

    if (!noteName) {
      console.log(`  ⚠️ 无法确定笔记名称，跳过`);
      return null;
    }

    const safeNoteName = sanitizeFileName(noteName);
    const noteDir = path.join(OUTPUT_DIR, safeNoteName);
    await fs.mkdir(noteDir, { recursive: true });

    console.log(`  📚 笔记: ${noteName}`);

    // 处理每个条目
    let sectionIndex = 0;
    const toc = [];
    const docs = items.filter(i => i.type === 'DOC' && i.doc_id);
    const titles = items.filter(i => i.type === 'TITLE');

    console.log(`  📄 共 ${docs.length} 篇文章, ${titles.length} 个分类`);

    // 记录当前标题
    let currentTitle = null;

    for (const item of items) {
      if (item.type === 'TITLE') {
        currentTitle = item.title;
        toc.push({ type: 'title', title: item.title });
        console.log(`  📂 ${item.title}`);
      } else if (item.type === 'DOC' && item.doc_id) {
        sectionIndex++;
        const paddedIndex = String(sectionIndex).padStart(3, '0');

        try {
          const section = await getSection(item.doc_id);

          // 处理图片
          let processedBody = await processImages(section.body || '', safeNoteName);

          // 生成Markdown文件
          const fileName = `${paddedIndex}_${sanitizeFileName(section.title)}.md`;
          const filePath = path.join(noteDir, fileName);

          const fileContent = `# ${section.title}

> 来源: ${section.note}
> 创建时间: ${section.created_time}
> 更新时间: ${section.modified_time}
> 阅读量: ${section.view} | 点赞: ${section.like}

---

${processedBody}
`;

          await fs.writeFile(filePath, fileContent, 'utf8');
          toc.push({ type: 'doc', title: section.title, file: fileName, category: currentTitle });
          stats.sections++;
          process.stdout.write('.');

          // 避免请求过快
          await new Promise(r => setTimeout(r, 50));

        } catch (e) {
          stats.errors.push(`章节获取失败: ${noteName}/${item.title} (${item.doc_id}) - ${e.message}`);
          process.stdout.write('❌');
        }
      }
    }

    // 生成目录README
    let tocContent = `# ${noteName}

---

## 目录

`;

    let lastCategory = null;
    for (const item of toc) {
      if (item.type === 'title') {
        tocContent += `\n### ${item.title}\n\n`;
        lastCategory = item.title;
      } else {
        tocContent += `- [${item.title}](./${item.file})\n`;
      }
    }

    await fs.writeFile(path.join(noteDir, 'README.md'), tocContent, 'utf8');
    stats.notes++;

    return { name: noteName, noteId, sectionCount: docs.length };

  } catch (e) {
    stats.errors.push(`目录处理失败: ${catalogueId} - ${e.message}`);
    console.log(`  ❌ 处理失败: ${e.message}`);
    return null;
  }
}

// 主函数
async function main() {
  console.log('🚀 崔亮博客笔记爬虫 v2 启动');
  console.log('=' .repeat(50));

  const startTime = Date.now();

  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.mkdir(IMAGES_DIR, { recursive: true });

    // 获取笔记列表（用于生成主README）
    console.log('📚 获取笔记信息...');
    const notes = await getNotes();
    console.log(`   发现 ${notes.length} 个笔记本`);

    // 获取所有目录
    console.log('📋 获取目录列表...');
    const catalogues = await getAllCatalogues();
    console.log(`   发现 ${catalogues.length} 个目录`);

    // 保存原始数据
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'notes.json'),
      JSON.stringify(notes, null, 2),
      'utf8'
    );
    await fs.writeFile(
      path.join(OUTPUT_DIR, 'catalogues.json'),
      JSON.stringify(catalogues, null, 2),
      'utf8'
    );

    // 处理每个目录
    const processedNotes = [];
    for (let i = 0; i < catalogues.length; i++) {
      const result = await processCatalogue(catalogues[i].id, i, catalogues.length);
      if (result) {
        processedNotes.push(result);
      }
    }

    // 生成主README
    const mainReadme = `# 崔亮博客笔记

> 抓取自 https://m.cuiliangblog.cn/note
> 抓取时间: ${new Date().toISOString()}
> 使用工具: Node.js + Django REST Framework API

---

## 笔记列表

${processedNotes.map(n => `- [${n.name}](./${sanitizeFileName(n.name)}/README.md) (${n.sectionCount}篇)`).join('\n')}

---

## 抓取方法

### 技术分析

1. **网站架构**: 前端Vue SPA + 后端Django REST Framework
2. **API发现**: 通过访问不存在的URL触发Django 404页面，从中获取URL路由列表
3. **关键发现**: Django开启了DEBUG模式，404页面会显示所有URL patterns

### API端点

\`\`\`
Base URL: https://api.cuiliangblog.cn/v1/blog/

GET /note/            - 笔记列表
GET /catalogue/       - 目录列表
GET /catalogue/{id}/  - 单个目录详情（包含所有章节引用）
GET /section/{id}/    - 章节内容（Markdown格式）
GET /category/        - 文章分类
GET /article/         - 博客文章
\`\`\`

### 图片处理

- 图片存储在 \`oss.cuiliangblog.cn\` 和 \`cdn.nlark.com\`
- **必须设置 Referer 头**: \`Referer: https://www.cuiliangblog.cn/\`
- 图片已下载到本地 \`images/\` 目录
- Markdown中的图片链接已替换为本地相对路径

### 运行脚本

\`\`\`bash
node scraper_final.js
\`\`\`

### 关键代码

\`\`\`javascript
// 必须设置的请求头
headers: {
  'User-Agent': 'Mozilla/5.0 ...',
  'Accept': 'application/json',
  'Referer': 'https://www.cuiliangblog.cn/'  // 关键！
}
\`\`\`

---

## 统计

- 笔记本: ${stats.notes}
- 章节: ${stats.sections}
- 图片: ${stats.images}
- 耗时: ${((Date.now() - startTime) / 1000 / 60).toFixed(2)} 分钟
- 错误: ${stats.errors.length}
`;

    await fs.writeFile(path.join(OUTPUT_DIR, 'README.md'), mainReadme, 'utf8');

    // 打印统计
    console.log('\n\n' + '='.repeat(50));
    console.log('✅ 爬取完成!');
    console.log(`📚 笔记本: ${stats.notes}`);
    console.log(`📄 章节: ${stats.sections}`);
    console.log(`🖼️  图片: ${stats.images}`);
    console.log(`⏱️  耗时: ${((Date.now() - startTime) / 1000 / 60).toFixed(2)} 分钟`);

    if (stats.errors.length > 0) {
      console.log(`\n⚠️  错误 (${stats.errors.length}):`);
      stats.errors.slice(0, 10).forEach(e => console.log(`  - ${e}`));
      if (stats.errors.length > 10) {
        console.log(`  ... 还有 ${stats.errors.length - 10} 个错误`);
      }

      await fs.writeFile(
        path.join(OUTPUT_DIR, 'errors.log'),
        stats.errors.join('\n'),
        'utf8'
      );
    }

    console.log(`\n📁 输出目录: ${path.resolve(OUTPUT_DIR)}`);

  } catch (e) {
    console.error('❌ 致命错误:', e.message);
    process.exit(1);
  }
}

main();
