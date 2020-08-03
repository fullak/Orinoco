/*Si le panier est vide => 
*/
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

function hideValidationOrder() {
    $(".hide-form").hide();
    $(".products-presentation").hide();
}

function displayEmptyCartNotice() {
    $(".empty-cart").show();
}
