let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
    "dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice

let divPos = document.getElementById('position');
let position = monTexte.indexOf('i');

divPos.innerHTML = position.toString()

let chaineMaj = document.getElementById('chaineMaj');
let monNouveauTexte = monTexte.toUpperCase();

chaineMaj.innerHTML = monNouveauTexte;


