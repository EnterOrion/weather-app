(()=>{"use strict";var e={578:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),d=n(667),s=n.n(d),c=new URL(n(924),n.b),p=new URL(n(473),n.b),u=new URL(n(809),n.b),l=new URL(n(393),n.b),m=new URL(n(84),n.b),f=new URL(n(508),n.b),g=new URL(n(171),n.b),y=new URL(n(41),n.b),b=new URL(n(805),n.b),h=new URL(n(472),n.b),v=a()(o()),x=s()(c),w=s()(p),L=s()(u),k=s()(l),I=s()(m),T=s()(f),E=s()(g),M=s()(y),S=s()(b),H=s()(h);v.push([e.id,":root{--cloudy: url("+x+");--rainy: url("+w+");--sunny: url("+L+");--smog: url("+k+");--misty: url("+I+");--snowy: url("+T+");--thunder: url("+E+')}#wind::before,#humidity::before,#temp::before,#tempLike::before{display:inline-block;height:32px;width:32px;content:"";background-size:cover;margin-right:4px;vertical-align:middle}body,html{margin:0;padding:0;width:100%;height:100vh;overflow:hidden}body{display:flex;justify-content:space-between;background-repeat:no-repeat;background-image:var(--cloudy);background-size:cover;background-position:center}form{margin-top:1%;margin-right:2%}#cityName{background-color:rgba(56,56,56,.3);border-radius:.5rem;border:none;outline:none;font-size:1rem;padding:13px;padding-left:10px;padding-right:10px}input{color:#fff;font-family:"Lucida Console","Courier New",monospace}::placeholder{color:#e0e0e0}input:focus::placeholder{color:rgba(0,0,0,0)}button{display:none}#weather-display{font-family:"Merriweather",serif;display:flex;align-self:center;background-color:rgba(56,56,56,.4);color:#fff;padding:40px;padding-top:50px;padding-bottom:50px;margin-left:25%;margin-bottom:6%}#left-side{border-right:2px solid #fff;padding-right:10px}#name{font-size:50px;font-weight:bold}#conditions{text-decoration:underline;font-size:30px}#right-side{padding-left:10px;font-size:20px}#temp::before,#tempLike::before{background-image:url('+M+")}#humidity::before{background-image:url("+S+")}#wind::before{background-image:url("+H+")}@media(max-width: 360px){#weather-display{padding:10px}#humidity::before,#wind::before,#temp::before,#tempLike::before{display:block}}@media(max-width: 550px){body{display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:center}#weather-display{align-self:center;margin-left:0;margin-bottom:50%;padding:15px;padding-top:17px;padding-bottom:17px}}@media(max-width: 1000px)and (min-width: 551px){body{gap:10px}form{margin-right:0}#weather-display{margin-left:0}}",""]);const j=v},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],p=i[c]||0,u="".concat(c," ").concat(p);i[c]=p+1;var l=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var f=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var s=r(e,o),c=0;c<i.length;c++){var p=n(i[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},924:(e,t,n)=>{e.exports=n.p+"d52f02fb5e5acb0f8e81.jpg"},805:(e,t,n)=>{e.exports=n.p+"70235ea1f5a383e525a0.png"},84:(e,t,n)=>{e.exports=n.p+"f45241cd108e04b66b68.jpg"},473:(e,t,n)=>{e.exports=n.p+"ddc6467a30e17ffc75ca.jpg"},393:(e,t,n)=>{e.exports=n.p+"f89e15fe38c275896ac5.jpg"},508:(e,t,n)=>{e.exports=n.p+"a0b7138d8f90fe052bc7.jpg"},809:(e,t,n)=>{e.exports=n.p+"7340ee0b3553691511ec.jpg"},41:(e,t,n)=>{e.exports=n.p+"61bd49e51ebd161afca7.png"},171:(e,t,n)=>{e.exports=n.p+"106877a72bda7886c571.jpg"},472:(e,t,n)=>{e.exports=n.p+"f0104ac6f678d6e327c4.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),d=n(565),s=n.n(d),c=n(216),p=n.n(c),u=n(589),l=n.n(u),m=n(578),f={};f.styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g="b897024214ad0e85c66721a70404e0f7",y=document.querySelector("form"),b=document.querySelector("body"),h=document.getElementById("cityName");let v="London";async function x(){try{const e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${v}&units=metric&APPID=${g}`,{mode:"cors"}),t=await e.json();w(t)}catch(e){const t=document.getElementById("name"),n=document.getElementById("conditions"),r=document.getElementById("temp"),o=document.getElementById("tempLike"),i=document.getElementById("humidity"),a=document.getElementById("wind");t.innerHTML="City not found!",n.innerHTML="N/A",r.innerHTML="<strong>Temperature:</strong> N/A",o.innerHTML="<strong>Feels like:</strong> N/A",i.innerHTML="<strong>Humidity:</strong> N/A",a.innerHTML="<strong>Wind speed:</strong> N/A"}}y.addEventListener("submit",(e=>{e.preventDefault(),v=h.value,h.value="",x()}));const w=function(e){const t={name:e.name,conditions:e.weather[0].description,temp:e.main.temp,tempLike:e.main.feels_like,humidity:e.main.humidity,wind:e.wind.speed},n=document.getElementById("name"),r=document.getElementById("conditions"),o=document.getElementById("temp"),i=document.getElementById("tempLike"),a=document.getElementById("humidity"),d=document.getElementById("wind"),s=t.conditions[0].toUpperCase()+t.conditions.substr(1);n.innerHTML=t.name,r.innerHTML=s,o.innerHTML="<strong>Temperature:</strong> "+t.temp+" C°",i.innerHTML="<strong>Feels like:</strong> "+t.tempLike+" C°",a.innerHTML="<strong>Humidity:</strong> "+t.humidity+"%",d.innerHTML="<strong>Wind speed:</strong> "+t.wind+" km/h",1==/[T-t]hunder/.test(s)?b.style.backgroundImage="var(--thunder)":1==/[S-s]now/.test(s)||1==/[S-s]leet/.test(s)?b.style.backgroundImage="var(--snowy)":1==/[R-r]ain/.test(s)||1==/[D-d]rizzle/.test(s)?b.style.backgroundImage="var(--rainy)":1==/[S-s]un/.test(s)||1==/[C-c]lear/.test(s)?b.style.backgroundImage="var(--sunny)":"Mist"==s||"Fog"==s?b.style.backgroundImage="var(--misty)":"Smoke"==s||"Haze"==s||"Dust"==s||1==/[S-s]and/.test(s)||1==/[A-a]sh/.test(s)?b.style.backgroundImage="var(--smog)":b.style.backgroundImage="var(--cloudy)"};x();const L=w,k=document.querySelector("form"),I=document.getElementById("cityName");k.addEventListener("keyup",(e=>{13!==e.code&&"Enter"!==e.code||I.blur()})),L()})()})();