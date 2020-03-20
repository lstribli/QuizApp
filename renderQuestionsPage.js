"use strict";
//check the state of quizstarted
//return either questions or welcome page
//store.questions
//store.questionNumber
//map over answers array
function generateQuestionsElement() {

  return `
    <form class= "formOne">
        <fieldset>
    
            <legend>What sport involves water?</legend>
        
            <input type="radio" id="basketball" name="sport" value="basketball" required>
            <label for="basketball">Basketball</label><br/>

            <input type="radio" id="soccer" name="sport" value="soccer">
            <label for="soccer">Soccer</label><br/>

            <input type="radio" id="water-polo" name="sport" value="water-polo">
            <label for="water-polo">Water Polo</label><br/>

            <input type="radio" id="lacrosse" name="sport" value="lacrosse">
            <label for="lacrosse">Lacrosse</label><br/>
        </fieldset>
        <button class="submit" type="submit">Submit</button>
    </form>
    `;
}


function startQuiz() {
  $('main').html(generateQuestionsElement());
}

function formEventHandler() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    console.log(event.target.sport.value);
    //(event.currentTarget);
  });
}


