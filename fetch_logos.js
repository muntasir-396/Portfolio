const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  try {
    console.log('Downloading BUP logo...');
    await download('https://logo.clearbit.com/bup.edu.bd', 'public/images/education/bup.png');
    console.log('Downloading St Joseph logo...');
    await download('https://logo.clearbit.com/sjs.edu.bd', 'public/images/education/stjoseph.png');
    console.log('Downloading AK School logo...');
    // A.K. High School & College doesn't have a known domain in the json, let's try aksc.edu.bd or akshc.edu.bd or just skip or use a placeholder.
    // The user said "i give uni and clg website link in json file". He did not say school website link.
    console.log('Done.');
  } catch (e) {
    console.error(e);
  }
}

main();
