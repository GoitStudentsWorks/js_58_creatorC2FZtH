var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequirebbb8;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirebbb8=n),n("44LU1"),n("iJGSb"),n("es3aV"),n("iVxTb"),n("kqzZh"),n("jBnvE");var r=n("2shzp"),o=n("1KaEx"),a=n("k6HK9");({heart:document.querySelector(".js-btn-favorite"),favoriteList:document.querySelector(".ingredient-list"),modal:document.querySelector("[data-modal]")}).favoriteList.addEventListener("click",(function(e){if(e.target.classList.contains("js-btn-favorite")||e.target.classList.contains("js-icon-favorite-ing")||e.target.classList.contains("card-icon-ing")){const t=e.target.closest(".js-btn-favorite");s.includes(t.dataset.id)&&(s=o.default.load("id_ing").filter((e=>e!==t.dataset.id)),o.default.save("id_ing",s),e.target.closest(".ingredient-item").remove()),s.length?document.querySelector(".error-box").classList.add("vis-none"):document.querySelector(".error-box").classList.remove("vis-none")}}));(o.default.load("id_ing")||[]).length?document.querySelector(".error-box").classList.add("vis-none"):document.querySelector(".error-box").classList.remove("vis-none"),async function(){try{const e=o.default.load("id_ing").map((e=>r.default.get(`https://drinkify-backend.p.goit.global/api/v1/ingredients/${e}`))),t=(await Promise.all(e)).map((e=>e.data));(0,a.renderMarkUpIngridients)(t)}catch(e){}}();let s=o.default.load("id_ing")||[];
//# sourceMappingURL=fav-ingridients.63ca463e.js.map
