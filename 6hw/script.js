
//Vars for accessing html
console.log('test')
sBtn = $("#search-btn")
sInput = $("#search-inp")
//Onclick function for search button
$("#search-btn").on("click", function(){
  alert("test");
  searchFn();
});
//Function to call search
function searchFn(){
  var sTerm = sInput.value();
  var key = "4ad72672269c45f050f13d8aa28bb91b"
  var qURL = "" + sTerm + key
  console.log (qURL)
  console.log(sTerm)
};
//Function to display results