var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequirebbb8;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequirebbb8=o),o("44LU1"),o("iJGSb"),o("es3aV"),o("iVxTb"),o("kqzZh"),o("1XYqN"),o("jBnvE");var n=o("2shzp"),r=o("1KaEx"),a=o("k6HK9");({heart:document.querySelector(".js-btn-favorite"),favoriteList:document.querySelector(".ingredient-list")}).favoriteList.addEventListener("click",(function(e){if(e.target.classList.contains("js-btn-favorite")||e.target.classList.contains("js-icon-favorite-ing")||e.target.classList.contains("card-icon-ing")){const t=e.target.closest(".js-btn-favorite");l.includes(t.dataset.id)&&(l=r.default.load("id_ing").filter((e=>e!==t.dataset.id)),r.default.save("id_ing",l),e.target.closest(".cocktail-item").remove()),l.length?document.querySelector(".error-box").classList.add("visually-hidden"):document.querySelector(".error-box").classList.remove("visually-hidden")}}));(r.default.load("id_ing")||[]).length?document.querySelector(".error-box").classList.add("visually-hidden"):document.querySelector(".error-box").classList.remove("visually-hidden"),async function(){try{const e=r.default.load("id_ing").map((e=>n.default.get(`https://drinkify-backend.p.goit.global/api/v1/ingredients/${e}`))),t=(await Promise.all(e)).map((e=>e.data));console.log(t),(0,a.renderMarkUpIngridients)(t)}catch(e){console.log(e)}}();let l=r.default.load("id_ing")||[];
//# sourceMappingURL=fav-ingridients.ade30fb5.js.map
