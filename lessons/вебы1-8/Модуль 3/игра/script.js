//32-space, 13-enter
var h1 = 300;
var h2 = 300;
var column1 = document.getElementById('column1');
var column2 = document.getElementById('column2');
var winner = document.getElementById('winner');

document.addEventListener("keyup", rise);

function rise(event) {
	console.log(event.keyCode);

	if(event.keyCode==32) {
		h1+=10;
		column1.style.height = h1+"px";
	}

	else if(event.keyCode==13) {
		h2+=10;
		column2.style.height = h2+"px";
	}

	if(h1>520) {
		document.removeEventListener("keyup", rise);
		winner.style.display="inline";
		winner.style.left="50px";
		winner.innerHTML="Good! Orange wins!";
	}

	if(h2>520) {
		document.removeEventListener("keyup", rise);
		winner.style.display="inline";
		winner.style.left="200px";
		winner.innerHTML="Good! Red wins!";
	}
}

//Перезапускает игру
function restartGame() {
	document.addEventListener('keyup', rise);
	h1 = 300;
	column1.style.height = h1 + "px";
	h2 = 300;
	column2.style.height = h2 + "px";
	winner.innerHTML = "";
	winner.style.display = "none";
}