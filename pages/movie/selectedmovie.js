import {
	getMovieById,
	getMovieTrailers,
	getPosters,
	getSimilar,
	getStarring,
} from "../../api/movie";
import { Movie } from "../../components/Movie";
import { Posters } from "../../components/Posters";
import { Search } from "../../components/Search";
import { ShowMovie } from "../../components/Showmovie";
import { Starring } from "../../components/Starring";
import { header } from "../../libs/header";
import { reload } from "../../libs/utils";

header();
Search();


let movieId = localStorage.getItem("movieId");

let btnTr = document.querySelector('.viewTr')
btnTr.onclick = () =>{
	window.location.href = "#trailer"
}

getMovieById(movieId)
	.then((res) => ShowMovie(res.data))
	.catch((error) => console.error(error));
getStarring(movieId)
	.then((res) =>
		reload(
			res.data.cast.slice(0, 8),
			document.querySelector(".mn_starring_box"),
			Starring
		)
	)
	.catch((error) => console.error(error));
getMovieTrailers(movieId)
	.then((res) => {
		let iframe = document.querySelector("iframe");
		let trailer = res.data.results.find((item) => item.type == "Trailer");
		let url = "https://www.youtube.com/embed/" + trailer.key;
		iframe.src = url;
	})
	.catch((error) => console.error(error));
getPosters(movieId, { include_image_language: "en" })
	.then((res) =>
		reload(
			res.data.posters.slice(0, 4),
			document.querySelector(".mn_poster_box"),
			Posters
		)
	)
	.catch((error) => console.error(error));
getSimilar(movieId).then((res) =>
	reload(
		res.data.results.slice(0, 4),
		document.querySelector(".mn_similar_box"),
		Movie
	)
);
