"use strict";
//check the state of quizstarted
//return either questions or welcome page
//store.questions
//store.questionNumber
//map over answers array

function start () {
  
}

function startQuiz() {
  $('main').html(generateQuestionsElement());

}

function generateQuestionsElement() {


  return `
    <form class= "formOne">
        <fieldset>
    
            <legend>${STORE.questions[STORE.questionNumber].question}</legend>
        
            <input type="radio" name="answer" value="${STORE.questions[STORE.questionNumber].answers[0]}" required>
            <label for="answer">${STORE.questions[STORE.questionNumber].answers[0]}</label><br/>

            <input type="radio" name="answer" value="${STORE.questions[STORE.questionNumber].answers[1]}">
            <label for="answer">${STORE.questions[STORE.questionNumber].answers[1]}</label><br/>

            <input type="radio" name="answer" value="${STORE.questions[STORE.questionNumber].answers[2]}">
            <label for="answer">${STORE.questions[STORE.questionNumber].answers[2]}</label><br/>

            <input type="radio" name="answer" value="${STORE.questions[STORE.questionNumber].answers[3]}">
            <label for="answer">${STORE.questions[STORE.questionNumber].answers[3]}</label><br/>
        </fieldset>
        <button class="submit" type="submit">Submit</button>
    </form>
    `;
}



//log value of submitted radio button
function formEventHandler() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    console.log(event.target.answer.value);
  });
}

function renderQuestion () {
  const questionAnswers = generateQuestionsElement(STORE);
  $('#formOne').html(questionAnswers);
}


function updateCurrentScore () {
  console.log('updateCurrentScore has run')
}



function answerSelectCorrect () {
  console.log('answerSelectCorrect has run');

}
function answerSelectWrong () {
  console.log('answerSelectWrong has run')
}

function clickToStartNextQuestion () {
  console.log('clickToStartNextQuestion has run')
}

function generateResultsPage () {
  console.log('generateResultsPage has run')
}

function clickToRestart () {
  console.log('clickToRestart has run')
}

function generateQuiz () {
  startQuiz();
  renderQuestion();
  updateCurrentScore();
  answerSelectCorrect();
  answerSelectWrong();
  clickToStartNextQuestion();
  generateResultsPage();
  clickToRestart();
}

$(generateQuiz);



