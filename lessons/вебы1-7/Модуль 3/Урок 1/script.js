var counter = 0;

function plusOne() {
	counter++;
	document.getElementById("counterLabel").innerHTML = counter;
}

function minusOne() {
	counter--;
	document.getElementById("counterLabel").innerHTML = counter;
}