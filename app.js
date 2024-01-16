const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

//Route GET qui renvoye "Welcome to my favourite movie list"
const welcome = (req, res) => {
res.send("Welcome to my favourite movie list");
};

app.get('/', welcome);


//Route GET qui renvoie la liste de films en json
const getMovies = (req, res) => {
res.json(movies);
};

app.get('/api/movies', getMovies);


//Route GET qui retourne le film correspond à l'id définie dans l'url
const getMovieById = (req, res) => {
 const id = parseInt(req.params.id);

 const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }

};

app.get('/api/movies/:id', getMovieById);

module.exports = app;