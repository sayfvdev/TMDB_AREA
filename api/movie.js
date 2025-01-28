import { makeRequest } from "./makeRequest";

export async function nowPlayingApi() {
	try {
		let res = await makeRequest("/movie/now_playing", { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getMovies(params) {
	try {
		let res = await makeRequest(`/discover/movie`, { page: 1, ...params });
		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getGeners(params) {
	try {
		let res = await makeRequest("/genre/movie/list");
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function popularApi() {
	try {
		let res = await makeRequest("/movie/popular", { page: 2 });

		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function upcomingApi(params) {
	try {
		let res = await makeRequest("/movie/upcoming", { page: 1 });

		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getMovieById(id, details = "") {
	try {
		let res = await makeRequest(
			`/movie/${id}${details == "" ? null : `/${details}`}`
		);
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getActorById(id, details = "") {
	try {
		let res = await makeRequest(
			`/person/${id}${details == "" ? null : `/${details}`}`
		);
		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getMovieTrailers(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/videos`, { page: 1 });
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getStarring(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/credits`, { page: 1 });
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getPosters(movie_id, params) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/images`, params);
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getSimilar(movie_id) {
	try {
		let res = await makeRequest(`/movie/${movie_id}/similar`);
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getBestFilms(actorId) {
	try {
		let res = await makeRequest(`/person/${actorId}/movie_credits`);
		return res;
	} catch (error) {
		console.error(error);
	}
}
export async function getImagesAcc(actorId) {
	try {
		let res = await makeRequest(`/person/${actorId}/images`);
		return res;
	} catch (error) {
		console.error(error);
	}
}

export async function getSearchItems(category, params) {
	try {
		let res = await makeRequest(`/search/${category}`, params);
		return res;
	} catch (error) {
		console.error(error);
	}
}
