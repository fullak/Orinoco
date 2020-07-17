// url api
url;

const params = new URLSearchParams(window.location.search);
const getId = params.get("id");

const article = document.querySelector("div")


// Affiche prod
const displayProduct = async () => {
    const data = await getACamera(url, getId);
    productPageCamera(data);
  };

  // recup une cam
const getACamera = async (productUrl, productId) => {
    const response = await fetch(productUrl + productId);
    return await response.json();
}

  displayProduct();