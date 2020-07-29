fetchProducts().then(function(products) {
    const domElement = document.querySelector("#products");
    let productInStorage = JSON.parse(get('products'));
    
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
        });
});

let clearStorage = document.querySelector('#clear-cart');
clearStorage.addEventListener("click", function () {
    clear();
    location.reload();
});

/*
function countTotal(products) {
    return products.reduce((acc, product) => acc += product.price);
}*/


