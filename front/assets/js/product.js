fetchProduct(url, getProductId())
  .then(function(product) {
    let domElement = document.querySelector("#product");
    domElement.innerHTML = displayProduct(product, 'main');
  })

  async function fetchProduct(productUrl, productId) {
    const response  = await fetch(productUrl + productId);
    return response.json();
  }

  function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
  }
    
  