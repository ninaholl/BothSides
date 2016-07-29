$(document).ready(function(){
	 $(".menu").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
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
		for (var i=0; i<10; i++) {
			var title = myArray[i].title;
			var abstract = myArray[i].abstract;
			var imgUrl = myArray[i].multimedia[4];
			if (imgUrl){
				imgUrl = myArray[i].multimedia[4].url;
				var url = myArray[i].url;
				$("#article").append("<img class='nytphoto' width='200' height='125' src="+imgUrl+">")
				$("#article").append("<li><a class='news'href="+ url +">"+title+"</a></li>")
			}
		
			
}

	}).fail(function(err) {
	  throw err;
	});
	
});

