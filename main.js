!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var d=l(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:b(p,t),references:1}),o.push(u)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,g=0;function b(e,t){var n,o,r;if(t.singleton){var i=g++;n=m||(m=s(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=c(e,t),s=0;s<n.length;s++){var u=l(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"body {\n    font-family: 'Times New Roman', Times, serif;\n    display: flex;\n    justify-content: center;\n}\n\np {\n    color: red;\n}\n\nbutton {\n    background-color: pink;\n    border-radius: 50%;\n    border: 1px solid rgb(255, 243, 243);;\n    font-family: sans-serif;\n}\n\n.formlabel {\n    font-family: sans-serif;\n    color: rgb(109, 46, 255);\n    position: absolute;\n    top: 6px;\n    left: 6px;\n}\n\ninput {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    border: 1px solid pink;\n    border-radius: 10px;\n    position: absolute;\n    right: 3px;\n}\n\n/* applies to all three */\n.bigboi {\n    background-color: rgb(255, 243, 243);\n    border: 1.5px solid rgb(255, 145, 145);\n    border-radius: 15px;\n    width: fit-content;\n    height: fit-content;\n}\n\n/* sort guys */\n\n/* form guys */\n\n#newItemForm {\n    display: grid;\n    position: relative;\n    left: 150px;\n    width: fit-content\n}\n\n.hide {\n    visibility: hidden;\n}\n\n.forminput {\n    width: 300px;\n    position: relative;\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n\n#formsubmit {\n    position: relative;\n    top: 5px;\n    border-radius: 20px;\n    width: 90%;\n    left: 5%;\n    height: 25px;\n}\n\n/* central container guys */\n\n#menu {\n    height: 35px;\n    position: relative;\n}\n\n#sort {\n    position: absolute;\n    left: 20px;\n    top: 20%;\n}\n\n#newToDo {\n    position: absolute;\n    top: 20%;\n    right: 20px;\n}\n\n.item {\n    border-top: 1px solid rgb(255, 145, 145);\n    width: 300px;\n    height: 50px;\n    position: relative;\n}\n\n.itemname {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    font-size: 20px;\n    background-color: rgb(255, 243, 243);\n    color: rgb(225, 138, 246);\n    text-shadow: 10 10 10;\n}\n\n.completebutton {\n    position: absolute;\n    right: 5px;\n    top: 25px;\n}\n\n.newTagButton {\n    position: absolute;\n    right: 5px;\n    top: 2px;\n}\n\n.tagButton {\n    position: absolute;\n    bottom: 2px;\n    left: 7px;\n    font-size: 11px;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(0);var o=(e,t,n,o)=>{let r=[];return{title:e,description:t,dueDate:n,priority:o,status:"incomplete",tags:r,addTag:e=>{console.log("what"),r.push(e)},deleteTag:e=>{for(let t=0;t<r.length;t++)if(r[t]===e){r.splice(t,1);break}}}};var r=(()=>{const e=[];return{list:e,addToList:t=>{e.push(t)},deleteFromList:t=>{for(let t=0;t<e.length;t++)if(e[t]===e){e.splice(t,1);break}},projectSort:t=>e.filter((function(e){let n=!1;for(let o=0;o<e.tags.length;o++)if(e.tags[o]===t){n=!0;break}return n}))}})();let i=o("Walk dog","Just around the block","1pm","ASAP");i.addTag("Exercise"),r.addToList(i),r.addToList(o("Win lottery","Powerball","2021","ASAP"));const a=(()=>{function e(){console.log("formadditem");let e=document.querySelector("#title").value,n=document.querySelector("#description").value,i=document.querySelector("#dueDate").value,a=document.querySelector("#priority").value,l=document.querySelector("#tags").value,s=o(e,n,i,a);s.addTag(l),r.addToList(s),t(),c.generate()}function t(){document.querySelector("#newItemForm").classList.toggle("hide")}return{toggleForm:t,formgenerate:function(){document.querySelector("#formsubmit").addEventListener("click",e)},addItem:e}})(),l={menuInterfaceGenerate:function(){document.querySelector("#newToDo").addEventListener("click",a.toggleForm)}},c=(()=>{let e=document.querySelector("#containerList"),t=()=>{let e,t=event.target.parentNode.firstChild.textContent;for(let n=0;n<r.list.length;n++){let o=r.list[n];if(o.title===t){e=o;break}}return e};function n(){console.log(t())}let o=()=>{console.log("completeItem"),t().status="complete",console.log("completed!")};function i(e,t){let n=document.createElement("button");n.classList.add("tagButton"),n.textContent=e,console.log("yo"),t.appendChild(n)}function a(){console.log(this),console.log(this.parentNode);let e=t(),n=prompt("New tag");e.addTag(n),console.log("parent: "+event.target.parentNode),i(n,event.target.parentNode)}const l=t=>{let r=document.createElement("div");r.classList.add("item"),r.setAttribute("value",t.title),function(e,t){let o=document.createElement("button");o.textContent=t.title,o.classList.add("itemname"),o.addEventListener("click",n),e.appendChild(o)}(r,t),((e,t)=>{let n=document.createElement("button");n.textContent="?",n.classList.add("completebutton"),n.addEventListener("click",o),e.appendChild(n)})(r),console.log("why");for(let e of t.tags)console.log("ya"),i(e,r);console.log("yhw"),function(e,t){let n=document.createElement("button");n.textContent="+",n.classList.add("newTagButton"),console.log("CNB"),n.addEventListener("click",a),e.appendChild(n)}(r),e.appendChild(r)};return{generate:()=>{e.textContent="";for(let e=0;e<r.list.length;e++)l(r.list[e])}}})();a.formgenerate(),l.menuInterfaceGenerate(),c.generate(),console.log(r.list)}]);