function navConfig(containerName) {
    $(containerName).each(function(c_index, container) {
        $('div', container).each(function(d_index, dot) {
            $(dot).on('click', function() {
                $this = $(this);

                $('div', container).each(function(i, el) {
                    $(el).removeClass('active');
                });

                $this.addClass('active');
            });
        });
    });
}

function nextPage(container, slider, direction) {
    var pageIndex = 0;
    var activeDot = $(`${container} div.active`).data('nav') / 2;

    var totalDots = $('.nav-dot', container).not(':hidden').length;

    if (direction === 'prev') {
        if (activeDot > 0) {
            pageIndex = activeDot - 1;
        } else {
            pageIndex = totalDots - 1;
        }
        slider.goTo('prev');
    } else if (direction === 'next') {
        if (activeDot < totalDots - 1) {
            pageIndex = activeDot + 1;
        } else {
            pageIndex = 0;
        }
        slider.goTo('next');
    }

    $(`${container} .active`).removeClass('active');
    $($(`${container} .nav-dot`).not(':hidden')[pageIndex]).addClass('active');;
}

function loaderSliders() {
    var slider_config = {
        items: 2,
        slideBy: 2,
        controls: false,
        navPosition: 'bottom',
        navAsThumbnails: true,
        swipeAngle: false,
        // autoHeight: true
    };

    gd_slider = tns({...slider_config, ... { container: '#gd-slide', navContainer: '.gd-nav-container' } });
    document.querySelector('.next-arrow.gd-arrow').addEventListener('click', function() { nextPage('.gd-nav-container', gd_slider, 'next') });
    document.querySelector('.prev-arrow.gd-arrow').addEventListener('click', function() { nextPage('.gd-nav-container', gd_slider, 'prev') });
    navConfig('.gd-nav-container');

    wd_slider = tns({...slider_config, ... { container: '#wd-slide', navContainer: '.wd-nav-container' } });
    document.querySelector('.next-arrow.wd-arrow').addEventListener('click', function() { nextPage('.wd-nav-container', wd_slider, 'next') });
    document.querySelector('.prev-arrow.wd-arrow').addEventListener('click', function() { nextPage('.wd-nav-container', wd_slider, 'prev') });
    navConfig('.wd-nav-container');
}