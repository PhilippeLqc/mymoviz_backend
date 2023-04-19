var express = require('express');
var router = express.Router();

module.exports = router;

const APIKEY = process.env.APIKEY

router.get("/movies", (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
    .then(response => response.json())
    .then(lastrelease => {
        res.json({movies : lastrelease.results})
    })
})