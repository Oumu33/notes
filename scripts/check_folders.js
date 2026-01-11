#!/usr/bin/env node
/**
 * 检查所有笔记文件夹是否有对应的md文件
 */

const fs = require('fs').promises;
const path = require('path');

const NOTES_DIR = './notes';

// 统计
const stats = {
  totalNotes: 0,
  totalMdFiles: 0,
  emptyFolders: [],
  foldersWithFiles: []
};

// 清理文件名
function sanitizeFileName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_').substring(0, 100);
}

// 递归统计目录
async function countMdFiles(dir) {
  let count = 0;
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += await countMdFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      count++;
    }
  }

  return count;
}

// 获取目录结构
async function getDirectoryStructure(dir, depth = 0) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const structure = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      const fullPath = path.join(dir, entry.name);
      const mdCount = await countMdFiles(fullPath);
      const subDirs = await getDirectoryStructure(fullPath, depth + 1);

      structure.push({
        name: entry.name,
        path: path.relative(NOTES_DIR, fullPath),
        mdCount: mdCount,
        subDirs: subDirs
      });
    }
  }

  return structure;
}

// 主函数
async function main() {
  console.log('🔍 检查所有笔记文件夹');
  console.log('='.repeat(50));

  try {
    // 获取所有笔记目录
    const entries = await fs.readdir(NOTES_DIR, { withFileTypes: true });
    const noteDirs = entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.') && e.name !== 'images')
      .map(e => e.name);

    console.log(`📚 发现 ${noteDirs.length} 个笔记目录\n`);

    // 检查每个笔记目录
    for (const noteName of noteDirs) {
      const noteDir = path.join(NOTES_DIR, noteName);
      const mdCount = await countMdFiles(noteDir);

      stats.totalNotes++;
      stats.totalMdFiles += mdCount;

      if (mdCount === 0) {
        stats.emptyFolders.push(noteName);
        console.log(`❌ ${noteName}: 0 个md文件 (空文件夹)`);
      } else {
        stats.foldersWithFiles.push({ name: noteName, count: mdCount });
        console.log(`✅ ${noteName}: ${mdCount} 个md文件`);
      }
    }

    // 打印统计
    console.log('\n' + '='.repeat(50));
    console.log('📊 统计结果');
    console.log('='.repeat(50));
    console.log(`📚 笔记目录总数: ${stats.totalNotes}`);
    console.log(`📄 md文件总数: ${stats.totalMdFiles}`);
    console.log(`✅ 有文件的目录: ${stats.foldersWithFiles.length}`);
    console.log(`❌ 空目录: ${stats.emptyFolders.length}`);

    if (stats.emptyFolders.length > 0) {
      console.log('\n⚠️  空目录列表:');
      stats.emptyFolders.forEach(name => console.log(`  - ${name}`));
    }

    console.log('\n📁 有文件的目录详情:');
    stats.foldersWithFiles
      .sort((a, b) => b.count - a.count)
      .forEach(item => console.log(`  - ${item.name}: ${item.count} 个md文件`));

    // 检查git状态
    console.log('\n' + '='.repeat(50));
    console.log('🔍 Git状态检查');
    console.log('='.repeat(50));

    const { execSync } = require('child_process');

    for (const noteName of noteDirs) {
      try {
        const trackedCount = parseInt(execSync(`git ls-files "notes/${noteName}/" | wc -l`, { encoding: 'utf8' }).trim());
        const localCount = await countMdFiles(path.join(NOTES_DIR, noteName));

        if (trackedCount !== localCount) {
          console.log(`⚠️  ${noteName}: 本地${localCount}个文件, Git跟踪${trackedCount}个文件`);
        }
      } catch (e) {
        console.log(`❌ ${noteName}: Git检查失败`);
      }
    }

  } catch (e) {
    console.error('❌ 致命错误:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}

main();