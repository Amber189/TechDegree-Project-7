const keys = document.getElementById('qwerty');
const phrase = document.querySelector('#phrase ul');
let missed = 0;
const startGame = document.querySelector('a.btn__reset');
let score = 0
const title = document.querySelector('h2.title');

//hide div "overlay" when "btn__reset" is clicked

startGame.addEventListener('click', () => {
console.log(document.getElementById('overlay').classList);
const overlay = document.getElementById('overlay');

resetTheGame()

overlay.classList.add('hidden');
overlay.classList.remove('start');
overlay.classList.remove('lose');
overlay.classList.remove('win');


});

function resetTheGame() {
  // set back to default start state
  startGame.addEventListener('click', () => {
  console.log(document.getElementById('overlay').classList);
  // document.getElementById('overlay').style.display = "none";
  overlay.classList.add('start');
   window.location.reload();
})
}

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

// //add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
keys.onclick = function (event){

// if statement to change class name only if button (not entire row)
  if (event.target.tagName === 'BUTTON'){
//add "chosen" class to button *Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks
  let target = event.target;
  target.classList.add("chosen");
  target.disabled = true;

  checkLetter(target);
  }
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
    // const overlay = document.getElementById('overlay').classList.remove('hidden');

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
    resetTheGame()
    overlay.classList.remove('hidden');
    overlay.classList.remove('start');
    overlay.classList.remove('lose');
    overlay.classList.add('win');
    startGame.textContent = 'Try again?';
    title.textContent = 'You got it!';

    // document.getElementsByClassName('win').style.visibility = "visible";
  } else if (missed === 5){
    startGame.textContent = 'Try again?';
    title.textContent = 'Whomp, whomp!';
    resetTheGame()
    overlay.classList.remove('hidden');
    overlay.classList.remove('start');
    overlay.classList.add('lose');
    overlay.classList.remove('win');

    }
  }
