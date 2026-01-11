#!/usr/bin/env node
/**
 * 图片链接脱敏脚本
 * 将远程图片链接替换为本地占位符或脱敏后的链接
 */

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

const OUTPUT_DIR = './cuiliangblog_notes';
const IMAGES_DIR = './cuiliangblog_notes/images';

// 统计
const stats = {
  files: 0,
  images: 0,
  replaced: 0
};

// 清理文件名
function sanitizeFileName(name) {
  return name.replace(/[<>:"/\\|?*]/g, '_').replace(/\s+/g, '_').substring(0, 100);
}

// 生成图片哈希
function getImageHash(url) {
  return crypto.createHash('md5').update(url).digest('hex').substring(0, 16);
}

// 获取图片扩展名
function getImageExtension(url) {
  const match = url.match(/\.(png|jpg|jpeg|gif|webp|svg)(\?|$)/i);
  return match ? `.${match[1].toLowerCase()}` : '.png';
}

// 处理单个文件
async function processFile(filePath, noteName) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    
    // 匹配所有图片链接
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;
    let replacements = [];
    
    while ((match = imageRegex.exec(content)) !== null) {
      const [fullMatch, altText, imageUrl] = match;
      
      if (!imageUrl.startsWith('http')) continue;
      
      stats.images++;
      
      // 生成图片哈希和扩展名
      const hash = getImageHash(imageUrl);
      const ext = getImageExtension(imageUrl);
      const imageName = `img_${hash}${ext}`;
      
      // 本地图片路径
      const localImagePath = path.join(IMAGES_DIR, noteName, imageName);
      const relativeImagePath = `../images/${noteName}/${imageName}`;
      
      // 检查本地图片是否存在
      const imageExists = await fs.access(localImagePath).then(() => true).catch(() => false);
      
      if (imageExists) {
        // 使用本地图片
        replacements.push({
          from: fullMatch,
          to: `![${altText}](${relativeImagePath})`
        });
        stats.replaced++;
      } else {
        // 创建占位符图片链接（脱敏）
        replacements.push({
          from: fullMatch,
          to: `![${altText}](https://via.placeholder.com/800x600?text=Image+${hash})`
        });
      }
    }
    
    // 执行替换
    for (const replacement of replacements) {
      content = content.replace(replacement.from, replacement.to);
    }
    
    // 保存文件
    await fs.writeFile(filePath, content, 'utf8');
    stats.files++;
    
  } catch (e) {
    console.error(`处理文件失败 ${filePath}:`, e.message);
  }
}

// 处理单个笔记目录
async function processNote(noteDir, noteName) {
  try {
    const files = await fs.readdir(noteDir);
    const mdFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
    
    console.log(`  处理 ${noteName}: ${mdFiles.length} 个文件`);
    
    for (const file of mdFiles) {
      const filePath = path.join(noteDir, file);
      await processFile(filePath, noteName);
    }
    
  } catch (e) {
    console.error(`处理目录失败 ${noteName}:`, e.message);
  }
}

// 主函数
async function main() {
  console.log('🚀 图片链接脱敏处理');
  console.log('='.repeat(50));
  
  const startTime = Date.now();
  
  try {
    // 获取所有笔记目录
    const entries = await fs.readdir(OUTPUT_DIR, { withFileTypes: true });
    const noteDirs = entries
      .filter(e => e.isDirectory() && !e.name.startsWith('.'))
      .map(e => e.name)
      .filter(name => name !== 'images');
    
    console.log(`发现 ${noteDirs.length} 个笔记目录\n`);
    
    // 处理每个笔记
    for (const noteName of noteDirs) {
      const noteDir = path.join(OUTPUT_DIR, noteName);
      await processNote(noteDir, noteName);
    }
    
    // 打印统计
    console.log('\n' + '='.repeat(50));
    console.log('✅ 处理完成!');
    console.log(`📁 处理文件: ${stats.files}`);
    console.log(`🖼️  图片总数: ${stats.images}`);
    console.log(`✏️  已替换: ${stats.replaced}`);
    console.log(`⏱️  耗时: ${((Date.now() - startTime) / 1000).toFixed(2)} 秒`);
    console.log(`\n📁 输出目录: ${path.resolve(OUTPUT_DIR)}`);
    
  } catch (e) {
    console.error('❌ 致命错误:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}

main();