
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      questionNumber: 0,
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
      questionNumber: 1,
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
      questionNumber: 2,
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
}

function generateQuestionsElement() {
  return `
    <form class="formOne">
        <fieldset>
    
            <legend>${STORE.questions[STORE.questionNumber].question}</legend>
        
            <input type="radio" name="answer" value="${STORE.questions[STORE.questionNumber].answers[0]}">
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

function clickStart() {
  $('.startQuiz').on('click', function (e) {
    e.preventDefault();
    refresh();
    renderQuestion();
  });
}


// function getAnswer() {
//   // const answer = $("input[name='answer']:checked").val();
//   console.log('answer submitted');
//   console.log(answer);
//   return answer;
// }
function submitNewAnswer() {
  $('main').submit(function (e) {
    e.preventDefault();
    if (STORE.questionNumber <= 4) {
      checkAnswer();
    }
    pageHandler();
    renderFinalPage();
  });
}
function checkAnswer() {
  let answer = $("input[name='answer']:checked").val();
  let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  if (answer === correctAnswer) {
    STORE.score++;
    STORE.questionNumber++;
  }
  if (answer !== correctAnswer) (alert('incorrect'));
}

function pageHandler() {
  if (STORE.questionNumber < 4) {
    renderQuestion();
  }
}
function finalPage() {
  return `
  <header>
      <h1>Logan's Quiz</h1>
    </header>
      <h2>You've completed my quiz!</h2>
      <button class="retake">Retake Quiz</button>
    <h3>
    Your score was ${STORE.score} out of 5!
    </h3>
  `;
}
function renderFinalPage() {
  let finalPageContent = finalPage();
  if (STORE.questionNumber > 4) {
    $('main').html(finalPageContent);
  }
}
function clickRetake() {
  $('main').on('click', '.retake', function (e) {
    e.preventDefault();
    refresh();
    renderStart();
  });
}
function generateStartString() {
  return `<header>
  <h1>Logan's Quiz</h1>
</header>
<h2>Welcome to the quiz!</h2>
<button class="startQuiz">Start Quiz</button>`;
}
function renderStart() {
  const start = generateStartString();
  $('main').html(start);
}
function bindEventListeners() {
  refresh();
  clickStart();
  submitNewAnswer();
  clickRetake();

}

function render() {
  bindEventListeners();
}

$(render);


