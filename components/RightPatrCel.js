
export function RightElement(item,arr) {
    let index = arr.indexOf(item)
    // Создаем основной элемент
    const celebrityRightDiv = document.createElement('div');
    celebrityRightDiv.classList.add('celebrity_right');

    // Создаем левую часть
    const leftPartDiv = document.createElement('div');
    leftPartDiv.classList.add('left_part');

    // Создаем и добавляем элементы для имени, оригинального имени и возраста
    const nameP = document.createElement('p');
    nameP.classList.add('name2');
    nameP.textContent = item.name; // Установка текста

    const origNameP = document.createElement('p');
    origNameP.classList.add('orig_name2');
    origNameP.textContent = item.original_name; // Установка текста

    const ageP = document.createElement('p');
    ageP.classList.add('age2');
    ageP.textContent = item.popularity; // Установка текста

    // Добавляем элементы в левую часть
    leftPartDiv.appendChild(nameP);
    leftPartDiv.appendChild(origNameP);
    leftPartDiv.appendChild(ageP);

    // Создаем правую часть
    const rightPartDiv = document.createElement('div');
    rightPartDiv.classList.add('right_part');

    // Создаем элемент для рейтинга
    const ratingP = document.createElement('p');
    ratingP.classList.add('popular_reyting');
    ratingP.textContent = `${index + 3} - место`; // Установка текста

    // Добавляем рейтинг в правую часть
    rightPartDiv.appendChild(ratingP);

    // Добавляем левую и правую части в основной элемент
    celebrityRightDiv.appendChild(leftPartDiv);
    celebrityRightDiv.appendChild(rightPartDiv);

    celebrityRightDiv.onclick = () =>{
        localStorage.setItem('actorId' ,item.id)
        window.location.href = '/pages/Celebrity/'
    }
    return celebrityRightDiv;

}
