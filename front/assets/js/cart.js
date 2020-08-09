if (getTotalProductsInCart() == 0) {
  hideValidationOrder();
  displayEmptyCartNotice();
}

document.querySelector(".clear-cart").addEventListener("click", function () {
  clear();
  displayHeaderQtyOfProductInCart();
  window.location.reload();
});

let form = document.querySelector("#checkout-form");
const products = JSON.parse(localStorage.getItem("products"));
let userCheckout = {
  contact: {},
  products,
};

const productInStorage = get("products");

fetchAjax(url).then(function (products) {
  const domElement = document.querySelector("#products");
  let html = "";

  productInStorage.forEach((value) => {
    products.forEach((product) => {
      if (product._id != value) {
        return null;
      } else {
        html += displayProduct(product, "cart");
      }
    });
    domElement.innerHTML = html;
    toValidate;
    
  });
});

function displayEmptyCartNotice() {
  $(".empty-cart").show();
}

function hideValidationOrder() {
  $(".hide-form").hide();
  $(".products-presentation").hide();
}

form.querySelector("#validate").addEventListener("click", async (e) => {
  e.preventDefault();
    
  userCheckout.contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
  };

  let response = await postData(
    "POST",
    "http://localhost:3000/api/cameras/order",
    userCheckout
  ); // Envoie données au serveur

  window.location = `./checkout.html?id=${response.orderId}&user=${firstName.value}`; // Redirige vers la page de confirmation de commande
});

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

const deleteCart = () => {
  const panier = JSON.parse(localStorage.getItem("products"));
  console.log("a");
  console.log(panier);
  for (key in panier) {
    delete panier[key];
    localStorage.setItem("products", JSON.stringify(panier));
    console.log("b");
    console.log(panier);
    break;
    //  location.reload();
  }
  console.log("c");
  console.log(panier);
};


let toValidate = jQuery(".firstName, .lastName, .address, .city, .email"),
    valid = false;
    $(".validate").hide();
  toValidate.keyup(function () {
    if (jQuery(this).val().length > 0) {
      jQuery(this).data("valid", true);
    } else {
      jQuery(this).data("valid", false);
    }
    toValidate.each(function () {
      if (jQuery(this).data("valid") == true) {
        valid = true;
      } else {
        valid = false;
      }
    });
    if (valid === true)  {
        $(".validate").show();
        $(".notValide").hide();
      }
  })


   