var randomNumber = 0;

function generateRandom(){
	randomNumber = Math.floor(Math.random()*10000000);
	document.getElementById("numberPlace").innerHTML = randomNumber;
}