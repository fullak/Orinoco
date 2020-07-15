const params = new URLSearchParams(window.location.search);
let getId = params.get("product");
monStockage = localStorage;
localStorage.setItem('id', getId);

//comparer getId récupéré avec l'id du tableau
// si getId === id tableau alors afficher produit


