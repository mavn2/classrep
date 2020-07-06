//Allows questions to be quickly accessed from local storage
var questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);//keeping this for testing just in case but don't forget

//Vars to access the center card through dom
var header = document.getElementById('top');
var center = document.getElementById('center');
var footer = document.getElementById('bottom');
var hanger = document.getElementById('hanger')

//Var to Store Question Number
var qNum=0

//Code for button to start quiz
var startB = document.getElementById('start');
startB.addEventListener("click",function(){
    qNum=0
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
        //setting id for reference
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
                var sub = questions[qNum].choices[iNum]
                console.log(sub)
                var check = questions[qNum].answer
                console.log(check)
                if(sub === check){
                    console.log('easy!')
                }
            };
        });
        
        
    };
};




//Function to advance to next question
//Timer 