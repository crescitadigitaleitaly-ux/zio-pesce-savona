const fs = require('fs');
const path = require('path');
const https = require('https');

const itemsToGenerate = [
  // Vini Bianchi
  { file: 'vermentino-tigullio.jpg', name: 'Vermentino Liguria', desc: 'White wine glass' },
  { file: 'vermentino.jpg', name: 'Vermentino Oro', desc: 'White wine glass' },
  { file: 'pigato.jpg', name: 'Pigato wine', desc: 'White wine glass' },
  { file: 'lumassina.jpg', name: 'Lumassina wine', desc: 'White wine glass' },
  { file: 'blange.jpg', name: 'Blange wine', desc: 'White wine glass' },
  { file: 'gewurztraminer.jpg', name: 'Gewurztraminer', desc: 'White wine glass' },
  { file: 'ribolla-gialla.jpg', name: 'Ribolla Gialla', desc: 'White wine glass' },
  { file: 'grillo.jpg', name: 'Grillo wine', desc: 'White wine glass' },
  { file: 'pecorino.jpg', name: 'Pecorino wine', desc: 'White wine glass' },
  
  // Bollicine
  { file: 'prosecco-dirupo.jpg', name: 'Prosecco', desc: 'Sparkling wine glass' },
  { file: 'berlucchi-rose.jpg', name: 'Berlucchi Rose', desc: 'Rose sparkling wine glass' },
  { file: 'franciacorta.jpg', name: 'Franciacorta', desc: 'Sparkling wine glass' },
  { file: 'champagne.jpg', name: 'Champagne Perrier Jouet', desc: 'Champagne glass' },
  { file: 'ferrari-brut.jpg', name: 'Ferrari Brut', desc: 'Sparkling wine glass' },
  { file: 'bellavista.jpg', name: 'Bellavista Franciacorta', desc: 'Sparkling wine glass' },

  // Rosati
  { file: 'sciac-tra.jpg', name: 'Sciac-Tra Rose', desc: 'Rose wine glass' },
  { file: 'vignuolo.jpg', name: 'Vignuolo Rose', desc: 'Rose wine glass' },
  { file: 'bardolino.jpg', name: 'Bardolino Chiaretto', desc: 'Rose wine glass' },

  // Rossi
  { file: 'rossese.jpg', name: 'Rossese Red Wine', desc: 'Red wine glass' },
  { file: 'granaccia.jpg', name: 'Granaccia Red Wine', desc: 'Red wine glass' },
  { file: 'barbera.jpg', name: 'Barbera Red Wine', desc: 'Red wine glass' },
  { file: 'chianti.jpg', name: 'Chianti Red Wine', desc: 'Red wine glass' },
  { file: 'nebbiolo.jpg', name: 'Nebbiolo Red Wine', desc: 'Red wine glass' },

  // Birre
  { file: 'birra-spina.jpg', name: 'Draft beer', desc: 'Pint of draft beer' },
  { file: 'ellissor.jpg', name: 'Craft beer', desc: 'Glass of craft beer' },
  { file: 'franziskaner.jpg', name: 'Wheat beer', desc: 'Tall glass of wheat beer' },
  { file: 'corona.jpg', name: 'Corona beer', desc: 'Bottle of Corona beer with lime' },
  { file: 'peroni-rossa.jpg', name: 'Peroni Rossa beer', desc: 'Glass of red ale beer' },
  { file: 'ichnusa.jpg', name: 'Ichnusa beer', desc: 'Glass of unfiltered beer' },

  // Bibite
  { file: 'chinotto.jpg', name: 'Chinotto soda', desc: 'Glass of dark citrus soda with ice' },
  { file: 'coca-cola.jpg', name: 'Coca-Cola', desc: 'Glass of cola with ice and lemon' },
  { file: 'coca-cola-zero.jpg', name: 'Coca-Cola Zero', desc: 'Glass of cola zero with ice' },
  { file: 'fanta.jpg', name: 'Fanta orange soda', desc: 'Glass of orange soda with ice' },
  { file: 'sprite.jpg', name: 'Sprite lemon soda', desc: 'Glass of clear lemon soda with ice' },
  { file: 'estathe.jpg', name: 'Iced tea', desc: 'Glass of iced tea with lemon' },
  { file: 'succo-frutta.jpg', name: 'Fruit juice', desc: 'Glass of peach fruit juice' },

  // Caffetteria
  { file: 'caffe-illy.jpg', name: 'Espresso coffee', desc: 'Cup of espresso coffee' },
  { file: 'caffe-dek.jpg', name: 'Decaf espresso', desc: 'Cup of decaf espresso' },
  { file: 'orzo.jpg', name: 'Barley coffee', desc: 'Cup of barley coffee' },
  { file: 'ginseng.jpg', name: 'Ginseng coffee', desc: 'Cup of ginseng coffee' },
  { file: 'te-infusi.jpg', name: 'Herbal tea', desc: 'Cup of hot herbal tea' },

  // A few missing food/aperitivi
  { file: 'calice-prosecco.jpg', name: 'Glass of prosecco', desc: 'Glass of prosecco' },
  { file: 'martini-rosso-bianco.jpg', name: 'Martini', desc: 'Glass of martini' },
  { file: 'crodino.jpg', name: 'Crodino aperitivo', desc: 'Glass of non-alcoholic orange aperitivo' },
  { file: 'pastis.jpg', name: 'Pastis drink', desc: 'Glass of pastis' },
  { file: 'focaccina-della-casa.jpg', name: 'Focaccina', desc: 'Small focaccia bread' },
];

const outDir = path.join(__dirname, 'public', 'images', 'menu');

async function downloadImage(item) {
  const prompt = encodeURIComponent(`Professional high-end food photography of a ${item.name}, ${item.desc}. Served in a premium Italian restaurant. Cinematic dark moody lighting, 8k resolution, highly detailed, photorealistic, elegant setting.`);
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=800&height=600&nologo=true`;
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

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  console.log(`Generating ${itemsToGenerate.length} images sequentially to avoid rate limits...`);
  for (let i = 0; i < itemsToGenerate.length; i++) {
    const item = itemsToGenerate[i];
    try {
      await downloadImage(item);
      if (i < itemsToGenerate.length - 1) {
        await delay(2000); // 2 second delay between requests
      }
    } catch (err) {
      console.error(`Error on ${item.file}:`, err.message);
    }
  }
  console.log('All done!');
}

main();
