import { imageBaseUrl } from "../libs/utils";

export function Posters(item) {
    const itemPoster = document.createElement('div');
    itemPoster.classList.add('item_poster');

    const img = document.createElement('img');
    img.src = imageBaseUrl + item.file_path

    itemPoster.appendChild(img);

    return itemPoster
}