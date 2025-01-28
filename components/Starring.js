import { imageBaseUrl } from "../libs/utils";

export function Starring (data){
    console.log(data);
    
const item = document.createElement('div');
item.classList.add('item');

// Create the starring image container
const starringImg = document.createElement('div');
starringImg.classList.add('starring_img');

// Create the image element
const img = document.createElement('img');
img.src = imageBaseUrl + data.profile_path;

// Append the image to the starring image container
starringImg.appendChild(img);

// Create the name of the star (starring_name)
const starringName = document.createElement('p');
starringName.classList.add('starring_name');
starringName.textContent = data.name;  // You can set the name dynamically here

// Create the original name of the star (starring_orig_name)
const starringOrigName = document.createElement('p');
starringOrigName.classList.add('starring_orig_name');
starringOrigName.textContent = data.original_name;  // You can set the original name dynamically here

// Create the movie name (starring_name_movie)
const starringNameMovie = document.createElement('p');
starringNameMovie.classList.add('starring_name_movie');
starringNameMovie.textContent = data.character;  // You can set the movie name dynamically here

// Append all elements to the item container
item.appendChild(starringImg);
item.appendChild(starringName);
item.appendChild(starringOrigName);
item.appendChild(starringNameMovie);

item.onclick = () =>{
    localStorage.setItem("actorId" , data.id)
    window.location.href = '/pages/Celebrity/'
}

return item

} 