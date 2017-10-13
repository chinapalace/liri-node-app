console.log("liri is starting");
var twitter = require('./twitterCall');
//------------------------------------------------
	//grab data from keys.js 


//user inputs which liri functionality via command line argument 
	 // to-do
	 // inquirer interface
	 // more flexibility on user entries 
	 // better feedback on invalid entry 

var liriFunc = process.argv[2];

if (liriFunc === 'my-tweets') { 
	twitter();

} else if (liriFunc === 'spotify-this-song') {

}  else if (liriFunc === 'movie-this') {

}  else if (liriFunc === 'do-what-it-says') {	

} else { 

	console.log("Please enter valid input");
};