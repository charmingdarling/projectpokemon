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
const playerEnergy = 5;

let enemyPokemon;
let enemyAttackName;
let enemySpecialName;
const enemyHealth = 100;
const enemyEnergy = 5;

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
    alert("You must first choose a pokemon!"); // SweetAlert?
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

  attackButton.value = enemyAttackName;
  specialButton.value = enemySpecialName;
  document.getElementById("PlayerPokemonName").textContent = playerPokemon;
}

function playerAttack() {}
function playerSpecial() {}
function playerRest() {}

function enemyAttack() {}
function enemySpecial() {}
function enemyRest() {}
