var models = require ('../models/models.js');

exports.fruta = function(req, res){
	res.render('menu/fruta');
};

exports.verdura = function(req, res){
	res.render('menu/verdura');
};

exports.planta = function(req, res){
	res.render('menu/planta');
};

exports.cereal = function(req, res){
	res.render('menu/cereal');
};

exports.ingresar = function(req, res){
	res.render('sesion/ingresar');
};

exports.listaUsuarios = function(req,res){
	models.Usuarios.findAll().success(function(usuarios){
		res.render('sesion/usuarios',{user:usuarios[0].usuario})
	})
};

exports.registro = function(req, res){
	var usuarios=models.Usuarios.build({
		usuario:"Usuario",nip:"Nip",correo:"Correo",
		edad:"Edad",sexo:"Sexo",peso:"Peso"});
	
	res.render('sesion/registro',{usuarios:usuarios});
};

//POST Recibe los datos para guardar al nuevo usuario en la DB
exports.create= function(req, res){
	//usuarioN
	var usuarios = models.Usuarios.build(req.body.usuarios);

	//Guardar en la DB los datos
	usuarios.save({fields:["usuario","nip","correo","edad",
		"sexo","peso"]}).then(function(){
		res.redirect('/');
	})
};