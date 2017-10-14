console.log("liri is starting");
var twitter = require('./twitterCall');
var spotify = require('./spotifyCall');
var imdb = require('./IMDBcall');
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
	if (process.argv[3] == null){
		spotify("The Sign Ace of Base");
	} else {
		spotify(process.argv[3]);
	};
	
}  else if (liriFunc === 'movie-this') {
	if (process.argv[3] == null){
		imdb("Mr.Nobody");
	} else {
		imdb(process.argv[3]);
	};

}  else if (liriFunc === 'do-what-it-says') {	

} else { 

	console.log("Please enter valid input");
};