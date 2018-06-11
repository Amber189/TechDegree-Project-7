const keys = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
let missed = 0;
const startGame = document.querySelector('a.btn__reset');
let score = 0


//hide div "overlay" when "btn__reset" is clicked

startGame.addEventListener('click', () => {
console.log(document.getElementById('overlay').classList);
// document.getElementById('overlay').style.display = "none";
const overlay = document.getElementById('overlay');

resetTheGame()

overlay.classList.add('hidden');
overlay.classList.remove('start');
overlay.classList.remove('lose');
overlay.classList.remove('win');


});

function resetTheGame() {
  // set back to default start state

  overlay.classList.add('start');
}





 //  function checkWin(){
 //    let showClass = document.getElementsByClassName("show");
 //    let letterClass = document.getElementsByClassName("letter");
 //
 //   if (showClass.length === letterClass.length){
 //     overlay.className = 'win';
 //
 //
 //     // document.getElementsByClassName('win').style.visibility = "visible";
 //   } else if (missed === 5){
 //     overlay.className = 'lose';
 //
 //   }
 // }



// randomly choose a phrase from the phrases array and split that phrase into a new array of characters

   let phrases  = ['Necessity is the mother of invention',
                   'Nip it in the bud',
                   'You can not make an omelet without breaking a few eggs',
                   'Practice makes perfect',
                   'Good things come to those who wait'];


 function getRandomPhraseAsArray (arr) {
  const secretWord = arr[(Math.floor (Math.random() * arr.length) )];
  console.log(secretWord)
  return secretWord.split("");
}
 let splitPhrase = getRandomPhraseAsArray(phrases);

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
      node.classList.add('space');
      node.appendChild(letterNode);
      phrase.appendChild(node);
    }
  }
}

addPhraseToDisplay(splitPhrase);

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


//use event delegation on keyboard to listen to buttons
// keys.onclick = function (event){
//   let target = event.target;
//   let btn = target.textContent;
//
// //add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
//   target.classList.add ("chosen");
//   target.disabled = true;
//
//   function checkLetter(target){
//     let letter = document.getElementsByClassName("letter");
//
//     for (i=0; i < letter.length; i++) {
//       // if button click matches any letter
//       if (btn === letter[i].textContent){
//         letter[i].classList.add("show");
//         let match = letter;
//         return match;
//         console.log ('match');
//       }else {
//         // return ("null");
//         console.log('something is working...');
//       }
//     }
//   }
// //
// // checkLetter(target);
//
// let letterFound = checkLetter();
// }



// keys.onclick = function (event){
//   let target = event.target;
//   let btn = target.textContent;
//
//
//   target.classList.add ("chosen");
//   target.disabled = true;
//
//   function checkLetter(target){
//     let letter = document.getElementsByClassName("letter");
//
//     for (i=0; i < letter.length; i++) {
//       // if button click matches any letter
//       let letterLetter = letter[i].textContent
//       if (btn === letterLetter.toLowerCase()){
//         letter[i].classList.add("show");
//         let match = letter[i];
//         return match;
//
//       }else if (){
//         // return ("null");
//         console.log('something is working...');
//       }
//     }
//   }
//
// checkLetter(target);

// keys.addEventListener('click', () => {

// var letterFound = function (target){
// let letterFound =

keys.onclick = function (event){
  let target = event.target;
//add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
  target.classList.add ("chosen");
  target.disabled = true;

  checkLetter(target);
}

function checkLetter(target){
  let letterFound = null;
  let letter = document.getElementsByClassName("letter");
  //.textContent is supposedly safer than using innerHTML
  let btn = target.textContent;
  // used i<= arr.length and got undefinded added to end of array
  for (i=0; i < letter.length; i++) {

    // if button click matches any letter
    if (letter[i].textContent.toLowerCase() == btn){
      letter[i].classList.add("show");
      letterFound = letter[i].textContent;

      // let match = letter[i];
      // let letterFound = letter[i];

  // removed return because it was exiting after finding 1 letter
        // return letter[i];

    }
  }
  // If button does not  match, remove a life
  if (letterFound === null){
    let health = document.getElementsByTagName('img');
    missed++;
    console.log('missed guesses idx: ', missed)
    console.log('missed - 1 = ', (missed-1));
    if(health[missed]) {
      //passing in missed as index -1 will change first heart
      health[missed - 1].src = "images/lostHeart.png";
      // change final heart on 5th miss
    } else {
      health[missed - 1].src = "images/lostHeart.png";

    }
    const overlay = document.getElementById('overlay').classList.remove('hidden');

  }
  // return null; this ends loop so nm...
   checkWin();
}
function checkWin(){
   let showClass = document.getElementsByClassName("show");
   let letterClass = document.getElementsByClassName("letter");

  if (showClass.length === letterClass.length){
    overlay.classList.add('win');
    score++;
    console.log('score: ', score);

    // document.getElementsByClassName('win').style.visibility = "visible";
  } else if (missed === 5){

    resetTheGame()
    overlay.classList.remove('hidden');
    overlay.classList.remove('start');
    overlay.classList.add('lose');
    overlay.classList.remove('win');


    }
    // function resetTheGame() {
    //   // set back to default start state
    //
    //
    //   overlay.classList.add('start');
  }






// keys.onclick = function (event){
//   let target = event.target;
// //add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
//   target.classList.add ("chosen");
//   target.disabled = true;
//
//   // checkLetter(target);
// }



  // let letterFound = checkLetter(target);

  // if (letterFound === null){
  //   let health = document.querySelectorAll('#scoreboard li');
//setting display='none' is faster to load and works on every browser, unlike removeChild(); vvv
    // health.firstChild.style.display='none';

  //use missed count to remove heart


    // health[missed].src= "images/lostHeart.png";
    // missed++;
