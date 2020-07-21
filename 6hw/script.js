
//Vars for accessing html
sBtn = $("#search-btn")
console.log(sInput)
//Onclick function for search button
sBtn.on("click", function(){
  event.preventDefault()
  searchFn();
});
//Function to call search
function searchFn(){
  var sTerm = sInput.val();
  var key = "4ad72672269c45f050f13d8aa28bb91b";
  var qURL = "api.openweathermap.org/data/2.5/weather?q=" + sTerm + "&appid=" + key;
  console.log (qURL)
  console.log(sTerm)
};
//Function to display results