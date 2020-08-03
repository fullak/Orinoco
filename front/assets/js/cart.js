/*Si le panier est vide => 

if (getTotalProductsInCart() == 0) {
    hideForm();
    displayEmptyCartNotice();
}*/

document.querySelector('.clear-cart').addEventListener("click", function () {
    clear();
    displayHeaderQtyOfProductInCart();
    window.location.reload();
});

let productInStorage = get('products');

fetchAjax(url).then(function(products) {
    const domElement = document.querySelector("#products");
    let html = "";

        products.forEach((product) => {
            productInStorage.forEach((value) => {
                
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

