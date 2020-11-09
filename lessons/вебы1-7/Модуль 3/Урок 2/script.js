var randomNumber = 0;

function generate() {
	randomNumber = Math.floor(Math.random()*1000);
	document.getElementById("number").innerHTML = randomNumber;
}