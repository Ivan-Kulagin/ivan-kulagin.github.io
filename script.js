            let previousColor = localStorage.getItem(0);
            let SSD = document.getElementsByClassName("logo")[0];
            console.log(SSD);
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
            
        