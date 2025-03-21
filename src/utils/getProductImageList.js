export function getProductImageList(category, productCount, imageCount = 2) {
    const products = [];
  
    for (let i = 1; i <= productCount; i++) {
      const folder = `${process.env.PUBLIC_URL}/${category}/${i}`;
      const images = [];
  
      for (let j = 1; j <= imageCount; j++) {
        images.push(`${folder}/${j}.jpg`);
      }
  
      products.push({ images });
    }
  
    return products;
  }
  