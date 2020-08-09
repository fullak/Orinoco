fetchAjax(url + getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = displayProduct(product, "main");
  updateAddToCartButtonStatus(product._id);

  // Ecoute au clic utilisateur
  document.getElementById("add-to-cart").addEventListener("click", function () {
    let products = get("products") ?? [];
    let price = get("price") ?? [];

    if (get("products")) {
      if (cartHasProduct(getProductId())) {
        window.location.reload();
        return;
      }
    }

    products.push(getProductId());
    set("products", products);
    price.push(getProductPrice());
    set("price", price);
    displayHeaderQtyOfProductInCart();
  });
});

function updateAddToCartButtonStatus(productId) {
  if (cartHasProduct(productId)) {
    $(".add-cart").hide();
    return;
  }

  $(".inCart").hide();
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// recupere l'id produit
function setCartProductId() {
  localStorage.setItem("cartProductId", getProductId());
}

function getProductPrice() {
  const params = new URLSearchParams(window.location.search);
  return params.get("price");
}

// recupere le prix produit
function setCartProductPrice() {
  localStorage.setItem("cartProductPrice", getProductPrice());
}