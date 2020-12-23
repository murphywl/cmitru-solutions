$(".col-sm").addClass('text-center');
$(".col-sm").css('min-height', '200px');

var score = 0;
var button = $('button');
$('button').click(function(){
    var butNum = Math.floor(Math.random()*$('button').length);
    if ($(this).hasClass("btn-primary") == true){
        score+=1;
        $("#score").html(score);
    }
    $("button").attr("class", "");
    $(button[butNum]).addClass('btn');
    $(button[butNum]).addClass('btn-primary');
});