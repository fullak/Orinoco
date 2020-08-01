let clearStorage = document.querySelector('#clear-cart');
clearStorage.addEventListener("click", function () {
    clear();
    location.reload();
});

let productInStorage = JSON.parse(get('products'));

fetchProducts().then(function(products) {
    const domElement = document.querySelector("#products");
    let html = "";

        products.forEach((product) => {
            productInStorage.forEach((value) => {
                
                if (product._id != value) {
                    return null;
                }else {
                    html += displayProduct(product, "cart");
                };

            })
            domElement.innerHTML = html;
        })  
});

