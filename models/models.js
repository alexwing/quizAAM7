// Construye la BD y el modelo
var path = require('path');
//cargar modelo ORM
var Sequelize = require('sequelize');
// Usar BD SQLite
var sequelize = new Sequelize(null, null, null,
                        {
                            dialect: "sqlite",
                            storage: "quiz.sqlite"
                        });

// Importar la definición de la tabla en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// Exportar definición de la tabla
exports.Quiz = Quiz;

// Crea e inicializa tabla del quiz en la BD. Ejecutamos el manejador una vez creada la tabla
sequelize.sync().then(function(){
    Quiz.count().success(function(count){
        // La tabla se inicializa sólo si está vacía
        if(count === 0)
        {
            Quiz.create({
                pregunta: 'Capital de Italia',
                respuesta: 'Roma'
            });
            Quiz.create({
                pregunta: 'Capital de Portugal',
                respuesta: 'Lisboa'
            });
            Quiz.create({
                pregunta: 'Capital de España',
                respuesta: 'Madrid'
            });
            Quiz.create({
                pregunta: 'Capital de Francia',
                respuesta: 'París'
            });
            Quiz.create({
                pregunta: 'Capital de Alemania',
                respuesta: 'Berlín'
            });
            Quiz.create({
                pregunta: 'Capital de Reino Unido',
                respuesta: 'Londres'
            })
            .then(function(){
                console.log('Base de datos inicializada')
            });
        }
    });
});
