'use strict';

function refresh() {
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
