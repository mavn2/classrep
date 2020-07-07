//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);//keeping this for testing just in case but don't forget

//Vars to access the center card through dom
var header = document.getElementById('top');
var center = document.getElementById('center');
var footer = document.getElementById('bottom');
var hanger = document.getElementById('hanger')
var nameField = document.getElementById("nameField")
var submit = document.getElementById("save")

//Var to store question number
var qNum=0

//Vars to track score
var score = 0
var userScores =[]

//Vars to track timer
var timeRemaining = 75
var complete = false

//
var score1 = localStorage.getItem("score1")
var score2 = localStorage.getItem("score2")
var score3 = localStorage.getItem("score3")

//Code for button to start quiz
var startB = document.getElementById('start');
startB.addEventListener("click",function(){
    qNum = 0
    score = 0
    timeRemaining = 75
    complete = false
    renderQuestion();
    timer();
    startB.style.visibility = "hidden"
    nameField.style.display = "none"
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
                    timeRemaining = timeRemaining - 15;
                    console.log(timeRemaining)
                    next();
                };
            };
        }); 
    };
};

//Function to advance to next question
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

//Function to display ending card
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

//Function to record user score
function recScore(){
    //Calculates score
    if(timeRemaining <  0){
        timeRemaining = 0
    }
    score = score + timeRemaining;

    //Shows inpot,
    nameField.style.display = "initial";
    submit.addEventListener("click", savScore())
};

//Function to save score to local storage
function savScore(){
     //Creates object to store scores, logs values
    var userScore = {};
    
    userScore.uName = document.getElementById("name").value;
    userScore.score = score;
    userScores.push(userScore);
    console.log(userScore);
        
}
//Function to highscores
function checkScores(){
    //Calculates Score
    if(timeRemaining <  0){
        timeRemaining = 0
    }
    score = score + timeRemaining
    
    //Vars for highscores in local storage
    var score1 = localStorage.getItem("score1")
    var score2 = localStorage.getItem("score2")
    var score3 = localStorage.getItem("score3")

    //Checks score against highscores
    if(score > score1 || !score1){
        localStorage.setItem("score1", score);
    } else if (score > score2 || !score2){
        localStorage.setItem("score2", score);
        console.log(score + "test")
        console.log(score2)
    } else if (score > score3 || !score3){
        localStorage.setItem("score3", score);
    } else if(score < score3){
    console.log('placeholder');
    };
};

//Timer 
function timer(){
    var countdown = setInterval(function(){
    timeRemaining--;
    console.log(timeRemaining)
    
    

    if(timeRemaining === 0){
        clearInterval(countdown);
        quizOver();
    } 

    if(complete === true){
        clearInterval(countdown);
        timeRemaining = timeRemaining + 1
    }



    }, 1000)    
};