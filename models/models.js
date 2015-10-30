var path = require ('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);

var DB_name  = (url[6]||null);
var user     = (url[2]||null);
var pwd      = (url[3]||null);
var protocol = (url[1]||null);
var dialect  = (url[1]||null);
var port     = (url[5]||null);
var host     = (url[4]||null);
var storage  = process.env.DATABASE_STORAGE;


//Carga del modelo ORM
var Sequelize = require('sequelize');

var sequelize = new Sequelize(DB_name, user, pwd, 
  { dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    storage:  storage,  // solo SQLite (.env)
    omitNull: true      // solo Postgres
  }      
);

//importar la definición de la tabla usuarios en usuarios.js

var Usuarios = sequelize.import(path.join(__dirname,'usuarios'));

exports.Usuarios = Usuarios;

//sequelize.sync() crea e inicializa la tabla de usuarios en la BD
sequelize.sync().success(function(){
	//succes(...) ejecuta el manejador una vez creada la tabla
	Usuarios.count().success(function(count){
		if(count==0){//La tabla se inicializa sólo si esta vacía
			Usuarios.create({
				usuario:'admin',
				nip:'1993',
				correo:'jmanuel_1407@hotmail.com',
				edad:'22',
				sexo:'hombre',
				peso:'68'
			}).success(function(){console.log('Base de datos inicializada')});
		};
	});
});