const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Movie.model');



router.get('/movies/create',(req, res) =>{
res.render('movie-create');

});

router.post('/movies/create', async (req, res) => {
  const { plot, genre, plot } = req.body;
  await Movie.create({
    plot, 
    genre, 
    plot
  });
  res.redirect('/celebrities')
});

module.exports = router;