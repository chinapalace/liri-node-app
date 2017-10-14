var Spotify = require('node-spotify-api');
var keys = require('./keys').spotifyKeys;

var spotify = new Spotify(keys);

var SpotifySearch = function(song) {
	this.song = song;
	this.getSong = function() {
		spotify.search({ type: 'track', query: this.song}, function(err, data) {
		  if (err) {
		    return console.log('Error occurred: ' + err);
		  }
		 
		// console.log(JSON.stringify(data.tracks.artists, null, 2)); 
		console.log("Song Name: " + data.tracks.items[0].name);
		console.log("Artist: " + data.tracks.items[0].artists[0].name);
		console.log("Album: " + data.tracks.items[0].album.name);
		console.log("Preview Link: " + data.tracks.items[0].preview_url);

		});		
	}
};

newSpotifySearch = function(song) {
	var newSpotifySearch = new SpotifySearch(song);
	newSpotifySearch.getSong();
}

module.exports = newSpotifySearch;
// module.exports = SpotifySearch;
