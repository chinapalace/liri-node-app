console.log("liri is starting");
var twitter = require('./twitterCall');
var spotify = require('./spotifyCall');
var imdb = require('./IMDBcall');
var fs = require("fs");
var inquirer = require('inquirer');
//------------------------------------------------
	//grab data from keys.js 


//user inputs which liri functionality via command line argument 
	 // to-do
	 // inquirer interface
	 // more flexibility on user entries - take multiple word song requests
	 // better feedback on invalid entry 

inquirer.prompt([
	 {
	    name: "name",
	    message: "What can I do for you?",
	    type: 'list',
	    choices: ['Read my tweets', 'Spotify a song', 'Look up a movie', 'Other'],

	  }]).then(function(answers) {
		console.log(answers);



		    liriFunc = answers.name;
		    liriFunctions();
		});

var liriFunc = process.argv[2];
var param = process.argv[3];

function liriFunctions() {
	// log user input
	fs.appendFile("log.txt", liriFunc + ', ' + param + "\n");

		if (liriFunc === 'my-tweets' || 'Read my tweets') { 
			twitter();

		} else if (liriFunc === 'spotify-this-song' || 'Spotify a song') {
			if (param == null){
				spotify("The Sign Ace of Base");
			} else {
				spotify(param);
			};
			
		}  else if (liriFunc === 'movie-this' || 'Look up a movie') {
			if (param == null){
				imdb("Mr.Nobody");
			} else {
				imdb(param);
			};

		}  else if (liriFunc === 'do-what-it-says' || 'Other') {
			fs.readFile("random.txt", "utf8" , function (err, data) {
		    var array = data.toString().split(',');
		   //  console.log(array);
		  	// console.log(array[0]);
		  	liriFunc = array[0];
		    param = array[1];
		    liriFunctions();

		});

		} else { 

			console.log("Please enter valid input");
		};
}liriFunctions();

