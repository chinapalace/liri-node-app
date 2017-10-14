var imdb = require('imdb-api');
var keys = require('./keys').IMDBkeys;

//IMDBSearch constructor
var IMDBsearch = function(title) {
	this.title = title;
	this.getMovie = function() {
		imdb.search({ title: this.title}, keys).then(function(data) {
		 
		console.log("Title: " + JSON.stringify(data.results[0].title, null, 2)); 
		console.log("Release Year: " + JSON.stringify(data.results[0].year, null, 2));
		// console.log("Release Year: " + JSON.stringify(data, null, 2));
		// console.log("Rotton Tomatoes Rating: " + JSON.stringify(data.results[0].title, null, 2));
		// console.log("Country of Origin: " + JSON.stringify(data.results[0].title, null, 2));
		// console.log("Language: " + JSON.stringify(data.results[0].title, null, 2));
		// console.log("Plot: " + JSON.stringify(data.results[0].title, null, 2));
		// console.log(JSON.stringify(data.results[0].title, null, 2));

		});		
	}
};

//grab IMDBSearch object from constructor and call getMovie method
newIMDBSearch = function(title) {
	var newIMDBSearch = new IMDBsearch(title);
	newIMDBSearch.getMovie();
}

//export function object 
module.exports = newIMDBSearch;

