parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"chxP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"GKcc":[function(require,module,exports) {
"use strict";var e=r(require("./gallery.js"));function r(e){return e&&e.__esModule?e:{default:e}}const l=document.querySelector(".js-gallery");function n(e){return e.map(({preview:e,original:r,description:l},n)=>`\n            <li class="gallery__item">\n              <a class="gallery__link" href="${r}">\n                <img class="gallery__image" src="${e}"\n                data-source="${r}"\n                alt="${l}"/>\n              </a>\n            </li>`).join("")}l.insertAdjacentHTML("beforeend",n(e.default));
},{"./gallery.js":"chxP"}],"NVU9":[function(require,module,exports) {
"use strict";var e=t(require("./gallery.js"));function t(e){return e&&e.__esModule?e:{default:e}}const o={galleryEl:document.querySelector(".js-gallery"),closeBtn:document.querySelector('[data-action="close-lightbox"]'),lightbox:document.querySelector(".js-lightbox"),overlay:document.querySelector(".js-overlay"),"lightbox-img":document.querySelector(".lightbox__image")};function l(e){e.preventDefault();"img"===e.target.localName&&(o.lightbox.classList.toggle("is-open"),window.addEventListener("keydown",r),window.addEventListener("keydown",a),i(e.target))}function i(e){o["lightbox-img"].src=e.dataset.source,o["lightbox-img"].alt=e.alt}function n(){window.removeEventListener("keydown",r),window.removeEventListener("keydown",a),o.lightbox.classList.toggle("is-open"),o["lightbox-img"].src="",o["lightbox-img"].alt=""}function r(e){"Escape"===e.code&&n()}o.galleryEl.addEventListener("click",l),o.closeBtn.addEventListener("click",n),o.overlay.addEventListener("click",n);let c=0;function a(t){const l="ArrowLeft",i="ArrowRight";t.code===i&&(c+=1)>=e.default.length&&(c=0),t.code===l&&(c-=1)<0&&(c=e.default.length-1),o["lightbox-img"].src=e.default[c].original,o["lightbox-img"].alt=e.default[c].description}
},{"./gallery.js":"chxP"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/gallery-markup"),require("./js/gallery-popup");
},{"./sass/main.scss":"clu1","./js/gallery-markup":"GKcc","./js/gallery-popup":"NVU9"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery-parcel/src.05b4992f.js.map