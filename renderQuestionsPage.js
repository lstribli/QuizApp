'use strict';

//initially call the start page HTML
function startPage() {
  $('.js-start-page').show();
  $('.js-final-page').hide();
  $('.js-question-page').hide();
  $('.js-notification').hide();
};
//when clicked, the start quiz button hides the start page, then displays the questions pages with a reset score
function handleStart() {
  $('.js-start-quiz').click(function () {
    event.preventDefault();
    console.log('start button clicked');
    $('.js-start-page').hide();
    $('.js-final-page').hide();
    $(startQuiz());
  });
}

//reset the score and question number while displaying the first question
function startQuiz() {
  STORE.questionNumber = 0;
  STORE.score = 0;
  renderQuestion();
  // $('js-notification').text('The quiz has started');
  $('.js-question-page').show();
  // $('main').html(generateQuestionsElement());
}
//from the final page, reset the score and question number and show the first question
// function restartHandler() {
//   $('.js-restart').click(() => {
//     $('.js-final-page').hide();
//     startQuiz();
//   });
// }
//Insert the questions into the HTML page
function generateQuestionsElement() {
  return `
    <form class="formOne">
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
        <button type="submit">Submit</button>
    </form>
   `;
}
//generate the proper questions and answers inside the questions page
function renderQuestion() {
  const questionAnswers = generateQuestionsElement(STORE.questions);
  $('.js-question-page').html(questionAnswers);
}

function checkAnswer() {
  $("body").on('click', 'button[type="submit"]', function (e) {
    e.preventDefault();
    let selValueByClass = $('input[name="answer"]': checked).val();
    return handleNewAnswer(selValueByClass);
  });
}

// //   //on submit, check the answer and tally score while advancing page number until the final page
function handleNewAnswer(selValueByClass) {
  //set right asnwer to a piece of data "correcanswer"
  const correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  //compare correctAnswer to submitted answer


  // if selValueByClass === STORE.questions.correctAnswer.val()) {
  // $('js-notification').text('correct answer');
  if (selValueByClass === correctAnswer) {
    STORE.score++;
    STORE.questionNumber++;

    $('js-not-page').show().text('The answer you selected was correct');
  }
  if (selValueByClass !== correctAnswer) {
    $('js-not-page').show().text('The answer you selected was incorrect');
  }
  if (STORE.questionNumber <= STORE.questions.length) {
    $('.js-question-page').show();


    console.log('not done');

  }
  else {
    $('.js-final-page').show();
    console.log('done');
  }
}
// function renderFinalWindow() {
//   $('js-question-page').hide();
//   $('js-final-page').show();
//   $('js-final-message').text('quiz is over your score is ${STORE.score}');
// }


//   //log value of submitted radio button
// function formEventHandler() {
//   $("body").on('click', 'button[type="submit"]', function (e) {
//     e.preventDefault();
//     handleNewAnswer();
//     console.log('answer submitted');
//     $('.js-start-page').hide();
//   });
// }
