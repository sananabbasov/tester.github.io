
// Question constructor

function Question(text, choise, answer){
    this.text = text;
    this.choise = choise;
    this.answer = answer;
}


// Question prototype

Question.prototype.chechAnswer = function(answer){
    return this.answer === answer;
}


// Quiz constructor

function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz prototype

Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish = function(){
   return this.questions.length === this.questionIndex
}


// Quiz guess

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.chechAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;

}


var q1 = new Question("En yaxsi mentor kimdi?", ["Murad","Orxan","Sanan"], "Sanan");
var q2 = new Question("En yaxsi muellim kimdi?", ["Elxan muellim","Sanan muellim","Murad muellim"], "Elxan muellim");
var q3 = new Question("Cavab nedir?", ["Yoxdu","Var","Hamisi"], "Hamisi");


var questions = [q1,q2,q3]



// Start quiz


var quiz = new Quiz(questions);

// console.log(quiz.isFinish());


// console.log(quiz.getQuestion());
// quiz.guess("Sanan")

// console.log(quiz.getQuestion());
// quiz.guess("Elxan muellim")
// console.log(quiz.getQuestion());
// quiz.guess("Hamsssisi")



// console.log(quiz.score);
// console.log(quiz.isFinish());


loadQuestion()


function loadQuestion(){
    if (quiz.isFinish()) {
        // Show score
        showScore()
    }else{
        var question = quiz.getQuestion()
        var choices = question.choise;

        document.querySelector('#questions').textContent = question.text;
         
        for (let i = 0; i < choices.length; i++) {
            var element = document.querySelector("#choice" + i)
            element.innerHTML = choices[i];

            guess('btn' + i, choices[i])

        }
        showProgress();
    }
}


function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess)
        loadQuestion()
    }
}
function showScore() {
    var html = `<h2>Score</h2> <h4>${quiz.score}</h4>`;

    document.querySelector(".card-body").innerHTML = html


}


function showProgress() {
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex+1;
    document.querySelector("#progress").innerHTML = "Question " + questionNumber + "/" + totalQuestion

}