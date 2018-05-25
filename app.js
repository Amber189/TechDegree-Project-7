let keys = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let startGame = document.querySelector('a.btn__reset');

//hide div "overlay" when "btn__reset" is clicked

startGame.addEventListener('click', () => {
document.getElementById('overlay').style.display = "none";

});



// randomly choose a phrase from the phrases array and split that phrase into a new array of characters

// let phrases  = ['Necessity is the mother of invention',
//                 'Nip it in the bud',
//                 'You can not make an omelet without breaking a few eggs',
//                 'Practice makes perfect',
//                 'Good things come to those who wait'];
// let randomNumber =  Math.floor (Math.random() * phrases.length) + 1;
//
// function getRandomPhraseAsArray (){
//
//                       return getRandomPhraseAsArray(phrases[randomNumber]).split("");
//                     }


   let phrases  = ['Necessity is the mother of invention',
                   'Nip it in the bud',
                   'You can not make an omelet without breaking a few eggs',
                   'Practice makes perfect',
                   'Good things come to those who wait'];








 function getRandomPhraseAsArray (phrases) {
  return phrases[(Math.floor (Math.random() * phrases.length) + 1)].split("");


}
 getRandomPhraseAsArray(phrases);
//
// function getRandomPhraseAsArray (){
//
//                       let phrases  = ['Necessity is the mother of invention',
//                                       'Nip it in the bud',
//                                       'You can not make an omelet without breaking a few eggs',
//                                       'Practice makes perfect',
//                                       'Good things come to those who wait'];
//                       let randomNumber =  Math.floor (Math.random() * phrases.length) + 1;
//
//                       return(phrases[randomNumber]);
//
//                     }
//
//
// let phraseSplit = getRandomPhraseAsArray().split("");





// set game display
function addPhraseToDisplay(arr) {
  for (i= 0; i <= phraseSplit.length; i++) {
    let node = document.createElement('LI');
    let letterNode = document.createTextNode(phraseSplit);
    node.appendChild(letterNode);
    document.querySelector('#phrase ul').appendChild(node);
  }

}

addPhraseToDisplay(phraseSplit);





// function addPhraseToDisplay() {
//   for (i= 0; i <= phraseSplit.length; i++) {
//     let node = document.createElement('LI');
//     let letterNode = document.createTextNode(phraseSplit);
//     node.appendChild(letterNode);
//     document.querySelector('#phrase ul').appendChild(node);
//   }
//
// }
//
// addPhraseToDisplay(phraseSplit);
