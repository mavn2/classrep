var questions = [
  {
     title: 'the most common color for website text is:',
     choices: ['black', 'ashwhite','gunsmoke','puce'], 
     answer: 'black'
  },
  {
     title: 'is this one test?',
     choices: ['yes', 'no', 'maybe so'],
     answer: 'yes',
  },
]

setQuestions();
console.log('test')
function setQuestions(){
    localStorage.setItem("questions",JSON.stringify(questions));
};