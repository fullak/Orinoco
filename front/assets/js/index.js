// Appeler url de l'api
url;

// Affichage produits
const displayProducts = async () => {
    const products = await getCameras(url);
    products.forEach((product) => {
        indexProduct(product.name, product._id, product.imageUrl, product.price);
    });
};

// Récupérer produits
getCameras;

// Appeler fonction affichants les produits
displayProducts();
