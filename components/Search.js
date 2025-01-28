import { debounce } from "chart.js/helpers";
import { getSearchItems } from "../api/movie";
import { reload } from "../libs/utils";
import { SearchItem } from "./SearchItem";

export function Search() {
	let searchContent = document.querySelector(".search_modal");

	console.log(searchContent);

	searchContent.innerHTML = `
  <div class="mn_modalBox">
			<p class="logo_modal"><img src="/logo.svg" alt="logo"></p>
			<div class="mn_inp_box">
				<div class="inp_box">
					<form name="auth">
						<input type="text" class="search">
						<button><img src="/326690_magnify_search_zoom_icon.png" alt="search" /></button>
					</form>
				</div>
				<button class="close"><i class='bx bx-x'></i></button>
			</div>
			<div class="modal_type">
				<div class="modal_type_item active" id="movie">
					<p>Кино</p>
				</div>
				<div class="modal_type_item" id="person">
					<p>Актёры</p>
				</div>
				<div class="modal_type_item" id="tv">
					<p>ТВ</p>
				</div>
			</div>
			<div class="mn_item_show">
			</div>
		</div>`;

	let close = document.querySelector(".close");
	close.onclick = () => {
		searchContent.style.opacity = "0.1";
		searchContent.style.visibility = "hidden";
		document.body.style.overflow = "visible";
	};
	let openModal = document.querySelector(".search_login");
	openModal.onclick = () => {
		searchContent.style.visibility = "visible";
		searchContent.style.opacity = "1";

		document.body.style.overflow = "hidden";
	};

	let categories = document.querySelectorAll(".modal_type_item");
	let search = document.querySelector(".search");

	categories.forEach((category) => {
		category.onclick = () => {
			categories.forEach((item) => {
				item.classList.remove("active");
			});

			category.classList.add("active");
			searcher(category.getAttribute("id"));
		};
	});

	function searcher(category = "movie") {
		const debouncedSearch = debounce((query) => {
			getSearchItems(category, { query: query })
				.then((res) =>
					reload(
						res.data.results,
						document.querySelector(".mn_item_show"),
						SearchItem
					)
				)
				.catch((error) => console.error(error));
		}, 300);

		search.onkeyup = (e) => debouncedSearch(e.target.value);
	}
	searcher();
}
