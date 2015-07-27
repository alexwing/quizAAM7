var models = require('../models/models.js');

//get /quizes/question

exports.question = function (req,res){
	models.Quiz.findAll().success(function(quiz) {
		res.render('answer', {pregunta:quiz[0].pregunta})
	})
};
//get /quizes/answer
exports.answer = function (req,res){
	models.Quiz.findAll().success(function(quiz) {
		if (req.query.respuesta === req.query.answer){	
			res.render('answer', {respuesta:"Correcto"})
		} else {
			res.render('answer', {respuesta:"Incorrecto"})
		}
	})
};
