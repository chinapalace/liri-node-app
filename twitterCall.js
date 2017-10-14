var Twit = require('twit');
var keys = require('./keys').twitterKeys;

var T = new Twit(keys);

// console.log(T);

module.exports = function() {

	T.get('search/tweets', {q: 'chinapalace3', count: 20 }, function(error, tweets, response) {
	   console.log(tweets.statuses[0]);
	   userTweets = tweets.statuses[0].text;
	});

};