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

exports.registro = function(req, res){
	var user=models.User.build({
		usuario:"Usuario",nip:"Nip",correo:"Correo",
		edad:"Edad",sexo:"Sexo",peso:"Peso"});
	
	res.render('sesion/registro',{user:user});
};

//POST Recibe los datos para guardar al nuevo usuario en la DB
exports.create = function(req, res) {
    var user = models.User.build( req.body.user );
                user.save({fields: ['username', 'password',
                	'correo','edad','sexo','peso']}).then(function(){
                    res.redirect('/');
                });
};

exports.perfil = function(req, res){
	res.render('sesion/perfil');
};
