function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequirebbb8;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequirebbb8=o),o("44LU1"),o("iJGSb"),o("es3aV");var i,c=o("2shzp"),u=o("k6HK9"),a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,f=/^0o[0-7]+$/i,d=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,m=p||b||Function("return this")(),v=Object.prototype.toString,y=Math.max,g=Math.min,h=function(){return m.Date.now()};function k(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||f.test(e)?d(e.slice(2),n?2:8):l.test(e)?NaN:+e}i=function(e,t,n){var r,o,i,c,u,a,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function b(e){return l=e,u=setTimeout(v,t),s?p(e):c}function m(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-l>=i}function v(){var e=h();if(m(e))return S(e);u=setTimeout(v,function(e){var n=t-(e-a);return f?g(n,i-(e-l)):n}(e))}function S(e){return u=void 0,d&&r?p(e):(r=o=void 0,c)}function x(){var e=h(),n=m(e);if(r=arguments,o=this,a=e,n){if(void 0===u)return b(a);if(f)return u=setTimeout(v,t),p(a)}return void 0===u&&(u=setTimeout(v,t)),c}return t=w(t)||0,k(n)&&(s=!!n.leading,i=(f="maxWait"in n)?y(w(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=a=o=u=void 0},x.flush=function(){return void 0===u?c:S(h())},x};var S=o("iQIUW");const x={searchForm:document.querySelector(".js-search"),cockList:document.querySelector(".cocktail-list"),burgerMenu:document.querySelector(".js-open-menu"),burgerCloseBtn:document.querySelector(".js-close-menu"),mobileMenu:document.querySelector(".js-menu-container"),burgerSearchForm:document.querySelector("#burger-search-form")};function j(){x.burgerSearchForm.addEventListener("input",e(i)(T,1e3))}function L(){x.burgerMenu.removeEventListener("click",j),x.burgerCloseBtn.removeEventListener("click",L)}function T(e){e.preventDefault();!async function(e){const t=new URLSearchParams({s:e}),n=e.trim();try{if(""===n)return void S.Notify.failure("Please fill in a cocktail name",{clickToClose:!0,fontSize:"22px",width:"fit-content"});const e=(await c.default.get(`https://drinkify-backend.p.goit.global/api/v1/cocktails/search/?${t}`)).data,r=e.slice(0,E);x.cockList.innerHTML="",(0,u.renderMarkUp)(r,x.cocktailList),x.mobileMenu.classList.remove("is-open"),bodyScrollLock.enableBodyScroll(document.body);const o=document.getElementById("cocktail-section").getBoundingClientRect().top;window.scrollBy(0,o),S.Notify.success(`We found ${e.length} cocktails!`,{position:"center-top",clickToClose:!0,fontSize:"22px",width:"fit-content"})}catch(t){S.Notify.failure(`Error: Unable to find cocktail ${e}`,{clickToClose:!0,fontSize:"22px",width:"fit-content"})}}(e.target.value),x.searchForm.reset(),L(),x.burgerSearchForm.reset()}x.burgerMenu.addEventListener("click",j),x.burgerCloseBtn.addEventListener("click",L),x.searchForm.addEventListener("input",e(i)(T,1e3));let E=8;window.matchMedia("(max-width: 1279px)").matches||(E=9),o("iVxTb"),o("kqzZh");u=o("k6HK9");o("1XYqN"),o("jBnvE"),(0,(u=o("k6HK9")).getCocktails)();
//# sourceMappingURL=index.c696bc82.js.map
