import { imageBaseUrl } from "../libs/utils"

export function ShowActor(item) {
    console.log(item);
    
    let d = document
    let img_cel = d.querySelector('.img_cel')
    img_cel.src = imageBaseUrl + item.profile_path
    let actor_name = d.querySelectorAll('.actor_name')
    actor_name.forEach((name) => (name.textContent = item.name));
    actor_name.textContent = item.name
    let orig_name = d.querySelector('.orig_name')
    orig_name.textContent = item.name
    let career = d.querySelector('.career')
    career.textContent = item.known_for_department
    let height_cel = document.querySelector('.height_cel')
    height_cel.textContent = item.popularity
    let birth_cel = d.querySelector('.birth_cel')
    birth_cel.textContent = item.birthday
    let place_cel = d.querySelector('.place_cel')
    place_cel.textContent = item.place_of_birth


}