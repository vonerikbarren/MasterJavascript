/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */
function buildQueryURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  // Begin building an object to contain our API call's query parameters
  // Set the API key
  // request your own API, if yours doesnt work use this one vvvvv
  var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };

  // Grab text the user typed into the search input, add to the queryParams object
  queryParams.q = $("#search-term").val().trim(); // .trim() removes any trailing white space because it's not relevant to the query

  // If the user provides a startYear, include it in the queryParams object
  // HINT: Similarly to "#search-term" do the same thing for start year and end year
  // make sure you conver the string to number ;)

  // Logging the URL so we have access to it for troubleshooting
  // $.param does something similar to JSON.stringify where it convers
  // an object (or array), in to a string
  // just makes it a little easier to create the query params and keeps the code cleaner
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams)); 
  return queryURL + $.param(queryParams);
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing NYT API data
 */
function updatePage(NYTData) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  var numArticles = $("#article-count").val();

  // Log the NYTData to console, where it will show up as an object
  console.log(NYTData);
  console.log("------------------------------------");

  // Loop through and build elements for the defined number of articles
  for (var i = 0; i < numArticles; i++) {
    // Get specific article info for current index

    // Increase the articleCount (track article # - starting at 1)

    // Create the  list group to contain the articles and add the article content for each


    // Add the newly created element to the DOM

    // If the article has a headline, log and append to $articleList
  
    // If the article has a byline, log and append to $articleList

    // Log section, and append to document if exists

    // Log published date, and append to document if exists

    // Append and log url

    // Append the article
  }
}

// Function to empty out the articles
function clear() {
  $("#article-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // Empty the region associated with the articles
  clear();

  // Build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);
