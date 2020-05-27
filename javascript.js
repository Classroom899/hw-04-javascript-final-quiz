// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together
// Need an entire question container element
var question = document.getElementById('question')
var questionBox = document.getElementById("questionContainer");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var currentQuestion = document.getElementById("");

// Declare the questionIndex here and the current Question
var questionIndex = -1;
var quizQuestions = [
   
  { q: 'What is a string?', options: ['A: Any grouping of characters surrounded by single or double quotes', 'B: A place', 'C: An inner HTML', 'D: A new function'], answer: 1 },
  { q: 'What kind of number does Math.random return?', options: ['A: An integer', 'B: A floating point', 'C: A whole number', 'D: Nothing'], answer: 2 },
  { q: 'What does null represent?', options: ['A: A new game coming out', 'The intentional absence of value', 'C: A new idea', 'D: An SQL element'], answer: 2 },
  
]

// Initially for this I want it as no question selected first because the questionIndex is set to -1;
var currentQuestion; // Have to delcare this at the top section
var person = { first: 'Joe', last: 'Santos', likesMovies: true, age: 22 };
var cars = ['BMW', 'VW', "Ferrari"];

// Will need the start button here in order to startQuiz

// Arrays - Loop through the arrays

// Updated the main function to initializaNextQuestion to make this more intuitive
// Re-named questionStart to currentQuestion and need to make it a global variable
function initializeNextQuestion() {
  questionIndex++; // Need this to increment the question number
  currentQuestion = quizQuestions[questionIndex]; //Make sure to declare this at the top
  if (questionIndex >= 0 && questionIndex < quizQuestions.length) {
    questionBox.innerHTML = currentQuestion.q;
    // Reducing the code here with a for loop 
    for (var i = 0; i < 4; i++) { // Four choices here to pick from
      const ithAnswerHTMLElement = eval(`answer${i+1}`);
      // console.log(ithAnswerHTMLElement);
      ithAnswerHTMLElement.innerHTML = currentQuestion.options[i];
      // Reset the background color of the answer box so that it can show correct and incorrect color choices for the answers
      ithAnswerHTMLElement.style.backgroundColor = `#F5DEB3`; // Using inner style here for the color
    }
  }
  // questionTitle.innerText = individualQuestion.question; Not really needing this anymore 

}





function startQuiz() {
  var questionStart = document.getElementById("startBtn"); //This (should) make the start button the element that makes the first question appear once it's hit
  if (questionStart.style.display === "none") {
    questionStart.style.display = "block";
  } else {
    questionStart.style.display = "none";
  }

  //Will need something to grab the first question


  // questionBox.innerHTML = question.questions[question.index].q;
  // answer1.innerHTML = question.questions[questions.index].options[0];
  // answer2.innerHTML = question.questions[questions.index].options[1];
  // answer3.innerHTML = question.questions[questions.index].options[2];
  // answer4.innerHTML = question.questions[questions.index].options[3];



  function generateQuestion() {
    var question = getElementById("question");
    if (pos >= questions.length) {
      questionContainer.innerHTML = "<h2  " + correct + "  of  " + questions.length + "  questions correct<h2>";
    }
  }

};





//I'd like that universal variable for multiple elements 
// I'll also have to add in a pos - This tells us where the user taking the quiz is within the quiz(basically a spot to have in there and tell the program)
// Javascript starts at 0
var pos = 0, quiz, test, correct, question, option1, option2, answer,

// mainFunction

// var startButton = document.getElementById("startBtn")

// Timer - leave this to the end and add it in because the timer is confusing

// generateQuestion function


document.addEventListener("click", function () {
  document.getElementById("answer1").innerHTML = "";
  console.log("answer1")

});

const button = document
  .getElementById('answer1')
  .addEventListener('click', buttonClick);
console.log(button);




