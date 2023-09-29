const selectionMenu = document.getElementById("SelectionMenu");
const mainWindow = document.getElementById("MainWindow");
const endWindow = document.getElementById("EndWindow");

let selectionImage = document.getElementById("SelectionImage");
let playerImage = document.getElementById("PlayerImage");
let enemyImage = document.getElementById("EnemyImage");

const attackButton = document.getElementById("Attack");
const specialButton = document.getElementById("Special");
const restButton = document.getElementById("Rest");

const mainText = document.getElementById("MainText");
const endText = document.getElementById("EndText");

let playerHealthElement = document.getElementById("PlayerHealth");
let enemyHealthElement = document.getElementById("EnemyHealth");
let playerEnergyElement = document.getElementById("PlayerEnergy");
let enemyEnergyElement = document.getElementById("EnemyEnergy");

let playerPokemon;
let playerAttackName;
let playerSpecialName;
let playerHealth = 100;
let playerEnergy = 5;

let enemyPokemon;
let enemyAttackName;
let enemySpecialName;
let enemyHealth = 100;
let enemyEnergy = 5;

const attackCost = 2;
const attackMin = 10;
const attackMax = 15;

const specialCost = 4;
const specialMin = 15;
const specialMax = 25;

function selectCharmander() {
  selectionImage.src = "./images/charmander-removebg-preview.png";
  selectionImage.style.display = "initial";
  playerPokemon = "Charmander";
}

function selectSquirtle() {
  selectionImage.src = "./images/squirtle-removebg-preview.png";
  selectionImage.style.display = "initial";
  playerPokemon = "Squirtle";
}

function selectBulbasaur() {
  selectionImage.src = "./images/bulbasaur-removebg-preview.png";
  selectionImage.style.display = "initial";
  playerPokemon = "Bulbasaur";
}

function startGame() {
  if (!playerPokemon) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You must first choose a Pokémon!',
    });
    return;
  }

  selectionMenu.style.display = "none";
  mainWindow.style.display = "initial";

  playerImage.src = "./images/" + playerPokemon + "-removebg-preview.png";

  switch (playerPokemon) {
    case "Charmander":
      playerAttackName = "Scratch";
      playerSpecialName = "Flamethrower";
      break;
    case "Squirtle":
      playerAttackName = "Headbutt";
      playerSpecialName = "Watergun";
      break;
    case "Bulbasaur":
      playerAttackName = "Vine Whip";
      playerSpecialName = "Leaf Storm";
      break;
  }
  attackButton.value = playerAttackName;
  specialButton.value = playerSpecialName;
  document.getElementById("PlayerPokemonName").textContent = playerPokemon;

  let opponent = Math.ceil(Math.random() * 3);

  switch (opponent) {
    case 1:
      enemyPokemon = "Charmander";
      enemyAttackName = "Scratch";
      enemySpecialName = "Flamethrower";
      break;
    case 2:
      enemyPokemon = "Squirtle";
      enemyAttackName = "Headbutt";
      enemySpecialName = "Watergun";
      break;
    case 3:
      enemyPokemon = "Bulbasaur";
      enemyAttackName = "Vine Whip";
      enemySpecialName = "Leaf Storm";
      break;
  }
  enemyImage.src = "./images/" + enemyPokemon + "-removebg-preview.png";
  document.getElementById("EnemyPokemonName").textContent = enemyPokemon;

  mainText.textContent = `Your opponent chose ${enemyPokemon}.`;

  attackButton.value = playerAttackName;
  specialButton.value = playerSpecialName;
  document.getElementById("PlayerPokemonName").textContent = playerPokemon;
}

function enableButtons() {
  attackButton.disabled = false
  specialButton.disabled = false
  restButton.disabled = false
}

function disableButtons() {
  attackButton.disabled = true
  specialButton.disabled = true
  restButton.disabled = true
}

function updateStats() {
  playerHealthElement.textContent = String(playerHealth)
  enemyHealthElement.textContent = String(enemyHealth)
  playerEnergyElement.textContent = String(playerEnergy)
  enemyEnergyElement.textContent = String(enemyEnergy)
}

function endPlayerTurn() {
  updateStats();
  disableButtons();

  if (enemyHealth > 0){
    setTimeout(enemyTurn, 2000);
    } else {
    setTimeout(endGame, 2000)
    }
  }


function playerAttack() {
  let damage = Math.floor(Math.random()*(attackMax - attackMin +1) + attackMin)
  enemyHealth -= damage
  playerEnergy -= attackCost

  mainText.textContent = `Your ${playerPokemon} used ${playerAttackName}! The opponent ${enemyPokemon} took ${damage} damage!`

  endPlayerTurn()
}
function playerSpecial() {
  let damage = Math.floor(Math.random()*(specialMax - specialMin +1) + specialMin)
  enemyHealth -= damage
  playerEnergy -= specialCost

  mainText.textContent = `Your ${playerPokemon} used ${playerSpecialName}! The opponent ${enemyPokemon} took ${damage} damage!`

  endPlayerTurn()
}
function playerRest() {
  playerEnergy += 3
  playerEnergy = Math.min(playerEnergy, 10)

  mainText.textContent = `Your ${playerPokemon} rested and gained 3 energy`

  endPlayerTurn()
}

function enemyTurn(){

  let min = enemyEnergy >= 4 ? 1 : 2
  let max = enemyEnergy <= 7 ? 3 : 2
  let move = Math.floor(Math.random()*(max-min+1)+min)

  switch (move) {
  case 1: 
      enemySpecial()
      break
  case 2:
    enemyAttack()
    break
  case 3:
    enemyRest()
    break
}

updateStats()

if (playerHealth > 0) {
  endRound()
} else {
  setTimeout(endGame, 2000)
}

}

function enemyAttack() {
  let damage = Math.floor(Math.random()*(specialMax - specialMin +1) + specialMin)
  playerHealth -= damage
  enemyEnergy -= attackCost

  mainText.textContent = `The opponent ${enemyPokemon} used ${enemySpecialName}! Your ${playerPokemon} took ${damage} damage!`
}
function enemySpecial() {
  let damage = Math.floor(Math.random()*(attackMax - attackMin +1) + attackMin)
  playerHealth -= damage
  enemyEnergy -= attackCost

  mainText.textContent = `The opponent ${enemyPokemon} used ${enemyAttackName}! Your ${playerPokemon} took ${damage} damage!`
}
function enemyRest() {
  enemyEnergy += 3
  enemyEnergy = Math.min(enemyEnergy, 10)

  mainText.textContent = `The opponent ${playerPokemon} rested and gained 3 energy`
}

function endRound() {
  playerEnergy += 2
  playerEnergy = Math.min(playerEnergy, 10)
  enemyEnergy += 2
  enemyEnergy = Math.min(enemyEnergy, 10)

  updateStats()

  enableButtons()
  if (playerEnergy < specialCost) {
    specialButton.disabled = true
  }
}

function endGame() {
  if (enemyHealth <= 0) {
    endText.textContent = "You Won!"
  } else {
    endText.textContent = "You Lost..."
  }

  mainWindow.style.display = "none"
  endWindow.style.display = "block"
}
