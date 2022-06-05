$(document).ready(function(){

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

    $(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('#header').css({
                'background':'#EB4D4B',
                'box-shadow':'0 .1rem .3rem #000'
            });
        }else{
            $('#header').css({
                'background':'#333',
                'box-shadow':'none'
            });
        }

    });

    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.product-slider').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        autoplay:true,
        center:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.review-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true
    });

    $('.brand-slider').owlCarousel({
        loop:true,
        items:4,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            550:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

});