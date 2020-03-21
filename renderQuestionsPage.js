'use strict';

function showStart() {
  $('.js-start-page').show();
  $('main').html(generateStartPage());
}
function generateStartPage() {
  $('<div>Start Quiz</div>');
}
function startPage() {
  $('.js-final-page').hide();
  $('.js-question-page').hide();

}
function handleStart() {
  $('.js-start-quiz').click(() => {
    $('.js-question-page').show();
    $('.js-start-page').hide();
    $('.js-final-page').hide();
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
  $('.js-question-page').show();
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

function renderQuestion() {
  const questionAnswers = generateQuestionsElement(STORE.questions);
  $('#formOne').html(questionAnswers);
}

function answer() {
  let answer = $('input[type=radio]').on('submit', function () {
    $(this).closest('form').submit();
  });

  function handleNewAnswer(answer) {
    if (!answer) {
      $('js-notification').text('correct answer');
    }
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
    showStart();
    startPage();
    handleStart();
    startQuiz();
    restartHandler();
    generateStartPage();
    generateQuestionsElement();
    renderQuestion();
    answer();
    handleNewAnswer();
    formEventHandler();
    renderFinalWindow();
  }

  $(generateQuiz);

}
