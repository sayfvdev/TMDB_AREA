import { getMovies } from "../api/movie"
import { reload } from "../libs/utils"
import { Movie } from "./Movie"

export function Genre(item) {
    let p = document.createElement('p')
    p.textContent = item.name

    p.onclick = () => {
        getMovies({ with_genres: item.id })
            .then((res) =>
                reload(
                    res.data.results.slice(0, 8), document.querySelector('.mn_center_item'), Movie
                ))
            .catch((error) => console.error(error))
    }
    return p
}