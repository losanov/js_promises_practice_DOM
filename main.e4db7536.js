parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.getElementById("message");e.style.position="fixed",e.style.top="10px",e.style.right="10px";var n=function(e,n,t){var o=document.getElementById(t);o.classList.add(n,"message"),o.textContent="".concat(e)},t=new Promise(function(e,n){document.addEventListener("mousedown",function(){e("Clicked")}),setTimeout(function(){n(new Error("Error"))},3e3)});t.then(function(){n("First promise was resolved","success","promise1")}).catch(function(){n("First promise was rejected","warning","promise1")});var o=new Promise(function(e){document.addEventListener("mousedown",function(n){0!==n.button&&2!==n.button||e("Clicked")})});o.then(function(){n("Second promise was resolved","success","promise2")});var s=new Promise(function(e){var n=!1,t=!1;document.addEventListener("mousedown",function(o){0===o.button&&(n=!0),2===o.button&&(t=!0),!0===n&&!0===t&&e("Clicked")})});s.then(function(){n("Third promise was resolved","success","promise3")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e4db7536.js.map