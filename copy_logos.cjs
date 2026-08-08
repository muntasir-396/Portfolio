const fs = require('fs');
const path = require('path');

const srcDir = '/Users/muntasirmamun/.gemini/antigravity-ide/brain/59891e2e-243c-42fb-a572-e63e27f96e86';
const destDir = '/Users/muntasirmamun/Muntasir/PROJECT/dev-portfolio/public/images/education';

// Sorting files by creation time to get chronological order of the 2 recent files
const files = fs.readdirSync(srcDir)
  .filter(f => f.startsWith('media__') && f.endsWith('.png'))
  .map(f => ({ name: f, time: fs.statSync(path.join(srcDir, f)).mtime.getTime() }))
  .sort((a, b) => a.time - b.time);

// The first one is the oldest (screenshot), so we take the last two
if (files.length >= 3) {
  const bupFile = files[1].name;
  const sjsFile = files[2].name;

  fs.copyFileSync(path.join(srcDir, bupFile), path.join(destDir, 'bup.png'));
  fs.copyFileSync(path.join(srcDir, sjsFile), path.join(destDir, 'stjoseph.png'));
  console.log('Copied files successfully');
} else if (files.length === 2) {
  const bupFile = files[0].name;
  const sjsFile = files[1].name;

  fs.copyFileSync(path.join(srcDir, bupFile), path.join(destDir, 'bup.png'));
  fs.copyFileSync(path.join(srcDir, sjsFile), path.join(destDir, 'stjoseph.png'));
  console.log('Copied 2 files successfully');
} else {
  console.log('Not enough files found:', files);
}
