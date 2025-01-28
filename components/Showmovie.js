import { imageBaseUrl } from "../libs/utils";
import { Chart } from "chart.js/auto";

export function ShowMovie(item) {
	console.log(item);

	let d = document;
	let profilePic = d.querySelector(".profilePic");
	profilePic.src = `${imageBaseUrl}${item.poster_path}`;
	let bg_image = d.querySelector(".bg_image");
	bg_image.style.backgroundImage = `url(${imageBaseUrl}${item.backdrop_path})`;
	let movie_name = d.querySelectorAll(".movie_name");
	movie_name.forEach((name) => (name.textContent = item.title));
	movie_name.textContent = item.title;
	let mn_name = d.querySelector(".mn_name");
	mn_name.textContent = item.title;
	let title_reyting = d.querySelector(".title_reyting");
	title_reyting.textContent = item.vote_average.toFixed(1);
	let orig_name = d.querySelector(".orig_name");
	orig_name.textContent = item.original_title;
	let description = d.querySelector(".description");
	description.textContent = item.overview;
	let year = d.querySelector(".year");
	year.textContent = item.release_date.slice(0, 4);
	let madeIn = d.querySelector(".madeIn");
	madeIn.textContent = item.origin_country;
	let tagline = d.querySelector(".tagline");
	tagline.textContent = item.tagline;
	let sum = d.querySelector(".sum");
	sum.textContent = item.budget + "$";
	let screenplay = d.querySelector(".screenplay");
	screenplay.textContent = item.release_date;
	let time = d.querySelector(".time");
	time.textContent = item.runtime + " мин";

	let progress = d.querySelector(".progress");

	progress.style.width = `${item.vote_average * 10}%`;
	progress.textContent = `${Math.round(item.vote_average * 10)} рейтинг фильма`;

	renderDonutChart(item.vote_average);
}
function renderDonutChart(averageRating = 7) {
	const chartContainer = document.getElementById("ratingChart");

	if (chartContainer) {
		new Chart(chartContainer, {
			type: "doughnut",
			data: {
				datasets: [
					{
						label: "Average Rating",
						data: [averageRating, 10 - averageRating],
						backgroundColor: ["#4BCB36", "#333332"],
						hoverBackgroundColor: ["#36A2EB", "#e0e0e0"],
					},
				],
			},
			options: {
				responsive: true,
			},
		});
	} else {
		console.error("Chart container not found");
	}
}
