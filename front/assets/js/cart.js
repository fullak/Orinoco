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
         <div class="basket-total-container>
            <h4 class="basket-total-title> Panier Total : </h4>
            <span class="basket-total>${totalCart}</span>
        </div>
        `;
        console.log(totalCart);
    }
}