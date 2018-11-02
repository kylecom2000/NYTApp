// NYT API App

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


$("searchButton").on("click", function() {
    var dataSearch = $(this).attr("data-search");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dataSearch + "&api_key=dc6zaTOxFJmzC&limit=10";