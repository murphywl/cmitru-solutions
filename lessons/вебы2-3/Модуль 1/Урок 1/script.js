var randomNumber=0;

function generateRandom() {
	randomNumber=Math.floor(Math.random() *100);
	document.getElementById("numberLabel").innerHTML = randomNumber
}
