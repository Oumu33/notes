const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '..', 'notes');

let deletedCount = 0;
let keptCount = 0;

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (file.endsWith('.md') && file !== 'README.md') {
      // 检查是否有数字前缀
      const hasNumberPrefix = /^\d+_/.test(file);
      
      if (!hasNumberPrefix) {
        // 没有数字前缀，检查是否有对应的带数字前缀的文件
        const filesInDir = fs.readdirSync(dir);
        const numberPrefixMatch = filesInDir.find(f => f !== file && f.endsWith(file));
        
        if (numberPrefixMatch) {
          // 找到对应的带数字前缀的文件，删除这个不带前缀的
          try {
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${path.relative(NOTES_DIR, filePath)}`);
            deletedCount++;
          } catch (e) {
            console.error(`Error deleting ${filePath}:`, e.message);
          }
        } else {
          // 没有找到对应的带数字前缀的文件，保留这个
          keptCount++;
        }
      } else {
        keptCount++;
      }
    }
  }
}

console.log('Scanning for duplicate files...');
scanDirectory(NOTES_DIR);

console.log(`\n=== Summary ===`);
console.log(`Deleted: ${deletedCount} files`);
console.log(`Kept: ${keptCount} files`);