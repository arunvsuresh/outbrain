const fetch = require('node-fetch');
var topThreeCurrencies = function() {
	fetch("https://api.coinmarketcap.com/v2/ticker/?limit=3&sort=rank&structure=array").then(function(response){
		return response.json();
}).then(function(cryptoJson){
	console.log(cryptoJson.data);
	for (var i = 0; i < cryptoJson.data.length; i++) {
		console.log(cryptoJson.data[i].quotes)
	}
})
};
topThreeCurrencies();
