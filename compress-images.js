const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, 'public', 'assets');
const OUTPUT_DIR = path.join(__dirname, 'public', 'assets-compressed');
const MAX_WIDTH = 800;
const JPEG_QUALITY = 70;

const isImage = (filename) => /\.(jpg|jpeg|png)$/i.test(filename);

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function compressImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize({ width: MAX_WIDTH })
    .jpeg({ quality: JPEG_QUALITY })
    .toFile(outputPath);
  console.log(`✅ Compressed: ${outputPath}`);
}

async function processFolder(category, productFolder) {
  const inputFolder = path.join(INPUT_DIR, category, productFolder);
  const outputFolder = path.join(OUTPUT_DIR, category, productFolder);
  ensureDirSync(outputFolder);

  const files = fs.readdirSync(inputFolder).filter(isImage);

  for (const file of files) {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file);
    await compressImage(inputPath, outputPath);
  }
}

async function processAll() {
  const categories = fs.readdirSync(INPUT_DIR).filter((cat) =>
    fs.statSync(path.join(INPUT_DIR, cat)).isDirectory()
  );

  for (const category of categories) {
    const productFolders = fs.readdirSync(path.join(INPUT_DIR, category)).filter((folder) =>
      fs.statSync(path.join(INPUT_DIR, category, folder)).isDirectory()
    );

    for (const folder of productFolders) {
      await processFolder(category, folder);
    }
  }

  console.log(`🎉 All images compressed and saved to ${OUTPUT_DIR}`);
}

processAll();
