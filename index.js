'use strict';

function refresh() {
  startPage();
  handleStart();
  checkAnswer();
  handleNewAnswer();
  // renderFinalWindow();


}


// when the page loads, call `refresh`
$(refresh);
