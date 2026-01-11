#!/usr/bin/env node
/**
 * 修复图片路径问题
 * 将扁平的images目录结构转换为按noteName分类的结构
 */

const fs = require('fs').promises;
const path = require('path');

const NOTES_DIR = './notes';
const IMAGES_DIR = './notes/images';
const OUTPUT_DIR = './notes/images_organized';

// 统计
const stats = {
  moved: 0,
  updated: 0,
  errors: []
};

// 清理文件名
function sanitizeFileName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_').substring(0, 100);
}

// 获取note名称映射
async function getNoteNameMapping() {
  const notesPath = path.join(NOTES_DIR, 'notes.json');
  const data = await fs.readFile(notesPath, 'utf8');
  const notes = JSON.parse(data);

  const mapping = {};
  for (const note of notes) {
    mapping[note.id] = sanitizeFileName(note.name);
  }

  return mapping;
}

// 获取catalogue到note的映射
async function getCatalogueToNoteMapping() {
  const cataloguesPath = path.join(NOTES_DIR, 'catalogues.json');
  const data = await fs.readFile(cataloguesPath, 'utf8');
  const catalogues = JSON.parse(data);

  const mapping = {};
  for (const catalogue of catalogues) {
    mapping[catalogue.id] = catalogue.note;
  }

  return mapping;
}

// 获取slug到catalogue的映射
async function getSlugToCatalogueMapping() {
  const cataloguesPath = path.join(NOTES_DIR, 'catalogues.json');
  const data = await fs.readFile(cataloguesPath, 'utf8');
  const catalogues = JSON.parse(data);

  const mapping = {};
  for (const catalogue of catalogues) {
    for (const item of catalogue.catalogue) {
      if (item.slug && item.type === 'DOC') {
        mapping[item.slug] = catalogue.id;
      }
    }
  }

  return mapping;
}

// 从文件路径推断note名称
async function inferNoteNameFromPath(filePath) {
  const relativePath = path.relative(NOTES_DIR, filePath);
  const parts = relativePath.split(path.sep);

  // 第一级目录应该是note名称
  if (parts.length >= 2) {
    return parts[0];
  }

  return null;
}

// 处理单个md文件
async function processMdFile(filePath, noteNameMapping, catalogueToNoteMapping, slugToCatalogueMapping) {
  try {
    let content = await fs.readFile(filePath, 'utf8');

    // 匹配所有图片链接
    const imageRegex = /!\[([^\]]*)\]\(\.\.\/images\/img_([0-9]+)\.([a-z]+)\)/g;
    let match;
    let hasChanges = false;

    while ((match = imageRegex.exec(content)) !== null) {
      const [fullMatch, altText, imageId, ext] = match;

      // 尝试从文件路径推断note名称
      const noteName = await inferNoteNameFromPath(filePath);

      if (noteName) {
        const newImagePath = `../images/${noteName}/img_${imageId}.${ext}`;
        content = content.replace(fullMatch, `![${altText}](${newImagePath})`);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      await fs.writeFile(filePath, content, 'utf8');
      stats.updated++;
      process.stdout.write('.');
    }

  } catch (e) {
    stats.errors.push(`处理文件失败 ${filePath}: ${e.message}`);
  }
}

// 递归处理目录
async function processDirectory(dir, noteNameMapping, catalogueToNoteMapping, slugToCatalogueMapping) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory() && entry.name !== 'images' && entry.name !== 'images_organized') {
        await processDirectory(fullPath, noteNameMapping, catalogueToNoteMapping, slugToCatalogueMapping);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        await processMdFile(fullPath, noteNameMapping, catalogueToNoteMapping, slugToCatalogueMapping);
      }
    }
  } catch (e) {
    console.error(`处理目录失败 ${dir}:`, e.message);
  }
}

// 创建按note分类的images目录结构
async function organizeImages() {
  try {
    console.log('📁 创建按note分类的images目录结构...');

    // 获取所有note目录
    const entries = await fs.readdir(NOTES_DIR, { withFileTypes: true });
    const noteDirs = entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'images' && e.name !== 'images_organized')
      .map(e => e.name);

    // 为每个note创建images子目录
    for (const noteName of noteDirs) {
      const noteImagesDir = path.join(IMAGES_DIR, noteName);
      await fs.mkdir(noteImagesDir, { recursive: true });
    }

    console.log(`✅ 创建了 ${noteDirs.length} 个note的images子目录`);

  } catch (e) {
    console.error('创建目录结构失败:', e.message);
  }
}

// 主函数
async function main() {
  console.log('🚀 修复图片路径问题');
  console.log('='.repeat(50));

  const startTime = Date.now();

  try {
    // 读取映射
    console.log('📚 读取映射信息...');
    const noteNameMapping = await getNoteNameMapping();
    const catalogueToNoteMapping = await getCatalogueToNoteMapping();
    const slugToCatalogueMapping = await getSlugToCatalogueMapping();
    console.log(`   Note映射: ${Object.keys(noteNameMapping).length} 条`);
    console.log(`   Catalogue映射: ${Object.keys(catalogueToNoteMapping).length} 条`);
    console.log(`   Slug映射: ${Object.keys(slugToCatalogueMapping).length} 条`);

    // 创建按note分类的images目录结构
    await organizeImages();

    // 处理所有md文件
    console.log('\n📄 处理md文件...');
    await processDirectory(NOTES_DIR, noteNameMapping, catalogueToNoteMapping, slugToCatalogueMapping);

    // 打印统计
    console.log('\n\n' + '='.repeat(50));
    console.log('✅ 处理完成!');
    console.log(`📝 更新文件: ${stats.updated}`);
    console.log(`⏱️  耗时: ${((Date.now() - startTime) / 1000).toFixed(2)} 秒`);

    if (stats.errors.length > 0) {
      console.log(`\n⚠️  错误 (${stats.errors.length}):`);
      stats.errors.slice(0, 10).forEach(e => console.log(`  - ${e}`));
      if (stats.errors.length > 10) {
        console.log(`  ... 还有 ${stats.errors.length - 10} 个错误`);
      }
    }

    console.log('\n💡 提示: 现在需要将images目录下的图片移动到对应的note子目录中');
    console.log('   可以运行: node scripts/move_images_to_note_dirs.js');

  } catch (e) {
    console.error('❌ 致命错误:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}

main();