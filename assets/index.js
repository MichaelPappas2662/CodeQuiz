//variables to keep track of quiz state
// variables to reference DOM elements
// import sound effects (optional)

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

//------------------------------------
//QUESTIONS
//------------------------------------
​
// list of all questions, choices, and answers (could use separate js file)
​
​

​
//EVENT LISTENERS
//start event listenter
//submit score listener
​
​

​


    //------------------------------------
    //GAME LOGIC
    //------------------------------------

    //STARTING QUIZ
	// hide start screen
	// un-hide questions section
	// start timer (see TIME)
	// show starting time

var totalTime = 70;

function newQuiz() {
    questionIndex = 0;
    totalTime = 70;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    showQuiz();
};
​
//GETTING QUESTIONS
	// get current question object from array
	// update title with current question
	// clear out any old question choices
	// loop over choices
	// create new button for each choice
	// attach click event listener to each choice
	// display on the page
​function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}
​
//CLICKING ON QUESTIONS
	// display new time on page
	// play "wrong" sound effect
	// play "right" sound effect
	// flash right/wrong feedback on page for half a second
	
	

    function checkAnswer(answer) {
        var lineBreak = document.getElementById("lineBreak");
        lineBreak.style.display = "block";
        answerCheck.style.display = "block";
    
        if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
            // check if user guessed wrong
            correctAns++;
            // console.log(correctAns);
            answerCheck.textContent = "Correct!";
        } else {
            // penalize time
            totalTime -= 10;
            timeLeft.textContent = totalTime;
            answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
        }
    
        questionIndex++;
        // move to next question
        if (questionIndex < questions.length) {
            nextQuestion();
        } else {
            // check if we've run out of questions
            gameOver();
        }
    }
    ​function chooseA() { checkAnswer(0); }

    function chooseB() { checkAnswer(1); }

    function chooseC() { checkAnswer(2); }

    function chooseD() { checkAnswer(3); }
​
//ENDING QUIZ - either when question ends or time endss
	// stop timer
	// show end screen
	// show final score
	// hide questions section
​
​
// TIME
	// update time
	// check if user ran out of time
​
​
// SAVING SCORE
	// get value of input box
	// make sure value wasn't empty
	// get saved scores from localstorage, or if not any, set to empty array
	// format new score object for current user
	// save to localstorage
	// redirect to next page
	// "13" represents the enter key
	// user clicks button to submit initials
	// user clicks button to start quiz
​
​
//------------------------------------
//HIGHSCORES LOGIC
//------------------------------------
​
​
//HIGH SCORE LOGIC (separate script for separate html page)
	// either get scores from localstorage or set to empty array
	// sort highscores by score property in descending order
	// create li tag for each high score
	// display on page
	// run function when page loads
