//Sets time for each row through API

var currentTime = moment();
console.log(currentTime)

function refresh(time){}

function setTimes(){
    $("#hour-1").text(moment().hour(9,"hh"))
    $("#hour-2").text(moment().hour(10,"hh"))
}
setTimes();