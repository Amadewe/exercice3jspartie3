// Changer la couleur du texte en fonction du bouton choisi en 3 fonctions :
// En créant trois fonctions : changecolorgreen, changecolorblue et changecolorred
// dans la valeur de ma propiété style.color je renseigne la couleur que je souhaite.

// function changeco1orgreen() {
// document.getElementById('text').style.color='green';
// }
// function changecolorred() {
// document.getElementById('text').style.color='red';
// }
// function changecolorblue() {
// document.getElementById('text').style.color='blue';
// }


// changer la couleur du texte en fonction du bouton choisi en une fonction:
// Dans les paramètres de ma fonction de mon HTML je renseigne les couleurs que je souhaite
// Dans mon JS je renseigne 'color' dans les paramètres de ma fonction changecolor
// Je recupère color de ma fonction dans ma propriété style.color.

function changecolor(color) {
document.getElementById('text').style.color=  color;
}
