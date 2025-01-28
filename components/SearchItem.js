import { imageBaseUrl } from "../libs/utils";

export function SearchItem(item) {

    const itemShow = document.createElement('div');
    itemShow.classList.add('item_show');

    // Создаем вложенный элемент <div> с классом "img_show_box"
    const imgShowBox = document.createElement('div');
    imgShowBox.classList.add('img_show_box');

    // Создаем элемент <img> с пустым аттрибутом src и alt
    const img = document.createElement('img');
    img.src = item.poster_path ? imageBaseUrl + item.poster_path : imageBaseUrl + item.profile_path

    // Вставляем <img> в <div> "img_show_box"
    imgShowBox.appendChild(img);

    // Создаем элемент <p> с классом "show_name"
    const showName = document.createElement('p');
    showName.classList.add('show_name');
    showName.textContent = item.title ? item.title : item.name
    // Вставляем <div> "img_show_box" и <p> "show_name" в "item_show"
    itemShow.appendChild(imgShowBox);
    itemShow.appendChild(showName);

    itemShow.onclick = () => {
        if ( "poster_path" in item) {
            localStorage.setItem('movieId', item.id)
            window.location.href = "/pages/movie/"
        } else {
            localStorage.setItem("actorId", item.id)
            window.location.href = '/pages/Celebrity/'
        }
    }

    return itemShow
}