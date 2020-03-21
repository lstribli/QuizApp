'use strict';
function renderStart() {
  return `'<js-start-page>'
    
  <div class="js-start-quiz"><button>start</button></div>`;
}

function showStart() {
  $('js-start-page').show();
}
function startPage() {
  $('js-final-page').hide();
  $('js-question-page').hide();

}


function handleStart() {
  $('js-start-quiz').click(() => {
    $('js-question-page').show();
    $('js-start-page').hide();
    $('js-final-page').hide();
    startQuiz();
  });
}

function restartHandler() {
  $('.js-restart').click(() => {
    $('.js-final-page').hide();
    startQuiz();
  });
}

function startQuiz() {

  STORE.questionNumber = 0;
  STORE.score = 0;
  renderQuestion();
  $('js-notification').text('The quiz has started');
  $('js-question-page').show();
  $('main').html(generateQuestionsElement());

}


function generateQuestionsElement() {
  return `
  <main>
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
    </main>
    `;
}

function renderQuestion() {
  const questionAnswers = generateQuestionsElement(STORE.questions);
  $('#formOne').html(questionAnswers);
}

function handleNewAnswer(answer) {
  if (!answer) {
    $('js-notification').text('correct answer');
  }
  return event.target.answer.value;
}
if (answer === STORE.questions[STORE.questionNumber].correctAnswer) {
  STORE.score++;
}
STORE.questionNumber++;

if (STORE.questionNumber >= STORE.questions.length) {
  $('.js-final-page').show();
} else {
  renderQuestion();
}

function renderFinalWindow() {
  $('js-question-page').hide();
  $('js-final-page').show();
  $('js-final-message').text('quiz is over your score is ${STORE.score}');
}

//log value of submitted radio button
function formEventHandler() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    handleNewAnswer(event.target.answer.value);
  });
}

function renderQuestion() {
  const questionAnswers = generateQuestionsElement(STORE);
  $('#formOne').html(questionAnswers);
}

function generateQuiz() {
  renderStart();
  showStart();
  startPage();
  handleStart();
  startQuiz();
  restartHandler();
  generateQuestionsElement();
  renderQuestion();
  handleNewAnswer();
  formEventHandler();
  renderFinalWindow();
}

$(generateQuiz);

