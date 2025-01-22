export const createImageTemplate = image => {
    return `
    <li class="gallery-item js-item-card">
       <a class="gallery-link" href="${image.largeImageURL}">
       <img
         class="gallery-image"
         src="${image.webformatURL}"
         data-source="${image.largeImageUR}"
         alt="${image.tags}"
        />
        </a>
        <div class="image-info">
                <p class="image-info-item"><svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-like"></use>
                </svg>
                ${image.likes}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-multimedia"></use>
                </svg>
                ${image.views}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-chat"></use>
                </svg>
                ${image.comments}
                </p>
                <p class="image-info-item">
                <svg class="image-icon" width="22" height="22">
                <use href="./img/icons.svg#icon-download"></use>
                </svg>
                ${image.downloads}
                </p>
        </div>
    </li>
    `;
};