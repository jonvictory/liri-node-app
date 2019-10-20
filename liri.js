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

spotify
  .search({ type: 'track', query: input })
  .then(function(response) {
    console.log(response.tracks.items[1].album.release_date);
  })
  .catch(function(err) {
    console.log(err);
  });