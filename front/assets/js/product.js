fetchAjax(url + getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = renderProduct(product, "main");
  listenForChange();

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

function listenForChange() {
  document.getElementById("add-to-cart").addEventListener("click", function () {
    if (localStorage.products > 0) {
      disableSubmitButton();
    } else {
      enableSubmitButton();
    }
  });
}

function enableSubmitButton() {
  document.getElementById("inCart").style.display = "block";
  document.getElementById("add-to-cart").style.display = "none";
}

function disableSubmitButton() {
  document.getElementById("inCart").style.display = "none";
  document.getElementById("add-to-cart").style.display = "block";
}
