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
    var cityName = $("#city-input").val()
    // get userInputCity by checking what invoked this function
    // page refreshed, search button click, search history list click, else return

    if(!cityName){
        alert("please enter a city")
        return
    }

    localStorage.setItem(cityName, cityName)



    // if (localStorage.length !== 0 && !$("#city-input").val() && !clickBool) {
    //     var userInputCity = localStorage.getItem(localStorage.length - 1);
    // } else if (event.target.matches("button") || event.target.matches("i") && clickBool) {
    //     event.preventDefault();
    //     var userInputCity = $("#city-input").val().toLowerCase().trim();
    // } else if (event.target.matches("li") && clickBool) {
    //     var userInputCity = event.target.getAttribute("data-city").toLowerCase().trim();;
    // } else {
    //     return;
    // }
}


