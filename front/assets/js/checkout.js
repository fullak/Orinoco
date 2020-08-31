disabledNavigationButtons()
backToHome();

document.querySelector(".user").textContent += " " + getUsername() + " !";
document.querySelector(".order-id").textContent += " " + getOrderId() + ".";
document.querySelector(".total").textContent += " " + getTotalPrice() + ",00€.";

//Récupère et affiche l'Id de commande
function getOrderId() {
  const orderInformation = window.location.search.substr(1).split("&");
  return orderInformation[0].replace("id=", "");
}

//Récupère et affiche le prénom de l'utilisateur
function getUsername() {
  const orderInformation = window.location.search.substr(1).split("&");
  return orderInformation[1].replace("user=", "");
}

//Récupère et affiche le prix total de la commande
function getTotalPrice() {
  const orderInformation = window.location.search.substr(1).split("&");
  return orderInformation[2].replace("price=", "");
}

//function permettant de retourner à l'accueil et de vide le localStorage
function backToHome() {
  let back = document.getElementById('go-back');
  back.addEventListener('click', function(){
      Storage.clear();
  })
};

//Désactive les boutons de navigation
function disabledNavigationButtons(){
  document.getElementById("disableNav").style.display = "none";
}