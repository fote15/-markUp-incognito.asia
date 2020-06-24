$( document ).ready(function() {
$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#youcall').on('click', function() {
   $('.video-inner').show();
$('.frmain').html("<iframe id='player' class='vidosfr' width='700' height='500' src='https://www.youtube.com/embed/OWLIvyYnm20?list=PLcV7BHvM8Xmhl97UUKUtQ9xljsBpH9knq&amp;showinfo=0&autoplay=1' frameborder='0' allowfullscreen></iframe>");
});
$('.video-inner').on('click', function() {
   $('.video-inner').hide();
   $('.frmain').html('');
   
});

$('.video-close').on('click', function() {
  $('.hero').fadeIn(200);

});


});