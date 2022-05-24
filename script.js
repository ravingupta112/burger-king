// $(".btn").on('click', function(){
//     $(".popup").show(3000)
// })


$(".bar").on('click', function(){
$(this).hide();
$('nav').show();
$('nav').addClass('mobile-nav');

});

$(".fa-times").on('click', function(){
    $(".bar").show();
    $('nav').hide();
    
    });