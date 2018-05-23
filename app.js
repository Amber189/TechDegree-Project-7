// $('.btn__reset').click.hide();

let keys = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let startGame = document.querySelector('a.btn__reset');

let phrases  = ['Necessity is the mother of invention',
                'Nip it in the bud',
                'You can not make an omelet without breaking a few eggs',
                'Practice makes perfect',
                'Good things come to those who wait'];


//hide div "overlay" when "btn__reset" is clicked

// function hideOverlay () {
//   startGame.style.display = "hidden";
// }

startGame.addEventListener('click', () => {
document.getElementById('overlay').style.display = "none";


});



// get random phrase

// function getRandomPhraseAsArray ()



// set game display
