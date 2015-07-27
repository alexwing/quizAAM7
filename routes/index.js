var express = require('express');
var router = express.Router();

router.get('/author', function(req, res) {
  res.render('author');
});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Bienvenido al juego de preguntas!' });
});

module.exports = router;
