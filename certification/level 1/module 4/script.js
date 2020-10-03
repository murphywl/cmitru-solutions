$(document).keydown(function (e) {
	switch (e.which) {
		case 37:
			$('div').stop().animate({
				left: '-=100'
			});
			break;
		case 38:
			$('div').stop().animate({
				top: '-=100'
			});
			break;
		case 39:
			$('div').stop().animate({
				left: '+=100'
			});
			break;
		case 40:
			$('div').stop().animate({
				top: '+=100'
			});
			break;
	}
})
