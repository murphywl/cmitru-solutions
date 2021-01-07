$(function() {
	$('#add').click(
			function(){
				var val = $('input').val();
				var task = $('<li></li>').text(val);
				$(task).append('<button class="delete">Удалить</button>');
				$('#mylist').append(task);
				$('.delete').click(function(){
					$(this).parent().remove();
				});
		});
});

