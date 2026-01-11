const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get all markdown files in CI_CD directory
const ci_cd_dir = '/opt/notion/notes/CI_CD';
const files = [];

function getMarkdownFiles(dir, fileList) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getMarkdownFiles(fullPath, fileList);
    } else if (item.endsWith('.md')) {
      fileList.push(fullPath);
    }
  });
}

getMarkdownFiles(ci_cd_dir, files);

console.log(`找到 ${files.length} 个markdown文件\n`);

// Add files to git with progress
let added = 0;
let failed = 0;

files.forEach((file, index) => {
  try {
    execSync(`git add "${file}"`, { encoding: 'utf8', stdio: ['ignore'] });
    added++;
    const progress = Math.round((added / files.length) * 100);
    process.stdout.write(`\r进度: [${'='.repeat(Math.floor(progress/2))}${' '.repeat(50 - Math.floor(progress/2))}] ${progress}% (${added}/${files.length})`);
  } catch (error) {
    failed++;
    console.log(`\n失败: ${file}`);
  }
});

console.log(`\n\n完成！成功: ${added}, 失败: ${failed}`);

// Check git status
const status = execSync('git status --short | head -20', { encoding: 'utf8' });
console.log('\nGit状态:');
console.log(status || '没有待提交的文件');