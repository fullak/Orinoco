fetchProducts().then(function (products) {
  const domElement = document.querySelector("#products");

  let html = "";
  products.forEach((product) => {
    html += displayProduct(product, "card");
  });
  domElement.innerHTML = html;
});

async function fetchProducts() {
  const response = await fetch(url);
  return await response.json();
}
