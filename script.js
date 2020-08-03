const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const timer = document.getElementById("timer")
const scoreDiv = document.getElementById("score");
const question = document.getElementById("question");
const counter = document.getElementById("counter");

const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");






let questions = [
    {
        question: "How many stars on the American flag?",
        choice1: "25",
        choice2: "150",
        choice3: "50",
        choice4: "10",
        correct: "3",
    },
    {
        question: "Does pineapple belong on pizza?",
        choice1: "No",
        choice2: "No",
        choice3: "Yes",
        choice4: "Definitely NOT",
        correct: "4"
    },
    {
        question: "Who is our current president?",
        choice1: "George Washington",
        choice2: "Abraham Lincoln",
        choice3: "Donald Trump",
        choice4: "Barack Obama",
        correct: "3",
    },
    {
        question: "CSS is the acronym for?",
        choice1: "Cascading style sheets",
        choice2: "Counter special stars",
        choice3: "Cascading sheets",
        choice4: "Cute special signs",
        correct: "1",
    },
    {
        question: "How many planets in our solar System?",
        choice1: "Infinite",
        choice2: "8",
        choice3: "800",
        choice4: "1 billion",
        correct: "10",

    },
    {
        question: "How many ounces in a gallon?",
        choice1: "128",
        choice2: "64",
        choice3: "32",
        choice4: "1 cup",
        correct: "80",
    }

];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
let TIMER;
var score = 0;

function renderQuestion() {
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}

start.addEventListener("click", quizStart)

function quizStart() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}



function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++

    }
    
    else {
        count = 0;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }
        else{
            clearInterval(TIMER);
        }
    }

    





}



function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        clearInterval(TIMER);
        scoreRender()
        
    }
   

}


function scoreRender(){
    scoreDiv.style.display = "block";

    const scorePercent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML +="<p>"+ scorePercent +"%</p>";

}











