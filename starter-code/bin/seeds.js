const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

// const celebreties = [
//     {
//         name: 'Suzanne Collins',
//         occupation: 'Hunger and games',
//         catchPhrase:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
//     },
//     {
//         name: 'Harry Potter',
//         occupation: 'Dating with Rowling ',
//         catchPhrase:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '

//     }, {
//         name: 'Harper Lee ',
//         occupation: 'Kill birds',
//         catchPhrase:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'

//     }];


 const movies = [
        {
            title: 'airplane',
            genre: 'action',
            plot:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            title: 'Harry Potter',
            genre: 'fantasy ',
            plot:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    
        }, {
            title: 'Love ',
            genre: 'drama',
            plot:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    
        }];
    

    Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
   
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));


