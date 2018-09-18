// const fetch = require('node-fetch');
var topThreeCurrencies = function() {
	fetch("https://api.coinmarketcap.com/v2/ticker/?limit=3&sort=rank&structure=array").then(function(response){
		return response.json();
}).then(function(cryptoJson){
	for (var i = 0; i < cryptoJson.data.length; i++) {
		console.log("Rank: " + cryptoJson.data[i].rank + ", Name: " + cryptoJson.data[i].name + ", Price: " + cryptoJson.data[i].quotes["USD"]["price"])
	}
})
};
topThreeCurrencies();
