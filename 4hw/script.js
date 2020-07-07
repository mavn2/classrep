//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));

//Vars to access the center card through DOM
var header = document.getElementById('top');
var center = document.getElementById('center');
var footer = document.getElementById('bottom');
var startB = document.getElementById('start');
var hanger = document.getElementById('hanger');
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
    setCountDown();
    renderQuestion();
    timer();
    startB.style.visibility = "hidden";
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

//Function to display quiz in center card
function renderQuestion(){
    header.textContent = questions[qNum].title;
    center.style.display = "none";
    renderChoices();
};

//Displays answer choicesm, defines their behavior
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
                    timeRemaining = timeRemaining - 15;
                    setCountDown();
                    console.log(timeRemaining)
                    next();
                };
            };
        }); 
    };
};

//Advances to next question or ending
function next(){
    qNum++;
    //Renders next question if any remain, results if not
    if(qNum < questions.length){
        console.log(qNum);
        while (hanger.hasChildNodes()){  
            hanger.removeChild(hanger.firstChild);
        };
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
    console.log("stop!!");
    while (hanger.hasChildNodes()){  
        hanger.removeChild(hanger.firstChild);
    };
    header.textContent = "Coding Quiz!";
    center.textContent = "You scored " + score + " points!";
    center.style.display = "initial";
    startB.style.visibility = "visible";
};

//Prepares to accept user input
function recScore(){
    //Calculates score
    if(timeRemaining <  0){
        timeRemaining = 0
    }
    score = score + timeRemaining;

    //Shows input field and preps save button
    nameField.style.display = "initial";
};

//Saves score to local storage
function savScore(){
     //Logs name/score as obj, adds to array
    uName = document.getElementById("name").value;
    uScore = score;
    userScore = {name: uName, score: uScore}
    userScores.push(userScore);
    localStorage.setItem("scores",JSON.stringify(userScores))
}

//Displays top five scores
function viewScores(){
    userScores.sort(function(a, b){return b.score-a.score})
    console.log(userScores)
};

//Timer 
function timer(){
    var countdown = setInterval(function(){
    timeRemaining--;
    setCountDown();
    
    

    if(timeRemaining === 0){
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