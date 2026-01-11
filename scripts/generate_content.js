#!/usr/bin/env node
/**
 * 崔亮博客笔记内容生成器
 * 直接使用已下载的 catalogues.json 和 notes.json 生成所有内容
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

// 获取章节内容
async function getSection(sectionId) {
  const { data } = await fetch(`${API_BASE}/section/${sectionId}/`);
  return JSON.parse(data);
}

// 处理单个目录
async function processCatalogue(catalogueData, catalogueIndex, totalCatalogues, noteMap) {
  const catalogueId = catalogueData.id;
  const noteId = catalogueData.note;
  const items = catalogueData.catalogue || [];
  const noteName = noteMap[noteId] || `Note_${noteId}`;

  console.log(`\n📖 正在处理目录 ${catalogueId} -> ${noteName} [${catalogueIndex + 1}/${totalCatalogues}]`);

  try {
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
  console.log('🚀 崔亮博客笔记内容生成器');
  console.log('=' .repeat(50));

  const startTime = Date.now();

  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    await fs.mkdir(IMAGES_DIR, { recursive: true });

    // 读取已保存的数据
    console.log('📚 读取笔记信息...');
    const notesData = await fs.readFile(path.join(OUTPUT_DIR, 'notes.json'), 'utf8');
    const notes = JSON.parse(notesData);
    console.log(`   发现 ${notes.length} 个笔记本`);

    console.log('📋 读取目录列表...');
    const cataloguesData = await fs.readFile(path.join(OUTPUT_DIR, 'catalogues.json'), 'utf8');
    const catalogues = JSON.parse(cataloguesData);
    console.log(`   发现 ${catalogues.length} 个目录`);

    // 创建 noteId 到 noteName 的映射
    const noteMap = {};
    for (const note of notes) {
      noteMap[note.id] = note.name;
    }

    // 处理每个目录
    const processedNotes = [];
    for (let i = 0; i < catalogues.length; i++) {
      const result = await processCatalogue(catalogues[i], i, catalogues.length, noteMap);
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
    console.log('✅ 生成完成!');
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
    console.error(e.stack);
    process.exit(1);
  }
}

main();