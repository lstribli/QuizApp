"use strict";
//check the state of quizstarted
//return either questions or welcome page
//store.questions
//store.questionNumber
//map over answers array


function startQuiz() {
  
  : false,
  if (STORE.quizStarted)
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



//log value of submitted radio button
function formEventHandler() {
  $('main').on('submit', 'form', event => {
    event.preventDefault();
    console.log(event.target.answer.value);
  });
}

function switchQuestion() {
for (let i=0; i<questions.length; i++) { correctAnswers=[]; for (letter in questions[i].answers){ answers.push(${STORE.QUESTION})
}
//make sure answer is correct

//if correct increment score
//if incorrect

//increment




