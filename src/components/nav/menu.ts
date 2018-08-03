export function menuScroll() {

    function eliminarClases() {
        $("body").removeClass("bTop");
        $("body").removeClass("bTop--2");
        $("body").removeClass("bTop--3");
        $("body").removeClass("bTop--4");
        $("body").removeClass("bTop--5");
        //console.log("elimina clases");
    }

    $(window).scroll(function(event) {
        var heightPosition = $(window).scrollTop();
        var altura = $(window).height();
        var scroll = $(window).scrollTop();

        //document.body.classList.contains('open-menu');
        if (scroll >= 100) {
            eliminarClases();
            $("body").addClass("bTop");
        } if (scroll >= altura) {
            eliminarClases();
            $("body").addClass("bTop--2");
        } if (scroll >= altura * 2) {
            eliminarClases();
            $("body").addClass("bTop--3");
        } if (scroll >= altura * 3) {
            eliminarClases();
            $("body").addClass("bTop--4");
        } if (scroll >= (altura * 4)) {
            eliminarClases();
            $("body").addClass("bTop--5");
        } if (scroll <= 100) {
            $("body").removeClass("bTop");
        }
    });

    $(".icon-down").on("click", function() {
        moveMenu();  
    })

    document.getElementById("menu-open").addEventListener("click", function() {
        moveMenu();
    });

  function moveMenu() {
      if (document.body.classList.contains('open-menu')) {
          document.body.classList.remove('open-menu');
      } else {
          document.body.classList.add('open-menu');
      };
  }

  initSmoothScrolling();

  function initSmoothScrolling() {
      if (isCssSmoothSCrollSupported()) {
          document.getElementById('css-support-msg').className = 'supported';
          return;
      }

      var duration = 400;

      var pageUrl = location.hash ?
          stripHash(location.href) :
          location.href;

      delegatedLinkHijacking();
      //directLinkHijacking();

      function delegatedLinkHijacking() {
          document.body.addEventListener('click', onClick, false);

          function onClick(e) {
              if (!isInPageLink(e.target))
                  return;

              e.stopPropagation();
              e.preventDefault();

              jump(e.target.hash, {
                  duration: duration,
                  callback: function() {
                      setFocus(e.target.hash);
                  }
              });
          }
      }

      function directLinkHijacking() {
          [].slice.call(document.querySelectorAll('a'))
              .filter(isInPageLink)
              .forEach(function(a) {
                  a.addEventListener('click', onClick, false);
              });

          function onClick(e) {
              e.stopPropagation();
              e.preventDefault();

              jump(e.target.hash, {
                  duration: duration,
              });
          }

      }

      function isInPageLink(n) {
          return n.tagName.toLowerCase() === 'a' &&
              n.hash.length > 0 &&
              stripHash(n.href) === pageUrl;
      }

      function stripHash(url) {
          return url.slice(0, url.lastIndexOf('#'));
      }

      function isCssSmoothSCrollSupported() {
          return 'scrollBehavior' in document.documentElement.style;
      }
      function setFocus(hash) {
          var element = document.getElementById(hash.substring(1));

          if (element) {
              if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                  element.tabIndex = -1;
              }

              element.focus();
          }
      }

  }

  function jump(target, options) {
      moveMenu();
      var
          start = window.pageYOffset,
          opt = {
              duration: options.duration,
              offset: options.offset || 0,
              callback: options.callback,
              easing: options.easing || easeInOutQuad
          },
          distance = typeof target === 'string' ?
          opt.offset + document.querySelector(target).getBoundingClientRect().top :
          target,
          duration = typeof opt.duration === 'function' ?
          opt.duration(distance) :
          opt.duration,
          timeStart, timeElapsed;

      requestAnimationFrame(function(time) {
          timeStart = time;
          loop(time);
      });

      function loop(time) {
          timeElapsed = time - timeStart;

          window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

          if (timeElapsed < duration)
              requestAnimationFrame(loop)
          else
              end();
      }

      function end() {
          window.scrollTo(0, start + distance);

          if (typeof opt.callback === 'function')
              opt.callback();
      }

      function easeInOutQuad(t, b, c, d) {
          t /= d / 2
          if (t < 1) return c / 2 * t * t + b
          t--
          return -c / 2 * (t * (t - 2) - 1) + b
      }

  }

}
