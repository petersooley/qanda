var models = require('../models/all');
var forEach = require('mout/array/forEach');
var Question = models.question;
var Option = models.option;

function Repo() {

}

Repo.addQuestion = function addQuestion(obj) {
  return Question
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
}

Repo.findAll = function() {
  return Question.findAll({
    include: [Option],
    //order: 'questions.updatedAt DESC' //fixme
  });
}

module.exports = Repo;

