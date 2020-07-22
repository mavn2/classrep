//Vars for use in AJAX call
var key = "4ad72672269c45f050f13d8aa28bb91b";
//Vars for accessing html
sBtn = $("#search-btn")
sInput = $("#search-inp")
cardCol = $("#main")

//Onclick function for search button
sBtn.on("click", function() {
  event.preventDefault()
  searchFn();
});

//Function to call/display current weather
function searchFn() {
  var sTerm = "seattle" //sInput.val().trim();
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
        var displayCard = $("<div>");
        displayCard.attr("class", "card");
        cardCol.append(displayCard);
        console.log(displayCard);
        displayCard.html("<div class='card-body'><h5 class='card-title'>" + name + " " + icon +
          "</h5><p class='card-text'> Temperature: " + temp +
          "</p><p class='card-text'> Humidity: " + hum +
          "</p><p class='card-text'> Windspeed: " + wSpd +
          "</p><p class='card-text' id='UVD'>" +
          "</p></div>"
        );
        findUV();
        function findUV(){
            qURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" +lat +"&lon=" + long
            $.ajax({
                url: qURL,
                method: "GET"
            })
                .then(function(response) {
                    console.log(response)
                });
        };;
    });
};

//function to retrieve/display UV Index

//function findUV(){
    //qURL = "http://api.openweathermap.org/data/2.5/uvi?appid=&lat={lat}&lon={lon}"
    //$ajax({
        
    //})
//}

