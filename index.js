'use strict';

function refresh() {
    startQuiz()
    generateQuestionsElement();
    //handleAnswerClick();
    // handleAnswerCheck();
    // handleToNextPage();
  }
  
  // when the page loads, call `refresh`
  $(refresh);
