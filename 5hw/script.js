
//Current time retrieved through API
var currentTime = moment();

//Displays current date/time in header
setHeaderDisplay();
function setHeaderDisplay(){
    $("#currentDay").text(currentTime.format("dddd, MMMM Do, h:mm:ss A"));
};

//Moment times for each hour
var hour1 = moment().hour(09).minute(00).second(00);
var hour2 = moment().hour(10).minute(00).second(00);
var hour3 = moment().hour(11).minute(00).second(00);
var hour4 = moment().hour(12).minute(00).second(00);
var hour5 = moment().hour(13).minute(00).second(00);
var hour6 = moment().hour(14).minute(00).second(00);
var hour7 = moment().hour(15).minute(00).second(00);
var hour8 = moment().hour(16).minute(00).second(00);
var hour9 = moment().hour(17).minute(00).second(00);
var hoursArray = [hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9]


//Writes times to apropriate rows w/ moment
//iString var is local throughout to prevent any conflict, however unlikely
setTimes();
function setTimes(){
    for(i = 0; i <hoursArray.length; i++){
        iString = i.toString();
        $("#hour-" + iString).text(hoursArray[i].format("hA"));
    };
}

//Refreshes timer at .5 second intervals
refreshTime()
function refreshTime(){
    setInterval(function(){
        currentTime = moment();
        setHeaderDisplay();
    }, 500);

};

//Checks current time against hours, sets classes accordingly
setClasses();
function setClasses(){
    for(i = 0; i < hoursArray.length; i++){

        var iString = i.toString()
        var future = false;
        var current = false;
        var past = false;

        function togglesClasses(){
            $("#"+iString).toggleClass("future",future);
            $("#"+iString).toggleClass("present", current);
            $("#"+iString).toggleClass("past", past);
        };

        if (currentTime.isBefore(hoursArray[i], "hour") === true){
            future = true;
            togglesClasses();
        } else if (currentTime.isSame(hoursArray[i], "hour") === true){
            current = true;
            togglesClasses();
        } else if (currentTime.isAfter(hoursArray[i], "hour") === true){
            past = true;
            togglesClasses();
        };
    };
};

//Defines save button-setHour is local to any chance of conflict
$(".btn").on("click", function(){
    var input = $(this).siblings("textarea").val()
    var dIndex = $(this).attr("data-index")
    var setHour = hoursArray[dIndex].format("M D YYYY H")
    localStorage.setItem(setHour, input)  
});

//Checks for items in local storage-checkHour is local to prevent any chance of conflict
checkLS();
function checkLS(){
    for(i = 0; i < hoursArray.length; i++){
        iString = i.toString()
        var checkHour = hoursArray[i].format("M D YYYY H")
        var savedEntry = localStorage.getItem(checkHour)
        if (savedEntry){
            $("#"+iString).text(savedEntry)
        }
    }
}
