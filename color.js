var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector( "#reset");
var modeButtons = document.querySelectorAll(".mode");


init()

function init() {
	// mode buttons event listeners
	for(var i=0; i< modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent ==="Easy") {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
			// figure out how many squares to show
			// pick new colors
			// pick a new pickedcolor
			// update page to reflect changes
		})
	}
	for(var i=0; i<squares.length; i++) {
	// add click listeners to squares
	squares[i].addEventListener("click", function () {
		// grab color of clicked square
		var clickedColor = this.style.background;
		// compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	};
	reset();
}

function reset() {
	colors= generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i=0; i<squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
 	reset();
});

function changeColors(color) {
	// loop through all squares
	for (var i=0; i<squares.length; i++) {
		squares[i].style.background = color;
	};
	// change color to given color
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make and array
	var arr = []
	// add num random colors to array
	for(var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick green
	var g = Math.floor(Math.random() * 256);
	// pick blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g+ ", " + b + ")";
}