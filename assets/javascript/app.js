// NYT API App

$("searchButton").on("click", function() {

    var dataSearch = $(this).attr("data-search");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // Here's your API Key: be5386047e454d2e843505c37c20949b


$.ajax({
  url: url,
  method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
}).then(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var articleDiv = $("<div>");
        // headline.main
        // byline.original
        var headline = $("<h3>").text(response[i].headline.main);
        var author = $("<h5>").text(response[i].byline.original);

        articleDiv.append(headline);
        articleDiv.append(author);
        $(".articlesList").append(articleDiv);
    }
})
});