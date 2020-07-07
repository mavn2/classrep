var questions = [
  {
     title: 'the correct way to call a function is',
     choices: ['fn: name;', 'name();','function name();', 'puce'], 
     answer: 'name();'
  },
  {
     title: 'The syntax for an object is:',
     choices: ['key: value', 'name : value', 'value:key'],
     answer: 'key: value',
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

//Saves scores to local storage if required
var check = localStorage.getItem("scores")
if(!check){
    setHighScores();
}
function setHighScores(){
    localStorage.setItem("scores",JSON.stringify(scores))
}

