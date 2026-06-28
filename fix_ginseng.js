const fs = require('fs');
const path = require('path');
const https = require('https');

const item = { 
  file: 'ginseng.jpg', 
  prompt: 'Professional high-end food photography of a small elegant ceramic cup of hot creamy espresso coffee. Smooth light brown crema on top. Served on a dark wooden cafe table. Warm inviting lighting, elegant setting, 8k resolution, photorealistic. No roots, no plants in the cup.' 
};

const outDir = path.join(__dirname, 'public', 'images', 'menu');

async function downloadImage() {
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.prompt)}?width=800&height=600&nologo=true`;
  const dest = path.join(outDir, item.file);

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200 || res.statusCode === 302) {
        const targetUrl = res.statusCode === 302 ? res.headers.location : url;
        https.get(targetUrl, (imageRes) => {
          const fileStream = fs.createWriteStream(dest);
          imageRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded: ${item.file}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        reject(new Error(`Failed with status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

downloadImage().then(() => console.log('Ginseng coffee image fixed!')).catch(err => console.error(err));
