require("dotenv").config();
var axios = require("axios");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var moment = require('moment');
moment().format();
var fs = require('fs')

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

switch (action) {
  case "concert-this":
    if (input.length < 1) {
      var queryUrl = "https://rest.bandsintown.com/artists/Celine Dion/events?app_id=codingbootcamp&date=2019-10-21%2C2020-10-21";

      axios.get(queryUrl).then(
        function (response) {
          console.log("This is " + response.data[0].lineup[0]+"'s next show!")
          console.log('This show is happening at: ' + response.data[0].venue.name)
          console.log('You can see this show in: ' + response.data[0].venue.city+', '+response.data[0].venue.country)
          var day = moment(response.data[0].datetime).format("MM/DD/YYYY")
          console.log('This show is taking place on: ' + day)
          
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
    }
    else {
      var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp&date=2019-10-21%2C2020-10-21";

      axios.get(queryUrl).then(
        function (response) {
          console.log("This is " + response.data[0].lineup[0]+"'s next show!")
          console.log('This show is happening at: ' + response.data[0].venue.name)
          console.log('You can see this show in: ' + response.data[0].venue.city+', '+response.data[0].venue.country)
          var day = moment(response.data[0].datetime).format("MM/DD/YYYY")
          console.log('This show is taking place on: ' + day)
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
    }
    break;

  case "spotify-this-song":
      spotifyThis()
    function spotifyThis() {
      if (input.length < 1) {
        spotify
          .search({ type: 'track', query: 'ace of base the sign' })
          .then(function (response) {
            // console.log(response)
            // console.log(response.tracks.items[0])
            console.log('You did not input a song title. :(')
            console.log('This is my FAVORITE SONG! It is called: ' + response.tracks.items[0].name)
            console.log('It appears on the album: ' + response.tracks.items[0].album.name);
            console.log('This was recorded by: ' + response.tracks.items[0].album.artists[0].name);
            console.log('Would you like to hear a sample? ' + response.tracks.items[0].preview_url)
          })
          .catch(function (err) {
            console.log(err);
          });
      }
      else {
        spotify
          .search({ type: 'track', query: input })
          .then(function (response) {
            // console.log(response)
            // console.log(response.tracks.items[0])
            console.log('You searched for: ' + input)
            console.log('This is my CLOSEST match. It is called: ' + response.tracks.items[0].name)
            console.log('It appears on the album: ' + response.tracks.items[0].album.name);
            console.log('This was recorded by: ' + response.tracks.items[0].album.artists[0].name);
            console.log('Would you like to hear a sample? ' + response.tracks.items[0].preview_url)
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }
    break;

  case "movie-this":

    if (input.length < 1) {
      var queryUrl = "http://www.omdbapi.com/?t=mr%20nobody&y=&plot=short&apikey=trilogy";
      console.log(queryUrl);

      axios.get(queryUrl).then(
        function (response) {
          //console.log(response)
          console.log('Why did you not search for a movie?')
          console.log('I am being forced to tell you, by two levels of programers that this is my favorite movie: ' + response.data.Title)
          console.log('Here is some additional information about this film, which I liri have definitely seen.')
          console.log('Release Year: ' + response.data.Year);
          console.log('IMDB Rating: ' + response.data.imdbRating);
          //console.log(response.data.Ratings)
          console.log(response.data.Ratings[1].source + ' gave this film a ' + response.data.Ratings[1].source + ' rating.')
          console.log('This film was produced in: ' + response.data.Country)
          console.log('This film was shot in: ' + response.data.Language)
          console.log('This is a plot summary: ' + response.data.Plot)
          console.log('And here are some actors: ' + response.data.Actors)
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

    }
    else {
      var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
      console.log(queryUrl);

      axios.get(queryUrl).then(
        function (response) {
          //console.log(response)
          console.log('You searched for: ' + input)
          console.log('This is my CLOSEST match: ' + response.data.Title)
          console.log('Here is some additional data about the film:')
          console.log('Release Year: ' + response.data.Year);
          console.log('IMDB Rating: ' + response.data.imdbRating);
          //console.log(response.data.Ratings)
          console.log(response.data.Ratings[1].source + ' gave this film a ' + response.data.Ratings[1].source + ' rating.')
          console.log('This film was produced in: ' + response.data.Country)
          console.log('This film was shot in: ' + response.data.Language)
          console.log('This is a plot summary: ' + response.data.Plot)
          console.log('And here are some actors: ' + response.data.Actors)
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
    }
    break;
    
  case "do-what-it-says":
    fs.readFile("random.txt", "utf8", function (error, data) {

      if (error) {
        return console.log(error);
      }

      var dataArr = data.split(",");

      longShot();

      function longShot() {
        input = dataArr.slice(1)
        spotifyThis();
      }

    });
    break;
}