const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');
const Movie= require('../models/Movie.model');

router.get('/celebrities', async (req, res) => {
    const celebritiesFromDB = await Celebrity.find();
    res.render('celebrities/index', { celebritiesFromDB });
});
router.get('/celebrities/create', async (req, res) => {
    const allMovies = await Movie.find();
    res.render('celebrities/new',{allMovies});
});
router.get("/celebrities/:id", async (req, res) => {
    try {
      const celebrityId = req.params.id;
      const celebrity = await Celebrity.findById(
        celebrityId
      ); /* .populate("author") */
      res.render("celebrities/show", { celebrity });
    } catch (e) {
      res.render("error");
      console.log(`An error occured ${e}`);
    }
  });

  

router.post('/celebrities/create', async (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect('/celebrities');
});

router.post('/celebrities/:id/delete', async (req,res) => {
    const celebrityId = req.params.id
    await Celebrity.findByIdAndDelete(celebrityId)
    res.redirect('/celebrities')
});

module.exports = router;