var firstNumber = 0;
var secondNumber = 0;
var operCode = null;

function addDigit(digitToAdd) {
	if(parseInt(document.getElementById("result").value) <10e+10) {
		if(document.getElementById("result").value == 0) {
			document.getElementById("result").value = digitToAdd;
		}
		else{
			document.getElementById("result").value += digitToAdd;
		}
	}
}

