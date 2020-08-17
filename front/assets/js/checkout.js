displayCheckout();

const orderInformation = window.location.search.substr(1).split("&");
const orderId = orderInformation[0].replace("id=", "");
const userName = orderInformation[1].replace("user=", "");
const total = orderInformation[2].replace("price=", "");
document.querySelector(".user").textContent += " " + userName + " !";
document.querySelector(".order-id").textContent += " " + orderId + ".";
document.querySelector(".total").textContent += " " + total + ",00€.";

//function permettant de retourner à l'accueil et de vide le localStorage
function backToHome() {
  let back = document.getElementById('go-back');
  back.addEventListener('click', function(){
      clear();
  })
};

//Affiche le message de validation de commande
function displayCheckout() {
    const domElement = document.querySelector("#checkout");
    let html = `
    <div class="container">
      <div class="row card-body confirmationMessage">
      <article id="confirmation" class="col-12">
      <h3>Commande validée</h3>
      <p class="user">Merci pour votre commande</p>
      <p class="order-id">Votre numéro de commande est le</p>
      <p class="total-price">
        Montant total : <span class="total" id="count-total"></span>
      </p>
    </article>
        <a class="back-button" href="/front/index.html">
          <button type="submit" class="btn btn-primary" id="go-back">Revenir a l'accueil</button>
        </a>
      </div>
    </div>   
  `;
  domElement.innerHTML = html;
  disabledNavigationButtons()
  backToHome();
}

//Désactive les boutons de navigation
function disabledNavigationButtons(){
  document.getElementById("disableNav").style.display = "none";
}