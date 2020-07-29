fetchProducts().then(function(products) {
    const domElement = document.querySelector("#products");
    let productInStorage = JSON.parse(get('products'));

    let html = "";
        
        products.forEach((product) => {
            productInStorage.forEach((value) => {
                
                if (product._id != value) {
                    return null;
                }else {

                    html += displayProduct(product, "card");
                };

            })
            domElement.innerHTML = html; 
      });

});

// boutton annuler ma commande vide le panier 
/*
let clearStorage = document.querySelector('#clear-cart');
clearStorage.addEventListener("click", function () {
    clear();
    location.reload();
}); */

function countTotal(products) {
    return products.reduce((acc, product) => acc += product.price);
}



/*
function displayCart() {
    
    console.log(productId);

*/
        // requete AJAX
        // récupérer tous les produits puis les filtrer en fonction de ceux enregistrer dans localStorage

/*
    let totalCost = countTotal(products);
    let productContainer = document.querySelector('#cart-list');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(product => {
            productContainer.innerHTML += displayProduct(product, 'cart');
        }*/
    /*
    
     `
            <div class="product-list">
                <img class="cart-img" src="${product.imageUrl}" alt="Card image cap">
                <span class="name-item">${product.name}</span>        
                <span class="price-item">${product.price / 100},00 €<span>
                <span class="quantity-item">${product.inCart}</span>
                <span class="total-item">${product.inCart * product.price / 100},00 €</span>
            </div>
            `;
        }); 
        productContainer.innerHTML += `
         <div class="basket-total-container row">
            <h4 class="basket-total-title"> Panier Total : </h4>
            <h4 class="total-price">${totalCost / 100},00 €</h4>
        </div>
        <div class="form">
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Nom</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Nom">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Prénom</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Prénom">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Adresse</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Adresse">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Complément d'adresse</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Complément d'adresse">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Code Postal</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Code Postal">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Ville</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Ville">
                </div>
                <div class="validate-form">
                    <button type="button" class="btn btn-light btn-form cancel-cart" id="clear-cart">Annuler ma commande</button>
                    <a href="/front/pages/validate.html">
                        <button type="button" class="btn btn-primary btn-form validate-form" id="validate">Valider</button>
                    </a>
                </div>
            </form>
        </div>
        `;
    }*/