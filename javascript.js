// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together

// Arrays - Loop through the arrays

function startQuiz() {
    var questionStart = document.getElementById("startBtn"); //This (should) make the start button the element that makes the first question appear once it's hit
        if (questionStart.style.display === "none") {
          questionStart.style.display = "block";
        } else {
          questionStart.style.display = "none";
        }
      }


var questions = [
    ["What is the file extension for when using JavaScript?", "A).xml", "B).js", "C).javascript", "D).java"],
    ["What kind of number does Math.random() return?", "A)An integer", "B)Whole number", "C)Floating-point", "D)Nothing"],
    ["What is JavaScript?", "A)Programming language with object-oriented capabilities", "B)A food", "C)Move script", "D)Lights"],
];

function getElementById(x) {
    return document.getElementById(x); //I'd like that universal variable for multiple elements 
}
// I'll also have to add in a pos - This tells us where the user taking the quiz is within the quiz(basically a spot to have in there and tell the program)
// Javascript starts at 0
var pos = 0, quiz, test, correct

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




// Use choices.length - So original thought with choice A, B, C, or D then use numbers of positioning for those choices



