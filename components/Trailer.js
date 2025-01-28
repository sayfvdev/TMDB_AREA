import { getMovieTrailers } from "../api/movie";
import { imageBaseUrl } from "../libs/utils";

export function Trailer(item) {
    // Create the main slide container
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    // Create the movie item container
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    // Create the image element
    const movieImage = document.createElement('img');
    movieImage.src = imageBaseUrl + item.poster_path
    movieImage.setAttribute('alt', 'Мулан');

    // Create the play icon element
    const playIcon = document.createElement('span');
    playIcon.classList.add('play-icon');
    playIcon.textContent = '▶';

    // Append the image and play icon to the movie item
    movieItem.appendChild(movieImage);
    movieItem.appendChild(playIcon);

    // Create the heading for the movie title
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = item.title;

    // Append the movie item and the title to the swiper slide
    swiperSlide.appendChild(movieItem);
    swiperSlide.appendChild(movieTitle);
    swiperSlide.onclick = () =>{
        getMovieTrailers(item.id)
        .then(res =>{
            let iframe = document.querySelector('iframe')
            let trailer = res.data.results.find(item => item.type == 'Trailer')
            let url = 'https://www.youtube.com/embed/' + trailer.key            
            iframe.src = url
                
        })
    }
    return swiperSlide
}