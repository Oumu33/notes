#!/usr/bin/env node
/**
 * 清理Markdown文件元信息
 * 删除每个文件顶部的来源、创建时间、更新时间、阅读量、点赞等信息
 */

const fs = require('fs').promises;
const path = require('path');

const OUTPUT_DIR = './cuiliangblog_notes';

let stats = {
  total: 0,
  cleaned: 0,
  errors: []
};

// 递归查找所有markdown文件
async function findMarkdownFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files.push(...await findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 清理单个文件的元信息
async function cleanFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const originalContent = content;
    
    // 匹配标题后的元信息块（包括来源、创建时间、更新时间、阅读量、点赞）
    const lines = content.split('\n');
    
    // 查找第一个标题行
    let titleIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('#')) {
        titleIndex = i;
        break;
      }
    }
    
    if (titleIndex === -1) return false;
    
    // 检查标题后是否是元信息块
    if (titleIndex + 1 >= lines.length) return false;
    if (lines[titleIndex + 1] !== '') return false;
    if (titleIndex + 2 >= lines.length) return false;
    
    // 检查是否是元信息行（以 > 开头）
    let metadataEnd = titleIndex + 2;
    while (metadataEnd < lines.length && lines[metadataEnd].startsWith('>')) {
      metadataEnd++;
    }
    
    // 检查元信息后是否是空行，然后是分隔线
    let separatorIndex = metadataEnd;
    if (separatorIndex < lines.length && lines[separatorIndex] === '') {
      separatorIndex++;
    }
    
    if (separatorIndex >= lines.length) return false;
    if (lines[separatorIndex] !== '---') return false;
    
    // 删除元信息块、空行、分隔线和后面的空行
    let skipLines = separatorIndex + 1;
    while (skipLines < lines.length && lines[skipLines] === '') {
      skipLines++;
    }
    
    const newLines = [
      ...lines.slice(0, titleIndex + 1),
      ...lines.slice(skipLines)
    ];
    
    const newContent = newLines.join('\n');
    
    if (newContent !== originalContent) {
      await fs.writeFile(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (e) {
    stats.errors.push(`${filePath}: ${e.message}`);
    return false;
  }
}

// 主函数
async function main() {
  console.log('🧹 清理Markdown元信息');
  console.log('='.repeat(50));
  
  const startTime = Date.now();
  
  try {
    console.log('📁 查找Markdown文件...');
    const files = await findMarkdownFiles(OUTPUT_DIR);
    stats.total = files.length;
    console.log(`   发现 ${files.length} 个文件`);
    
    console.log('\n🔧 开始清理...');
    for (let i = 0; i < files.length; i++) {
      const cleaned = await cleanFile(files[i]);
      if (cleaned) {
        stats.cleaned++;
        process.stdout.write('.');
      }
    }
    
    console.log('\n\n' + '='.repeat(50));
    console.log('✅ 清理完成!');
    console.log(`📄 总文件数: ${stats.total}`);
    console.log(`🧹 已清理: ${stats.cleaned}`);
    console.log(`⏱️  耗时: ${((Date.now() - startTime) / 1000).toFixed(2)} 秒`);
    
    if (stats.errors.length > 0) {
      console.log(`\n⚠️  错误 (${stats.errors.length}):`);
      stats.errors.slice(0, 10).forEach(e => console.log(`  - ${e}`));
      if (stats.errors.length > 10) {
        console.log(`  ... 还有 ${stats.errors.length - 10} 个错误`);
      }
    }
    
  } catch (e) {
    console.error('❌ 错误:', e.message);
    process.exit(1);
  }
}

main();