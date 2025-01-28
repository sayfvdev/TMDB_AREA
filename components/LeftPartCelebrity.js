import { imageBaseUrl } from "../libs/utils";

export function LeftPartcel (item,arr){
    let index = arr.indexOf(item)
    const celebrityDiv = document.createElement('div');
    celebrityDiv.classList.add('celebrity');
    celebrityDiv.style.backgroundImage = `url(${imageBaseUrl}${item.profile_path})`    

    const ratingP = document.createElement('p');
    ratingP.classList.add('popular_reyting');
    celebrityDiv.appendChild(ratingP);
    ratingP.textContent = `${index + 1 } - место`

    const bottomPartDiv = document.createElement('div');
    bottomPartDiv.classList.add('bottom_part');
    
    const nameP = document.createElement('p');
    nameP.classList.add('name');
    nameP.textContent = item.name; // Установка текста

    const origNameP = document.createElement('p');
    origNameP.classList.add('orig_name');
    origNameP.textContent = item.original_name; // Установка текста

    const ageP = document.createElement('p');
    ageP.classList.add('age');
    ageP.textContent = item.popularity; // Установка текста

    bottomPartDiv.appendChild(nameP);
    bottomPartDiv.appendChild(origNameP);
    bottomPartDiv.appendChild(ageP);

    celebrityDiv.appendChild(bottomPartDiv);
    celebrityDiv.onclick = () =>{
        localStorage.setItem('actorId' ,item.id)
        window.location.href = '/pages/Celebrity/'
    }

    return celebrityDiv;
}