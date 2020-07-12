//Sets time for each row through API

var currentTime = moment();
console.log(currentTime)

function refresh(time){}
var hour1 =moment().hour(09).minute(00).second(00);
var hour2 =moment().hour(10).minute(00).second(00);
var hour3 =moment().hour(11).minute(00).second(00);
var hour4 =moment().hour(12).minute(00).second(00);
var hour5 =moment().hour(13).minute(00).second(00);
var hour6 =moment().hour(14).minute(00).second(00);
var hour7 =moment().hour(15).minute(00).second(00);
var hour8 =moment().hour(16).minute(00).second(00);
var hour9 =moment().hour(17).minute(00).second(00);

function setTimes(){
    $("#hour-1").text(hour1)
    $("#hour-2").text(hour2)
}
setTimes();