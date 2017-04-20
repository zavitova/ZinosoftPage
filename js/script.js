$(document).ready(function(){
    if( $(window).width() > 1041 ){
        $(".our_works_main_img_works_part").click(function(e){
            if( !($(".our_works_main_about_works").hasClass("opened")) ){
                e.preventDefault();
                $(".our_works_main_about_works").animate({height:600,padding:10}, 500, function(){
                    $(this).addClass("opened");
                });
                $(this).addClass("active-pager");
            }
        });
    }else if( $(window).width() > 650 ){
        $(".our_works_main_img_works_part").click(function (e) {
            if (!($(".our_works_main_about_works").hasClass("opened"))) {
                e.preventDefault();
                $(".our_works_main_about_works").animate({height: 650, padding: 10}, 500, function () {
                    $(this).addClass("opened");
                });
                $(this).addClass("active-pager");
            }
        });
    }else{
        $(".our_works_main_img_works_part").click(function (e) {
            if (!($(".our_works_main_about_works").hasClass("opened"))) {
                e.preventDefault();
                $(".our_works_main_about_works").animate({height: 930, padding: 10}, 500, function () {
                    $(this).addClass("opened");
                });
                $(this).addClass("active-pager");
            }
        });
    }








    $('.bxslider-comemnts').bxSlider({
        pagerCustom: '.bx-pagers123',
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            $(".bxslider-comemnts>li").removeClass("nextSlide");
            $(".bxslider-comemnts>li").removeClass("prevSlide");
            $(".bxslider-comemnts>li").eq(newIndex + 2).addClass('nextSlide');
            $(".bxslider-comemnts>li").eq(newIndex).addClass('prevSlide');

            var indexNext = newIndex+1;
            var indexPrev = newIndex-1;
            if (newIndex==0) {
                indexNext = 1;
                indexPrev = 5;
            }
            if (newIndex==5) {
                indexNext = 0;
                indexPrev = 4;
            }




           $(".bx-pagers123>a").removeClass("nextSlide");
           $(".bx-pagers123>a").removeClass("prevSlide");
           $(".bx-pagers123>a").removeClass("active-pager");
            $(".bx-pagers123>a").eq(newIndex).addClass('active-pager');
           $(".bx-pagers123>a").eq(indexNext).addClass('nextSlide');
           $(".bx-pagers123>a").eq(indexPrev).addClass('prevSlide');
            $(".bx-pagers123>a").eq(6+newIndex).addClass('active-pager');
           $(".bx-pagers123>a").eq(6+indexNext).addClass('nextSlide');
           $(".bx-pagers123>a").eq(6+indexPrev).addClass('prevSlide');
        },
        onSliderLoad: function() {
            $(".bxslider-comemnts>li").removeClass("nextSlide");
            $(".bxslider-comemnts>li").removeClass("prevSlide");
            $(".bxslider-comemnts>li").eq(2).addClass('nextSlide');
            $(".bxslider-comemnts>li").eq(-1).addClass('prevSlide');

            $(".bx-pagers123>a").removeClass("nextSlide");
            $(".bx-pagers123>a").removeClass("prevSlide");
            $(".bx-pagers123>a").eq(1).addClass('nextSlide');
            $(".bx-pagers123>a").eq(5).addClass('prevSlide');
            $(".bx-pagers123>a").eq(7).addClass('nextSlide');
            $(".bx-pagers123>a").eq(11).addClass('prevSlide');
        }
    });

    $('.bxslider1').bxSlider({
        pagerCustom: '#bx-pager1'
    });
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager'
    });
    $('.bxslider_5').bxSlider({
        minSlides: 1,
        maxSlides: 10,
        slideWidth: 40,
        slideMargin: 10,
        moveSlides: 1,
        pager: false
    });
});