displayCheckout();

function displayCheckout(product) {
    const domElement = document.querySelector("#validate");
    let html = "";
    if (localStorage.length >= 1){
        html += displayProduct(product, "validate");
        domElement.innerHTML = html;
        backToHome();
    }
}

function backToHome() {
    let back = document.querySelector('#go-back');
    back.addEventListener('click', function(){
        clear();
    })
}
/*
const orderInformation = window.location.search.substr(1).split("&");
const orderId = orderInformation[0].replace("id=", "");
const totalPrice = orderInformation[1].replace("price=", "");
const userName = orderInformation[2].replace("user=", "");
console.log((document.querySelector(".user").textContent += " " + userName));
document.querySelector(".order-id").textContent += " " + orderId;
document.querySelector(".price").textContent += " " + totalPrice;*/