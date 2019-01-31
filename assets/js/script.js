function changeColor(elemnt){
  // on stocke dans une variable la valeur de l'attribut "class" de l'élément sur lequel on vient de cliquer
var classValue = elemnt.getAttribute('class');
// on utilise la fonction "split" pour éclater la chaine de caractère contenu dans la variable "classValue"
// On stocke le résultat dans la variable "classArray" qui devient un tableau
// Attention tous les index de tableau commence à 0 !!  tableau[index]
var classArray = classValue.split(' ');
// on applique au texte la couleur correspondant au deuxième élément du tableau
document.getElementById('text').style.color = classArray[1];
}

// --------------------idem mais en 1 seul ligne ------------------------
// function changeColor(elmnt){
// document.getElementById('text').style.color= elmnt.getAttribute('class').split(' ')[1];
// }
// --------------------idem mais en 1 seul ligne ------------------------


// --------------------avec 3 fonctions -----------------------
// Changer la couleur du texte en fonction du bouton choisi en 3 fonctions :
// En créant trois fonctions : changecolorgreen, changecolorblue et changecolorred
// dans la valeur de ma propiété style.color je renseigne la couleur que je souhaite.

// function changeco1orgreen() {
// document.getElementById('text').style.color = 'green';
// }
// function changecolorred() {
// document.getElementById('text').style.color = 'red';
// }
// function changecolorblue() {
// document.getElementById('text').style.color = 'blue';
// }
// --------------------avec 3 fonctions -----------------------

// --------------------avec 1 fonction -----------------------
// changer la couleur du texte en fonction du bouton choisi en une fonction:
// Dans les paramètres de ma fonction de mon HTML je renseigne les couleurs que je souhaite
// Dans mon JS je renseigne 'color' dans les paramètres de ma fonction changecolor
// Je recupère color de ma fonction dans ma propriété style.color.

// function changeColor(color) {
// document.getElementById('text').style.color = color;
// }
// C'est correct mais on aura plus de HTML à changer avec cette manière
// --------------------avec 1 fonction -----------------------
