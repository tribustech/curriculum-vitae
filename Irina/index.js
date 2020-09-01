//barValue([50, 80], $("#bar-value"));

window.onload = function() {
  const bar1 = this.document.querySelector("#b1");
  setInterval(function() {
    if (!bar1.innerHTML.match(/50%/gi)) {
      bar1.innerHTML = parseInt(bar1.innerHTML) + 1 + "%";
    } else {
      clearInterval();
    }
  }, 18);

  const bar2 = this.document.querySelector("#b2");
  setInterval(function() {
    if (!bar2.innerHTML.match(/80%/gi)) {
      bar2.innerHTML = parseInt(bar2.innerHTML) + 1 + "%";
    } else {
      clearInterval();
    }
  }, 18);

  const bar3 = document.querySelector("#b3");
  setInterval(function() {
    if (!bar3.innerHTML.match(/40%/gi)) {
      bar3.innerHTML = parseInt(bar3.innerHTML) + 1 + "%";
    } else {
      clearInterval();
    }
  }, 18);
  const bar4 = document.querySelector("#b4");
  setInterval(function() {
    if (!bar4.innerHTML.match(/80%/gi)) {
      bar4.innerHTML = parseInt(bar4.innerHTML) + 1 + "%";
    } else {
      clearInterval();
    }
  }, 18);
};

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (
      var index = 0, selectorsLength = selectors.length;
      index < selectorsLength;
      index++
    ) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(":appeared");
      });

      $appeared.trigger("appear", [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger("disappear", [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  }

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[":"]["appeared"] = function(element) {
    var $element = $(element);
    if (!$element.is(":visible")) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (
      top + $element.height() >= window_top &&
      top - ($element.data("appear-top-offset") || 0) <=
        window_top + $window.height() &&
      left + $element.width() >= window_left &&
      left - ($element.data("appear-left-offset") || 0) <=
        window_left + $window.width()
    ) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window)
          .scroll(on_check)
          .resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(
  (function() {
    if (typeof module !== "undefined") {
      // Node
      return require("jquery");
    } else {
      return jQuery;
    }
  })()
);

/* site.js */
(function($) {
  "use strict";

  /**
   *  Variables
   */

  var body = $("body");

  /**
   * Detect Device Type
   */
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
    $("html").addClass("mobile");
  } else {
    isMobile = false;
    $("html").addClass("desktop");
  }

  /**
   * Detect Site Direction ltr/rtl
   */
  var rtl = false;
  var direction = $("html").attr("dir");
  if (
    typeof direction !== typeof undefined &&
    direction !== false &&
    direction == "rtl"
  ) {
    rtl = true;
  }

  /**
   * Functions
   */
  function windowScrollAnimations() {
    var $animate = $(
      ".animate-up, .animate-down, .animate-left, .animate-right"
    );

    if (!isMobile) {
      $animate.appear();

      $animate.on("appear", function(event, affected) {
        for (var i = 0; i < affected.length; i++) {
          $(affected[i]).addClass("animated");
        }
      });

      $.force_appear();
    }
  }

  function positioningTimelineElements() {
    if ($(window).width() > 600) {
      // For large devices
      $(".timeline").each(function() {
        var tlineBar = $(this).find(".timeline-bar");
        var tlineBarH = 0;
        var tlineWrap = $(this).find(".timeline-inner");
        var tlineWrapH = 0;
        var tlineGutter = 25;

        var col1Top = 0;
        var col1TopPrev = 0;
        var col1LastElemH = 0;
        var col1Elems = $(this).find(".timeline-box-left");

        var col2Top = 50;
        var col2TopPrev = 0;
        var col2LastElemH = 0;
        var col2Elems = $(this).find(".timeline-box-right");

        // Switch top params for RTL
        if (rtl) {
          col1Top = col2Top;
          col2Top = 0;
        }

        // Positioning first column elements
        for (var i = 0; i < col1Elems.length; i++) {
          $(col1Elems[i]).css({
            position: "absolute",
            left: "0",
            top: col1Top + "px"
          });
          col1TopPrev = col1Top;
          col1Top = col1Top + $(col1Elems[i]).height() + tlineGutter;
          col1LastElemH = $(col1Elems[i]).height();
        }

        // Positioning second column elements
        for (var i = 0; i < col2Elems.length; i++) {
          $(col2Elems[i]).css({
            position: "absolute",
            right: "0",
            top: col2Top + "px"
          });
          col2TopPrev = col2Top;
          col2Top = col2Top + $(col2Elems[i]).height() + tlineGutter;
          col2LastElemH = $(col2Elems[i]).height();
        }

        // Set container & bar height's
        if (col1Top > col2Top) {
          tlineWrapH = col1Top - tlineGutter;
        } else {
          tlineWrapH = col2Top - tlineGutter;
        }

        if (col1TopPrev > col2TopPrev) {
          tlineBarH = col1TopPrev;
        } else {
          tlineBarH = col2TopPrev;
        }

        tlineWrap.height(tlineWrapH);
        tlineBar.css({ top: "80px", height: tlineBarH + "px" });
      });
    } else {
      // For small devices
      $(".timeline-bar").attr("style", "");
      $(".timeline-box").attr("style", "");
      $(".timeline-inner").attr("style", "");
    }
  }

  /**
   * Window Load
   */
  $(window).on("load", function() {
    /** Timeline:
     *  positioning timeline elements */
    if (rtl) {
      // switch timeline box classes for RTL
      var tLineLeft = $(".timeline-box-left");
      var tLineRight = $(".timeline-box-right");

      tLineLeft.removeClass("timeline-box-left").addClass("timeline-box-right");
      tLineRight
        .removeClass("timeline-box-right")
        .addClass("timeline-box-left");
      tLineLeft
        .find(".animate-right")
        .removeClass("animate-right")
        .addClass("animate-left");
      tLineRight
        .find(".animate-left")
        .removeClass("animate-left")
        .addClass("animate-right");
    }

    positioningTimelineElements();
  });

  /**
   * Window Resize
   */
  var resizeTimeout;
  var winWidth = $(window).width();
  var winHeight = $(window).height();

  $(window).resize(function() {
    var onResize = function() {
      positioningTimelineElements();
    };

    // New height and width
    var winNewWidth = $(window).width(),
      winNewHeight = $(window).height();

    // Compare the new height and width with old one
    if (winWidth != winNewWidth || winHeight != winNewHeight) {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(onResize, 10);
    }

    //Update the width and height
    winWidth = winNewWidth;
    winHeight = winNewHeight;
  });
})(jQuery);
