# liri-node-app
This is a language recognition system that will take text input and return relevant information from several different APIs.

This program has 4 commands, which trigger different API systems, and will return the following data, wrapped in a funny console.log:


   * `concert-this`
   will utilize the API: Bands in Town

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

   * `spotify-this-song`
Utilizes the Spotify API and NPM

    * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * `movie-this`
Utilizes the IMDB API

          * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

   * `do-what-it-says`
Utilizes FS node to read text from a document, then makes a call, using the spotify command listed above.

     * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

##things to do##

I've got a rough version of the txt logging bonus feature mapped out, but it would require me to add several new functions to each case. The idea isn't complicated, but after coding for more than 12 hours today, the though of messing up my assignment now, isn't very appealing. 

I'm not sure if I'm going to add this to my portfolio yet.
