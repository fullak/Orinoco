updatePageStatus();
listenForCartCleanup();
listenForChange();

if (has('products')) {
  fetchAjax(url).then(function (products) {
    displayProducts(products);
    listenForSubmission();
  }); 
}

function displayProducts(products) {
  let html = '';

  get('products').forEach((productId) => {
    products.forEach((product) => {
      if (product._id != productId) {
        return null;
      } else {
        html += renderProduct(product, "cart");
      }
    });
  });
  document.querySelector('#products').innerHTML = html;
} 

function updatePageStatus() {
  if (getTotalProductsInCart() == 0) {
    hideValidationOrder();
    displayEmptyCartNotice();
  }
}

function listenForCartCleanup() {
  document.querySelector(".clear-cart").addEventListener("click", function () {
    clear();
    displayHeaderQtyOfProductInCart();
    updatePageStatus();
  });
}

function listenForChange() {
  document.getElementById('checkout-form').addEventListener('change', function (){
    if (formIsValid()) {
      enableSubmitButton();
    }else {
      disableSubmitButton();
    }
  });
}

function listenForSubmission() {
  document.getElementById("validate").addEventListener("click", function() {
    let payload = {
    contact: {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      email: document.getElementById('email').value,
    },
    products: get('products')
  };

  fetch("http://localhost:3000/api/cameras/order", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    }).then(response => {
      console.log(response)
      window.location = `./checkout.html?id=${response.orderId}&user=${firstName.value}`; // Redirige vers la page de confirmation de commande
    })
  });
}

function isFormValid() {
  return (isFirstNameValid() && isLastNameValid());
}

function isFirstNameValid() {
  let firstName = document.getElementById('firstName').value;

  if (firstName.length > 3) {
    return true;
  }

  return false;
}

function isLastNameValid() {
  let lastName = document.getElementById('lastName').value;

  if (lastName.length > 2 && lastName.length < 200) {
    return true;
  }

  return false;
}