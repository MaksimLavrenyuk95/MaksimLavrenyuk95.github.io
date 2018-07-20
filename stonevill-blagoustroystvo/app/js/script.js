 $(function() {
     $('nav#menu').mmenu({
         extensions: ['fx-menu-slide', 'shadow-page', 'shadow-panels', 'listview-large', 'pagedim-white'],
         iconPanels: true,
         counters: true,
         keyboardNavigation: {
             enable: true,
             enhance: true
         },
         searchfield: {
             placeholder: 'Поиск позиций меню'
         },
         navbar: {
             title: 'БЛАГОУСТРОЙСТВО'
         },
         navbars: [{

         }]
     }, {
         searchfield: {
             clear: true
         }
     });
 });

 var glide = $('.slider').glide().data('api_glide');
 $(window).on('keyup', function(key) {
     if (key.keyCode === 13) {
         glide.jump(3, console.log('Wooo!'));
     };
 });
 $('.slider-arrow').on('click', function() {
     console.log(glide.current());
 });

 $(document).ready(function() {
        $("a.scrollto").click(function() {
            var elementClick = $(this).attr("href")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 900);
            return false;
        });
    });


 $(window).scroll(function(){
    if ($(window).scrollTop() > 200) {
        $('.header').addClass('scroll');
        $('.header__logo').addClass('header__logo_scroll');
        $('.header__logo-name').addClass('header__logo-name_scroll');
        $('.head_a').addClass('head_a_scroll');
        $('.head_a_first-child').addClass('head_a_first-child_scroll');
        $('.phone__number').addClass('phone__number_scroll');
        $('.button-top').addClass('button-top_scroll');
    }
    else {
        $('.header').removeClass('scroll')
        $('.header__logo').removeClass('header__logo_scroll');
        $('.header__logo-name').removeClass('header__logo-name_scroll');
        $('.head_a').removeClass('head_a_scroll');
        $('.head_a_first-child').removeClass('head_a_first-child_scroll');
        $('.phone__number').removeClass('phone__number_scroll');
        $('.button-top').removeClass('button-top_scroll');
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 400) {
        
        $('.button-top').addClass('button-top_scroll');
        $('.block-one-opacity').addClass('opacity3s');
    }
    else {
        
        $('.button-top').removeClass('button-top_scroll');
        
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 1500) {
        $('.block-two-opacity').addClass('opacity3s');
    }
    else { 
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 1700) {
        $('.block-three-opacity').addClass('opacity3s');
    }
    else { 
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 2100) {
        $('.block-four-opacity').addClass('opacity3s');
    }
    else { 
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 2400) {
        $('.block-five-opacity').addClass('opacity3s');
        $('.block-six-opacity').addClass('opacity4s');
        $('.block-seven-opacity').addClass('opacity5s');
        $('.block-eight-opacity').addClass('opacity6s');
        $('.block-nine-opacity').addClass('opacity7s');
    }
    else { 
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 2600) {
        $('.block-ten-opacity').addClass('opacity3s');
    }
    else { 
    }
});


$(window).scroll(function(){
    if ($(window).scrollTop() > 2800) {
        $('.block-eleven-opacity').addClass('opacity3s');
        $('.block-twelve-opacity').addClass('opacity4s');
        $('.block-thirteen-opacity').addClass('opacity5s');
    }
    else { 
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 3300) {
        $('.block-fourteen-opacity').addClass('opacity3s');
        
    }
    else { 
    }
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 3600) {
        $('.block-fifteen-opacity').addClass('opacity3s');
        $('.block-sixteen-opacity').addClass('opacity4s');
        $('.block-seventeen-opacity').addClass('opacity5s');
    }
    else { 
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() > 4000) {
        $('.block-eighteen-opacity').addClass('opacity3s');
                
    }
    else { 
    }
});


