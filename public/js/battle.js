let playAgain = true; // keep track if we should be playing again
// While are we doing it here? Because the energy length is kept.
while (playAgain) {
  let playerHealth = 100; // Player energy
  let enemyHealth = 100; // Keeping track of the energy
  let playerEnergy = 3;
  let enemyEnergy = 3;

  // Note: This tutorial is not allowing player/enemy to select which pokemon they are using
  // Might need to create variables for that

  let playerPokemon = 'Bulbasaur';
  let enemyPokemon = 'Magicarp';

  // Attacks
  let playerAttack = 'Tackle';
  let enemyAttack = 'Splash';

  // Min Max Damage in Variables
  let attackMin = 10;
  let attackMax = 15;
  let attackEnergyCost = 2;

  // Special Damage
  let playerSpecial = 'Thunderbolt';
  let enemySpecial = 'Watergun';
  let specialMin = 15;
  let specialMax = 25;
  let specialEnergyCost = 4;
  let playerTurn = true;
  let move; // What move or attack
  let damage; // Player or enemy damage

  // Clear screen at the start of every game, erases everything if there are values.
  console.clear();

  console.log("Let's Pokémon Battle! /n"); // /n is a enter bar

  // When do we want this to continue going?

  while (playerHealth > 0 && enemyHealth > 0) {
    // While player and opponent both have more than 1HP
    if (playerTurn) {
      playerEnergy += 2; // Give player energy
      playerEnergy = Math.min(playerEnergy, 10); // Player energy can't go above 10
      console.log(
        `You're ${playerPokemon} has: \n${playerHealth} HP \n ${playerEnergy} Energy \n`
      );
      console.log(
        `The opponent ${enemyPokemon} has: \n${enemyHealth} Hitpoints\n ${enemyEnergy} Energy \n`
      );
      console.log(
        `What move do you want to use?\n1 ${playerAttack}\n2) ${playerSpecial} \n3) Rest \n`
      );
      // Get input from user. Input verification so we get a good input. Did they energy a number
      while (true) {
        move = Number(prompt('Select your move: '));
        if (isNaN(move)) {
          console.log("That's not a number!");
        } else if (move < 1 || move > 3) {
          console.log("That's not a 1, 2, or 3");
        } else {
          // Did not find any errors
          break;
        }
      }

      // After player turn or opponent's turn, player can see the status of the game and be asked to enter next move
      console.clear();

      switch (move) {
        // Attack
        case 1:
          // Calculate damage
          damage =
            Math.floor(Math.random() * (attackMax - attackMin + 1)) + attackMin;
          // Calculate random parts
          // Round the random number down
          // Generate the random number
          // Multiply by range between 0 and 15
          // Multiply by attackMax by attackMin and + 1, (4 + 1)
          // Get a number between Number between 10 to 15
          enemyHealth -= damage; // Calculate damage by subtracting from enemy's HP // Damage done
          // Check to make sure that they have enough energy before they attack
          playerEnergy -= attackEnergyCost;
          console.log(
            `${playerPokemon} used ${playerAttack}!\n The opponent ${enemyPokemon} took ${damage} damage!\n`
          );
          break; // Break tells code to stop and not to run through Case 2 and Case 3

        // Special
        case 2:
          if (playerEnergy >= specialEnergyCost) {
            damage =
              Math.floor(Math.random() * (specialMax - specialMin + 1)) +
              specialMin;
            enemyHealth -= damage;
            playerEnergy -= specialEnergyCost;
            console.log(
              `${playerPokemon} used ${playerSpecial}!\n The opponent ${enemyPokemon} took ${damage} damage!\n`
            );
          } else {
            console.log(
              `${playerPokemon} tried to use ${playerSpecial} but didn't have enough energy!\n`
            );
          }
          break;

        // Rest
        case 3:
          playerEnergy += 3;
          playerEnergy = Math.min(playerEnergy, 10);
          console.log(`${playerPokemon} rested and gained 3 energy.\n`); //You could use a placeholder for the number, but this is hardcoded
      }

      // Opponent's turn
    } else if (!playerTurn) {
      enemyEnergy += 2;
      enemyEnergy = Math.min(enemyEnergy, 10); //Make sure doesn't go above 10
      move = Math.ceil(Math.random() * 3); // Generate a number 1, 2, or 3 ***

      switch (move) {
        // Enemy Attack
        case 1:
          damage =
            Math.floor(Math.random() * (attackMax - attackMin + 1)) + attackMin;
          playerHealth -= damage;
          enemyEnergy -= attackEnergyCost;
          console.log(
            `The opponent's ${enemyPokemon} used ${enemyAttack}!\n Your ${playerPokemon} took ${damage} damage!\n`
          );
          break;

        // Enemy Special Attack
        case 2:
          if (enemyEnergy >= specialEnergyCost) {
            damage =
              Math.floor(Math.random() * (specialMax - specialMin + 1)) +
              specialMin;
            enemyHealth -= damage;
            enemyEnergy - +specialEnergyCost;
            console.log(
              `The opponent's ${enemyPokemon} used ${playerSpecial}!\n Your ${playerPokemon} took ${damage} damage!\n`
            );
          } else {
            console.log(
              `${enemyPokemon} tried to use ${enemySpecial} but didn't have enough energy!\n`
            );
          }
          break;

        // Enemy Rest
        case 3:
          enemyEnergy += 3;
          enemyEnergy = Math.min(enemyEnergy, 10);
          console.log(
            `The opponent ${enemyPokemon} rested and gained 3 energy.\n`
          );
      }
    }

    // If player A gets turn, now we are allowing player B to get their turn
    // Keeps track of player turn
    playerTurn = !playerTurn;
  }

  // Outcome Evaluation

  if (playerHealth <= 0) {
    console.log('You were defeated...');
    //Send fetch request to backend to log the loss into the db
  } else {
    console.log('You won! Yay!!');
    //Send fetch request to backend to log the win into the db
  }

  // Confirm gives a true or false y/n
  playAgain = confirm('Do you want to play again?');
}
