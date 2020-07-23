displayCart();

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let totalCart = localStorage.getItem('totalCost');
    let productContainer = document.querySelector('#cart-list');
    
    

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(product => {
            productContainer.innerHTML += `
            <div class="product">
                <img class="card-img-top imgProducts" src="${product.imageUrl}" alt="Card image cap">
                <span>${product.name}</span>            
            </div>
            <div class="price">${product.price / 100},00 €<div>
            <div class="quantity">${product.inCart}</div>
            <div class="total">${product.inCart * product.price / 100},00 €</div>
            `;
        }); 
        productContainer.innerHTML += `
         <div class="basket-total-container>
            <h4 class="basket-total-title> Panier Total : </h4>
            <span class="basket-total>${totalCart}</span>
        </div>
        `;
        console.log(totalCart);
    }
}