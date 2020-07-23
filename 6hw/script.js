//Vars for use in AJAX call
var key;
var icon;
var sTerm = "Seattle"
var lat;
var lon;
//Vars for accessing html
sBtn = $("#search-btn")
sInput = $("#search-inp")
cardCol = $("#main")
subCol = $("#sub")

//Onclick function for search button
sBtn.on("click", function() {
  event.preventDefault()
  getForecasts();
});

//Retrieves/displays current weather
function getForecasts() {
  //Prevents duplicate cards
  cardCol.empty();
  //Creates/sends query
  //sTerm = "seattle" //sInput.val().trim();  Dont forget!!
  var qURL = "https://api.openweathermap.org/data/2.5/weather?q=" + sTerm + "&units=imperial&appid=" + key;
  $.ajax({
      url: qURL,
      method: "GET"
  })
    .then(function(response) {
      //retrieves data from JSON
      var name = response.name;
        icon = "<img src='http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png'/>";
      var time = response.dt + response.timezone;
      var temp = response.main.temp + " °F";
      var hum = response.main.humidity + "%";
      var wSpd = response.wind.speed + " MPH";
      lat = response.coord.lat;
      lon = response.coord.lon;
      //Displays weather information
        var displayCard = $("<div>");
        displayCard.attr("class", "card");
        cardCol.append(displayCard);
        displayCard.html("<div class='card-body'><h5 class='card-title'>" + name + " " + icon +
          "</h5><p class='card-text'> Temperature: " + temp +
          "</p><p class='card-text'> Humidity: " + hum +
          "</p><p class='card-text'> Windspeed: " + wSpd +
          "</p><p class='card-text' id='UVD'>" +
          "</p></div>"
        );
        //Finds/displays UV index
        findUV();
        function findUV(){
            qURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" +lat +"&lon=" + lon
            $.ajax({
                url: qURL,
                method: "GET"
            })
                .then(function(response) {
                    var UVEx = response.value;
                    $("#UVD").html("UV Index: <span class='badge badge-danger'>" + UVEx + "</span>");
                });
        };
        fiveForecast();
      });
};

//Retrieves/displays five-day forecast
function fiveForecast(){
  //var sTerm = sInput.val().trim()  Don't forget!
  //Prevents duplicates
  subCol.empty();
  var qURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&exclude=current,minutely,hourly&units=imperial&appid=" + key
    $.ajax({
      url: qURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        for(i = 1; i < 6; i++){
          var card = $("<div>").attr("class", "card")
          var date = response.daily[i].dt;
          var temp = response.daily[i]
          console.log(date);
        };
      });
}

