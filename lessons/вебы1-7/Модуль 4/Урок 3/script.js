$('ul').children().css('background-color', 'green');

$('li').click(
		function(event){
			$(this).css('font-size', '50px');
		}
	);

//$('div').append(' . Добавленный текст');

$('#text').append('. Добавленный текст');
$('#text').prepend('Новый текст. ')

$('#text').before('<span>Это новый ДИВ</span>');
$('#text').after('<div>Это совсем-совсем новый ДИВ</div>');