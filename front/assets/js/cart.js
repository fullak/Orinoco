if (getTotalProductsInCart() == 0) {
    hideValidationOrder();
    displayEmptyCartNotice();
}

document.querySelector('.clear-cart').addEventListener("click", function () {
    clear();
    displayHeaderQtyOfProductInCart();
    window.location.reload();
});

let productInStorage = get('products');

fetchAjax(url).then(function(products) {
    const domElement = document.querySelector("#products");
    let html = "";

        productInStorage.forEach((value) => {
            products.forEach((product) => {
                if (product._id != value) {
                    return null;
                }
                 else {
                    html += displayProduct(product, "cart");
                };

            })
            domElement.innerHTML = html;
        })  

});

function displayEmptyCartNotice() {
    $(".empty-cart").show();
}

function hideValidationOrder() {
    $(".hide-form").hide();
    $(".products-presentation").hide();
}

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const email = document.querySelector('#email');


let contact = {
    firtName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
}

var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://localhost:3000/', true);

const postData = async (method, url, dataElt) => {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(dataElt),
    });
    return await response.json();
  };

document.querySelector('#validate').addEventListener('click', async(e) => {
    e.preventDefault();
    const response = await postData(
        "POST",
        "http://localhost:3000/api/cameras/order",
        contact
      ); // Envoie données au serveur
      window.location = `./checkout.html?id=${response.order_id}&user=${firstName.value}`; // Redirige vers la page de confirmation de commande
      //localStorage.removeItem("panier");
})
