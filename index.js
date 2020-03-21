'use strict';

function refresh() {
  startQuiz();
  generateQuiz();
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
  generateQuestionsElement();
}


// when the page loads, call `refresh`
$(refresh);
