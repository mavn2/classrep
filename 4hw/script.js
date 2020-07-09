//Accesses questions in local storage
var questions = JSON.parse(localStorage.getItem("questions"));

//Vars to access the center card through DOM
var header = document.getElementById("top");
var center = document.getElementById("center");
var footer = document.getElementById("bottom");
var startB = document.getElementById("start");
var hanger = document.getElementById("hanger");
var nameField = document.getElementById("nameField");
var submit = document.getElementById("save");
var countDown = document.getElementById("countdown");
var viewer = document.getElementById("view")

//Var to store question number
var qNum=0;

//Vars to track/log score
var score = 0;
var userScores = JSON.parse(localStorage.getItem("scores"))
var userScore = {};
var uName;
var uScore;

//Vars to control timer
var timeRemaining = 0;
var complete = false;

//Displays time remaining on page
setCountDown();
function setCountDown(){
    countDown.textContent = "Time = " + timeRemaining;
};

//Button to start quiz
startB.addEventListener("click",function(){
    qNum = 0;
    score = 0;
    timeRemaining = 75;
    complete = false;
    clearHanger();
    renderQuestion();
    setCountDown();
    timer();
    startB.style.visibility = "hidden";
    viewer.style. visibility = "hidden";
    nameField.style.display = "none"; 
});

//Button to submit stores
submit.addEventListener("click", function(){
    savScore();
});

//Button to view high scores
viewer.addEventListener("click",function(){
    viewScores();
})

//Displays quiz question/answers
function renderQuestion(){
    header.textContent = questions[qNum].title;
    center.style.display = "none";
    renderChoices();
};

//Displays answer choices, defines their behavior
function renderChoices(){
    for(i=0; i<questions[qNum].choices.length;i++){
        //creates element to contain button
        var ansL = document.createElement("li")
        //creates button
        var ansB = document.createElement("button");
        ansB.setAttribute("class","btn btn-primary");
        ansB.setAttribute("data-index-number", i);
        ansL.setAttribute("class", "answer");
        ansB.innerHTML = questions[qNum].choices[i];
        ansL.appendChild(ansB);
        hanger.appendChild(ansL);

        //Creates event for button
        ansB.addEventListener("click",function(){
            var pick = this
            submit();
            function submit(){
                var iNum = pick.getAttribute("data-index-number")
                var sub = questions[qNum].choices[iNum];
                var check = questions[qNum].answer;
                if(sub === check){
                    score++;
                    next();
                } else {
                    timeRemaining = timeRemaining - 15;
                    setCountDown();
                    next();
                };
            };
        }); 
    };
};

//Advances to next question or ending
function next(){
    qNum++;
    if(qNum < questions.length){
        clearHanger();
        renderQuestion();
    } else {
        complete = true
        //checkScores();
        quizOver();
    };
};

//Displays ending card
function quizOver(){
    recScore();
    clearHanger();
    header.textContent = "Coding Quiz!";
    center.textContent = "You scored " + score + " points!";
    center.style.display = "initial";
    startB.style.visibility = "visible";
    viewer.style.visibility = "visible"
};

//Prepares to accept user input
function recScore(){
    //Calculates score
    if(timeRemaining <  0){
        timeRemaining = 0
    }
    score = score + timeRemaining;
    nameField.style.display = "initial";
};

//Saves score to local storage
function savScore(){
    uName = document.getElementById("name").value;
    uScore = score;
    userScore = {name: uName, score: uScore}
    userScores.push(userScore);
    localStorage.setItem("scores",JSON.stringify(userScores))
}

//Displays top scores
function viewScores(){
    userScores.sort(function(a, b){return b.score-a.score});
    center.textContent = "Top Scores";
    nameField.style.display = "none";
    for(i = 0; i < userScores.length; i++){
        var hiScore = document.createElement("li");
        hiScore.setAttribute = ("class", "scoreList");
        hiScore.textContent = "Name: " + userScores[i].name + "  Score: " + userScores[i].score;
        hanger.appendChild(hiScore)
    }
};

//Clears ol element

function clearHanger(){
    while (hanger.hasChildNodes()){  
        hanger.removeChild(hanger.firstChild);
    };
}
//Timer 
function timer(){
    var countdown = setInterval(function(){
    timeRemaining--;
    setCountDown();

    if(timeRemaining === 0 || timeRemaining < 0){
        clearInterval(countdown);
        quizOver();
    } 

    if(complete === true){
        clearInterval(countdown);
        timeRemaining = timeRemaining + 1;
        setCountDown();
    }

    }, 1000)    
};