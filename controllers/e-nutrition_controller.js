// GET /menu/fruta

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

