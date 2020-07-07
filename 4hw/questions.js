var questions = [
  {
     title: 'the most common color for website text is:',
     choices: ['black', 'ashwhite','gunsmoke','puce'], 
     answer: 'black'
  },
  {
     title: 'is this one a test?',
     choices: ['yes', 'no', 'maybe so'],
     answer: 'yes',
  },
  {
     title: 'which on of these is right?',
     choices: ['Math.random', 'math.Random','Math.Random()','Math.random()'],
     answer: 'Math.random()',
  },
  {
     title: 'which one of these has what I keep missing?',
     choices: ['obj.tostring;','obj.toString','obj.toString()',],
     answer: 'obj.toString()',
  },
  {
     title: "let's just make sure",
     choices: ['obj.custom()','obj.Custom','obj.custom',],
     answer: 'obj.custom()',
  },
];

//Saves questions to local storage
setQuestions();
function setQuestions(){
    localStorage.setItem("questions",JSON.stringify(questions));
};

//Placeholder highscore to establish array
var scores = [
    {
      name: "Max",
      score: 42,
    },
];

//Saves scores to local storage
setHighScores();
function setHighScores(){
    localStorage.setItem("scores",JSON.stringify(scores))
}

