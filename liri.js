require("dotenv").config();
let Spotify = require('node-spotify-api');
let fs = require("fs");
let axios = require("axios");
let keys = require("./keys.js");
let operator = process.argv[2]
let funcer = process.argv.slice(3).join(" ");
let spotify = new Spotify(keys.spotify);


switch (operator) {
    case "concert-this":
        bIt()
        break;
    case "spotify-this-song":
        spotifySearch()
        break;
    case "movie-this":
        movie()
        break;
    case "do-what-it-says":
        doIt()
        break;
  


}
function bIt (){

    axios.get(`https://rest.bandsintown.com/artists/${funcer}/events?app_id=codingbootcamp`).then(
  function(response) {
      
        console.log(`
        *******************
        Concert Listings for ${funcer}
        `)
      for (i = 0; i <response.data.length; i++){
        console.log(response.data[i].datetime)
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

    
    // console.log(response);

    // * Name of the venue

    // * Venue location

    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
  }
);

}

// function spotifySearch (){

// }

// function movie(){
//     axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//         function(response) {
//           console.log("The movie's rating is: " + response.data.imdbRating);
//         }
//       );

// }

// function doIt(){

// }