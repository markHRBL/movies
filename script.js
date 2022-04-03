"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', 0);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

while (i < 2) {
    const movieQuestion = prompt('One of the last wached movies', '');
    const rate = prompt('Rate him', '1.0');

    if (rate && movieQuestion && movieQuestion.length < 50) {
        personalMovieDB.movies[movieQuestion] = rate;
        i++;
    }
}

if (personalMovieDB.count < 10) {
    alert('You watched very few movies');
} else if (personalMovieDB.count < 30) {
    alert('You are classic viewer');
} else if (personalMovieDB.count >= 30) {
    alert('You are moviegoer');
} else {
    alert('Eror');
}

console.log(personalMovieDB);