// Charger et afficher les products
function getProducts() {
    fetch('http://localhost:3000/api/cameras')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (cameras) {
                html += `
                <a href="/front/pages/products.html" style="width: 18rem;" id="${cameras._id}" class="card">
                    <img class="card-img-top imgProducts" src="${cameras.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${cameras.name}</h3>
                        <p class="card-text">${cameras.description}</p>
                        <p class="card-text">${cameras.price/100}€</p>
                    </div>
                </a>`;
            });
            document.getElementById('cameras').innerHTML = html;
        });
};
getProducts();
