!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var o=e(1),i=e(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);n.exports=i.locals||{}},function(n,t,e){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function s(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},o=[],i=0;i<n.length;i++){var r=n[i],l=t.base?r[0]+t.base:r[0],d=e[l]||0,c="".concat(l," ").concat(d);e[l]=d+1;var u=s(c),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:c,updater:h(p,t),references:1}),o.push(c)}return o}function d(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,u=(c=[],function(n,t){return c[n]=t,c.filter(Boolean).join("\n")});function p(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function g(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(n,t){var e,o,i;if(t.singleton){var r=f++;e=m||(m=d(t)),o=p.bind(null,e,r,!1),i=p.bind(null,e,r,!0)}else e=d(t),o=g.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=s(e[o]);a[i].references--}for(var r=l(n,t),d=0;d<e.length;d++){var c=s(e[d]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}e=r}}}},function(n,t,e){(t=e(3)(!1)).push([n.i,"body {\n    font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    display: flex;\n    /* justify-content: center; */\n    margin: 0px;\n    margin-top: 15px;\n    overflow: hidden;\n}\n\np {\n    color: fuchsia;\n    text-align: center;\n}\n\nbutton {\n    background-color: pink;\n    border-radius: 50%;\n    border: inherit;\n    font-family: Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n*,*:focus,*:hover{\n    outline:none;\n}\n\n\n.hide {\n    display: none;\n    visibility: hidden;\n}\n\n.burrow {\n    animation-name: burrowing;\n    animation-duration: 0.4s;\n}\n\n@keyframes burrowing {\n    0% {\n        width: 100%;\n    }\n    100% {\n        width: 0%;\n    }\n}\n\ninput, select {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border: 1px solid pink;\n    border-radius: 10px;\n    position: absolute;\n    right: 3px;\n    text-indent: 5px;\n}\n\n/* applies to all three */\n.bigboi {\n    background-color: rgb(255, 243, 243);\n    border: 1.5px solid rgb(255, 145, 145);\n    border-radius: 15px;\n    width: fit-content;\n    height: fit-content;\n    overflow: hidden;\n}\n\n.transparent {\n    opacity: 45%;\n}\n\n/* sort guys */\n\n#sortList {\n    border-bottom: 1px solid red;\n}\n\n#sortForm {\n    display: grid;\n    position: relative;\n    width: 150px;\n    border-left: 0px solid white;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\n.tagLine {\n    width: 100px;\n    position: relative;\n    left: 15%;\n    margin-bottom: 14px;\n    border: 0px solid red;\n    border-radius: 15px;\n}\n\n.menu {\n    margin: 10px;\n    height: 20px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n}\n\n#clear {\n    top: 20%;\n    color: fuchsia;\n    background-color: inherit;\n}\n\n.focused {\n    border: 1px solid red;\n}\n\n/* form guys */\n\n#newItemForm {\n    display: grid;\n    position: absolute;\n    width: fit-content;\n    height: 240px;\n    opacity: 100%;\n    border-right: 0px solid white;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n.forminput {\n    width: 300px;\n    position: relative;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n.formlabel {\n    color: rgb(109, 46, 255);\n    position: absolute;\n    top: 6px;\n    left: 6px;\n}\n\n#description {\n    height: 50px;\n}\n\n#formduedate {\n    margin-top: 50px;\n}\n\n#priority {\n    width: 60px;\n    background-color: white;\n}\n\n#divsubmit {\n    margin-bottom: 100px;\n}\n\n#formsubmit {\n    position: relative;\n    top: 5px;\n    border-radius: 20px;\n    width: 98%;\n    left: 1.5%;\n    height: 25px;\n}\n\n/* central container guys */\n\n#container {\n    position: relative;\n    width: 75%;\n\n}\n\n#containerList {\n    justify-items: center;\n    align-items: center;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 280px);\n}\n\n\n#newToDo {\n    position: absolute;\n    top: 20%;\n    right: 20px;\n}\n\n.item {\n    width: 260px;\n    height: 50px;\n    position: relative;\n    border-top: 1px solid rgb(255, 145, 145);\n}\n\n.mainitem {\n    border: 1px solid rgb(255, 145, 145);\n    width: 250px;\n    border-radius: 15px;\n    margin-top: 30px;\n    animation-name: main;\n    animation-duration: 0.4s;\n}\n\n@keyframes main {\n    0% {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n    }\n}\n\n.itemname {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    font-size: 20px;\n    background-color: inherit;\n    text-shadow: 10 10 10;\n    border: 0px;\n    color: fuchsia;\n    display: block;\n}\n\n.completebutton {\n    position: absolute;\n    left: 221px;\n    top: 3px;\n    border: 1px solid rgb(255, 145, 145);\n}\n\n.newTagButton {\n    position: absolute;\n    left: 222px;\n    top: 25px;\n    border: 1px solid rgb(255, 145, 145);\n}\n\n.sortingtag {\n    border: 1px solid red;\n}\n\n.tagCarrier {\n    display: flex;\n    flex-wrap: wrap;\n    position: absolute;\n    top: 31px;\n    left: 7px;\n}\n\n.tagButton {\n    font-size: 11px;\n    margin-right: 3px;\n    margin-bottom: 3px;\n    border-radius: 15px;\n}\n\n.bonus {\n    animation-name: bonusanim;\n    animation-duration: 1s;\n}\n\n@keyframes bonusanim {\n    0% {\n        opacity: 0%;\n    }\n    100% {\n        opacity: 100%;\n    }\n}\n\n.description {\n    position: relative;\n    top: 40px;\n    height: 55px;\n    color: rgb(225, 138, 246);\n    overflow-wrap: anywhere;\n    font-size: 12px;\n    margin: 7px;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n}\n\n\n\n.dueDate {\n    position: absolute;\n    bottom: 5px;\n    left: 17px;\n    color: rgb(96, 136, 195);\n    font-size: 12px;\n}\n\n.priority {\n    position: absolute;\n    bottom: 5px;\n    right: 15px;\n    color: rgb(96, 136, 195);\n    font-size: 12px;\n}\n\n.new {\n    animation-name: newanim;\n    animation-duration: 0.3s;\n}\n\n@keyframes newanim {\n    0% {\n        height: 0px;\n    }\n    100% {\n        height: 50px;\n    }\n}\n\n\n.shorter {\n    animation-name: shorteranim;\n    animation-duration: 0.3s;\n}\n\n@keyframes shorteranim {\n    0% {\n        height: 100px;\n    }\n    100% {\n        height: 50px;\n    }\n}\n\n.taller {\n    /* min-height: 100px; */\n    height: 130px;\n    animation-name: talleranim;\n    animation-duration: 0.3s;\n}\n\n@keyframes talleranim {\n    0% {\n        height: 50px;\n    }\n    100% {\n        height: 130px;\n    }\n}\n\n.goodbye {\n    animation-name: gbye;\n    animation-duration: 0.3s;\n    opacity: 0%;\n}\n\n@keyframes gbye {\n    0% {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n    }\n}\n\n.byenow {\n    height: 0px;\n    animation-name: byenow;\n    animation-duration: 0.3s;\n    opacity: 0%\n}\n\n@keyframes byenow {\n    0% {\n        opacity: 100%;\n    }\n    100% {\n        opacity: 0%;\n    }\n}\n\n.Low {\n    background-color: rgb(255, 243, 243);\n}\n\n.Mid {\n    background-color: rgb(255, 230, 230);\n}\n\n.High {\n    background-color: rgb(255, 217, 217);\n}\n\n/* Completed List guys */\n\n#completedContainer {\n    position: absolute;\n    /* right: 0px; */\n    top: 300px;\n    width: 260px;\n    max-height: 400px;\n    border-right: 0px solid white;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    overflow-y: scroll;\n    /* border-top: 1.5px solid rgb(255, 145, 145); */\n}\n\n#returncompleted {\n    position: absolute;\n    left: 20%;\n    width: 70%;\n    top: 10%;\n    border-radius: 15px;\n}\n\n.forever {\n    animation-name: BYE;\n    animation-duration: 0.3s;\n    opacity: 0%;\n}\n\n@keyframes BYE {\n    100% {\n        height: 0px;\n    }\n}\n\n/* Selectors */\n\n#ex {\n    position: absolute;\n    left: 0px;\n    /* top: 200px; */\n    width: 40px;\n    border-left: 0px solid white;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n\n\n\n#plus {\n    position: absolute;\n    right: 0px;\n    /* bottom: 120px; */\n    width: 40px;\n    border-right: 0px solid white;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n#checkmark {\n    position: absolute;\n    right: 0px;\n    top: 300px;\n    width: 40px;\n    border-right: 0px solid white;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n\n/* Transitions */\n\n.transitionleft {\n    animation-name: transitionleft;\n    animation-duration: 0.4s;\n    animation-timing-function: linear;\n}\n\n@keyframes transitionleft {\n    0% {\n        left: -150px;\n    }\n    100% {\n        left: 0px;\n    }\n} \n\n.disappearleft {\n    animation-name: disappearleft;\n    animation-duration: 0.4s;\n    animation-timing-function: linear;\n    left: -152px;\n}\n\n@keyframes disappearleft {\n    0% {\n        left: 0px;\n    }\n    100% {\n        left: -150px;\n    }\n}\n\n\n\n\n.transitionright {\n    animation-name: transitionright;\n    animation-duration: 0.4s;\n    animation-timing-function: linear;\n    right: 0px;\n}\n\n@keyframes transitionright {\n    0% {\n        right: -300px;\n    }\n    100% {\n        right: 0px;\n    }\n}\n\n.disappearright {\n    animation-name: disappearright;\n    animation-duration: 0.4s;\n    animation-timing-function: linear;\n    right: -302px;\n}\n\n@keyframes disappearright {\n    0% {\n        right: 0px;\n    }\n    100% {\n        right: -300px;\n    }\n}\n\n::-webkit-scrollbar {\n    width: 5px;\n}\n\n::-webkit-scrollbar-track {\n    background-color: lightcoral;\n}\n\n::-webkit-scrollbar-thumb {\n    background-color: lightgreen;\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([i]).join("\n")}var a,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){"use strict";e.r(t);e(0);var o=(()=>{let n=[];const t=n=>{let t=1;return{name:n,count:t,countup:()=>{t++},countdown:()=>{t--}}};return{list:n,tagFactory:t,posUpdate:function(e){let o=0;for(let t of n)if(t.name===e){t.countup(),o=1;break}if(0===o){let o=t(e);n.push(o)}},negUpdate:function(t){for(let e of n)e.name===t&&(e.countdown(),e.count<1&&n.splice(e,1))}}})();const i=(n,t,e,i)=>{let r=[];return{title:n,description:t,dueDate:e,priority:i,status:"incomplete",tags:r,addTag:n=>{r.push(n),o.posUpdate(n)},deleteTag:n=>{for(let t=0;t<r.length;t++)if(r[t]===n){r.splice(t,1),o.negUpdate(n);break}}}};var r=(()=>{let n=[],t=()=>{window.localStorage.setItem("todolist",JSON.stringify(n))},e=()=>{n.length=0;let t=JSON.parse(window.localStorage.getItem("todolist"));t||(t=1);for(let e=0;e<t.length;e++)n[e]=t[e]};return{list:n,addToList:o=>{n.push(o),t(),e()},deleteFromList:o=>{for(let t=0;t<n.length;t++)if(n[t]===o){n.splice(t,1),console.log("spliced!");break}t(),e()},projectSort:t=>n.filter((function(n){let e=0;for(let o of t){o=String(o);for(let t=0;t<n.tags.length;t++)if(n.tags[t]===o){e++;break}}let o=!1;return e===t.length&&(o=!0),o})),storageUpdate:t,generate:e}})();r.generate(),console.log(localStorage),console.log(r);({test:function(){if(0===r.list.length){let n=i("Nip down to the store","Get a funny feeling","2020-07-11","Low"),t=i("Buy lottery ticket","No. Could it be?","2021-07-11","Mid"),e=i("Run home home","Darling! Get off the phone! Everything has changed!","2022-07-11","High"),o=i("Avoid housework","'You know it's no good for my asthma.'","2020-01-01","High");o.status="complete",n.addTag("Exercise"),t.addTag("Daring"),t.addTag("Cunning"),t.addTag("Eerie"),e.addTag("Eerie"),e.addTag("Exercise"),r.addToList(n),r.addToList(t),r.addToList(e),r.addToList(o)}}}).test();const a={removeLeftHighlighting:function(){document.querySelectorAll(".tagLine").forEach(n=>{n.classList.remove("focused")})},generateFilterList:function(){const n=document.querySelector("#sortList");document.querySelector("#sorttop").addEventListener("click",p.filterToggle),n.textContent="";let t=[];document.querySelector("#containerList").querySelectorAll(".tagButton").forEach(n=>{t.push(n.textContent)}),t=[...new Set(t)];for(let e of t){let t=document.createElement("button");t.classList.add("tagLine"),t.value=e,t.textContent=e,t.addEventListener("click",c.sortGenerate),n.appendChild(t)}}},s=(()=>{function n(){let n=document.querySelector("#title").value,t=document.querySelector("#description").value,e=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,s=document.querySelector("#tags").value,l=i(n,t,e,o);s.length>0&&(s=s.split(" "),s.forEach(n=>{l.addTag(n)})),0===n.length?alert("Title is required"):(r.addToList(l),p.formToggle(),document.querySelector("#title").value="",document.querySelector("#description").value="",document.querySelector("#dueDate").value="",document.querySelector("#priority").value="Low",document.querySelector("#tags").value="",c.displayItem(l),a.generateFilterList())}return{toggleForm:function(){document.querySelector("#newItemForm").classList.toggle("hide")},formgenerate:function(){document.querySelector("#formsubmit").addEventListener("click",n)},addItem:n}})(),l={menuInterfaceGenerate:function(){document.querySelector("#clear").addEventListener("click",c.generate)}},d=(n,t)=>{let e=document.querySelector(n),o=()=>{let n,t,e=event.target.parentNode.firstChild.textContent;for(t=0;t<r.list.length;t++){let o=r.list[t];if(o.title===e){n=o;break}}return n};function i(){let n=o(),t=event.target.parentNode;if(t.classList.contains("taller")){t.classList.add("shorter"),t.classList.remove("taller");for(let n=t.childNodes.length-1;n>0;n--)t.childNodes[n].classList.contains("bonus")&&t.removeChild(t.childNodes[n])}else{let e=document.createElement("p");e.classList.add("descriptiontext");let o=document.createElement("div");o.appendChild(e),e.textContent=n.description,e.classList.add("description");let i=document.createElement("div");i.textContent=n.dueDate,i.classList.add("dueDate");let r=document.createElement("div");r.textContent="Priority: "+n.priority,r.classList.add("priority");let a=[o,i,r];for(let n=0;n<a.length;n++)a[n].classList.add("bonus"),t.appendChild(a[n]);t.classList.add("taller"),t.classList.remove("shorter")}}let s=()=>{let t=event.target.parentNode,e=o();"#containerList"===n?(t.classList.add("goodbye"),e.status="complete",u.displayItem(e)):(t.classList.add("forever"),r.deleteFromList(e)),setTimeout(()=>{t.parentNode.removeChild(t),a.generateFilterList()},300),r.storageUpdate()};function l(){let n=event.target,t=n.parentNode.parentNode.firstChild.textContent;n.classList.add("byenow");for(let e=0;e<r.list.length;e++)if(r.list[e].title===t){r.list[e].deleteTag(n.textContent);break}setTimeout(()=>{n.parentNode.removeChild(n),a.generateFilterList()},300)}function d(n,t){let e=document.createElement("button");e.classList.add("tagButton"),e.textContent=n,e.addEventListener("click",f),e.addEventListener("contextmenu",l),t.appendChild(e)}function c(){let n=o(),t=prompt("New tag");if(t){if(n.tags.length>3)return void alert("You have plenty of tags.");if(t.length>12)return void alert("This tag is just too long.");n.addTag(t),d(t,event.target.parentNode.childNodes[2]),a.generateFilterList()}}let g=n=>{let t=document.createElement("button");t.textContent="√",t.classList.add("completebutton"),t.addEventListener("click",s),n.appendChild(t)};const m=t=>{let o=document.createElement("div");o.classList.add("item"),"#containerList"===n?o.classList.add("mainitem"):o.classList.add("new"),o.setAttribute("value",t.title),"Low"===t.priority?o.classList.add("Low"):"Mid"===t.priority?o.classList.add("Mid"):o.classList.add("High"),function(n,t){let e=document.createElement("button");e.textContent=t.title,e.classList.add("itemname"),e.addEventListener("click",i),n.appendChild(e)}(o,t),function(n){let t=document.createElement("button");t.textContent="?",t.classList.add("newTagButton"),t.addEventListener("click",c),n.appendChild(t)}(o);let r=document.createElement("div");r.classList.add("tagCarrier");for(let n of t.tags)d(n,r);o.appendChild(r),g(o),e.appendChild(o)};function f(){let n;a.removeLeftHighlighting();let t=document.querySelectorAll(".sortingtag"),e=[];for(n=0;n<t.length;n++)e.push(t[n].textContent);let o=[...new Set(e)],i=0;for(n=0;n<o.length;n++)o[n]===event.target.textContent&&(o.splice(n,1),i=1);0===i&&o.push(event.target.textContent),console.log(o);let s=r.projectSort(o);console.log(s),0===s.length&&s.push("");let l=document.querySelectorAll(".mainitem");for(n=0;n<l.length;n++){for(let t of s){let e=l[n].firstChild.textContent;if(t.title!==e){l[n].classList.add("goodbye")}}for(let t of s){let e=l[n].firstChild.textContent;t.title===e&&l[n].classList.remove("goodbye")}if(l[n].classList.contains("goodbye")){let t=l[n];setTimeout(()=>{t.classList.add("hide")},400)}else l[n].classList.remove("hide")}const d=document.querySelectorAll(".tagButton"),c=document.querySelectorAll(".tagLine");d.forEach(n=>{n.classList.remove("sortingtag")}),o.forEach(n=>{d.forEach(t=>{t.textContent===n&&t.classList.add("sortingtag")}),c.forEach(t=>{t.textContent===n&&t.classList.add("focused")})})}return{createCompleteButton:g,displayItem:m,sortGenerate:f,generate:()=>{if(e.textContent="",a.removeLeftHighlighting(),"#completedList"===n){document.querySelector("#returncompleted").addEventListener("click",p.completeToggle)}for(let n=0;n<r.list.length;n++)r.list[n].status===t&&m(r.list[n])}}},c=d("#containerList","incomplete"),u=d("#completedList","complete"),p=(()=>{const n=document.querySelector("#container"),t=document.querySelector("#ex"),e=document.querySelector("#sortForm"),o=document.querySelector("#plus"),i=document.querySelector("#newItemForm"),r=document.querySelector("#checkmark"),a=document.querySelector("#completedContainer");function s(){t.classList.toggle("hide"),t.classList.toggle("transitionleft"),t.classList.toggle("disappearleft"),e.classList.remove("hide"),e.classList.toggle("transitionleft"),e.classList.toggle("disappearleft")}function l(){o.classList.toggle("hide"),o.classList.toggle("transitionright"),o.classList.toggle("disappearright"),n.classList.toggle("transparent"),t.classList.toggle("transparent"),e.classList.toggle("transparent"),r.classList.toggle("transparent"),a.classList.toggle("transparent"),i.classList.remove("hide"),i.classList.toggle("transitionright"),i.classList.toggle("disappearright")}function d(){r.classList.toggle("hide"),r.classList.toggle("transitionright"),r.classList.toggle("disappearright"),a.classList.remove("hide"),a.classList.toggle("transitionright"),a.classList.toggle("disappearright")}return{filterToggle:s,formToggle:l,completeToggle:d,generate:()=>{t.addEventListener("click",s),o.addEventListener("click",l),r.addEventListener("click",d)}}})();(()=>{const n=()=>{c.generate(),u.generate()};return{generate:()=>{s.formgenerate(),l.menuInterfaceGenerate(),n(),a.generateFilterList(),p.generate()},listgenerate:n}})().generate()}]);