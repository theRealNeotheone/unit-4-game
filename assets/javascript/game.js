$(document).ready(function() {

	//Variables for tracking players wins & losses
	var wins = 0;
	var losses = 0;
	
	//The computer's random number for the current round
	var computerNum = [];
	
	//Random number assigned to crystals for the current round
	var orange;
	var blue;
	var clear;
	var green;
	
	//The player's score counter for the current round; add 0 & player # works but not random number
	var playerCounter = 0;
	
	//**How to start the game**//
	function startGame() {
		var compNum = Math.floor(Math.random() * 102) + 19;
		computerNum.push(compNum);
		$("#random-number").text(computerNum[0]);
		console.log("Computer number: " + computerNum);
		
		//Random number for crystals
		orange = Math.floor(Math.random() * 12) + 1;
		console.log("Orange: " + orange);
	
		blue = Math.floor(Math.random() * 12) + 1;
		console.log("Teal: " + blue);
	
		clear = Math.floor(Math.random() * 12) + 1;
		console.log("Clear: " + clear);
	
		green = Math.floor(Math.random() * 12) + 1;
		console.log("Green: " + green);
	};
	
	//How to reset the game
	function nextGame() {
		computerNum.length = 0;
		playerCounter = 0;
		startGame();
	};
	
	//Function to determine if player counter </=/> computer's number
	function checkingNum () {
		if (playerCounter === computerNum[0]) {
			wins++;
			$("#outcome").html("You won!!");
			$("#wins").html("Wins: "+ wins);
			console.log("You won!!");
			nextGame();
		}
	
		else if (playerCounter > computerNum[0]) {
			losses++;
			$("#outcome").html("You lost!!");
			$("#losses").html("Losses: " + losses);
			console.log("You lost!!");
			nextGame();
		}
	
		else {
			console.log("Keep guessing!")
		}
	
	};
	
	//Calling the game to start
	startGame();
	
	//Clicking crystals
	$("#crystal-orange").on("click", function() {
		playerCounter = orange + playerCounter;
		$("#player-count").text(playerCounter);
		console.log(playerCounter);
		checkingNum();
	});
	
	$("#crystal-teal").on("click", function() {
		playerCounter = blue + playerCounter;
		$("#player-count").text(playerCounter);
		console.log(playerCounter);
		checkingNum();
	});
	
	$("#crystal-clear").on("click", function() {
		playerCounter = clear + playerCounter;
		$("#player-count").text(playerCounter);
		console.log(playerCounter);
		checkingNum();
	});
	
	$("#crystal-green").on("click", function() {
		playerCounter = green + playerCounter;
		$("#player-count").text(playerCounter);
		console.log(playerCounter);
		checkingNum();
	});
	
	});