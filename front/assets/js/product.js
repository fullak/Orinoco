//Récupère la liste des produits et affiche celui indiqué dans l'ID
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

//Désactive le bouton ajouter au panier
function disableAddToCartButton() {
  document.getElementById("inCart").style.display = "none";
  document.getElementById("add-to-cart").style.display = "block";
}

//Active le bouton ajouter au panier
function enableAddToCartButton() {
  document.getElementById("inCart").style.display = "block";
  document.getElementById("add-to-cart").style.display = "none";
}

//Récupere l'id du produit 
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

//Récupère le prix du produit
function getProductPrice() {
  const params = new URLSearchParams(window.location.search);
  return params.get("price");
}

//Change l'affichage du bouton d'ajout au panier si le produit y est deja
function listenForChange() {
  document.getElementById("add-to-cart").addEventListener("click", function () {
    if (localStorage.products > 0) {
      disableAddToCartButton();
    } else {
      enableAddToCartButton();
    }
  });
}

// recupere l'id produit
function setCartProductId() {
  localStorage.setItem("cartProductId", getProductId());
}

// recupere le prix produit
function setCartProductPrice() {
  localStorage.setItem("cartProductPrice", getProductPrice());
}






