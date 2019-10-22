require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var moment = require('moment');
moment().format();

var spotify = new Spotify(keys.spotify);

var action = process.argv[2]
var input = process.argv.slice(3).join(" ")


// I started with a loop, but had problems getting the input to parse correctly to use the spotify api. 
// var songTit = ""
// if (input[2] == 'spotify-this-song') {
//     for (i = 3; i<input.length; i++) {
//         if (i>3 && i<input.lenth) {
//         songTit = songTit + input[i].join(" ")
//         }
//         else {
//             songTit += input[i];
//         }
//     }
// }
//   * This will show the following information about the song in your terminal/bash window

//* Artist(s)

//* The song's name

//* A preview link of the song from Spotify

//* The album that the song is from

//* If no song is provided then your program will default to "The Sign" by Ace of Base.

//* `concert-this`

//* `spotify-this-song`

//* `movie-this`

//* `do-what-it-says`
switch (action) {
  case "concert-this":

    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp&date=2019-10-21%2C2020-10-21";

    console.log(queryUrl);

    axios.get(queryUrl).then(
      function (response) {
        console.log(response.data[0].venue.name)
        console.log(response.data[0].venue.city)
        //console.log(response.data[0].datetime)
        var day = moment(response.data[0].datetime).format("MM/DD/YYYY")
        console.log(day)
      })
      .catch(function (error) {
        if (error.response) {
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    break;

  case "spotify-this-song":
    spotify
      .search({ type: 'track', query: input })
      .then(function (response) {
        // console.log(response)
        // console.log(response.tracks.items[0])
        console.log('You searched for: ' + response.tracks.items[0].name)
        console.log('It appears on the album: ' + response.tracks.items[0].album.name);
        console.log('This was recorded by: ' + response.tracks.items[0].album.artists[0].name);
        console.log('Would you like to hear a sample? ' + response.tracks.items[0].preview_url)
      })
      .catch(function (err) {
        console.log(err);
      });
    break;
  case "movie-this":

      //* Title of the movie.
      //* Year the movie came out.
      //* IMDB Rating of the movie.
      //* Rotten Tomatoes Rating of the movie.
      //* Country where the movie was produced.
      //* Language of the movie.
      //* Plot of the movie.
      //* Actors in the movie.

      var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
      console.log(queryUrl);
      
      axios.get(queryUrl).then(
        function(response) {
          console.log(response)
          console.log (response.data.Title)
          console.log("Release Year: " + response.data.Year);
          console.log(response.data.imdbRating)
          console.log(response.data.Ratings)
          console.log(response.data.Ratings[1])
          console.log(response.data.Country)
          console.log(response.data.Language)
          console.log(response.data.Plot)
          console.log(response.data.Actors)
        })
        .catch(function(error) {
          if (error.response) {
          
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
           
            console.log(error.request);
          } else {
           
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      
    break;
  case "do-what-it-says":
    break;
}