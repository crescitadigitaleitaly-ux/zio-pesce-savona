const fs = require('fs');
const path = require('path');
const https = require('https');

const itemsToFix = [
  { 
    file: 'corona.jpg', 
    prompt: 'Professional high-end food photography of a clear glass bottle of light golden Mexican lager beer with a lime wedge in the neck. Served on a dark wooden bar counter. No text on the bottle. Cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'peroni-rossa.jpg', 
    prompt: 'Professional high-end food photography of a pint glass filled with amber red ale beer with a thick white foam head. Served on a dark wooden bar counter. Cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'chinotto.jpg', 
    prompt: 'Professional high-end food photography of a glass filled with dark brown, nearly black bitter citrus soda, ice cubes, and a slice of dried orange. Elegant setting, cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'coca-cola.jpg', 
    prompt: 'Professional high-end food photography of a tall glass filled with dark cola, effervescent bubbles, ice cubes, and a fresh lemon wedge. Condensation on the glass. Cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'coca-cola-zero.jpg', 
    prompt: 'Professional high-end food photography of a sleek glass filled with dark sugar-free cola, lots of ice cubes. Dark moody background, cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'fanta.jpg', 
    prompt: 'Professional high-end food photography of a glass filled with bright vibrant orange soda, effervescent bubbles, ice cubes, and a slice of fresh orange. Cinematic lighting, dark background, 8k resolution, photorealistic.' 
  },
  { 
    file: 'sprite.jpg', 
    prompt: 'Professional high-end food photography of a glass filled with crystal clear, transparent lemon-lime soda, sparkling bubbles, ice cubes, a slice of lemon and a slice of lime. Dark moody background, cinematic lighting, 8k resolution, photorealistic.' 
  },
  { 
    file: 'estathe.jpg', 
    prompt: 'Professional high-end food photography of a short glass filled with amber-colored iced tea, ice cubes, and a slice of fresh peach. Condensation on the glass. Dark moody background, cinematic lighting, 8k resolution, photorealistic.' 
  }
];

const outDir = path.join(__dirname, 'public', 'images', 'menu');
const delay = ms => new Promise(res => setTimeout(res, ms));

async function downloadImage(item) {
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

async function main() {
  console.log(`Fixing ${itemsToFix.length} images...`);
  for (let i = 0; i < itemsToFix.length; i++) {
    const item = itemsToFix[i];
    try {
      await downloadImage(item);
      if (i < itemsToFix.length - 1) {
        await delay(2000);
      }
    } catch (err) {
      console.error(`Error on ${item.file}:`, err.message);
    }
  }
  console.log('All done!');
}

main();
