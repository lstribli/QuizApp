"use strict";
//check the state of quizstarted
//return either questions or welcome page
//store.questions
//store.questionNumber
//map over answers array


function startQuiz() {
  $('main').html(generateQuestionsElement());

}





function generateQuestionsElement() {

  return `
    <form class= "formOne">
        <fieldset>
    
            <legend>What sport involves water?</legend>
        
            <input type="radio" id="basketball" name="answer" value="basketball" required>
            <label for="basketball">Basketball</label><br/>

            <input type="radio" id="soccer" name="answer" value="soccer">
            <label for="soccer">Soccer</label><br/>

            <input type="radio" id="water-polo" name="answer" value="water-polo">
            <label for="water-polo">Water Polo</label><br/>

            <input type="radio" id="lacrosse" name="answer" value="lacrosse">
            <label for="lacrosse">Lacrosse</label><br/>
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
    return event.target.answer.value;
  });
}

function submitEventHandler() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    console.log('submit button clicked');
  
  });
}



