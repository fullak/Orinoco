const basePath = 'http://localhost:3000/';

// url API
const url = basePath + "api/cameras";

// Récupérer produits
const getCameras = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

// Affichage produit page index
function indexProduct(productName, productId, productImg, productPrice) {
    const products = document.querySelector("#products");
    const article = document.createElement("article");
    article.innerHTML = `
  <div class="a-card">
  <a href="/front/pages/product.html?id=${productId}" id="${productId}" class="card">
  <img class="card-img-top imgProducts" src="${productImg}" alt="Card image cap">
  <div class="card-body">
      <h3 class="card-title">${productName}</h3>
      <p class="card-text">${productPrice/100}€</p>
  </div>
</a>
</div>`;
    products.appendChild(article);
};

// Affichage produit page product
const productPageCamera = (productData) => {
    section.innerHTML = `
      <div class="product">
          <img src="${productData.imageUrl}" alt="${productData.name}">
          <div class="product-information">
              <h2 class="product-title">${productData.name}</h2>
              <p class="price">${productData.price / 100}</p>
              <p class="description">${productData.description}</p>
          </div>
      </div>`;
  };