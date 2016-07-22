$(document).ready(function(){
	var url = "https://api.nytimes.com/svc/topstories/v2/politics.json";
	url += '?' + $.param({
	  'api-key': "237102c9367e4585be678055ff4caf28",
	  'callback': "EndResult"
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  $("nyt").html(result.response.abstract);
	}).fail(function(err) {
	  throw err;
	});
});