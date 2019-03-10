// Class to handle audio
class AudioController {
	constructor() {
		this.bgMusic = new Audio("Assets/Audio/creepy.mp3");
		this.flipSound = new Audio("Assets/Audio/flip.wav");
		this.matchSound = new Audio("Assets/Audio/match.wav");
		this.victorySound = new Audio("Assets/Audio/victory.wav");
		this.gameOverSound = new Audio("Assets/Audio/gameover.wav");
		// Set the volume of `bgMusic` (0- Muted; 1- full volume)
		this.bgMusic.volume = 0.20;
		// Loop `bgMusic` indefinitely
		this.bgMusic.loop = true;
	}

	// Function to start playing the background music
	startMusic() {
		this.bgMusic.play();
	}

	// Stop (pause) the background music
	stopMusic() {
		// Pause the music
		this.bgMusic.pause();
		// Reset the background music back to the start of the .mp3 file
		this.bgMusic.currentTime = 0;
	}
	
	// Sound effect played when a card is flipped
	flip() {
		this.flipSound.play();
	}

	// Sound effect played when the player finds a match
	match() {
		this.matchSound.play();
	}

	// Music played when the player wins
	victory() {
		// Stop playing the background music
		this.stopMusic();
		// Play the victory music
		this.victorySound.play();
	}

	// Music played when the player loses
	gameOver() {
		// Stop playing the background music
		this.stopMusic()
		// Play the game over music
		this.gameOverSound.play()
	}
}

// Class to handle the general gameplay
class MixOrMatch {
	constructor(totalTime, cards) {
		// totalTime: time to play the game (seconds)
		// cards: array of play cards
		this.totalTime = totalTime;
		this.cardsArray = cards;
		this.timeRemaining = totalTime;
		this.timer = document.getElementById("time-remaining");
		this.ticker = document.getElementById("flips");
		this.audioController = new AudioController();
	}

	// Used to start a new game
	startGame() {
		// Flipped up card to be matched
		this.cardToCheck = null;
		this.totalClicks = 0;
		this.timeRemaining = this.totalTime;
		this.matchedCards = [];
		// Property to stop players from clicking cards at specific times\
		// (e.g. during animations)
		this.busy = true;
		// 500 miliseconds after a new game starts, start playing the\
		// background music, shuffle the cards, start the countdown timer\
		// and set `busy` to `false` (so players can actually flip cards)
		setTimeout(() => {
				this.audioController.startMusic();
				this.shuffleCards();
				this.countDown = this.startCountDown();
				this.busy = false;
			}, 500);
		// Reset the cards
		this.hideCards();
		this.timer.innerText = this.timeRemaining;
		this.ticker.innerText = this.totalClicks;
	}

	// Resets cards to being faced down and not matched
	hideCards() {
		this.cardsArray.forEach(card => {
			card.classList.remove("visible");
			card.classList.remove("matched");
		})
	}

	// Used to flip a single card
	flipCard(card) {
		if (this.canFlipCard(card)) {
			this.audioController.flip();
			// Increment the number of flips and update the corresponding HTML\
			// element
			this.totalClicks++;
			this.ticker.innerText = this.totalClicks;
			card.classList.add("visible");

			// If there's a card already turned up waiting to be matched
			if (this.cardToCheck) {
				this.checkForCardMatch(card);
			}
			// If there's no card turned up
			else {
				this.cardToCheck = card;
			}
		}
	}

	// Check for a match between the card already flipped up and the one just clicked
	checkForCardMatch(card) {
		// Match
		if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
			this.cardMatch(card, this.cardToCheck);
		}
		// Mismatch
		else {
			this.cardMisMatch(card, this.cardToCheck);
		}

		// After checking for a match, we are no longer trying to match up any cards
		this.cardToCheck = null;
	}

	// If there was a match, then add both cards to the array of matched cards,\
	// update the HTML elements' classes and check for a victory
	cardMatch(card1, card2) {
		this.matchedCards.push(card1);
		this.matchedCards.push(card2);
		card1.classList.add("matched");
		card2.classList.add("matched");
		this.audioController.match();
		// If all cards are now matched, it's a victory
		if (this.matchedCards.length == this.cardsArray.length) {
			this.victory();
		}
	}

	// If there was a mismatch, turn down both cards (update their HTML classes)
	cardMisMatch(card1, card2) {
		// We call `busy` so that the player can't click other cards while the\
		// mismatch animations are active
		this.busy = true;
		setTimeout(() => {
			card1.classList.remove("visible");
			card2.classList.remove("visible");
			this.busy = false;
			}, 1000);
	}

	// Get the type of the card (the value of the `src` attribute of the `img` elements\
	// with a class of `card-value`)
	getCardType(card) {
		return card.getElementsByClassName("card-value")[0].src;
	}

	// Start the countdown
	startCountDown() {
		// Create a `setInterval()` object which decrements the time remaining and\
		// updates the respective HTML element every second (1000 miliseconds)
		// If the timer reaches 0, then it's game over
		return setInterval(() => {
			this.timeRemaining--;
			this.timer.innerText = this.timeRemaining;
			if (this.timeRemaining === 0) {
				this.gameOver();
			}
		}, 1000);
	}

	// Used to finish a game when the player runs out of time
	gameOver() {
		clearInterval(this.countDown);
		this.audioController.gameOver();
		document.getElementById("game-over-text").classList.add("visible");
	}

	// Used to finish a game when the player finds all matches
	victory() {
		clearInterval(this.countDown);
		this.audioController.victory();
		document.getElementById("victory-text").classList.add("visible");
	}

	// Used to shuffle the order of the cards
	shuffleCards() {
		for(let i=this.cardsArray.length-1; i>0; i--) {
			// Create a random integer between 0 and the current value of `i`
			// Note: Math.random() returns a floating-point in the range [0, 1[
			let randIndex = Math.floor(Math.random() * (i+1));
			// Exchange the cards of the array at indices `i` and `randIndex`
			this.cardsArray[randIndex].style.order = i;
			this.cardsArray[i].style.order = randIndex;
		}
	}

	// Check if the player can flip a card
	canFlipCard(card) {
		return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
	}
}


// If the HTML content is still loading
if (document.readyState === "loading") {
	// Then add an event listener which is triggered when all\ 
	// the HTML is loaded and calls the `ready()` function
	document.addEventListener("DOMContentLoaded", ready());
}
// Otherwise, call `ready()`
else {
	ready();
}

function ready() {
	// Create an array from the HTML Collection returned which contains all the overlays
	let overlays = Array.from(document.getElementsByClassName("overlay-text"));
	// Create an array from the HTML Collection returned which contains all the cards
	let cards = Array.from(document.getElementsByClassName("card"));
	// Create a new game
	let game = new MixOrMatch(100, cards);

	// Loop through all the overlays: when one is clicked, remove its `visible` class so\
	// that they are no longer visible on the screen and start a new game
	overlays.forEach(overlay => {
		overlay.addEventListener("click", () => {
			overlay.classList.remove("visible");
			game.startGame();
		});
	});

	cards.forEach(card => {
		card.addEventListener("click", () => {
			game.flipCard(card);
		});
	});

}