var repo = require('../models/repo');
var forEach = require('mout/array/forEach');

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
  repo.addQuestion(obj);
});