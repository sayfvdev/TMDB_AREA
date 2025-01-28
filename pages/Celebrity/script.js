import { getActorById, getBestFilms, getImagesAcc } from "../../api/movie";
import { ImagesAcc } from "../../components/ImagesActor";
import { Movie } from "../../components/Movie";
import { Search } from "../../components/Search";
import { ShowActor } from "../../components/Showactor";
import { header } from "../../libs/header";
import { reload } from "../../libs/utils";

header();
Search();

let actorId = localStorage.getItem("actorId");
getActorById(actorId)
	.then((res) => ShowActor(res.data))
	.catch((error) => console.error(error));
getBestFilms(actorId).then((res) => {
	reload(
		res.data.cast.slice(0, 4),
		document.querySelector(".mn_block_best_films"),
		Movie
	);
});
getImagesAcc(actorId).then((res) =>
	reload(
		res.data.profiles.slice(0, 6),
		document.querySelector(".mn_images_grid"),
		ImagesAcc
	)
);
