(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="live_3CKy5yTuXrAzCmE7H7xrCVB77JtRAYCYWX8J4u5nAGZO565MKxw9oOx7YjZ5E4Cq",m="https://api.thecatapi.com/v1/breeds";function p(){return fetch(m,{headers:{"x-api-key":h}}).then(n=>{if(n.ok)return n.json()})}const y="https://api.thecatapi.com/v1/images/search";function L(n){return fetch(`${y}?breed_ids=${n}`,{headers:{"x-api-key":h}}).then(t=>{if(t.ok)return t.json()})}const u=document.querySelector(".breed-select"),c=document.querySelector(".cat-info"),f=document.querySelector(".error"),i=document.querySelector(".loader");let l=[];i.classList.remove("loader-hidden");p().then(n=>{l=n,i.classList.add("loader-hidden"),u.classList.remove("select-hidden");for(let t=0;t<l.length;t++){const o=l[t];let s=document.createElement("option");s.value=`${o.id}`,s.innerHTML=`${o.name}`,document.querySelector(".breed-select").appendChild(s)}}).catch(()=>{u.classList.add("select-hidden"),f.classList.remove("error-hidden")});u.addEventListener("change",b);function b(n){const t=n.target.value;c.innerHTML="",i.classList.remove("loader-hidden"),f.classList.add("error-hidden"),L(t).then(o=>{if(o.length===0){i.classList.add("loader-hidden"),c.innerHTML="<p class = no-info>Unfortunately, we have no information about this cat.</p>";return}i.classList.add("loader-hidden"),c.innerHTML=g(o)}).catch(()=>{c.classList.add("info-hidden"),i.classList.add("loader-hidden"),f.classList.remove("error-hidden")})}function g(n){let t,o,s,e;for(const d of n){t=d.url;for(const a of d.breeds)o=a.name,s=a.description,e=a.temperament}return`<img src="${t}" alt="${o}">
      <div><h>${o}</h>
      <p>${s}</p>
      <p><span class="temp">Temperament: </span>${e}</p></div>`}
//# sourceMappingURL=commonHelpers.js.map