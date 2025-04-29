const products = [
    { name: "Archivo 1", url: "https://archive.org/download/nspgames/Picross%20S%20Genesis%20and%20Master%20System%20Edition%20%5B010089701567A000%5D%5Bv0%5D.nsp" },
    { name: "Archivo 2", url: "https://example.com/archivo2.zip" },
    { name: "Archivo 3", url: "https://example.com/archivo3.zip" }
];

const productsContainer = document.getElementById('products');

// Generar HTML para los productos
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `<a href="${product.url}" target="_blank">${product.name}</a>`;
    productsContainer.appendChild(productDiv);
});
