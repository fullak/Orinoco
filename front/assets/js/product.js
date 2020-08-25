//Récupère la liste des produits et affiche celui indiqué dans l'ID
fetchAjax(url + getProductId()).then(function (product) {
  updateAddToCartButtonStatus(product._id);
  displayProduct(product);

  // Ecoute au clic utilisateur
  document.getElementById("add-to-cart").addEventListener("click", function () {
    addToCart(product);
    displayHeaderQtyOfProductInCart();
    updateAddToCartButtonStatus(product._id);
  });
});

// fonction ajoute le produit au panier
function addToCart(product) {
  let products = Storage.get("products") ?? [];
  products.push(product._id);
  Storage.set("products", products);
}

// Affiche le détail du produit sélectionné
function displayProduct(product) {
  document.querySelector("#product").innerHTML = renderProduct(product, "main");
}

//Désactive le bouton ajouter au panier
function disableAddToCartButton() {
  show("inCart");
  hide("add-to-cart");
}

//Active le bouton ajouter au panier
function enableAddToCartButton() {
  hide("inCart");
  show("add-to-cart");
}

//Change l'affichage du bouton d'ajout au panier si le produit y est deja
function updateAddToCartButtonStatus(productId) {

  if (!Storage.has('products')) {
    enableAddToCartButton();
    return;
  }
  
  let productsInCart = Storage.get('products');

  if (productsInCart.includes(productId)) {
    disableAddToCartButton();
    return;
  }

  enableAddToCartButton()
}

//Récupere l'id du produit 
 function getProductId() {
   const params = new URLSearchParams(window.location.search);
   return params.get("id");
}

