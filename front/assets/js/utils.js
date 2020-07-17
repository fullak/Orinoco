const basePath = 'http://localhost:3000/';

// url API
const url = basePath + "api/cameras";

// Récupérer produits
const getCameras = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

