var nbSquare = '';
var nbRound = '';

function setSquareNbr() {
  nbSquare = document.getElementById('nbSquare').value;
  if (nbSquare >= 3 && nbSquare <= 9) {
    console.log(nbSquare);
    clickMe();
  } else {
    console.log('Please put a number between 3 and 9');
  }
}

function clickMe() {

}
