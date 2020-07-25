displayCart();


let clearStorage = document.querySelector('#clear-cart');
  clearStorage.addEventListener("click", function () {
    localStorage.clear(clearStorage, location.reload());
  });

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalCost = localStorage.getItem('totalCost');
    let productContainer = document.querySelector('#cart-list');
    
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(product => {
            productContainer.innerHTML += `
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
                    <button type="button" class="btn btn-primary btn-form validate-form" id="validate">Valider</button>
                </div>
            </form>
        </div>
        `;
        console.log(typeof totalCost);
    }
}