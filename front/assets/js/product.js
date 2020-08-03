fetchAjax(url + getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = displayProduct(product, "main");
  updateAddToCartButtonStatus(product._id);

  // Ecoute au clic utilisateur
  document.getElementById('add-to-cart').addEventListener('click', function() {
    let products = get('products') ?? [];

    if (get('products')) {
      if (cartHasProduct(getProductId())) {
        alert ('Le produit a déjà été ajouté au panier.');
        return;
      }
    }

    products.push(getProductId());
    set('products', products);
    displayHeaderQtyOfProductInCart()
  })
});

function updateAddToCartButtonStatus(productId) {
  if (cartHasProduct(productId)) {
    console.log('le produit est deja dans le panier');
    //BTN disabled
    return;
  }
  //BTN enabled
  console.log("le produit n'est pas dans le panier");
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// recupere l'id produit
function setCartProductId() {
  localStorage.setItem("cartProductId", getProductId());
}
