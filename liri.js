console.log("liri is starting");
var twitter = require('./twitterCall');
var spotify = require('./spotifyCall')
//------------------------------------------------
	//grab data from keys.js 


//user inputs which liri functionality via command line argument 
	 // to-do
	 // inquirer interface
	 // more flexibility on user entries - take multiple word song requests
	 // better feedback on invalid entry 

var liriFunc = process.argv[2];

if (liriFunc === 'my-tweets') { 
	twitter();

} else if (liriFunc === 'spotify-this-song') {
	spotify(process.argv[3]);

}  else if (liriFunc === 'movie-this') {

}  else if (liriFunc === 'do-what-it-says') {	

} else { 

	console.log("Please enter valid input");
};