$(document).ready(function() {
 $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $('.navexpanded').fadeOut('slow');
            $('#imagotipo img')
                .css({'width': '40%'})
                .attr('src','img/isotipo.svg');
        }

     if($(this).scrollTop() < 50) {
            $('.navexpanded').fadeIn('fast');
            $('#imagotipo img')
                .css({'width': '80%'})    
                .attr('src','img/imagotipo.svg');
        }   

    });

});