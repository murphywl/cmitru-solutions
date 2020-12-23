function submitAction(form) {
	var story = document.getElementById('story');
	story.innerHTML = "";
	story.innerHTML += "Однажды " + form.nameInput.value + " ";
	story.innerHTML += "захотел покушать. Но на буду, все, что он мог съесть, это " + form.food.value + ". ";
	story.innerHTML += "Вдобавок, после прошлого приема пищщи ему было очень больно, когда его дергали за " + form.bodyPiece.value + ". ";
	story.innerHTML += "Шутка ли! Ведь ему уже " + form.numberInput.value + " !";
}