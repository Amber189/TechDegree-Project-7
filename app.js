const keys = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
let missed = 0;
const startGame = document.querySelector('a.btn__reset');

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








 function getRandomPhraseAsArray (arr) {
  return arr[(Math.floor (Math.random() * arr.length) )].split("");


}
 let splitPhrase = getRandomPhraseAsArray(phrases);
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
  // used i<= arr.length and got undefinded added to end of array
  for (i= 0; i < arr.length; i++) {
    let node = document.createElement('LI');

    let letterNode = document.createTextNode(arr[i]);
    let liText = document.querySelector('li').innerHTML;
    //  node.style.wordSpacing;
    // space = "50px";
      if (arr[i] !== " "){

        node.classList.add ("letter");
        node.appendChild(letterNode);
        phrase.appendChild(node);
    }else{
      node.appendChild(letterNode);
      phrase.appendChild(node);
    }
    }


  }








// function addPhraseToDisplay(arr) {
//   // used i<= arr.length and got undefinded added to end of array
//   for (i= 0; i < arr.length; i++) {
//     let node = document.createElement('LI');
//     let letterNode = document.createTextNode(arr[i]);
//     let liText = document.querySelector('li')
//       node.appendChild(letterNode);
//       phrase.appendChild(node);
//       if (liText.text == (/^[A-Za-z]+$/)){
//         liText.className == "letter";
//
//     // }else{
//     //   node.appendChild(' ');
//     //   phrase.appendChild(node);
//     // }
//     }
//
//
//   }
// }


addPhraseToDisplay(splitPhrase);




// function addPhraseToDisplay(arr) {
//   // used i<= arr.length and got undefinded added to end of array
//   for (i= 0; i < arr.length; i++) {
//     let node = document.createElement('LI');
//     let letterNode = document.createTextNode(arr[i]);
//     // if (letterNode == letter){node.className == "letter"}
//     node.appendChild(letterNode);
//     phrase.appendChild(node);
//   }
//
// }
//
// addPhraseToDisplay(splitPhrase);








// function addPhraseToDisplay(splitPhrase) {
//   for (i= 0; i <= splitPhrase.length; i++) {
//     let node = document.createElement('LI');
//     let letterNode = document.createTextNode(splitPhrase[i]);
//     node.appendChild(letterNode);
//     phrase.appendChild(node);
//   }
//
// }
//
// addPhraseToDisplay(splitPhrase);


//use event delegation on keyboard
keys.onclick = function (event){
  let target = event.target;


//add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
  target.classList.add ("chosen");
  target.disabled = true;

function checkLetter(){
  let letter = document.querySelectorAll("letter")
  for (i=0; i < letter.length; i++) {
    // if button click matches any letter
    if (target === letter){
      letter.classList.add ("show");
    }else{
      return ("null");
    }
  }
}
}
