// Appeler url de l'api
url;

// Affichage produit
function baseProduct(productName, productId, productImg, productPrice) {
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

// Afficher produits
const displayProducts = async () => {
    const products = await getCameras(url);
    products.forEach((product) => {
        baseProduct(product.name, product._id, product.imageUrl, product.price);
    });
};

// Récupérer produits
getCameras;

// Appeler fonction affichants les produits
displayProducts();
