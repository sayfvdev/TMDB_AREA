import { imageBaseUrl } from "../libs/utils";

export function ImagesAcc(item){
    console.log(item);
    
    const div = document.createElement('div');
    div.classList.add('images_grid_item');
    
    // Создаем элемент img
    const img = document.createElement('img');
    img.src = imageBaseUrl + item.file_path; // Устанавливаем путь к изображению
    img.alt = 'images'; // Устанавливаем текст для alt

    // Вставляем img в div
    div.appendChild(img);
    return div  
}