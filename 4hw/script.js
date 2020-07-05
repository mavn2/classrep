//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);//keeping this for testing just in case but don't forget

//Code for button to start quiz
var startB = document.getElementById('start');
startB.addEventListener("click",function(){
    console.log('testing b')
});

//Function to display quiz in center box
function renderQuestion(){

};