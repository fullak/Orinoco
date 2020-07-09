// Load and print products

function getProducts() {
    fetch('http://localhost:3000/api/cameras')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (cameras) {
                html += `
            <div class="card row">
                <div class="row justify-content-start">
                    <div class="col-sm-12 col-md-7 col-lg-5">
                        <img src="${cameras.imageUrl}" width="400px"></img>
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-7">
                        <article class="products-description">
                            <p><strong>Modele :</strong> ${cameras.name}</p>
                            <ul class="dropdown">
                                <li class=>Colors : ${cameras.lenses}</li>
                            </ul>
                            <p><strong>Prix :</strong> ${cameras.price}€</p>
                            <p><strong>Description : </strong>${cameras.description}</p>
                            <p id="${cameras._id}"><strong>Id : </strong>${cameras._id}</p>
                            <button class="btn btn-primary" type="submit">Add to Cart</button>
                        </article>
                    </div>
                </div>
            </div>`;
            });
            document.getElementById('result').innerHTML = html;
        });
};

getProducts();
