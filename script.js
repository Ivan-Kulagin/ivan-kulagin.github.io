    // Back-to-top button //
    $('<a id="button"></a>').prependTo('body');

    var btn = $('#button');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } 
        else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });    

    // Background //

    let previousColor = localStorage.getItem(0);
    let SSD = document.getElementsByClassName("logo")[0];
    var getPreviousBackground = function () {

        document.body.style.background = previousColor+" url(images/space.svg)";
    }

    getPreviousBackground();

    var changeBackground = function() {
        let randomColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        localStorage.setItem(0, randomColor);
        document.body.style.background = randomColor+" url(images/space.svg)";
    }

    var resetBackground = function() {
        localStorage.setItem(0, "#fff");
        document.body.style.background = "#fff url(images/space.svg)";
        return false;
    }

        SSD.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        resetBackground();
        return false;
    }, false);