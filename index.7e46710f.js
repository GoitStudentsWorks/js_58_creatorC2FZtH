!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequirebbb8;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequirebbb8=o),o("ebAoS"),o("emRxq"),o("8QNXk");var i,c=o("bpxeT"),u=o("2TvXO"),a=o("dIxxU"),l=o("dqeHJ"),f=o("l5bVx"),s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,y=m||h||Function("return this")(),g=Object.prototype.toString,k=Math.max,x=Math.min,w=function(){return y.Date.now()};function S(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=p.test(t);return r||b.test(t)?v(t.slice(2),r?2:8):d.test(t)?NaN:+t}i=function(e,t,n){var r,o,i,c,u,a,l=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function b(e){return l=e,u=setTimeout(m,t),f?p(e):c}function v(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=i}function m(){var e=w();if(v(e))return h(e);u=setTimeout(m,function(e){var n=t-(e-a);return s?x(n,i-(e-l)):n}(e))}function h(e){return u=void 0,d&&r?p(e):(r=o=void 0,c)}function y(){var e=w(),n=v(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return b(a);if(s)return u=setTimeout(m,t),p(a)}return void 0===u&&(u=setTimeout(m,t)),c}return t=T(t)||0,S(n)&&(f=!!n.leading,i=(s="maxWait"in n)?k(T(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=a=o=u=void 0},y.flush=function(){return void 0===u?c:h(w())},y};var j=o("h6c0i"),L="https://drinkify-backend.p.goit.global/api/v1",M="/cocktails/search/";function q(){return(q=e(c)(e(u).mark((function t(n){var r,o,i,c,f,s,d;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new URLSearchParams({s:n}),o=n.trim(),e.prev=2,""!==o){e.next=6;break}return j.Notify.failure("Please fill in a cocktail name",{clickToClose:!0,fontSize:"22px",width:"fit-content"}),e.abrupt("return");case 6:return e.next=8,a.default.get("".concat(L).concat(M,"?").concat(r));case 8:i=e.sent,c=i.data,f=c.slice(0,F),E.cockList.innerHTML="",(0,l.renderMarkUp)(f,E.cocktailList),E.mobileMenu.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body),s=document.getElementById("cocktail-section"),d=s.getBoundingClientRect().top,window.scrollBy(0,d),j.Notify.success("We found ".concat(c.length," cocktails!"),{position:"center-top",clickToClose:!0,fontSize:"22px",width:"fit-content"}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),j.Notify.failure("Error: Unable to find cocktail ".concat(n),{clickToClose:!0,fontSize:"22px",width:"fit-content"});case 24:case"end":return e.stop()}}),t,null,[[2,21]])})))).apply(this,arguments)}var E={searchForm:document.querySelector(".js-search"),cockList:document.querySelector(".cocktail-list"),burgerMenu:document.querySelector(".js-open-menu"),burgerCloseBtn:document.querySelector(".js-close-menu"),mobileMenu:document.querySelector(".js-menu-container"),burgerSearchForm:document.querySelector("#burger-search-form")};function O(){E.burgerSearchForm.addEventListener("input",e(i)(C,1e3))}function N(){E.burgerMenu.removeEventListener("click",O),E.burgerCloseBtn.removeEventListener("click",N)}function C(e){e.preventDefault(),function(e){q.apply(this,arguments)}(e.target.value),E.searchForm.reset(),N(),E.burgerSearchForm.reset()}E.burgerMenu.addEventListener("click",O),E.burgerCloseBtn.addEventListener("click",N),E.searchForm.addEventListener("input",e(i)(C,1e3));var F=8;window.matchMedia("(max-width: 1279px)").matches||(F=9),o("MIohP"),o("aX5OC");l=o("dqeHJ");o("ao5XN"),o("agT6o"),(0,(l=o("dqeHJ")).getCocktails)()}();
//# sourceMappingURL=index.7e46710f.js.map
