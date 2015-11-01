var path = require ('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
//postgres://aunxushphknmkz:IJbEh_qdfK5VeZrC0rtB6AVs3R@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d2olh5b5q7p338
var DB_name  = ('d2olh5b5q7p338'||null);
var user     = ('aunxushphknmkz'||null);
var pwd      = ('IJbEh_qdfK5VeZrC0rtB6AVs3R'||null);
var protocol = (url[1]||null);
var dialect  = (url[1]||null);
var port     = ('5432'||null);
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

//Usar BBDD SQLite
/*
var sequelize = new Sequelize(null,null,null,
	{
		dialect: "sqlite", storage:"usuarios.sqlite"
	});
*/


//importar la definición de la tabla usuarios en usuarios.js

var usuarios_path = path.join(__dirname,'usuarios');
var Usuarios = sequelize.import(usuarios_path);

exports.Usuarios = Usuarios;

//sequelize.sync() crea e inicializa la tabla de usuarios en la BD
sequelize.sync().then(function(){
	//succes(...) ejecuta el manejador una vez creada la tabla
	Usuarios.count().then(function(count){
		if(count==0){//La tabla se inicializa sólo si esta vacía
			Usuarios.create({
				usuario:'admin',
				nip:'1993',
				correo:'jmanuel_1407@hotmail.com',
				edad:'22',
				sexo:'hombre',
				peso:'68'
			}).then(function(){console.log('Base de datos inicializada')});
		};
	});
});