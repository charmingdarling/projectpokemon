// You can control the volume dynamically using JavaScript events or user interactions

function startGame() {
  alert('Would you like to create a new game?');
}
function continueGame() {
  alert('Continue Game?');
}

// Code below will add a sound when pressing a button

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

// Function to play the "goal1.mp3" sound
function playGoalSound() {
  // Get a reference to the audio element
  var audio = document.getElementById('theme-song');
  // var audio = new Audio('goal1.mp3');
  // Set the volume to your desired level (0.0 to 1.0)
  audio.volume = 0.1; // Adjust this value as needed (e.g., 0.2 for 20% volume)
  audio.play();
}

function playBackgroundMusic() {
  setTimeout(function () {
    if (musicPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    musicPlaying = !musicPlaying;
  }, 1500); // Delay the play action by 2.5 seconds (2500 milliseconds)
}
