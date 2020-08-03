const basePath = "http://localhost:3000/";
const url = basePath + "api/cameras/";

displayQtyOfProductInCart();

function displayProduct(product, type) {
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
            <div class="row img-card">
                <img class="card-img-top" src="${
                  product.imageUrl
                }" alt="Card image cap">
            </div>
            <div class="container card-body full-card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-text">${product.lenses}<p>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price / 100}€</p>
                <button type="button" class="btn btn-primary add-cart" id="add-to-cart">Add cart</button>
            </div>
        </div>`;
  }

  if (type === "cart") {
    return `
      <div class="container head-list">
        <div class="row card-cart">
          <img class="card-img-top cart-img col-2" src="${product.imageUrl}" alt="card image cap">
          <p class="card-title name-item col-2">${product.name}</p>
          <p class="card-text price-item col-4">${product.price / 100},00 €</p>
          <p class="card-text quantity-item col-3">1</p>
          <a href="#">
            <i class="far fa-times-circle" id-product="${product._id}" id="remove"></i>
          </a>
        </div>
      </div>
         
    `
  }

  if (type === "validate") {
    return `
      <div class="container">
        <div class="row card-body">
          <div class="message col-12">
            <h3>Merci pour votre commande #User1 !</h3>
            <p>Nous mettons tout en oeuvre pour vous livrer au plus vite !</p>
          </div>
          <a href="/front/index.html">
            <button type="submit" class="btn btn-primary back-button" id="go-back">Revenir a l'accueil</button>
          </a>
        </div>
      </div>
         
    `
  }
}

function displayQtyOfProductInCart() {
  document.querySelector('.cart span').textContent = getTotalProductsInCart();
}

function getTotalProductsInCart() {
  let total = 0;

  if (has('products')) {
    total = get('products').length;
  }

  return total;
}

async function fetchAjax(url) {
  const response = await fetch(url);
  return await response.json();
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);

  if (params) {
    return params.get('id');
  }
  return null;
}

function cartHasProduct(productId) {
  let products = get('products');
  if (products) {
    return (products.includes(productId));
  } 
}

