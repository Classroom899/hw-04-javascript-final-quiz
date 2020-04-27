// Start off by pseudo coding - You'll need to read each step carefully and make sure to add a main function to bring all your smaller pieces together
// Need an entire question container element
var question = document.getElementById('question')
var questionBox = document.getElementById("questionContainer");
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



var questionStart {
  var questions: [
                  {q: "What is the file extension for when using JavaScript?",options:["A).xml", "B).js", "C).javascript", "D).java"], answer:2},
                  {q: "What kind of number does Math.random() return?",options:["An integer", "B)Whole number", "C)Floating-point", "D)Nothing"],answer:3},
                  {q: "What is JavaScript?",options:["A)A programming language with object-oriented capabilities", "B)Food", "C)Movie script", "D)Lights"],answer:1},


      

    ]
      document.addEventListener("click", startQuiz() {
      document.getElementById("startBtn").innerHTML = "Start Quiz";
    });

    questionBox.innerHTML=question.questions[question.index].q;
    answer1.innerHTML=question.questions[questions.index].options[0];
    answer2.innerHTML=question.questions[questions.index].options[1];
    answer3.innerHTML=question.questions[questions.index].options[2];
    answer4.innerHTML=question.questions[questions.index].options[3];

    

    function generateQuestion() {
      var question = getElementById("question");
      if (pos >= questions.length) {
        questionContainer.innerHTML = "<h2  " + correct + "  of  " + questions.length + "  questions correct<h2>";
      }
    }

};
}
    

  
    
    
    


  



// Put my questions into an array to use to go through the questions
//Arrays start at zero so I need question to be equal to questions array at the starting position using zero
//Keep to this format and keep going on it -  1 because it goes from 0 to 1
//Ends with 2 because I only have 3 questions in total





//I'd like that universal variable for multiple elements 
// I'll also have to add in a pos - This tells us where the user taking the quiz is within the quiz(basically a spot to have in there and tell the program)
// Javascript starts at 0
var pos = 0, quiz, test, correct, question, option1, option2, answer, 

// mainFunction

var startButton = document.getElementById("startBtn")

// Timer - leave this to the end and add it in because the timer is confusing

// generateQuestion function


document.addEventListener("click", function(){
  document.getElementById("answer1").innerHTML = "Hello World";
  console.log("answer1")
});


