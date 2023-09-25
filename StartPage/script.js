function startGame() {
  alert('Are you sure you want to make a new Game?');
}
function continueGame() {
  alert('Continue Game?');
}
// Code below will add a sound when pressing a button

// Function to play the "goal1.mp3" sound
function playGoalSound() {
  var audio = new Audio('goal1.mp3');
  audio.play();
}

// Function to start a new game
function startGame() {
  // Play the sound when the button is clicked
  playGoalSound();
}

// Function to continue the game
function continueGame() {
  // Play the sound when the button is clicked
  playGoalSound();
}
//Background music for website
var backgroundMusic = document.getElementById('backgroundMusic');
var musicPlaying = true;

function playBackgroundMusic() {
  setTimeout(function () {
    if (musicPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    musicPlaying = !musicPlaying;
  }, 2500); // Delay the play action by 2.5 seconds (2500 milliseconds)
}
