//barValue([50, 80], $("#bar-value"));

window.onload = function() {
  var elm = document.querySelector("#bar-value");
  setInterval(function() {
    if (!elm.innerHTML.match(/40%/gi)) {
      elm.innerHTML = parseInt(elm.innerHTML) + 1 + "%";
    } else {
      clearInterval();
    }
  }, 18);
};

// (function($) {
//     'use strict';

//     $.fn.rProgressbar = function(options) {

//         options = $.extend({
//             barValue: null,
//             ShowProgressCount: true,
//             duration: 1000,
//             // Styling Options
//             fillBackgroundColor: '#ed1c24',
//             backgroundColor: '#EEEEEE',
//             borderRadius: '0px',
//             height: '10px',
//             width: '100%'
//         }, options);

//         $.options = options;
//         return this.each(function(index, el) {
//             // Markup
//             $(el).html(' <div class="progress-bar"> <div class="bar-data"><span class="bar-value" id="barValue">80%</span> </div>');

//             var lineProgressBarInit = function() {
//                 var progressFill = $(el).find('.proggress');
//                 var progressBar = $(el).find('.progressbar');

//                 progressFill.css({
//                     backgroundColor: options.fillBackgroundColor,
//                     height: options.height,
//                     borderRadius: options.borderRadius
//                 });
//                 progressBar.css({
//                     width: options.width,
//                     backgroundColor: options.backgroundColor,
//                     borderRadius: options.borderRadius
//                 });

//                 // Progressing
//                 progressFill.animate({
//                     width: options.percentage + "%"
//                 }, {
//                     step: function(x) {
//                         if (options.ShowProgressCount) {
//                             $(el).find(".barValue").text(Math.round(x) + "%");
//                         }
//                     },
//                     duration: options.duration
//                 });
//             }

//             $(this).waypoint(lineProgressBarInit, { offset: '100%', triggerOnce: true });
//         });
//     }

// })(jQuery);

// (function($){'use strict'; $.fn.rProgressbar=function(options){options=$.extend({percentage: null, ShowProgressCount: true, duration: 1000,
//     // Styling Options fillBackgroundColor: '#ed1c24', backgroundColor: '#EEEEEE', borderRadius: '0px', height: '10px', width: '100%'}, options);
//     $.options=options; return this.each(function(index, el){// Markup $(el).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
//     var lineProgressBarInit=function(){var progressFill=$(el).find('.proggress'); var progressBar=$(el).find('.progressbar'); progressFill.css({backgroundColor: options.fillBackgroundColor, height: options.height, borderRadius: options.borderRadius}); progressBar.css({width: options.width, backgroundColor: options.backgroundColor, borderRadius: options.borderRadius});

// Progressing progressFill.animate({width: options.percentage + "%"},{step: function(x){if (options.ShowProgressCount){$(el).find(".percentCount").text(Math.round(x) + "%");}}, duration: options.duration});}$(this).waypoint(lineProgressBarInit,{offset: '100%', triggerOnce: true});});}})(jQuery);

// window.onload = function() {
//   var elm3 = document.querySelector("#bar-value3");
//   setInterval(function() {
//     if (!elm.innerHTML.match(/80%/gi)) {
//       elm.innerHTML = parseInt(elm.innerHTML) + 1 + "%";
//     } else {
//       clearInterval();
//     }
//   }, 18);
// };
