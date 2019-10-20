require("dotenv").config();
var keys = require("./keys.js");

var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var input = process.argv

var songTit = ""
if (input[2] == 'spotify-this-song') {
    for (i = 3; i<input.length; i++) {
        if (i>3 && i<input.lenth) {
        songTit = songTit + '+' + input[i]
        }
        else {
            songTit += input[i];
        }
    }
}

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });