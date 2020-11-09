//32(space) and 13(enter)

var h1 = 300;
var h2 = 300;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var winner = document.getElementById("winner");
document.addEventListener("keyup", rise);

function rise(event) {
	console.log(event.keyCode);

	if (event.keyCode==32) {
		h1+=10;
		player1.style.height =h1+"px";
	}
	else if (event.keyCode == 13) {
		h2+=10;
		player2.style.height = h2+"px";
	}

	if (h1>550) {
		document.removeEventListener("keyup", rise);
		winner.style.display = "inline";
		winner.style.left = "50px";
		winner.innerHTML = "Green Wins!";
	}

	else if (h2>550) {
		document.removeEventListener("keyup", rise);
		winner.style.display = "inline";
		winner.style.left = "200px";
		winner.innerHTML = "Blue Wins!";
	}
}

function game() {
	document.addEventListener("keyup", rise);
	h1 = 300;
	player1.style.height = h1+"px";
	h2 = 300;
	player2.style.height = h2+"px";
	winner.innerHTML = "";
	winner.style.display = "none";
}