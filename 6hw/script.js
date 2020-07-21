//Vars for accessing html
sBtn = $("#search-btn")
sInput = $("#search-inp")

//Onclick function for search button
sBtn.on("click", function() {
  event.preventDefault()
  searchFn();
});

//Function to call search
function searchFn() {
  var sTerm = sInput.val().trim();
  var key = "4ad72672269c45f050f13d8aa28bb91b";
  var qURL = "https://api.openweathermap.org/data/2.5/weather?q=" + sTerm + "&appid=" + key;
  console.log (qURL)
  console.log(sTerm)
  $.ajax({
      url: qURL,
      method: "GET"
  })
    .then(function(response) {
      console.log(response)
      var name = response.name;
      var icon = response.weather[0].icon
      var time = response.dt + response.timezone
      var temp = Math.round((response.main.temp - 273.15) * 1.8 + 32) + " °F";
      var hum = response.main.humidity + "%";
      var wSpd = response.wind.speed + " MPH";
      var lat = response.coord.lat;
      var long = response.coord.lon;
      console.log(temp, name, hum, wSpd, lat, long, icon, time);
    })
};

//Function to display primary forcast
