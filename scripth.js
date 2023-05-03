const quizData = [
    {
        question: "What does HTML stand for ?",
        a: "Hypertext MarkUp Language",
        b: "HyperText Mark Language",
        c: "Hyper MarkUp Language",
        correct: "a"
    },{
        question: "What does CSS stand for?",
        a: "Cas Style Sheets",
        b: "Cading Style Sheets",
        c: "None of the Above",
        correct : "c"
    },{
        question: "What is the most popular Javascript framework?",
        a: "Vue",
        b: "Next.Js",
        c: "Angular",
        correct : "b"

    },{
        question : "Which framework is used for client side rendering?",
        a: "Next.Js",
        b: "Laravel",
        c:"React.Js",
        correct : "c"
    }
]

const quiz = document.getElementById("quiz")
const questionElement = document.querySelectorAll(".answer")
const questionDisplay = document.getElementById("question")
const a_q = document.getElementById("aQ")
const b_q = document.getElementById("bQ")
const c_q = document.getElementById("cQ")
const submitBtn = document.getElementById("btn")

let currentQuiz =0
let score =0
displayQuiz()
function displayQuiz(){
   deselect()
   const currentQuestionData = quizData[currentQuiz]
   questionDisplay.innerText = currentQuestionData.question
   a_q.innerText = currentQuestionData.a
   b_q.innerText = currentQuestionData.b
   c_q.innerText = currentQuestionData.c
   
}
// select()
function select(){
    let answer = undefined

    questionElement.forEach((ans) => {
        if(ans.checked){
            answer = ans.id
        }
    })

    return  answer
}

function deselect(){
    questionElement.forEach((ans) => {
        ans.checked = false
    })
}


submitBtn.addEventListener("click", function(){
   const answer = select()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){
            displayQuiz()
        }else{
            quiz.innerHTML =
            `<h2>You have correctly answered ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
    
    
})




