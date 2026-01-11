const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '..', 'notes');

// 读取catalogues.json和notes.json
const catalogues = JSON.parse(fs.readFileSync(path.join(NOTES_DIR, 'catalogues.json'), 'utf8'));
const notes = JSON.parse(fs.readFileSync(path.join(NOTES_DIR, 'notes.json'), 'utf8'));

// 创建note_id到note名称的映射
const noteIdToName = new Map();
for (const note of notes) {
  noteIdToName.set(note.id, note.name);
}

// 获取正确的目录名称
function getActualDirName(noteName) {
  const dirs = fs.readdirSync(NOTES_DIR);
  if (dirs.includes(noteName)) {
    return noteName;
  }
  const normalized = noteName.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
  if (dirs.includes(normalized)) {
    return normalized;
  }
  const altNames = [
    noteName.replace(/\//g, '_'),
    noteName.replace(/ /g, '_'),
    noteName.replace(/-/g, '_'),
  ];
  for (const alt of altNames) {
    if (dirs.includes(alt)) {
      return alt;
    }
  }
  return null;
}

// 获取正确的子目录列表
function getCorrectSubdirs(noteId) {
  const catalogue = catalogues.find(c => c.note === noteId);
  if (!catalogue) return new Set();
  
  const correctDirs = new Set();
  for (const item of catalogue.catalogue) {
    if (item.type === 'TITLE') {
      correctDirs.add(item.title);
    }
  }
  return correctDirs;
}

let deletedDirs = 0;

for (const catalogue of catalogues) {
  const noteId = catalogue.note;
  const noteName = noteIdToName.get(noteId);
  
  if (!noteName) continue;
  
  const actualDirName = getActualDirName(noteName);
  if (!actualDirName) continue;
  
  const noteDir = path.join(NOTES_DIR, actualDirName);
  
  // 获取正确的子目录列表
  const correctSubdirs = getCorrectSubdirs(noteId);
  
  // 获取实际的子目录列表
  const actualSubdirs = fs.readdirSync(noteDir).filter(f => {
    const fullPath = path.join(noteDir, f);
    return fs.statSync(fullPath).isDirectory();
  });
  
  // 找出错误的目录
  const wrongDirs = actualSubdirs.filter(d => !correctSubdirs.has(d));
  
  if (wrongDirs.length > 0) {
    console.log(`\n清理 ${actualDirName} 中的错误目录:`);
    for (const wrongDir of wrongDirs) {
      const wrongDirPath = path.join(noteDir, wrongDir);
      
      // 检查目录是否为空
      const files = fs.readdirSync(wrongDirPath);
      if (files.length > 0) {
        console.log(`  ⚠️  ${wrongDir} 不为空，包含 ${files.length} 个文件:`);
        files.forEach(f => console.log(`    - ${f}`));
        // 移动文件到父目录
        for (const file of files) {
          const srcPath = path.join(wrongDirPath, file);
          const dstPath = path.join(noteDir, file);
          if (!fs.existsSync(dstPath)) {
            fs.renameSync(srcPath, dstPath);
            console.log(`    ✓ 移动 ${file} 到父目录`);
          } else {
            fs.unlinkSync(srcPath);
            console.log(`    ✗ 删除 ${file} (已存在)`);
          }
        }
      }
      
      // 删除空目录
      fs.rmdirSync(wrongDirPath);
      console.log(`  ✓ 删除目录: ${wrongDir}`);
      deletedDirs++;
    }
  }
}

console.log(`\n=== Summary ===`);
console.log(`删除了 ${deletedDirs} 个错误的目录`);
