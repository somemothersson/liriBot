require("dotenv").config();
let keys = require("./keys.js");
let operator = process.argv[2]
let funcer = process.argv[3]
let spotify = new Spotify(keys.spotify);


switch (operator) {
    case "concert-this":
        bIt()
        break;
    case "spotify-this-song":
        spotify()
        break;
    case "movie-this":
        movie()
        break;
    case "do-what-it-says":
        doIt()
        break;
  


}
function bIt (){

}
function spotify (){

}

function movie(){

}

function doIt(){

}