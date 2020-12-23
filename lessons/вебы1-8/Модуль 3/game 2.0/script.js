var timer = 10;

var intervalId;

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="helloText">Тебе нужно скушать макимальное количество апельсинок. Нажми на клавишу ENTER, чтобы игра началась!</div>');
var helloText = document.getElementById('helloText');
helloText.style.display = 'block';
helloText.style.textAlign = 'center';
helloText.style.fontSize = 72 + 'px';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div>');
var scoreObj = document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72 + "px";
var score = 0;
scoreObj.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = "fixed";
pig.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';
orange.style.display = 'none';

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="timerObj"></div>');
var timerObj = document.getElementById('timerObj');
timerObj.style.textAlign = "center";
timerObj.style.fontSize = 72 + "px";
timerObj.style.display = 'none';

var mouseListener = function(event){
	mouseMoveFunc(event)
};

var enterListener = function(event){
	startGame(event)
};
document.addEventListener('keydown', enterListener);

/*
document.addEventListener("mousemove", mouseListener);
spawnOrange();
setScore(0);
*/
function setTimer(timeToSet){
	console.log(timer);
	timerObj.innerHTML = "Timer: " + timeToSet;
}

function startGame(event){
	if (event.keyCode == 13){
		score = 0;
		setScore(0);

		helloText.style.display = 'none';
		scoreObj.style.display = 'block';
		pig.style.display = 'block';
		orange.style.display = 'block';

		document.removeEventListener('keydown', enterListener);
		document.addEventListener('mousemove', mouseListener);

		spawnOrange();

		timerObj.style.display = 'block';
		timer = 10;
		setTimer(time); //

		intervalId = setInterval(function(){cntdwn();}, 1000);
	}
}

function mouseMoveFunc(event){
	pig.style.left = event.clientX - 64 + 'px';
	pig.style.top = event.clientY - 64 + 'px';
	checkCollision();
}

function checkCollision(){
	console.log();
	if (
			Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft, 2) + Math.pow(pig.offsetTop - orange.offsetTop, 2)) < 128
		){
		spawnOrange();
		score++;
		setScore(score);
	}
}

function setScore(scoreToSet){
	scoreObj.innerHTML = "Score: " + scoreToSet;
}

function spawnOrange(){
	orange.style.left = Math.random()*(window.innerWidth-128) + 'px';
	orange.style.top = Math.random()*(window.innerHeight-128) + 'px';
}




