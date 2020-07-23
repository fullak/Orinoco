fetchProduct(url, getProductId()).then(function (product) {
  let domElement = document.querySelector("#product");
  domElement.innerHTML = displayProduct(product, "main");

  // Ecoute au clic utilisateur
  let addButton = document.querySelector("button");
  addButton.addEventListener("click", function () {
    getCartNumbers(product);
    setCartProductId();
  });
});

async function fetchProduct(productUrl, productId) {
  const response = await fetch(productUrl + productId);
  return response.json();
}

// récupere le nombre de produits
function getCartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  // ajoute un produit a chaque clic sur le boutton
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    // affiche le nombre de produits a côté du panier
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// recupere l'id produit
function setCartProductId() {
  localStorage.setItem("cartProductId", getProductId());
}


function setItems(product) {

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    
    if (cartItems[product._id] == undefined) {
      cartItems = {
        ...cartItems,
        [product._id]: product
      }
    }
    cartItems[product._id].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product._id]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


