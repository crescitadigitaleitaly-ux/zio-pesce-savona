const fs = require('fs');
const path = require('path');
const https = require('https');

const delay = ms => new Promise(res => setTimeout(res, ms));

const stylePrompt = "Professional realistic restaurant menu photo, elegant dark Italian seafood restaurant or premium bar background, warm cinematic lighting, realistic proportions, clean composition, shallow depth of field, premium glassware, sharp focus, high-end hospitality style.";
const negativePrompt = "no text, no logos, no people, no hands, no animals, no pigs, no sheep, no birds, no insects, no bugs, no faces, no surreal elements, no distorted glass, no extra glasses, no duplicated objects, no floating objects, no malformed stems, no strange reflections, no melted objects, no artificial-looking liquid, no incorrect background items.";

const categories = {
  whiteWine: "single elegant glass of crisp pale white wine",
  redWine: "single elegant glass of deep ruby red wine",
  roseWine: "single elegant glass of pale rosé wine",
  sparkling: "single elegant flute of sparkling wine with natural bubbles",
  beer: "single clean glass or bottle of golden lager beer",
  cocktail: "one clean realistic cocktail matching the item type",
  coffee: "realistic espresso or hot drink cup",
  juice: "clean glass of fresh fruit juice"
};

const itemsToGenerate = [
  // White Wines
  { file: 'vermentino-tigullio.jpg', prompt: categories.whiteWine },
  { file: 'vermentino.jpg', prompt: categories.whiteWine },
  { file: 'pigato.jpg', prompt: categories.whiteWine },
  { file: 'lumassina.jpg', prompt: categories.whiteWine },
  { file: 'blange.jpg', prompt: categories.whiteWine },
  { file: 'gewurztraminer.jpg', prompt: categories.whiteWine },
  { file: 'ribolla-gialla.jpg', prompt: categories.whiteWine },
  { file: 'grillo.jpg', prompt: categories.whiteWine },
  { file: 'pecorino.jpg', prompt: categories.whiteWine },
  
  // Sparkling Wines
  { file: 'prosecco-dirupo.jpg', prompt: categories.sparkling },
  { file: 'berlucchi-rose.jpg', prompt: categories.sparkling }, // maybe rose sparkling, but standard flute is fine
  { file: 'franciacorta.jpg', prompt: categories.sparkling },
  { file: 'champagne.jpg', prompt: categories.sparkling },
  { file: 'ferrari-brut.jpg', prompt: categories.sparkling },
  { file: 'bellavista.jpg', prompt: categories.sparkling },

  // Rose Wines
  { file: 'sciac-tra.jpg', prompt: categories.roseWine },
  { file: 'vignuolo.jpg', prompt: categories.roseWine },
  { file: 'bardolino.jpg', prompt: categories.roseWine },

  // Red Wines
  { file: 'rossese.jpg', prompt: categories.redWine },
  { file: 'granaccia.jpg', prompt: categories.redWine },
  { file: 'barbera.jpg', prompt: categories.redWine },
  { file: 'chianti.jpg', prompt: categories.redWine },
  { file: 'nebbiolo.jpg', prompt: categories.redWine },

  // Beers
  { file: 'birra-spina.jpg', prompt: categories.beer },
  { file: 'ellissor.jpg', prompt: categories.beer },
  { file: 'franziskaner.jpg', prompt: "single clean tall glass of cloudy wheat beer" },
  { file: 'ichnusa.jpg', prompt: categories.beer },

  // Coffee
  { file: 'caffe-illy.jpg', prompt: categories.coffee },
  { file: 'caffe-dek.jpg', prompt: categories.coffee },
  { file: 'orzo.jpg', prompt: categories.coffee },
  { file: 'te-infusi.jpg', prompt: "elegant glass cup of hot herbal tea" },

  // Drinks
  { file: 'succo-frutta.jpg', prompt: categories.juice },

  // Aperitivi
  { file: 'aperol-spritz.jpg', prompt: "single elegant large wine glass of bright orange Aperol Spritz cocktail with ice and orange slice" },
  { file: 'campari-spritz.jpg', prompt: "single elegant large wine glass of bright red Campari Spritz cocktail with ice and orange slice" },
  { file: 'hugo-spritz.jpg', prompt: "single elegant large wine glass of pale clear Hugo Spritz cocktail with ice, mint leaves, and elderflower" },
  { file: 'violetta-spritz.jpg', prompt: "single elegant large wine glass of pale purple violet spritz cocktail with ice" },
  { file: 'calice-prosecco.jpg', prompt: categories.sparkling },
  { file: 'martini-rosso-bianco.jpg', prompt: "single elegant martini glass with clear vermouth and olive" },
  { file: 'crodino.jpg', prompt: "single elegant small glass of golden bitter non-alcoholic aperitivo over ice" },
  { file: 'negroni.jpg', prompt: "single elegant short glass of deep red Negroni cocktail over large ice cube with orange peel" },
  { file: 'negrosky.jpg', prompt: "single elegant short glass of deep red Negrosky cocktail over large ice cube" },
  { file: 'gin-tonic-lemon.jpg', prompt: "single elegant tall glass of clear gin and tonic cocktail with ice and lemon slice" },
  { file: 'cuba-libre.jpg', prompt: "single elegant tall glass of dark rum and cola cocktail with ice and lime slice" },
  { file: 'americano.jpg', prompt: "single elegant short glass of red Americano cocktail over ice with orange slice" },
  { file: 'pastis.jpg', prompt: "single elegant tall glass of cloudy white pastis drink over ice" }
];

const outDir = path.join(__dirname, 'public', 'images', 'menu');

async function downloadImage(item) {
  const fullPrompt = `${item.prompt}. ${stylePrompt}. ${negativePrompt}`;
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=800&height=600&nologo=true`;
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
  console.log(`Regenerating ${itemsToGenerate.length} images safely...`);
  for (let i = 0; i < itemsToGenerate.length; i++) {
    const item = itemsToGenerate[i];
    try {
      await downloadImage(item);
      if (i < itemsToGenerate.length - 1) {
        await delay(2000); // 2 second delay to avoid rate limiting
      }
    } catch (err) {
      console.error(`Error on ${item.file}:`, err.message);
    }
  }
  console.log('All done!');
}

main();
