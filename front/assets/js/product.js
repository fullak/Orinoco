fetchProduct(url, getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = displayProduct(product, "main");

  // Ecoute au clic utilisateur
  document.getElementById('add-to-cart').addEventListener('click', function() {
    let products = get('products') ?? [];

    if (get('products')) {
      products = JSON.parse(products);

      if (products.includes(getProductId())) {
        alert ('Le produit a déjà été ajouté au panier.');
        return;
      }
    }

    products.push(getProductId());
    set('products', products);
  })
});


// fonctionne asynchrone, va chercher la liste des produits
async function fetchProduct(productUrl, productId) {
  const response = await fetch(productUrl + productId);
  return response.json();
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// recupere l'id produit
function setCartProductId() {
  localStorage.setItem("cartProductId", getProductId());
}
