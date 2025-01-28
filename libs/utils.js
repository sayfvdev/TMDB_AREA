export function reload(arr, place, component) {
	place.innerHTML = "";

	for (let item of arr) {
		const elem = component(item, arr);

		place.append(elem);
	}
}

export let imageBaseUrl = "https://image.tmdb.org/t/p/w500";

export function debounce(func, delay) {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func.apply(this, args), delay);
	};
}
