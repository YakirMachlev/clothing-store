export async function loadProducts(category) {
    const res = await fetch(`${process.env.PUBLIC_URL}/products.json`);
    const data = await res.json();
  
    const categoryData = data[category];
  
    const products = Object.entries(categoryData).map(([folder, images]) => {
      const imagePaths = images.map(
        (filename) => `${process.env.PUBLIC_URL}/assets/${category}/${folder}/${filename}`
      );
      return { images: imagePaths };
    });
  
    return products;
  }
  