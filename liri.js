require("dotenv").config();
let Spotify = require('node-spotify-api');
let fs = require("fs");
let axios = require("axios");
let keys = require("./keys.js");
let operator = process.argv[2]
let funker = process.argv.slice(3).join(" ");
let spotify = new Spotify(keys.spotify);

console.log(`${operator} --- ${funker}`)
switch (operator) {
    case "concert-this":
        bIt(funker)
        break;
    case "spotify-this-song":
        spotifySearch(funker)
        break;
    case "movie-this":
        movie(funker)
        break;
    case "do-what-it-says":
        doIt(funker)
        break;
  


}
function bIt (band){

    axios.get(`https://rest.bandsintown.com/artists/${band}/events?app_id=codingbootcamp`).then(
  function(response) {
      
        console.log(`
        *******************
        Concert Listings for ${funker}
        `)
      for (i = 0; i <response.data.length; i++){
        let venue = response.data[i].venue.name
        let city = response.data[i].venue.city
        let state = response.data[i].venue.state
        let dateTime = response.data[i].datetime
        console.log(`
        ${dateTime}
        ${venue}
        ${city}, ${state}
        `)
      }

  }
);

}

function spotifySearch (track){
  spotify.search({ type: 'track', query: track }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log(`
  Artist(s): ${data.tracks.items[0].album.artists[0].name}
  Song Name: ${data.tracks.items[0].album.name}
  Preview Link: ${data.tracks.items[0].album.external_urls.spotify}
  Album Title: ${data.tracks.items[0].name}
  `);

  });

}

function movie(movie){
  if (movie = ""){
    console.log(`
    If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

    It's on Netflix!`)
  }else{
    axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`).then(
        function(response) {
          // console.log(response.data);
        console.log(`
        Title: ${response.data.Title}
        Year: ${response.data.Year}
        IMDB Rating: ${response.data.imdbRating}
        Rotten Tomatoes Rating: ${response.data.Ratings[1].value}
        Country: ${response.data.Country}
        Language: ${response.data.Language}
        Plot: ${response.data.Plot}
        Actors: ${response.data.Actors}`)
        }
      );
}
}

function doIt(){

  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    // console.log(data.funker);

    spotifySearch(data)
  
    // Then split it by commas (to make it more readable)
    // var dataArr = data.split(" ");
  
    // We will then re-display the content as an array for later use.
    // console.log(dataArr);
  
  });

}