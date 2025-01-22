import{S as m,i as c}from"./assets/vendor-De63neY_.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="48326297-b9ec83e241adf6514f2254162",h="https://pixabay.com/api/",f=t=>{const i=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:33});return fetch(`${h}?${i.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},d=t=>`
    <li class="gallery-item js-item-card">
       <a class="gallery-link" href="${t.largeImageURL}">
       <img
         class="gallery-image"
         src="${t.webformatURL}"
         data-source="${t.largeImageUR}"
         alt="${t.tags}"
        />
        </a>
        <div class="image-info">
                <p class="image-info-item"><svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-like"></use>
                </svg>
                ${t.likes}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-multimedia"></use>
                </svg>
                ${t.views}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-chat"></use>
                </svg>
                ${t.comments}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-download"></use>
                </svg>
                ${t.downloads}
                </p>
        </div>
    </li>
    `;let p=new m(".js-images a",{captionsData:"alt",captionDelay:250});const g=document.querySelector(".js-search-form"),l=document.querySelector(".js-images"),y=document.querySelector(".loader"),n=()=>{y.classList.toggle("is-hidden")},v=t=>{t.preventDefault();const i=t.currentTarget.elements.query.value.trim();i!==""&&(l.innerHTML="",n(),f(i).then(s=>{if(n(),s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=s.hits.map(e=>d(e)).join("");l.innerHTML=o,p.refresh(),g.reset()}).catch(s=>{n(),console.log(s),c.error({message:`${s}`,position:"topRight"})}))};g.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
