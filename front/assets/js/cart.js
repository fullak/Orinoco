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

if (engine.has("products")) {
  fetchAjax(url).then(function (allProducts) {
    let productsInCart = getCartProduct(allProducts);
    displayProducts(productsInCart);
    let total = getTotal(productsInCart);
    displayTotal(total);
    listenForSubmission();
    listenForCartCleanup();
    listenForChange();
  });
}

function getTotal(products) {
  return products.reduce((total, product) => {
    return total + (product.price)
  }, 0)
};

function displayTotal(total) {
  document.querySelector("#count-total").textContent += total / 100;
}

function getCartProduct(allProducts) {
  let products = [];

  engine.get("products").forEach((productId) => {
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
  document.querySelector("#products").innerHTML = html;
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
    colorFormValid("address");
    return true;
  } else {
    colorFormError("address");
  }

  return false;
}

//Vérifie si la ville est valide
function isCityValid() {
  let city = document.getElementById("city").value;

  if (city.length > 2) {
    colorFormValid("city");
    return true;
  } else {
    colorFormError("city");
  }

  return false;
}

//Vérifie si l'email est valide
function isEmailValid() {
  let email = document.getElementById("email").value;

  if (email.length > 4 && email.length < 320) {
    colorFormValid("email");
    return true;
  } else {
    colorFormError("email");
  }

  return false;
}

//Vérifie si le prénom est valide
function isFirstNameValid() {
  let firstName = document.getElementById("firstName").value;

  if (firstName.length > 3) {
    colorFormValid("firstName");
    return true;
  } else {
    colorFormError("firstName");
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
    colorFormValid("lastName");
    return true;
  } else {
    colorFormError("lastName");
  }
  return false;
}

//Vérifie si le code postale est valide
function isPostcodeValid() {
  let postcode = document.getElementById("code-postal").value;

  if (postcode.length === 5) {
    colorFormValid("code-postal");
    return true;
  } else {
    colorFormError("code-postal");
  }

  return false;
}

//Ecouter sur le bouton clear-cart, vide le panier au clic
function listenForCartCleanup() {
  document.querySelector(".clear-cart").addEventListener("click", function () {
    engine.clear();
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
      products: engine.get("products"),
    };
    let response = await postData(
      "POST",
      "http://localhost:3000/api/cameras/order",
      payload
    );
    let total = document.getElementById("count-total").innerHTML;
    window.location = `./checkout.html?id=${response.orderId}&user=${firstName.value}&price=${total}`; // Redirige vers la page de confirmation de commande
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

function colorFormError(id) {
  document.getElementById(id).style.border = "2px solid red";
}

function colorFormValid(id) {
  document.getElementById(id).style.border = "2px solid green";
}
