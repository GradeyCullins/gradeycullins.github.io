

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(255, 255, 255)"
// ];

var squares = document.querySelectorAll('.square');
var currColor = document.querySelector('#currColor');
var target;

reset();

currColor.textContent = colors[4];


/*
	Add event listeners
*/
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		if (this.style.background == target) {
			this.style.visibility = 'hidden';
		};
	});
	squares[i].style.background = colors[i];
}
document.querySelector('#reset').addEventListener('click', function() {
	reset();
});

function reset() {

	currIndex = Math.floor(Math.random() * 5);
	colors = new Array();
	for (var i = 0; i < 5; i++) {
		squares[i].style.visibility = 'visible';
		colors.push('rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')');	
	}
	target = colors[currIndex];
	currColor.textContent = target;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
}