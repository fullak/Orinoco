const basePath = "http://localhost:3000/";
const url = basePath + "api/cameras/";

displayHeaderQtyOfProductInCart();

async function fetchAjax(url) {
  const response = await fetch(url);
  return await response.json();
}

function cartHasProduct(productId) {
  let products = get("products");
  if (products) {
    return products.includes(productId);
  }
}

function displayHeaderQtyOfProductInCart() {
  document.querySelector(".cart span").textContent = getTotalProductsInCart();
}

function getTotalProductsInCart() {
  let total = 0;

  if (has("products")) {
    total = get("products").length;
  }

  return total;
}

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
                  <div class="dropdown-menu">
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
          <img class="card-img-top cart-img col-2" src="${product.imageUrl}" alt="card image cap">
          <p class="card-title name-item col-2">${product.name}</p>
          <p class="card-text price-item col-4">${product.price / 100},00 €</p>
          <p class="card-text quantity-item col-3">1</p>
        </div>
      </div>
         
    `;
  }
}

function sumProductsPrice() {
  let totalCartPrice = sum(JSON.parse(localStorage.price));
  document.getElementById("count-total").innerHTML =
  sumTotalCartPrice = totalCartPrice / 100 + ",OO €";
}