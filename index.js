'use strict';


const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What sport involves water?',
      answers: [
        'basketball',
        'soccer',
        'water-polo',
        'lacrosse'
      ],
      correctAnswer: 'water-polo'
    },
    {
      question: 'Who was the 31st president of the United States ?',
      answers: [
        'Thomas Jefferson',
        'Abraham Lincoln',
        'Herbert Hoover',
        'Franklin Roosevelt'
      ],
      correctAnswer: 'Herbert Hoover'
    },
    {
      question: 'Which month has 31 days ?',
      answers: [
        'February',
        'September',
        'January',
        'April'
      ],
      correctAnswer: 'January'
    },
    {
      question: 'Which is the capital of Texas ?',
      answers: [
        'Austin',
        'Dallas',
        'Houston',
        'San Antonio'
      ],
      correctAnswer: 'Austin'
    },
    {
      question: 'Which is the capital of Texas ?',
      answers: [
        'Austin',
        'Dallas',
        'Houston',
        'San Antonio'
      ],
      correctAnswer: 'Austin'
    }


  ],
  //boolean to start first question
  quizStarted: false,
  //increment by 1 on submit
  questionNumber: 0,
  //increment correect by 1
  score: 0
};

function refresh() {
  STORE.questionNumber = 0;
  STORE.score = 0;
  renderQuestion();
}

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
  $('main').html(questionAnswers);
}

function checkAnswer() {
  $('.startQuiz').on('click', function (e) {
    e.preventDefault();
    console.log('submitted');
    renderQuestion();
    // let selValueByClass = $('input[name="answer"]').val();
  });
}

function bindEventListeners() {
  checkAnswer();
}

function render() {
  bindEventListeners();
}

$(render);