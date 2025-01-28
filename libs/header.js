export function header(){
    let header = document.querySelector('header')

    header.innerHTML = `<div class="container header__container">
			<div class="logo">
				<a href="/"><img src="/logo.svg" alt="logo" /></a>
			</div>

			<nav class="nav">
				<ul>
					<li><a href="#">Афиша</a></li>
					<li><a href="#">Медиа</a></li>
					<li><a href="#">Фильмы</a></li>
					<li><a href="#">Актёры</a></li>
					<li><a href="#">Новости</a></li>
					<li><a href="#">Подборки</a></li>
					<li><a href="#">Кинорейтинги</a></li>
				</ul>
			</nav>

			<div class="search_login">
				<img src="/326690_magnify_search_zoom_icon.png" alt="search" />
				<button class="login_btn">Войти</button>
			</div>
		</div>`
        
}
