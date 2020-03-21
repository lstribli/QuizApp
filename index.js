'use strict';

function refresh() {
  startQuiz();
  generateQuiz();
  renderStart();
  showStart();
  startPage();
  handleStart();
  startQuiz();
  restartHandler();
  generateQuestionsElement();
  renderQuestion();
  newAnswer();
  handleNewAnswer();
  formEventHandler();
  renderFinalWindow();
  generateQuestionsElement();
}

//handleAnswerClick();
// handleAnswerCheck();
// handleToNextPage();


// when the page loads, call `refresh`
$(refresh);
