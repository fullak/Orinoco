displayValidate();

function displayValidate(product) {
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
