!function(e){function r(r){for(var t,s,i=r[0],p=r[1],l=r[2],c=0,f=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(t in p)Object.prototype.hasOwnProperty.call(p,t)&&(e[t]=p[t]);for(u&&u(r);f.length;)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,r=0;r<a.length;r++){for(var o=a[r],t=!0,i=1;i<o.length;i++){var p=o[i];0!==n[p]&&(t=!1)}t&&(a.splice(r--,1),e=s(s.s=o[0]))}return e}var t={},n={0:0},a=[];function s(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=t,s.d=function(e,r,o){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)s.d(o,t,function(r){return e[r]}.bind(null,t));return o},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],p=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var u=p;a.push([2,1]),o()}([,,function(e,r,o){"use strict";o.r(r),function(e){var r=o(0),t=o.n(r);o(4),o(5),o(8),o(10),o(11);e.jQuery=t.a,e.$=t.a}.call(this,o(3))},,,,,,,,function(e,r,o){(function(e){e((function(){e(".carousel__wrap-1").slick({dots:!0,dotsClass:"carousel__dots",arrows:!1,autoplay:!0,autoplaySpeed:7e3}),e(".carousel__wrap-2").slick({arrows:!1,asNavFor:".carousel__wrap-3",dots:!0,dotsClass:"carousel__dots",responsive:[{breakpoint:576,settings:{autoplay:!0,autoplaySpeed:7e3}}]}),e(".carousel__wrap-3").slick({arrows:!0,appendArrows:e(".carousel__arrows"),nextArrow:e("#arrNext-1"),prevArrow:e("#arrPrev-1"),asNavFor:".carousel__wrap-2",cssEase:"linear",speed:500,fade:!0,responsive:[{breakpoint:575.98,settings:{arrows:!1}}]}),e(window).width()<576&&e(".row--carousel-xs").slick({dots:!0,dotsClass:"carousel__dots",arrows:!1,autoplay:!0,autoplaySpeed:7e3}),e(window).width()>575.98&&e(".tile__img").click((function(){var r=e(this).attr("src");e(".popup").append('<div class="popup__bg"></div><img src="'+r+'" class="popup__img" /></div>'),e(".popup").fadeIn(800),e(".popup__bg").click((function(){e(".popup").fadeOut(800),setTimeout((function(){e(".popup__bg, .popup__img").remove()}),800)}))})),e(".tile__open, .tile__close").click((function(){e(this).closest(".tile").find(".tile__back").toggleClass("tile__back--shown")})),ymaps.ready((function(){new ymaps.Map("map",{center:[53.901435,27.545221],zoom:14})}))}))}).call(this,o(0))},function(e,r,o){var t=o(12);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(1)(t,n);t.locals&&(e.exports=t.locals)},function(e,r,o){}]);