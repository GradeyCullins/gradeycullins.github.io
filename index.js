var squares = document.querySelectorAll('.square');
var currColor = document.querySelector('#currColor');
var target;

reset();

// event listener for tiles and sum other stuff big boi
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		if (this.style.background == target) {
			document.querySelector('#head').style.background = target;
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.visibility = 'visible';
				squares[i].style.background = this.style.background;
			}
			document.querySelector('#reset').textContent = 'Play Again';
		} else {
			document.querySelector('#reset').textContent = 'Incorrect';
			this.style.background = '#232323';
		}
	});
	squares[i].style.background = colors[i];
}

document.querySelector('#reset').addEventListener('click', function() {
	reset();
});

function reset() {
	document.querySelector('#reset').textContent = 'New Colors';
	document.querySelector('#head').style.background = '#232323';
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

document.onkeydown = function(e) {
    if (e.keyCode == 13) {
    	reset();
    }
};