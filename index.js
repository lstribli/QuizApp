'use strict';

function refresh() {
  startPage();
  handleStart();
  checkAnswer();
  handleNewAnswer();
  $('.js-notification').hide();
  // renderFinalWindow();


}


// when the page loads, call `refresh`
$(refresh);
