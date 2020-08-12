//Récupérer l'intégralité des produits depuis l'API
fetchAjax(url).then(function (products) {
  const domElement = document.querySelector("#products");

  let html = "";
  products.forEach((product) => {
    html += renderProduct(product, "card");
  });
  domElement.innerHTML = html;
});
