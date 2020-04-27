// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");



// Arrays - Loop through the arrays

function startQuiz() {
  var questionStart = document.getElementById("startBtn"); //This (should) make the start button the element that makes the first question appear once it's hit
  if (questionStart.style.display === "none") {
    questionStart.style.display = "block";
  } else {
    questionStart.style.display = "none";
  }
}


var quizQuestions {
  var questions: [
  {q: "What is the file extension for when using JavaScript?",options:["A).xml", "B).js", "C).javascript", "D).java"], answer:2},
  {q: "What kind of number does Math.random() return?",options:["An integer", "B)Whole number", "C)Floating-point", "D)Nothing"],answer:3},
  {q: "What is JavaScript?",options:["A)A programming language with object-oriented capabilities", "B)Food", "C)Movie script", "D)Lights"],answer:1},


      

    ]
}




function getElementById(x) {
  return document.getElementById(x); //I'd like that universal variable for multiple elements 
}
// I'll also have to add in a pos - This tells us where the user taking the quiz is within the quiz(basically a spot to have in there and tell the program)
// Javascript starts at 0
var pos = 0, quiz, test, correct, question, option1, option2, answer

// mainFunction

var startButton = document.getElementById("startBtn")

// Timer - leave this to the end and add it in because the timer is confusing

// generateQuestion function

function generateQuestion() {
  var test = getElementById("test");
  if (pos >= questions.length) {
    test.innerHTML = "<h2  " + correct + "  of  " + questions.length + "  questions correct<h2>";
  }
}




// Use choices.length - So, original thought with choice A, B, C, or D then use numbers of positioning for those choices

// We will need a check answer portion also 
function checkAnswer() {

}


// Put my questions into an array to use to go through the questions and I want to add a radio feature
question = questions[pos][0]; //Arrays start at zero so I need question to be equal to questions array at the starting position using zero
option1 = questions[pos][1]; //Keep to this format and keep going on it -  1 because it goes from 0 to 1
option2 = questions[pos][2]; //Ends with 2 because I only have 3 questions in total
test.innerHTML

