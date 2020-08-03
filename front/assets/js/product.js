fetchAjax(url + getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = displayProduct(product, "main");
  updateAddToCartButtonStatus(product._id);

  // Ecoute au clic utilisateur
  document.getElementById('add-to-cart').addEventListener('click', function() {
    let products = get('products') ?? [];

    if (get('products')) {
      if (cartHasProduct(getProductId())) {
        
        window.location.reload();
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
