// ===================================================================
    // =================================================================== UTILITAIRE
    // ===================================================================

        // throttle
        var _throttle = function(callback, delay) {
            var last;
            var timer;
            return function () {
                var context = this;
                var now = +new Date();
                var args = arguments;
                if (last && now < last + delay) {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        last = now;
                        callback.apply(context, args);
                    }, delay);
                } else {
                    last = now;
                    callback.apply(context, args);
                }
            };
        }


        // onLoadImg
        var onLoadImg = function($el, fn) {
            var loadedOnce = false;

            function launch() {
                if (!loadedOnce) {
                    loadedOnce = !loadedOnce;
                    fn();
                }
            }

            $el.on('load', function() {
                launch();
            }).each(function(){
                if (this.complete || this.complete === undefined){
                    launch();
                }
            });
        }

        // custom easing
        jQuery.extend( jQuery.easing,{
            easeInOutCubic: function (x, t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;
                return c/2*((t-=2)*t*t + 2) + b;
            }
        });


    // ===================================================================
    // =================================================================== DEVICE DETECTOR
    // ===================================================================

        // IE
        var isIE = IEVersion = false;

        // Check if device is desktop
        var isDesktop = function() {
            return ($(window).width() >= 992);
        }

        // Check if device is tablet
        var isTablet = function() {
            return ($(window).width() < 992 && $(window).width() >= 768);
        }

        // Check if device is smartphone
        var isSmart = function() {
            return ($(window).width() < 768);
        }

        // Check if device is handheld
        var isSmartphone = function() {
            return (isTablet() || isSmart());
        }

        // Detect IE
        var getInternetExplorerVersion = function() {
            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer')
                {
                    var ua = navigator.userAgent;
                    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                    if (re.exec(ua) != null)
                        rv = parseFloat( RegExp.$1 );
                    }
                    else if (navigator.appName == 'Netscape')
                        {
                            var ua = navigator.userAgent;
                            var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                            if (re.exec(ua) != null)
                                rv = parseFloat( RegExp.$1 );
                            }
                            if (rv != -1)
                                isIE = true;

                                return rv;
                            }

        // Check if device is running iOs
        var isIOS = function() {
            var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            return isIOS;
        }

        // Check if mobile device
        var isMobile = function() {
            return $('html').hasClass('is-handheld');
        }

        // Simplified version
        var simplifiedVersion = function() {
            IEVersion = getInternetExplorerVersion();
            if (isMobile() || !isDesktop() || (isIE && IEVersion < 10)) {
                return true;
            }
            else {
                return false;
            }
        }