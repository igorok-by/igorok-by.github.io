!function(e){function r(r){for(var n,l,s=r[0],a=r[1],u=r[2],f=0,p=[];f<s.length;f++)l=s[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(r);p.length;)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,r=0;r<i.length;r++){for(var t=i[r],n=!0,s=1;s<t.length;s++){var a=t[s];0!==o[a]&&(n=!1)}n&&(i.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={0:0},i=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="./";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=r,s=s.slice();for(var u=0;u<s.length;u++)r(s[u]);var c=a;i.push([2,1]),t()}([,,function(e,r,t){"use strict";t.r(r),function(e){var r=t(0),n=t.n(r);t(4),t(5),t(8),t(10),t(11);e.jQuery=n.a,e.$=n.a}.call(this,t(3))},,,,,,,,function(e,r,t){(function(e){e((function(){var r=e(".schedule__item:nth-child(n+4)"),t=e("#btnShow"),n=t.find(".link__text"),o=t.find(".link__icon-arr"),i="schedule__item--hidden";r.toggleClass(i),t.click((function(){r.toggleClass(i),o.toggleClass("link__icon-arr--reverse"),r.hasClass(i)?n.html("Загрузить больше"):n.html("Свернуть")})),e(".slider").slick({dots:!0,dotsClass:"slider__dots",arrows:!1,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:768,settings:"unslick"}]});new ya.browserUpdater.init({theme:"green",lang:"ru",exclusive:!1,browsers:{chromium:80,safari:13,fx:71,ie:10,chrome:79},remember:!1})}))}).call(this,t(0))},function(e,r,t){var n=t(12);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(n,o);n.locals&&(e.exports=n.locals)},function(e,r,t){}]);