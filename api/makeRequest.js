import axios from "axios";

let accessToken =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjMzMDBjYjMwMjNhMzExODQxYjc4NDdmNDZkYjUyMCIsIm5iZiI6MTczNDg4MDIxNC4zMTYsInN1YiI6IjY3NjgyYmQ2MzMwYmNlNmVjOTkxMzcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LhRGjB8csUr24ZGz1NR3MdBsPe8FV8s6Fp-SMOaO3rg"
export async function makeRequest(url, params, method = "GET", body = {}) {
	try {
		let res = await axios({
			method: method,
			baseURL: "https://api.themoviedb.org/3",
			url: url,
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			params: {
				language: "ru-RU",
				...params,
			},
			body: body,
		});

		return res;
	} catch (error) {
		throw new Error("Ошибка на сервере чувак", error);
	}
}
