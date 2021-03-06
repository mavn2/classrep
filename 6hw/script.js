//Vars for use in AJAX calls
var key;
var icon;
var sTerm;
var lat;
var lon;
var name;

//Vars for accessing html
sBtn = $("#search-btn");
sInput = $("#search-inp");
cardCol = $("#main");
subCol = $("#sub");

//Vars for buttons/local storage
var cities = [];
var city;

//Checks for initial search to display
checkStorage();

//Alerts if search fails
$(document).ajaxError(function(){
  alert("Search failed! Please enter city with care.");
});

//Onclick function for search input
sBtn.on("click", function() {
  sTerm = sInput.val().trim();
  event.preventDefault();
  getForecasts();
  sInput.val("").trigger("change");
});

//Retrieves/displays current weather
function getForecasts() {
  //Creates/sends initial query using global variables
  var qURL = "https://api.openweathermap.org/data/2.5/weather?q=" + sTerm + "&units=imperial&appid=" + key;
  $.ajax({
      url: qURL,
      method: "GET"
  })
    .then(function(response) {
      currentForecast(response);
      fiveForecast();
      btnCheck();
      });
};

//Displays current forecast
function currentForecast(response){
  //Prevents duplicate cards
  cardCol.empty();

  //retrieves data from JSON
  name = response.name;
  icon = "<img src='http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png'/>";
  var date = "(" + timeConverter(response.dt + response.timezone) + ")";
  var temp = response.main.temp + " °F";
  var hum = response.main.humidity + "%";
  var wSpd = response.wind.speed + " MPH";
  lat = response.coord.lat;
  lon = response.coord.lon;

  //Saves last search to local storage
  localStorage.setItem("city", name);

  //Displays weather information
  var displayCard = $("<div>");
  displayCard.attr("class", "card");
  cardCol.append(displayCard);
  displayCard.html("<div class='card-body'><h4 class='card-title'>" + name + " " + date + icon +
    "</h4><p class='card-text'> Temperature: " + temp +
    "</p><p class='card-text'> Humidity: " + hum +
    "</p><p class='card-text'> Windspeed: " + wSpd +
    "</p><p class='card-text' id='UVD'>" +
    "</p></div>"
  );
  findUV();
}

//Finds/displays UV index
function findUV(){
  qURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + lat + "&lon=" + lon
  $.ajax({
    url: qURL,
    method: "GET"
    })
      .then(function(response) {
        //determones UV Index color based on intensity
        var UVEx = response.value;
        if(UVEx > 8) {
          $("#UVD").html("UV Index: <span class='badge badge-danger'>" + UVEx + "</span>");
        } else if(UVEx > 3){
          $("#UVD").html("UV Index: <span class='badge badge-warning'>" + UVEx + "</span>");
        } else {
          $("#UVD").html("UV Index: <span class='badge badge-success'>" + UVEx + "</span>");
        };
      });
  };

//Retrieves/displays five-day forecast
function fiveForecast(){
  //Prevents duplicates
  subCol.empty();
  $("#secHeader").remove();
  //Creates section header
  var secHeader = $("<h4>").html("5-Day Forecast").attr("id", "secHeader");
  $(main).after(secHeader);
  //Retrieves forecast
  var qURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&exclude=current,minutely,hourly&units=imperial&appid=" + key;
    $.ajax({
      url: qURL,
      method: "GET"
    })
    //Creates cards
      .then(function(response) {
        for(i = 1; i < 6; i++){
          var date = "<h5 class='card-title'>"+ timeConverter(response.daily[i].dt) + "</h5>";
          icon = "<img src='http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon + ".png'/>";
          var temp = "<p class='card-text'> Temp: " + response.daily[i].temp.day + " °F</p>";
          var hum = "<p class='card-text'> Humidity: " + response.daily[i].humidity + " %</p>";
          var content = $("<div>").attr("class", "card-body").css({"background-color": "blue", "color" : "white"}).html(date + icon + temp + hum);
          var card = $("<div>").attr("class", "card").html(content);
          subCol.append(card);
        };
      });
};

//Checks if button is needed
function btnCheck(){
  if (cities.length === 0){
    btnGen();
  } else {
    for(i = 0; i < cities.length; i++){
      if(cities[i] === name){
        return;
      };
    };
    btnGen();
  };
};

//Stores searched city and creates button
function btnGen() {
  cities.push(name);
  btnMk(name);
  btnClear();
  localStorage.setItem("cities", JSON.stringify(cities));
};

//Handles individual button creation
function btnMk(name){
  var btn = $("<li>").attr({class: "list-group-item list-group-item-action nav-item", id: name}).html(name);
  $(".list-group").append(btn);
  $("#" + name).on("click", function(){
    sTerm = $(this).attr("id");
    getForecasts();
  });
}

function btnClear(){
  //Deletes button if present
  if ($("#clearBtn").length){
    $("#clearBtn").remove();
  };
  //Defines clear button, appends to list
  var cBtn = $("<li>").attr({class: "list-group-item list-group-item-action nav-item", id: "clearBtn"}).html("Clear");
  $(".list-group").append(cBtn);
  $(cBtn).on("click", function() {
    var check = confirm("Are you sure?");
    if (check){
      cities = [];
      city = undefined;
      localStorage.removeItem("city");
      localStorage.removeItem("cities");
      $(".list-group").empty();
      cardCol.empty();
      subCol.empty();
      $("#secHeader").remove();
    }
  });
}

//Checks for/renders last city viewed
function checkStorage() {
  var storedCity = localStorage.getItem("city");
  if(storedCity) {
    sTerm = storedCity;
    getForecasts();
  };
  var storedCities = localStorage.getItem("cities")
  if (storedCities){
    cities = JSON.parse(storedCities)
    for (i=0; i < cities.length; i++){
      name = cities[i];
      btnMk(name);
    };
    btnClear();
  };
};

//Converts Unix time, renders M/DD/YYYY
//Adapted from function posted by user Pitu on stackoverflow, see README.md
function timeConverter(UNIX) {
  var a = new Date(UNIX * 1000);
  var months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var displayedDate = month + "/" + date + "/" + year;
  return displayedDate;
};
