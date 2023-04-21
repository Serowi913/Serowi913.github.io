let returnButton = document.getElementById("return");
returnButton.hidden = true;
returnButton.addEventListener("click", () => {
    window.location.href = './index.html';
})

const quizDesc = document.getElementById("quiz_desc");
const startQuizButton = document.getElementById("start_quiz_button");

const questionSpan = document.getElementById("question");

const choiceResultText = document.getElementById("choice_result");

const wrongChoiceMessage = "WRONG.";
const rightChoiceMessage = "Correct!";

const choiceButtons = [
    document.getElementById("choice1"),
    document.getElementById("choice2"),
    document.getElementById("choice3"),
    document.getElementById("choice4"),
];

choiceButtons[0].addEventListener("click", choosesChoice1);
choiceButtons[1].addEventListener("click", choosesChoice2);
choiceButtons[2].addEventListener("click", choosesChoice3);
choiceButtons[3].addEventListener("click", choosesChoice4);

const quizQuestions = [
    {
        question: "What color are Beluga Whales when they're born?",

        choice1: "Orange",
        choice2: "White",
        choice3: "Grey",
        choice4: "Black",

        answer: "choice3"
    },

    {
        question: "What state/territory is the Cook Inlet surrounded by?",

        choice1: "Alaska",
        choice2: "British Columbia",
        choice3: "New York",
        choice4: "Quebec",

        answer: "choice1"
    },

    {
        question: "In the Cook Inlet, how many Beluga Whales were accounted for in 1979?",

        choice1: "1,700",
        choice2: "20,200",
        choice3: "1,300",
        choice4: "600",

        answer: "choice3"
    },

    {
        question: "What is the name of a Beluga Whale's head?",

        choice1: "Balloon",
        choice2: "Melon",
        choice3: "Coconut",
        choice4: "Helmet",

        answer: "choice2"
    },

    {
        question: "What family does the Beluga Whale share exclusively with the Narwhal?",

        choice1: "Kentriodontidae",
        choice2: "Monodontinae",
        choice3: "Delphinoidea",
        choice4: "Monodontidae",

        answer: "choice4"
    }

]

let questionsWrong = [false, false, false, false, false];
let score = 0;

let currentQuestion = 0;

startQuizButton.addEventListener("click", () => {
    startQuizButton.remove();
    quizDesc.remove();
    refreshQuiz();
})

function refreshQuiz() {
    if (currentQuestion < 5) {

        questionSpan.innerHTML = quizQuestions[currentQuestion]["question"];
        choiceResultText.innerHTML = "";

        choiceButtons.forEach((x) => {
            x.hidden = false;
            x.innerHTML = quizQuestions[currentQuestion][x.id];
        })
    } else {
        returnButton.hidden = false;
        questionsWrong.forEach((x) => {!x ? score++ : {};}) //This makes me feel so smart.
        choiceButtons.forEach((x) => {x.hidden = true;})
        questionSpan.innerHTML = "Congratulations!";
        questionSpan.style.color = "rgb(255, 221, 126)";
        choiceResultText.innerHTML = "You got " + String(score) + "/5 questions right!";
    }
    
};




function choosesChoice1() {
    if (quizQuestions[currentQuestion]["answer"] === "choice1") {
        reset()
        choiceButtons[0].style.backgroundColor = "#00FF00";
        choiceResultText.innerHTML = rightChoiceMessage;
        choiceResultText.style.color = "rgb(200, 255, 200)";
        setTimeout(function(){
            reset()
            currentQuestion++;
            refreshQuiz();
        },3000);
    } else {
        choiceButtons[0].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        choiceButtons[0].style.color = "rgba(255, 255, 255, 0.4)";
        choiceResultText.innerHTML = wrongChoiceMessage;
        choiceResultText.style.color = "rgb(255, 200, 200)";
        questionsWrong[currentQuestion] = true;
    }
}

function choosesChoice2() {
    if (quizQuestions[currentQuestion]["answer"] === "choice2") {
        reset()
        choiceButtons[1].style.backgroundColor = "#00FF00";
        choiceResultText.innerHTML = rightChoiceMessage;
        choiceResultText.style.color = "rgb(200, 255, 200)";
        setTimeout(function(){
            reset()
            currentQuestion++;
            refreshQuiz();
        },3000);
    } else {
        choiceButtons[1].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        choiceButtons[1].style.color = "rgba(255, 255, 255, 0.4)";
        choiceResultText.innerHTML = wrongChoiceMessage;
        choiceResultText.style.color = "rgb(255, 200, 200)";
        questionsWrong[currentQuestion] = true;
    }
}

function choosesChoice3() {
    if (quizQuestions[currentQuestion]["answer"] === "choice3") {
        reset()
        choiceButtons[2].style.backgroundColor = "#00FF00";
        choiceResultText.innerHTML = rightChoiceMessage;
        choiceResultText.style.color = "rgb(200, 255, 200)";
        setTimeout(function(){
            reset()
            currentQuestion++;
            refreshQuiz();
        },3000);
    } else {
        choiceButtons[2].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        choiceButtons[2].style.color = "rgba(255, 255, 255, 0.4)";
        choiceResultText.innerHTML = wrongChoiceMessage;
        choiceResultText.style.color = "rgb(255, 200, 200)";
        questionsWrong[currentQuestion] = true;
    }
}

function choosesChoice4() {
    if (quizQuestions[currentQuestion]["answer"] === "choice4") {
        reset()
        choiceButtons[3].style.backgroundColor = "#00FF00";
        choiceResultText.innerHTML = rightChoiceMessage;
        choiceResultText.style.color = "rgb(200, 255, 200)";
        setTimeout(function(){
            reset()
            currentQuestion++;
            refreshQuiz();
        },3000);
    } else {
        choiceButtons[3].style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        choiceButtons[3].style.color = "rgba(255, 255, 255, 0.4)";
        choiceResultText.innerHTML = wrongChoiceMessage;
        choiceResultText.style.color = "rgb(255, 200, 200)";
        questionsWrong[currentQuestion] = true;
    }
}


function reset() {
    choiceButtons.forEach((x) => {
        x.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        x.style.color = "rgb(255, 255, 255)";
    })
}