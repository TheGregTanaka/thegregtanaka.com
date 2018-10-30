function game() {
	while (true) {
		// create secret num
		var secretNumber = Math.random()
		var winCondition = 100000;
		var difficulty = prompt("What difficulty would you like to play on? Type 'e' for Easy, 'm' for Medium, 'h' for Hard, or 'i' for Insane").toLowerCase();
		if (difficulty === 'i'){
			var secretNumber = (Math.round(secretNumber * 100000000000000));
			// 100 trillion
			var	winCondition = 50;
		} else if (difficulty === 'h') {
			var secretNumber = (Math.round(secretNumber * 10000));
			// 10 thousand
			var winCondition = 25;
		} else if (difficulty === 'm') {
			var secretNumber = (Math.round(secretNumber * 100));
			// 1 hundred
		} else if (difficulty === 'e') {
			var secretNumber = (Math.round(secretNumber * 10));
		} else {
			alert("Hmmm... Invalid response.");
			exit();
		}
		var count = 1;

		while (1 <= count <= winCondition) {
			// ask user for guess
			var strGuess = prompt("What number?: ");

			// check for giving up
			if (strGuess.toLowerCase() === "uncle") {
				alert("You gave up on attempt number " + count + ". The number was " + secretNumber);
				exit();
			}

			var guess = Number(strGuess);
			// check guess
			if (guess === secretNumber) {
				alert("You got it! Attempts: " + count);
				exit();
			} else if (difficulty !== 'i') {
				// if not on insane difficulty, the game will give hints
				if (guess > secretNumber) {
					alert("Too high! Guess again!");
					count++;
				} else {
					alert("Too low! Guess again!");
					count++;
				}
			} else {
				alert("Wrong! Guess again!");
				count++
			}
			if (count > winCondition) {
				alert("You lost! The number was " + secretNumber);
				exit();
			}
		}
	}
}
