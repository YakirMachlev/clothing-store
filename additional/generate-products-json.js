const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');
const CATEGORIES = ['shirts', 'pants', 'kitchen'];
const OUTPUT_FILE = path.join(__dirname, 'public', 'products.json');

const isImage = (filename) =>
  ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(filename).toLowerCase());

function generateProductsJson() {
  const result = {};

  CATEGORIES.forEach((category) => {
    const categoryPath = path.join(ASSETS_DIR, category);
    const productFolders = fs.readdirSync(categoryPath).filter((name) =>
      fs.statSync(path.join(categoryPath, name)).isDirectory()
    );

    result[category] = {};

    productFolders.forEach((folder) => {
      const folderPath = path.join(categoryPath, folder);
      const images = fs.readdirSync(folderPath).filter(isImage);

      if (images.length > 0) {
        result[category][folder] = images;
      }
    });
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`✅ products.json generated at ${OUTPUT_FILE}`);
}

generateProductsJson();
