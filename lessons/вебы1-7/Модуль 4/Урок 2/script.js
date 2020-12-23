/*
$('div').addClass('cl1');
$('div').addClass('cl2');
$('div').addClass('cl3');
*/

$('div').addClass('cl1 cl2 cl3 cl4');

$('#btn1').click(
		function(){
			$('div').toggleClass('cl1');
		}
	);
/*
$('#btn2').click(
		function(){
			$('div').removeClass('cl2');
		}
	);
*/
$('#btn2').click(
		function(){
			$('div').css({'background-color': 'green', 'font-size': '50px'});
			
		}
	);

$('#btn3').click(
		function(){
			$('div').removeClass('cl3');
		}
	);

$('#btn4').click(
		function(){
			$('div').removeClass('cl4');
		}
	);
