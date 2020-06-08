// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together
// Need an entire question container element
var question = document.getElementById('question')
var questionBox = document.getElementById('questionContainer')
var answersContainer = document.getElementById('answers-container')
var answer1 = document.getElementById('answer1')
var answer2 = document.getElementById('answer2')
var answer3 = document.getElementById('answer3')
var answer4 = document.getElementById('answer4')
var currentQuestion = document.getElementById('')
var correctAnswers = document.getElementById('score-number') // Wrapper I need for the four answers
var quizTimerDisplay = document.getElementById('quiz-timer') // Display for the quiz timer

// I'll have to add a new section with variables for the answersContainer, timer, and correct answers display
// Spacing automatically fixed by Prettier

var timeCounter = 0 // Need this variable to have/display the current timer amount
var quizTimer // This variable is going to be used for the actual timer function that I'll need to make
const maxTimeForQuiz = 60 // Going to set this as the max time to complete my quiz since it's only three questions so far and it's going to be a constant thing for time - 60 seconds

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
  answersContainer.style.pointerEvents = 'all' // Let all the answers be clickable - This will make the onAnswerClicked function work correctly
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

// Add the timer function
function startTimer() {
  timeCount = maxTimeForQuiz // Reset the timer to the maximum amount of time given for the quiz
  quizTimer = setInterval(() => {
    if (timeCount === 0) {
      clearInterval(quizTimer) // Stop timer
    } else {
      timeCount--
      // Update the display for the user taking the quiz
      updateTimerDisplay()
    }
  }, 1000)
} // Use setInterval for this and make sure to have my if else statement within it

// Will also need a method to update the time display when the time changes due to counting or when the user chooses a wrong answer
function updateTimerDisplay() {
  quizTimerDisplay.innerHTML = timeCount
}

function startQuiz() {
  startTimer() // Start the timer once the user starts the quiz (should work)
  // changed questionStart to startButton - Less confusing that way
  // Function is only going to be hit at the start of the quiz so I've chaged the startButton display
  var startButton = document.getElementById('startBtn') //This (should) make the start button the element that makes the first question appear once it's hit
  startButton.style.display = 'none'

  // Enable the next button here
  nextButton.disabled = false

  initializeNextQuestion()
}

// Add a stop to the timer once the quiz ends
function endQuiz() {
  clearInterval(quizTimer)
}

// Other elements to this I would like to add include displaying the victory screen and hiding other selected answers

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

const nextButton = document.getElementById('next-button')
nextButton.addEventListener('click', onNextClicked)

document.getElementById('startBtn').addEventListener('click', startQuiz)

// The class of "answer" I wanted to create makes sure that we don't have to create an event listener manually for every answer
// From there, we can use a loop to create event listeners

var answerBoxes = document.getElementsByClassName('answer')
// This getElementsByClassName is going to return a NodeList back to me which I want to use
// From there, I can convert it to an array using Array.from(...NodeList Object)

var answerBoxesArray = Array.from(answerBoxes)
// console.log(answerBoxesArray) // console.log is working

answerBoxesArray.forEach((answer) => {
  // console.log(answer)
  answer.addEventListener('click', onAnswerClicked) // Add this in for each answer clicked, this (should) activate the answers being selected
}) // Need to finish the function first

// Need an event target also

// Create a function to update the correct answwers and have that parameter set
function onAnswerClicked(e) {
  // Will need the answer number clicked that from the ID of the HTML element
  const answerID = e.target.id
  console.log(answerID) // console.log works and it logs answer1, answer2, etc. depending on the answer clicked

  const answerNumber = answerID[answerID.length - 1] // Array
  // Using the parseInt to convert a string to a number

  if (currentQuestion.answer === parseInt(answerNumber)) {
    correct++
    correctAnswers.innerHTML = correct // First add this into my function for starting the endQuiz portion - Make sure on the answers clicked that the quiz knows what is correct and what is not 100%
    e.target.style.backgroundColor = 'Lightgreen'
    if (questionIndex === quizQuestions.length - 1) {
      endQuiz() // Quiz ends if this is the last question
    }
  } else {
    e.target.style.backgroundColor = 'Red'
    // Add in the decrease timer counter
    if (timeCount >= 10) {
      timeCount -= 10
    } else {
      timeCount = 0 // Else if the timeCount is equal to zero then call this endQuiz function and end the quiz
      endQuiz() // Time is up but I also want to update the timer display
    }
  }
}
