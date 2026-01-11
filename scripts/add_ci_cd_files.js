const { execSync } = require('child_process');
const fs = require('fs');

// Get all CI_CD files from git index
const output = execSync('git ls-files -t | grep "CI_CD" | awk \'{print $2}\'', { encoding: 'utf8' });
const files = output.trim().split('\n').filter(f => f);

console.log(`Found ${files.length} CI_CD files in git index`);

// Add each file to staging area
files.forEach(file => {
  try {
    execSync(`git add "${file}"`, { encoding: 'utf8' });
    console.log(`Added: ${file}`);
  } catch (error) {
    console.error(`Failed to add: ${file}`);
  }
});

console.log('\nChecking git status...');
const status = execSync('git status --short | head -20', { encoding: 'utf8' });
console.log(status);