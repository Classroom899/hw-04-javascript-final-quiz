// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together
// Need an entire question container element
var question = document.getElementById('question')
var questionBox = document.getElementById('questionContainer')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var currentQuestion = document.getElementById('')

// Declare the questionIndex here and the current Question
var questionIndex = -1
var quizQuestions = [
  {
    q: 'What is a string?',
    options: [
      'A: Any grouping of characters surrounded by single or double quotes',
      'B: A place',
      'C: An inner HTML',
      'D: A new function',
    ],
    answer: 1,
  },
  {
    q: 'What kind of number does Math.random return?',
    options: [
      'A: An integer',
      'B: A floating point',
      'C: A whole number',
      'D: Nothing',
    ],
    answer: 2,
  },
  {
    q: 'What does null represent?',
    options: [
      'A: A new game coming out',
      'The intentional absence of value',
      'C: A new idea',
      'D: An SQL element',
    ],
    answer: 2,
  },
]

// Initially for this I want it as no question selected first because the questionIndex is set to -1;
var currentQuestion // Have to delcare this at the top section
var person = { first: 'Joe', last: 'Santos', likesMovies: true, age: 22 }
var cars = ['BMW', 'VW', 'Ferrari']

// Will need the start button here in order to startQuiz

// Arrays - Loop through the arrays

// Updated the main function to initializaNextQuestion to make this more intuitive
// Re-named questionStart to currentQuestion and need to make it a global variable
function initializeNextQuestion() {
  questionIndex++ // Need this to increment the question number
  currentQuestion = quizQuestions[questionIndex] //Make sure to declare this at the top
  if (questionIndex >= 0 && questionIndex < quizQuestions.length) {
    questionBox.innerHTML = currentQuestion.q
    // Reducing the code here with a for loop
    for (var i = 0; i < 4; i++) {
      // Four choices here to pick from
      const ithAnswerHTMLElement = eval(`answer${i + 1}`)
      // console.log(ithAnswerHTMLElement);
      ithAnswerHTMLElement.innerHTML = currentQuestion.options[i]
      // Reset the background color of the answer box so that it can show correct and incorrect color choices for the answers
      ithAnswerHTMLElement.style.backgroundColor = `#F5DEB3` // Using inner style here for the color
    }
  }
  // questionTitle.innerText = individualQuestion.question; Not really needing this anymore
}

// To actually update the currentQuestion
function onNextClicked() {
  initializeNextQuestion()
}

function startQuiz() {
  // changed questionStart to startButton - Less confusing that way
  // Function is only going to be hit at the start of the quiz so I've chaged the startButton display
  var startButton = document.getElementById('startBtn') //This (should) make the start button the element that makes the first question appear once it's hit
  startButton.style.display = 'none'

  // Enable the next button here
  nextButton.disabled = false

  // function generateQuestion() {
  //   var question = getElementById('question')
  //   if (pos >= questions.length) {
  //     questionContainer.innerHTML =
  //       '<h2  ' +
  //       correct +
  //       '  of  ' +
  //       questions.length +
  //       '  questions correct<h2>'
  //   }
  // }

  initializeNextQuestion()
}

//I'd like that universal variable for multiple elements
// I'll also have to add in a pos - This tells us where the user taking the quiz is within the quiz(basically a spot to have in there and tell the program)
// Javascript starts at 0

// Also fixed syntax error here at the end of answer and prettier extension might be changing the format?
var pos = 0,
  quiz,
  test,
  correct,
  question,
  option1,
  option2,
  answer

// mainFunction

var startButton = document.getElementById('startBtn')

// Timer - leave this to the end and add it in because the timer is confusing

// generateQuestion function

// document.addEventListener('click', function () {
//   document.getElementById('answer1').innerHTML = ''
//   console.log('answer1')
// })

const nextButton = document.getElementById('next-button')
nextButton.addEventListener('click', onNextClicked)

document.getElementById('startBtn').addEventListener('click', startQuiz)

// The class of "answer" I wanted to create makes sure that we don't have to create an event listener manually for every answer
// From there, we can use a loop to create event listeners

var answerBoxes = document.getElementsByClassName('answer')
// This getElementsByClassName is going to return a NodeList back to me which I want to use
// From there, I can convert it to an array using Array.from(...NodeList Object)

var answerBoxesArray = Array.from(answerBoxes)
console.log(answerBoxesArray) // console.log is working

// Need an event target also

// Create a function to update the correct answwers and have that parameter set
function onAnswerClicked(e) {}
