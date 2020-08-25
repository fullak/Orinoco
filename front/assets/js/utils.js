const basePath = "http://localhost:3000/";
const url = basePath + "api/cameras/";

displayHeaderQtyOfProductInCart();

// function asynchrone récupérant les données de l'API
async function fetchAjax(url) {
  const response = await fetch(url);
  return await response.json();
}

//Vérifie si il y a des produit dans le pannier
function cartHasProduct(productId) {
  let products = Storage.get("products");
  if (products) {
    return products.includes(productId);
  }
}

//Affiche le nombre de produits dans le panier
function displayHeaderQtyOfProductInCart() {
  document.querySelector(".cart span").textContent = getTotalProductsInCart();
}

//Récupère le nombre total de produits dans le panier
function getTotalProductsInCart() {
  let total = 0;

  if (Storage.has("products")) {
    total = Storage.get("products").length;
  }

  return total;
}

//Rendu de l'affichage des produits en fonction du type
function renderProduct(product, type) {
  if (type === "card") {
    return `
        <div class="a-card">
        <a href="/front/pages/product.html?id=${product._id}" id="${
      product._id
    }" class="card">
        <img class="card-img-top imgProducts" src="${
          product.imageUrl
        }" alt="Card image cap">
        <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">${product.price / 100}€</p>
        </div>
      </a>
      </div>`;
  }

  if (type === "main") {
    return `
        <div class="container full-card">
            <div class="row img-card col-6">
                <img class="card-img-top productImg" src="${
                  product.imageUrl
                }" alt="Card image cap">
            </div>
            <div class="container card-body full-card-body col-4">
                <h3 class="card-title">${product.name}</h3>
                <div class="btn-group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lenses
                  </button>
                  <div class="dropdown-menu" id="dropdown-list">
                    <a class="dropdown-item" href="#">${product.lenses[0]}</a>
                    <a class="dropdown-item" href="#">${product.lenses[1]}</a>
                    <a class="dropdown-item" href="#">${product.lenses[2]}</a>
                  </div>
                </div>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price / 100}€</p>
            </div>
        </div>`;
  }

  if (type === "cart") {
    return `
      <div class="container head-list">
        <div class="row card-cart">
          <img class="card-img-top cart-img col-2" src="${
            product.imageUrl
          }" alt="card image cap">
          <p class="card-title name-item col-2">${product.name}</p>
          <p class="card-text price-item col-4">${product.price / 100},00 €</p>
          <p class="card-text quantity-item col-3">1</p>
        </div>
      </div>
         
    `;
  }
}

// function pour cacher un élément
function hide(id) {
  document.getElementById(id).style.display = "none";
}

// function pour afficher un élément
function show(id) {
  document.getElementById(id).style.display = "block";
}
