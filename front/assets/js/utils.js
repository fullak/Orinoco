const basePath = "http://localhost:3000/";
const url = basePath + "api/cameras/";
const orderUrl = url +"order";

displayHeaderQtyOfProductInCart();

function renderProduct(product, type) {
  if (type === "card") {
    return `
        <div class="a-card">
        <a href="/front/pages/product.html?id=${product._id}&price=${product.price}" id="${
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
                <div class="btn-group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Lenses
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">${product.lenses[0]}</a>
                    <a class="dropdown-item" href="#">${product.lenses[1]}</a>
                    <a class="dropdown-item" href="#">${product.lenses[2]}</a>
                  </div>
                </div>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price / 100}€</p>
                
                  <button type="button" class="btn btn-primary add-cart" id="add-to-cart">Add cart</button>

                <button type="button" class="btn btn-secondary inCart" disabled="disabled" id="add-to-cart">Deja dans le panier</button>
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
            <i class="far fa-times-circle" id-product="${product._id}" id="removeElt"></i>
          </a>
        </div>
      </div>
         
    `
  }

  if (type === "validate") {
    return `
      <div class="container">
        <div class="row card-body">
        <article id="confirmation" class="col-12">
        <h3>Commande validée</h3>
        <p class="user">Merci pour votre commande</p>
        <p class="order-id">Votre numéro de commande est le</p>
        <p class="total-price">
          Montant total : <span class="price"></span>
        </p>
      </article>
          <a class="back-button" href="/front/index.html">
            <button type="submit" class="btn btn-primary" id="go-back">Revenir a l'accueil</button>
          </a>
        </div>
      </div>
         
    `
  }
}

function displayHeaderQtyOfProductInCart() {
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

function cartHasProduct(productId) {
  let products = get('products');
  if (products) {
    return (products.includes(productId));
  } 
}

