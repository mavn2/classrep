
//Current time retrieved through API
var currentTime = moment();

//Displays current date/time in header
setHeaderDisplay();
function setHeaderDisplay(){
    $("#currentDay").text(currentTime);
};

//Moment times for each hour
var hour1 =moment().hour(09).minute(00).second(00);
var hour2 =moment().hour(10).minute(00).second(00);
var hour3 =moment().hour(11).minute(00).second(00);
var hour4 =moment().hour(12).minute(00).second(00);
var hour5 =moment().hour(13).minute(00).second(00);
var hour6 =moment().hour(14).minute(00).second(00);
var hour7 =moment().hour(15).minute(00).second(00);
var hour8 =moment().hour(16).minute(00).second(00);
var hour9 =moment().hour(17).minute(00).second(00);
var hoursArray = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9,]

//Writes times to apropriate rows w/ moment
setTimes();
function setTimes(){
    $("#hour-1").text(hour1.format("hA"))
    $("#hour-2").text(hour2.format("hA"))
    $("#hour-3").text(hour3.format("hA"))
    $("#hour-4").text(hour4.format("hA"))
    $("#hour-5").text(hour5.format("hA"))
    $("#hour-6").text(hour6.format("hA"))
    $("#hour-7").text(hour7.format("hA"))
    $("#hour-8").text(hour8.format("hA"))
    $("#hour-9").text(hour9.format("hA")) 
}

//Gets current time
//function refresh(time){}

//Checks current time against hours, sets classes accordingly