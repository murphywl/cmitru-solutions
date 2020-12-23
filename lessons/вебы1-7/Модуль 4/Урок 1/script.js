//JS
/*
var image = document.getElementsByTagName('img');
for (var i = 0; i < image.length; i++){
	image[i].src = 'img/red.png';
}
*/

//jQuery
/*
$('img').attr("src", "img/red.png");
$('#orange').attr("src", "img/orange.png");

$('img').addClass('circle');
$('.circle').attr("src", "img/green.png");

var shariki = $('img');
$(shariki[5]).attr('src', "img/red.png");

for (var i = 0; i < shariki.length; i++){
	shariki[i].src = "img/orange.png";
}
*/

$('img').attr('src', 'img/red.png');
var circles = $('img');

for (var i = 2; i <= 6; i += 2){
	$(circles[i]).attr("src", "img/orange.png");
}
for (var i = 1; i <= 7; i+=2){
	$(circles[i]).attr("src", "img/green.png");
}

for (var i=0; i<=8; i++){
	$(circles[i]).attr('border', i+1);
	$(circles[i]).attr('width', 20*(i+1));
}




