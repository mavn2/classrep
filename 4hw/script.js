//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);//keeping this for testing just in case but don't forget

//Vars to access the center card through dom
var header = document.getElementById('top');
var center = document.getElementById('center');
var footer = document.getElementById('bottom');
var hanger = document.getElementById('hanger')

//Var to store question number
var qNum=0

//Var to track score
var score = 0

//Vars for highscores in local storage
var score1 = localStorage.getItem("score1")
var score2 = localStorage.getItem("score2")
var score3 = localStorage.getItem("score3")

//Code for button to start quiz
var startB = document.getElementById('start');
startB.addEventListener("click",function(){
    qNum = 0
    score = 0
    renderQuestion();
});



//Function to display quiz in center card
function renderQuestion(){
    header.textContent = questions[qNum].title;
    center.style.display = "none"
    renderChoices();
};

//Function to display answer choices as buttons-
function renderChoices(){
    for(i=0; i<questions[qNum].choices.length;i++){
        //creates element to contain button
        var ansL = document.createElement("li")
        //creates button
        var ansB = document.createElement("button");
        ansB.setAttribute("class","btn btn-primary");
        //makes i retrievable
        ansB.setAttribute("data-index-number", i);
        console.log(ansB.getAttribute('data-index-number'))
        //setting an id for reference
        ansB.setAttribute("id", "answer");
        ansB.innerHTML = questions[qNum].choices[i];

        //places button in li, li in list
        ansL.appendChild(ansB);
        hanger.appendChild(ansL);

        //Creates event for button
        ansB.addEventListener("click",function(){
            //Function to submit/check answer
            var pick = this
            submit();
            function submit(){
                var iNum = pick.getAttribute('data-index-number')
                var sub = questions[qNum].choices[iNum];
                console.log(sub);
                var check = questions[qNum].answer;
                console.log(check);
                if(sub === check){
                    console.log('easy!')
                    score++;
                    console.log(score);
                    next();
                } else {
                    console.log('no!');
                    next();
                };
            };
        }); 
    };
};

//Function to advance to next question
function next(){
    qNum++;
    if(qNum < questions.length){
        console.log(qNum);
        while (hanger.hasChildNodes()){  
            hanger.removeChild(hanger.firstChild);
        };
        renderQuestion();
    } else {
        console.log("stop!!");
        while (hanger.hasChildNodes()){  
            hanger.removeChild(hanger.firstChild);
        };
        header.textContent = "Coding Quiz!";
        center.textContent = "You scored " + score + " points!";
        center.style.display = "inline";

        checkScores();
    };
};

//Function to check score against highscores
function checkScores(){
    //Vars for highscores in local storage
    var score1 = localStorage.getItem("score1")
    var score2 = localStorage.getItem("score2")
    var score3 = localStorage.getItem("score3")

    if(score > score1 || !score1){
        localStorage.setItem("score1", score);
    } else if (score > score2 || !score2){
        localStorage.setItem("score2", score);
        console.log(score + "test")
        console.log(score2)
    } else if (score > score3 || !score3){
        localStorage.setItem("score3", score);
    } else {
    console.log(placeholder);
    };
};

//Timer 
