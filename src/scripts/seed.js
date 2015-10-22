var models = require('../models/all');
var forEach = require('mout/array/forEach');
var Question = models.question;
var Option = models.option;

var data = [
  {
    question: {
      body: 'How long can dogs breathe under water?',
    },
    options: [
      'one minute',
      '27 seconds',
      'not a single second',
      'forever',
    ],
  },
  {
    question: {
      body: 'Which battle is more epic?',
    },
    options: [
      'Friedman vs. Keynes',
      'Snoopy vs. Snoop Dog',
      'Portland vs. Austin',
      'Star Wars vs. Star Trek',
    ],
  },
  {
    question: {
      body: 'How many licks does it take to get to the center of a tootsie pop? ',
    },
    options: [
      '3',
      '2',
      '242',
      'none',
    ],
  },
];


forEach(data, function (obj) {
  Question
    .build({
      body: obj.question.body,
    })
    .save()
    .then(function (question) {
      forEach(obj.options, function(opt, index) {
        Option.create({
          body: opt,
          position: index,
          questionId: question.id,
        });
      });
    })
    .catch(function (err) {
      console.trace(err);
    });



});



var q1 = Question.create({
  body: 'How long can dogs breathe under water?'
});
