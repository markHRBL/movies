const numberOfFilms = +prompt('How many movies have you watched?', 0);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[prompt('One of the last wached movies', '')] = prompt('Rate him', '1.0');
personalMovieDB.movies[prompt('One of the last wached movies', '')] = prompt('Rate him', '1.0');