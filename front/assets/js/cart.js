const postData = async (method, url, dataElt) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(dataElt),
  });
  return await response.json();
};

updatePageStatus();

if (has("products")) {
  fetchAjax(url).then(function (allProducts) {
    let productsInCart = getCartProduct(allProducts);
    displayProducts(productsInCart);
    // let total = getTotal(productsInCart);
    // displayTotal(total);
    listenForSubmission();
    listenForCartCleanup();
    listenForChange();
  });
}

// function getTotal(product) {
//   let total = 0;

//   products.forEach((product) => {
//     total += product.price
//   });

//   return total;
// }

function getCartProduct(allProducts) {
  let products = [];

  get('products').forEach((productId) => {
    allProducts.forEach((product) => {
      if (product._id != productId) {
        return null;
      } else {
        products.push(product);
      }
    });
  });
  return products;
}

//Affiche les produits dans le panier
function displayProducts(products) {
  let html = "";
  products.forEach((product) => {
    html += renderProduct(product, "cart");
  });
  document.querySelector('#products').innerHTML = html;
}

//Désactive le bouton d'envoi du formulaire
function disableSubmitButton() {
  show("formIsUnvalide");
  hide("validate");
}

function disableValidationOrder() {
  hide("formDisabled");
}

//Active le bouton d'envoi du formulaire
function enableSubmitButton() {
  show("validate");
  hide("formIsUnvalide");
}

//Vérifie si l'adresse est valide
function isAddressValid() {
  let address = document.getElementById("address").value;

  if (address.length > 5) {
    return true;
  }

  return false;
}

//Vérifie si la ville est valide
function isCityValid() {
  let city = document.getElementById("city").value;

  if (city.length > 2) {
    return true;
  }

  return false;
}

//Vérifie si l'email est valide
function isEmailValid() {
  let email = document.getElementById("email").value;

  if (email.length > 4 && email.length < 320) {
    return true;
  }

  return false;
}

//Vérifie si le prénom est valide
function isFirstNameValid() {
  let firstName = document.getElementById("firstName").value;

  if (firstName.length > 3) {
    return true;
  }

  return false;
}

//Condition vérifiant si tous les inputs du formulaire sont valide
function isFormValid() {
  return (
    isFirstNameValid() &&
    isLastNameValid() &&
    isEmailValid() &&
    isAddressValid() &&
    isPostcodeValid() &&
    isCityValid()
  );
}

//Vérifie si le nom est valide
function isLastNameValid() {
  let lastName = document.getElementById("lastName").value;

  if (lastName.length > 2 && lastName.length < 200) {
    return true;
  }

  return false;
}

//Vérifie si le code postale est valide
function isPostcodeValid() {
  let postcode = document.getElementById("code-postal").value;

  if (postcode.length === 5) {
    return true;
  }

  return false;
}

//Ecouter sur le bouton clear-cart, vide le panier au clic
function listenForCartCleanup() {
  document.querySelector(".clear-cart").addEventListener("click", function () {
    clear();
    displayHeaderQtyOfProductInCart();
    updatePageStatus();
  });
}

//Ecoute si il y a un changement dans le formulaire et change l'état du bouton submit dynamiquement
function listenForChange() {
  document
    .getElementById("checkout-form")
    .addEventListener("change", function () {
      if (isFormValid()) {
        enableSubmitButton();
      } else {
        disableSubmitButton();
      }
    });
}

//function permettant d'envoyer la liste des produits et les coordonnées du client à l'api
function listenForSubmission() {
  document.querySelector("#validate").addEventListener("click", async (e) => {
    e.preventDefault();

    let payload = {
      contact: {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
      },
      products: get("products"),
    };

    let response = await postData(
      "POST",
      "http://localhost:3000/api/cameras/order",
      payload
    );
      window.location = `./checkout.html?id=${response.orderId}&user=${firstName.value}`; // Redirige vers la page de confirmation de commande
    });
}

//Condition qui affiche soit le message de panier vide, ou la liste des produits et le formulaire
function updatePageStatus() {
  if (getTotalProductsInCart() <= 0) {
    show("empty-cart-notice");
    disableValidationOrder();
  } else {
    hide("empty-cart-notice");
  }
}