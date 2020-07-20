const basePath = 'http://localhost:3000/';

// url API
const url = basePath + "api/cameras/";

// Affichage produits 

function displayProduct(product, type) {

    if (type === 'card') {
        return `
        <div class="a-card">
        <a href="/front/pages/product.html?id=${product._id}" id="${product._id}" class="card">
        <img class="card-img-top imgProducts" src="${product.imageUrl}" alt="Card image cap">
        <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">${product.price/100}€</p>
        </div>
      </a>
      </div>`
    }

    if (type === 'main') {
        return `
        <div class="a-card">
        <a href="/front/pages/product.html?id=${product._id}" id="${product._id}" class="card">
        <img class="card-img-top imgProducts" src="${product.imageUrl}" alt="Card image cap">
        <div class="card-body">
            <h3 class="card-title">${product.name}</h3>
            <p class="card-text">${product.price/100}€</p>
        </div>
      </a>
      </div>`;
    }
}