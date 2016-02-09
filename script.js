$(document).ready(function() {
    $('#myCarousel').carousel();
    $('[data-toggle="tooltip"]').tooltip(); 
    $('#registerAlert').hide();
    $('#registerSubmitBtn').click(function(){
        $('#registerAlert').show();
    });
    $('[data-spy="scroll"]').each(function () {
     var $spy = $(this).scrollspy('refresh')
  });
});
