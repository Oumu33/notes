const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '..', 'notes');
const CATALOGUES_FILE = path.join(NOTES_DIR, 'catalogues.json');
const NOTES_FILE = path.join(NOTES_DIR, 'notes.json');

// 读取catalogues.json和notes.json
const catalogues = JSON.parse(fs.readFileSync(CATALOGUES_FILE, 'utf8'));
const notes = JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8'));

// 创建note_id到note名称的映射
const noteIdToName = new Map();
for (const note of notes) {
  noteIdToName.set(note.id, note.name);
}

// 获取实际的目录名称（处理特殊字符）
function getActualDirName(noteName) {
  const dirs = fs.readdirSync(NOTES_DIR);
  
  // 收集所有可能的目录名称
  const possibleDirs = [];
  
  // 精确匹配
  if (dirs.includes(noteName)) {
    possibleDirs.push(noteName);
  }
  
  // 替换特殊字符
  const normalized = noteName.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
  if (dirs.includes(normalized)) {
    possibleDirs.push(normalized);
  }
  
  // 其他常见替换
  const altNames = [
    noteName.replace(/\//g, '_'),
    noteName.replace(/ /g, '_'),
    noteName.replace(/-/g, '_'),
  ];
  
  for (const alt of altNames) {
    if (dirs.includes(alt) && !possibleDirs.includes(alt)) {
      possibleDirs.push(alt);
    }
  }
  
  // 如果没有找到任何目录
  if (possibleDirs.length === 0) {
    return null;
  }
  
  // 如果只有一个目录，直接返回
  if (possibleDirs.length === 1) {
    return possibleDirs[0];
  }
  
  // 如果有多个目录，选择有文件的目录
  for (const dir of possibleDirs) {
    const dirPath = path.join(NOTES_DIR, dir);
    const files = fs.readdirSync(dirPath);
    const hasMdFiles = files.some(f => f.endsWith('.md') && f !== 'README.md');
    if (hasMdFiles) {
      return dir;
    }
  }
  
  // 如果都没有文件，返回第一个
  return possibleDirs[0];
}

// 创建标题到文件名的映射（简化版）
function createTitleToFilenameMap(noteDir) {
  const map = new Map();
  const files = fs.readdirSync(noteDir);
  
  for (const file of files) {
    const filePath = path.join(noteDir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isFile() && file.endsWith('.md') && file !== 'README.md') {
      // 从文件名中提取标题（去掉序号前缀和.md后缀）
      const title = file.replace(/^\d+_/, '').replace(/\.md$/, '');
      map.set(title, file);
    }
  }
  
  return map;
}

// 查找文件名，处理特殊字符不匹配的情况
function findFilename(title, titleToFile) {
  // 精确匹配
  if (titleToFile.has(title)) {
    return titleToFile.get(title);
  }
  
  // 尝试替换特殊字符
  const normalized = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
  if (titleToFile.has(normalized)) {
    return titleToFile.get(normalized);
  }
  
  // 尝试其他常见替换
  const altTitles = [
    title.replace(/\//g, '_'),
    title.replace(/ /g, '_'),
    title.replace(/-/g, '_'),
  ];
  
  for (const alt of altTitles) {
    if (titleToFile.has(alt)) {
      return titleToFile.get(alt);
    }
  }
  
  return null;
}

// 重新组织文件
let movedCount = 0;
let notFoundCount = 0;

for (const catalogue of catalogues) {
  const noteId = catalogue.note;
  const noteName = noteIdToName.get(noteId);
  
  if (!noteName) {
    console.log(`Note name not found for note_id: ${noteId}`);
    continue;
  }
  
  const actualDirName = getActualDirName(noteName);
  
  if (!actualDirName) {
    console.log(`Note directory not found for: ${noteName}`);
    continue;
  }
  
  const noteDir = path.join(NOTES_DIR, actualDirName);
  
  console.log(`\nProcessing: ${noteName} (dir: ${actualDirName})`);
  
  // 创建标题到文件名的映射
  const titleToFile = createTitleToFilenameMap(noteDir);
  console.log(`  Found ${titleToFile.size} files`);
  
  let currentSubdir = '';
  
  for (const item of catalogue.catalogue) {
    if (item.type === 'TITLE') {
      // 这是一个子目录标题
      currentSubdir = item.title;
      console.log(`  Category: ${currentSubdir}`);
    } else if (item.type === 'DOC') {
      // 这是一个文档，需要移动到当前子目录
      const title = item.title;
      const filename = findFilename(title, titleToFile);
      
      if (!filename) {
        console.log(`    ⚠️  File not found for title: ${title}`);
        notFoundCount++;
        continue;
      }
      
      const sourcePath = path.join(noteDir, filename);
      const targetDir = path.join(noteDir, currentSubdir);
      const targetPath = path.join(targetDir, filename);
      
      // 如果已经在正确的位置，跳过
      if (path.dirname(sourcePath) === targetDir) {
        console.log(`    ✓ ${filename} already in correct location`);
        continue;
      }
      
      // 如果文件不存在，可能已经被移动了
      if (!fs.existsSync(sourcePath)) {
        // 检查是否已经在目标位置
        if (fs.existsSync(targetPath)) {
          console.log(`    ✓ ${filename} already moved to ${currentSubdir}`);
          continue;
        }
        console.log(`    ⚠️  File not found: ${sourcePath}`);
        continue;
      }
      
      // 创建目标目录
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // 移动文件
      try {
        fs.renameSync(sourcePath, targetPath);
        console.log(`    ✓ Moved ${filename} to ${currentSubdir}`);
        movedCount++;
      } catch (e) {
        console.error(`    ✗ Error moving ${filename}:`, e.message);
      }
    }
  }
}

console.log(`\n=== Summary ===`);
console.log(`Moved files: ${movedCount}`);
console.log(`Files not found: ${notFoundCount}`);