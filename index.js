
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      Number: '1',
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
      Number: '2',
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
      Number: '3',
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
      Number: '4',
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
      Number: '5',
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
      Number: '',
      question: '',
      answers: [
        '',
        '',
        '',
        ''
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
  <span class="questionSpan">You are on question ${STORE.questionNumber + 1} of 5!</span>
    <form class="formOne">
        <fieldset>
            <legend>${STORE.questions[STORE.questionNumber].question}</legend>
        
            <input type="radio" id="answer1" name="selectedanswer" value="${STORE.questions[STORE.questionNumber].answers[0]}" required="">
            <label for="answer1">${STORE.questions[STORE.questionNumber].answers[0]}</label><br/>
            <input type="radio" id="answer2" name="selectedanswer" value="${STORE.questions[STORE.questionNumber].answers[1]}">
            <label for="answer2">${STORE.questions[STORE.questionNumber].answers[1]}</label><br/>
            <input type="radio" id="answer3" name="selectedanswer" value="${STORE.questions[STORE.questionNumber].answers[2]}">
            <label for="answer3">${STORE.questions[STORE.questionNumber].answers[2]}</label><br/>
            <input type="radio" id="answer4" name="selectedanswer" value="${STORE.questions[STORE.questionNumber].answers[3]}">
            <label for="answer4">${STORE.questions[STORE.questionNumber].answers[3]}</label><br/>
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
  $('.main').on('click', '.startQuiz', function (e) {
    e.preventDefault();
    refresh();
    renderQuestion();
  });
}

function checkAnswer() {
  let answer = $('input[name="selectedanswer"]:checked').val();
  let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  if (answer === correctAnswer) {
    STORE.score++;
    STORE.questionNumber++;
    renderQuestion();
  }
  console.log('checkanswer SCORE:', STORE.score);
  console.log('checkanswer QUESTIONNUMBER:', STORE.questionNumber);
  if (answer !== correctAnswer) {
    renderErrorPage();
  }
  if (STORE.score === 5) {
    renderFinalPage();
  }
  if (STORE.questionNumber > 4) renderFinalPage();
}
function submitNewAnswer() {
  let prevScore = STORE.score;
  console.log('submitNewAnswer: PREVSCORE =', prevScore);
  $('body').submit(function (e) {
    e.preventDefault();
    checkAnswer();
  });
}
function generateErrorPage() {
  return `
  <h1>Logan's Quiz</h1>
  <h2>Sorry, that answer was incorrect!</h2>
  <h3>The correct answer is ${STORE.questions[STORE.questionNumber].correctAnswer}</h3>
  <button class="next">Next question</button>
<h3>
Your score is ${STORE.score} out of 5!
</h3>
`;
}
function renderErrorPage() {
  let errorPageContent = generateErrorPage();
  $('main').html(errorPageContent);
}

function nextQuestion() {
  $('body').on('click', '.next', function (e) {
    e.preventDefault();
    console.log('error page: next question clicked');
    console.log('error page: QUESTIONNUMBER', STORE.questionNumber);
    STORE.questionNumber++;
    if (STORE.questionNumber > 4) {
      renderFinalPage();
    }
    if (STORE.questionNumber <= 4) {
      renderQuestion();
    }
  });
}

function finalPage() {
  return `
    <h1>Logan's Quiz</h1>
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
    $('main').empty();
    renderStart();
  });
}
function generateStartString() {
  return `
    <h1>Logan's Quiz</h1>
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
  nextQuestion();
  renderStart();
}

function render() {
  bindEventListeners();
}

$(render);


