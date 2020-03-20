'use strict';

function handleAnswerClick(event) {

}



function handleAnswerCheck() {

}



function handleToNextPage() {

}


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