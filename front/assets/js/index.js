// Load and print products

function getTeddies() {
    fetch('http://localhost:3000/api/teddies')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (teddies) {
                html += `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top imgProducts" src="${teddies.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${teddies.name}</h3>
                        <p class="card-text">${teddies.description}</p>
                        <p class="card-text">${teddies.price}€</p>
                    </div>
            </div>`;
            });
            document.getElementById('teddies').innerHTML = html;
        });
};

getTeddies();
