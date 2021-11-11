
(function ($, Drupal) {
    $(document).ready(function () {

        $("header div nav ul li a[href='#challenge-home']").addClass('active');
        $('a[href^="#"]').bind('click', function (e) {
            e.preventDefault(); // prepreči skok

            var target = $(this).attr("href"); // Nastavi cilj kot spremenljivko 

            // izvede animirano pomikanje tako, da dobi zgornji položaj ciljnega elementa in ga nastavite kot cilj pomikanja 
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function () {
                location.hash = target; //pripne hash (#jumptarget) na pageurl 
            });

            return false;
        });
    });

    var addClassOnScroll = function () {



        var windowTop = $(window).scrollTop();

        $('div[id]').each(function (index, elem) {
            var offsetTop = $(elem).offset().top;
            var outerHeight = $(this).outerHeight(true);
            if (windowTop >= (offsetTop - 200) && windowTop < (offsetTop + outerHeight)) {
                var elemId = $(elem).attr('id');
                
                $("header div nav ul li a.active").removeClass('active');
                $("header div nav ul li a[href='#" + elemId + "']").addClass('active');

            }
        });
    };

    $(function () {
        $(window).on('scroll', function () {
            addClassOnScroll();
        });
    });


})(jQuery, Drupal);
