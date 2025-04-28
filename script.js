const products = [
    { name: "Archivo 1", url: "https://example.com/archivo1.zip" },
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