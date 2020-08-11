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
  fetchAjax(url).then(function (products) {
    displayProducts(products);
    listenForSubmission();
    listenForCartCleanup();
    sumProductsPrice();
    listenForChange();
  });
}

function displayEmptyCartNotice() {
  document.getElementById("messageEnabled").style.display = "block";
}

function displayProducts(products) {
  let html = "";

  get("products").forEach((productId) => {
    products.forEach((product) => {
      if (product._id != productId) {
        return null;
      } else {
        html += renderProduct(product, "cart");
      }
    });
  });
  document.querySelector("#products").innerHTML = html;
}

function disableSubmitButton() {
  document.getElementById("formIsUnvalide").style.display = "block";
  document.getElementById("validate").style.display = "none";
}

function disableValidationOrder() {
  document.getElementById("formDisabled").style.display = "none";
}

function enableSubmitButton() {
  document.getElementById("validate").style.display = "block";
  document.getElementById("formIsUnvalide").style.display = "none";
}

function isAddressValid() {
  let address = document.getElementById("address").value;

  if (address.length > 5) {
    return true;
  }

  return false;
}

function isCityValid() {
  let city = document.getElementById("city").value;

  if (city.length > 2) {
    return true;
  }

  return false;
}

function isEmailValid() {
  let email = document.getElementById("email").value;

  if (email.length > 4 && email.length < 320) {
    return true;
  }

  return false;
}

function isFirstNameValid() {
  let firstName = document.getElementById("firstName").value;

  if (firstName.length > 3) {
    return true;
  }

  return false;
}

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

function isLastNameValid() {
  let lastName = document.getElementById("lastName").value;

  if (lastName.length > 2 && lastName.length < 200) {
    return true;
  }

  return false;
}

function isPostcodeValid() {
  let postcode = document.getElementById("code-postal").value;

  if (postcode.length === 5) {
    return true;
  }

  return false;
}

function listenForCartCleanup() {
  document.querySelector(".clear-cart").addEventListener("click", function () {
    clear();
    displayHeaderQtyOfProductInCart();
    updatePageStatus();
  });
}

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

function updatePageStatus() {
  if (getTotalProductsInCart() <= 0) {
    displayEmptyCartNotice();
    disableValidationOrder();
  }
}