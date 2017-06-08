var pickedColour = null;
var guessValue = document.getElementById("guessValue");
var numColours = 6;
var squares = document.querySelectorAll(".square");
var reset = document.getElementById("reset");

var colours = genColours(numColours);
pickColour();
createSquares();
reset.addEventListener("click", resetGame);



function changeColours (colour) {
	document.querySelector("h1").style.backgroundColor=colour;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	};
}

function pickColour () {
	pickedColour = colours[Math.floor(Math.random()*colours.length)];
	document.getElementById("pickedColour").innerHTML = (" " + pickedColour);
}

function genColours (num) {

	var arr = [];
	for (var i = 0; i < num; i++) {
		arr[i] = randColour();
	};
	return arr;
}

function randColour () {
	//Red
	var r = Math.floor(Math.random()*256);
	//Green
	var g = Math.floor(Math.random()*256);
	//Blue
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetGame() {
	colours = genColours(numColours);
	pickColour();
	createSquares();
	reset.textContent = "New Colours";
	document.querySelector("h1").style.backgroundColor="white";

}


function createSquares () {
	for (var i = 0; i < squares.length; i++) {
	// set colour
	squares[i].style.backgroundColor = colours[i];

	//click
	squares[i].addEventListener("click", function() {
		var clickedColour = this.style.backgroundColor;
		if (clickedColour === pickedColour){
			guessValue.textContent ="Correct!";
			changeColours(pickedColour);
			reset.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = 'white';
			guessValue.textContent="Try Again!";
		}
	});
};
}











