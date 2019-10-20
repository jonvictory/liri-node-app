require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

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

spotify
  .search({ type: 'track', query: input })
  .then(function(response) {
    console.log(response)
    console.log(response.tracks.items[0])
    console.log(response.tracks.items[0].album.name);
    console.log(response.tracks.items[0].album.artists[0].name);
    console.log(response.tracks.items[0].preview_url)
  })
  .catch(function(err) {
    console.log(err);
  });