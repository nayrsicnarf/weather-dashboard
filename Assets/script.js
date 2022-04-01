// set this Boolean to false because a button hasn't been clicked yet when the page first loads or is refreshed
var clickBool = false;
// event handlers for clicks on the search button or clicks on the search history list 
$("#find-city").on("click", function () {
    clickBool = true;
    createWeatherData();
});
$("#search-history").on("click", function () {
    clickBool = true;
    createWeatherData();
});

// this function is called either by the click on the search button, the clicks on the search history list, or when the page is refreshed and there is something in local storage
function createWeatherData() {

}

// this function determines the background color depending on the uv index
function createUVIndexColor(x) {

}

// create search history list from local storage
function createSearchHistory() {

}

// this function capitalizes the first letter in each word of a string
function capLetters(str) {
    
}