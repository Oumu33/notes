#!/usr/bin/env node
/**
 * 按照cuiliang网站的排序给细分文件夹添加序号
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

const NOTES_DIR = './notes';

// 统计
const stats = {
  renamed: 0,
  skipped: 0,
  errors: []
};

// 清理文件名
function sanitizeFileName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_').substring(0, 100);
}

// 从catalogues.json中提取分类标题
function getTitlesFromCatalogue(catalogueData) {
  const titles = [];
  let index = 1;

  for (const item of catalogueData.catalogue) {
    if (item.type === 'TITLE' && item.title) {
      titles.push({
        index: index++,
        title: item.title,
        uuid: item.uuid
      });
    }
  }

  return titles;
}

// 重命名文件夹
async function renameFolders(noteDir, titles) {
  const entries = await fs.readdir(noteDir, { withFileTypes: true });

  // 创建标题到序号的映射
  const titleToIndex = {};
  for (const title of titles) {
    const sanitizedTitle = sanitizeFileName(title.title);
    titleToIndex[sanitizedTitle] = title.index;
  }

  // 重命名文件夹
  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'images') {
      const oldPath = path.join(noteDir, entry.name);

      // 检查是否已经有序号
      if (/^\d+_/.test(entry.name)) {
        console.log(`  跳过: ${entry.name} (已有序号)`);
        stats.skipped++;
        continue;
      }

      // 查找对应的序号
      const index = titleToIndex[entry.name];

      if (index !== undefined) {
        const paddedIndex = String(index).padStart(2, '0');
        const newName = `${paddedIndex}_${entry.name}`;
        const newPath = path.join(noteDir, newName);

        try {
          await fs.rename(oldPath, newPath);
          console.log(`  重命名: ${entry.name} -> ${newName}`);
          stats.renamed++;
        } catch (e) {
          stats.errors.push(`重命名失败 ${entry.name}: ${e.message}`);
        }
      } else {
        console.log(`  未找到序号: ${entry.name}`);
        stats.skipped++;
      }
    }
  }
}

// 主函数
async function main() {
  console.log('🔄 按照cuiliang网站排序给文件夹添加序号');
  console.log('='.repeat(50));

  try {
    // 读取catalogues.json
    const cataloguesPath = path.join(NOTES_DIR, 'catalogues.json');
    const cataloguesData = await fs.readFile(cataloguesPath, 'utf8');
    const catalogues = JSON.parse(cataloguesData);

    // 读取notes.json
    const notesPath = path.join(NOTES_DIR, 'notes.json');
    const notesData = await fs.readFile(notesPath, 'utf8');
    const notes = JSON.parse(notesData);

    // 创建note id到catalogue的映射
    const noteToCatalogue = {};
    for (const catalogue of catalogues) {
      noteToCatalogue[catalogue.note] = catalogue;
    }

    // 创建note id到note name的映射
    const noteToName = {};
    for (const note of notes) {
      noteToName[note.id] = note.name;
    }

    // 处理每个note
    for (const note of notes) {
      const noteId = note.id;
      const noteName = note.name;
      const sanitizedNoteName = sanitizeFileName(noteName);
      const noteDir = path.join(NOTES_DIR, sanitizedNoteName);

      // 检查note目录是否存在
      try {
        await fs.access(noteDir);
      } catch (e) {
        console.log(`跳过: ${noteName} (目录不存在)`);
        continue;
      }

      // 获取对应的catalogue
      const catalogue = noteToCatalogue[noteId];
      if (!catalogue) {
        console.log(`跳过: ${noteName} (未找到catalogue)`);
        continue;
      }

      // 提取分类标题
      const titles = getTitlesFromCatalogue(catalogue);

      if (titles.length === 0) {
        console.log(`跳过: ${noteName} (没有分类标题)`);
        continue;
      }

      console.log(`\n📚 ${noteName}`);
      console.log(`  分类数量: ${titles.length}`);

      // 打印分类列表
      for (const title of titles) {
        console.log(`    ${title.index}. ${title.title}`);
      }

      // 重命名文件夹
      await renameFolders(noteDir, titles);
    }

    // 打印统计
    console.log('\n' + '='.repeat(50));
    console.log('📊 统计结果');
    console.log('='.repeat(50));
    console.log(`✅ 重命名成功: ${stats.renamed}`);
    console.log(`⏭️  跳过: ${stats.skipped}`);
    console.log(`❌ 错误: ${stats.errors.length}`);

    if (stats.errors.length > 0) {
      console.log('\n⚠️  错误列表:');
      stats.errors.forEach(e => console.log(`  - ${e}`));
    }

    if (stats.renamed > 0) {
      console.log('\n💡 提示: 文件夹已重命名，需要提交到git');
      console.log('   运行: git add -A && git commit -m "添加文件夹序号"');
    }

  } catch (e) {
    console.error('❌ 致命错误:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}

main();