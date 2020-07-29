const basePath = "http://localhost:3000/";
const url = basePath + "api/cameras/";

displayQtyOfProductInCart();

async function fetchProducts() {
  const response = await fetch(url);
  return await response.json();
}

// Affichage produits
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
    <div class="basket-total-container row">
            <h4 class="basket-total-title"> Panier Total : </h4>
            <h4 class="total-price">${totalCost / 100},00 €</h4>
        </div>
        <div class="form">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nom</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Nom">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Prénom</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Prénom">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Adresse</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Adresse">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Complément d'adresse</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Complément d'adresse">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Code Postal</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Code Postal">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Ville</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Ville">
                </div>
                <div class="validate-form">
                    <button type="button" class="btn btn-light btn-form cancel-cart" id="clear-cart">Annuler ma commande</button>
                    <a href="/front/pages/validate.html">
                        <button type="button" class="btn btn-primary btn-form validate-form" id="validate">Valider</button>
                    </a>
                </div>
            </form>
        </div> 
    `
  }
}

function displayQtyOfProductInCart() {
  let productNumbers = get('products');
  productNumbers = JSON.parse(productNumbers).length;

  if (productNumbers > 0) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function get(name) {
  if (localStorage.getItem(name)) {
    return localStorage.getItem(name);
  }

  return null;
}

function set (name, value) {
  localStorage.setItem(name, JSON.stringify(value));
}

function clear() {
  localStorage.clear();
}

