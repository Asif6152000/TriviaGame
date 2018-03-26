var questions = [
    {
        question: 'What is the capital city of China ?',
        answers: ["Beijing", "Tokyo", "Ulaanbaator", "Pyonayong"],
        correctAnswer: "Beijing"
    },

    {
        question: 'What is the capital city of India?',
        answers: ["Mumbai", "Banglalore", "New Delhi", "Kabul"],
        correctAnswer: "New Delhi"

    },

    {
        question: 'What is the capital city of Nigeria?',
        answers: ["lome", "Abuja", "Addis Ababa", "Niamey"],
        correctAnswer: "Abuja"

    },

    {

        question: 'What is the capital city of Saudia Arabia?',
        answers: ["Jerusalem", "Istanbul", "Riyadh", "Sanaa"],
        correctAnswer: "Riyadh"

    },

    {

        question: 'What is the capital city of Indonesia?',
        answers: ["Jakarta", "Bangkok", "Kuala Lampur", "Vientiane"],
        correctAnswer: "Jakarta"

    },

    {
        question: 'What is the capital city of Venezuela?',
        answers: ["Quito", "Caracas", "Sao Paulo", "Sucre"],
        correctAnswer: "Caracas"

    },

    {
        question: 'What is the capital city of Romania?',
        answers: ["Libson", "Kiev", "Warsaw", "Bucharest"],
        correctAnswer: "Bucharest"


    }
];



var i = 0
var Timer = setInterval(function () {
    displayQuestion1();
    i++
    if (i === 7) {
        clearInterval(Timer)
    }
}, 5000);
function displayQuestion1() {

    var element = $('<div><h1>' + questions[i].question + '</h1></div>');
    $('#question').html(element)

    var Answer0 = (questions[i].answers[0])
    $('#choice0').html(Answer0)

    var Answer1 = (questions[i].answers[1])
    $('#choice1').html(Answer1)

    var Answer2 = (questions[i].answers[2])
    $('#choice2').html(Answer2)

    var Answer3 = (questions[i].answers[3])
    $('#choice3').html(Answer3)

}

$('#btn0').on('click', function () {
    console.log(questions[i].answers[0]);
    if (questions[i].answers[0] === questions[i].correctAnswer) {
        alert("correct")
    }
    else { alert("incorrect") }
});
$('#btn1').on('click', function () {
    console.log(questions[i].answers[1]);
    if (questions[i].answers[1] === questions[i].correctAnswer) {
        alert("correct")
    }
    else { alert("incorrect") }
    console.log(i);
});


$('#btn2').on('click', function () {
    console.log(questions[i].answers[2]);
    if (questions[i].answers[2] === questions[i].correctAnswer) {
        alert("correct")
    }

    else { alert("incorrect") }



});

$('#btn3').on('click', function () {
    console.log(questions[i].answers[3]);
    if (questions[i].answers[3] === questions[i].correctAnswer) {
        alert("correct")
    }

    else { alert("incorrect") }



});