// https://www.themoviedb.org/settings/api
const API_KEY = 'fbc345ebc78fdcf26ed9f19eb993cb77';
const grid = document.querySelector('.grid');
const search = document.querySelector('#search');

async function fetchMovies(keyword) {
    console.log(`Fetching movies with keyword: ${keyword}`);

    const base_url = 'https://api.themoviedb.org/3/discover/movie?';
    const search_url = 'https://api.themoviedb.org/3/search/movie?';
    const language_param = 'language=en-US';
    const sort_param = 'sort_by=popularity.desc';
    const adult_param = 'include_adult=true';
    const page_param = 'page=1';
    const keyword_param = `query=${keyword ? keyword : ""}`
    const params = [language_param, sort_param, adult_param, page_param, keyword_param];

    const url = `${keyword ? search_url : base_url}api_key=${API_KEY}&${params.join('&')}`
    // console.log(url)

    const res = await fetch(url);
    const movies = await res.json();

    grid.innerHTML = "";
    movies.results.forEach(movie => {
        const movieDiv = createMovieDiv(movie);
        grid.appendChild(movieDiv);
    })
}

function createMovieDiv(movieInfo) {

    const rating = +movieInfo.vote_average;
    let ratingLvl = "";
    if (rating < 7) ratingLvl = 'avg';
    if (rating < 5) ratingLvl = 'poor';

    const movie = document.createElement('div');
    movie.classList.add('movie');
    movie.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movieInfo.poster_path}">
        <div class="title-block">
            <p class="title">${movieInfo.original_title}</p>
            <div class="rating ${ratingLvl}">${movieInfo.vote_average}</div>
        </div>
        <div class="overview">
            <h3>${movieInfo.original_title}</h3>
            <p>${movieInfo.overview}</p>
        </div>
    `
    return movie;
}

function handleKeyPress(e) {
    if (e.keyCode !== 13) return;

    e.preventDefault();
    fetchMovies(search.value);
}

fetchMovies();

document.addEventListener('keypress', handleKeyPress);

