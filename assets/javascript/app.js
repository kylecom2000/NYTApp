// NYT API App

$("searchButton").on("click", function() {
    var dataSearch = $(this).attr("data-search");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


