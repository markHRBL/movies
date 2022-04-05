"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', 0);

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', 0);
    }
}

function rememberMyFilms() {
    let i = 0;

    while (i < 2) {
        const movieQuestion = prompt('One of the last wached movies', '');
        const rate = prompt('Rate him', '1.0');

        if (rate && movieQuestion && movieQuestion.length < 50) {
            personalMovieDB.movies[movieQuestion] = rate;
            i++;
        }
    }
}

function detectPersonalLelvel() {
    if (personalMovieDB.count < 10) {
        alert('You watched very few movies');
    } else if (personalMovieDB.count < 30) {
        alert('You are classic viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('You are moviegoer');
    } else {
        alert('Eror');
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const question = prompt(`Your favorite genre by number ${i}`);
        personalMovieDB.genres.push(question);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLelvel();
writeYourGenres();
showMyDB();