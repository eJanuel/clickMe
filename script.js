var nbSquare;
var nbSec;
var nbTurn;
var primaryColor = ['#008000', '#1E90FF', '#FF4500', '#FF00FF', '#A0522D', '#FFD700', '#FF0000'];
var secondaryColor = ['#228B22', '#4682B4', '#FF7F50', '#C71585', '#8B4513', '#FFFF00', '#DC143C'];
var divSquare;
var divSquareIntru;
var indexIntru;

function setSquareNbr() {
  console.log('Appel de la fonction setSquareNbr()');
  nbSec = document.getElementById('nbSec').value;
  nbTurn = document.getElementById('nbTurn').value;
  nbSquare = document.getElementById('nbSquare').value;
  indexIntru = Math.floor(Math.random()*nbSquare);
  console.log('Index Intru : ' + indexIntru);
  console.log('nbSquare :' + nbSquare);
  if (nbSquare >= 3 && nbSquare <= 9) {
    getRandomColor();
  } else {
    console.log('Erreur : veuillez entrer un chiffre entre 3 et 9');
  }
}

function startGame() {
  console.log('Appel de la fonction startGame()');
  document.getElementById('squareArea').innerHTML = '';
      console.log('index intru 2 : ' + indexIntru);
  for (var i = 0; i < nbSquare;i++) {
    console.log(i);
    if (i === indexIntru) {
      document.getElementById('squareArea').innerHTML += divSquareIntru;
    } else {
      document.getElementById('squareArea').innerHTML += divSquare;
    }
  }
}

function getRandomColor() {
  console.log('Appel de la fonction getRandomColor()');
  var nbColor = Math.floor(Math.random()*8);
  console.log('nbColor : '+ nbColor);
  console.log(secondaryColor[nbColor]);
  divSquare = '<div style = "background-color: ' + secondaryColor[nbColor] +';"></div>';
  divSquareIntru = '<div style = "background-color: ' + primaryColor[nbColor] +';"></div>';
  startGame();
}















/* Couleurs
Vert : #008000 Green, #228B22 ForestGreen;
Bleu : #1E90FF DodgerBlue, #4682B4 SteelBlue;
Orange : #FF4500 OrangeRed, #FF7F50 Coral;
Rose : #FF00FF Fuchsia, #C71585 MediumVioletRed;
Marron : #A0522D Sienna, #8B4513 SaddleBrown;
Yellow : #FFD700 Gold, #FFFF00 Yellow;
Rouge : #FF0000 Red, #DC143C Crimson;
*/
