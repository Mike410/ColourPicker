var pickedColour = null;
var message = document.getElementById("message");
var numColours = 6;
var squares = document.querySelectorAll(".square");
var reset = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var colours = genColours(numColours);
var hidden = false;


pickColour();
createSquares();

reset.addEventListener("click", resetGame);
easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numColours =3;
	resetGame();
	if (!hidden)
		toggleHidden();
	hidden= true;
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	//genColours(6)
	numColours=6;
	resetGame();
	if (hidden)
		toggleHidden();
	hidden = false;
});



function changeColours (colour) {
	document.querySelector("#header").style.backgroundColor=colour;
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
	document.querySelector("#header").style.backgroundColor="#232323";
	message.textContent="";
}

function createSquares () {
	for (var i = 0; i < squares.length; i++) {
		// set colour
		squares[i].style.backgroundColor = colours[i];

		//click
		squares[i].addEventListener("click", function() {
			var clickedColour = this.style.backgroundColor;
			if (clickedColour === pickedColour){
				message.textContent ="Correct!";
				changeColours(pickedColour);
				reset.textContent = "Play Again?";
			}
			else {
				this.style.backgroundColor = '#232323';
				message.textContent="Try Again!";
			}
		});
	};
}

function toggleHidden () {

	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.toggle("hidden");
	};
}










