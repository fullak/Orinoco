displayCheckout();

const orderInformation = window.location.search.substr(1).split("&");
const orderId = orderInformation[0].replace("id=", "");
const userName = orderInformation[1].replace("user=", "");
document.querySelector(".user").textContent += " " + userName + " !";
document.querySelector(".order-id").textContent += " " + orderId + ".";

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

