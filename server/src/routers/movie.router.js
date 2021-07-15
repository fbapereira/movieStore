const express = require('express');
const { getMovies } = require('../controllers/movie.controller');

const routerMovie = express.Router();

routerMovie.get('/movies', getMovies);

module.exports = { routerMovie };
