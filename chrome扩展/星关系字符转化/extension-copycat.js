!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=45)}({45:function(e,t,n){"use strict";browser.runtime.onMessage.addListener(async e=>{switch(e.type){case"selection-html":return function(){const e=window.getSelection().getRangeAt(0).cloneContents(),t=document.createElement("div");return t.appendChild(e),t.innerHTML.toString()}();case"selection-text":return window.getSelection().toString();case"active-element-content":return document.activeElement.textContent||"";case"document-title":return document.title}})}});
//# sourceMappingURL=extension-copycat.js.map