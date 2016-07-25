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
		console.log(result);
		var myArray = result.results;
		console.log("myArray:"+ myArray);
		for (var i=0; i<myArray.length; i++) {
			var title = myArray[i].title;
			var abstract = myArray[i].abstract;
			var url = myArray[i].url;
			$("#article").append("<li><a href="+ url +">"+title+"</a></li>")
			// console.log(myArray[i].abstract)
			// console.log(myArray[i].url)
			// $("#article").html(result.results[i].title.abstract);
		  	// $("#abstract").html(result.results[i].abstract);
}
	}).fail(function(err) {
	  throw err;
	});
	// function(){
	// 		$.ajax({
	// 			type: "GET",
	// 			url: "https://newsapi.org/v1/articles",
	// 			data: {
	// 				source: thewashingtonpost
	// 				apiKey: b1c7073d287e42f0920eaa19ba2f7150
	// 			}
	// 			success: function(response){
	// 				console.log(response);
					
	// 			}
	// 		});

	// 	}
});

