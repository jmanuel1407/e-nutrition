
//Definición de la tabla usuarios
module.exports = function (sequelize, DataTypes){
	return sequelize.define('Usuarios',{
		usuario: DataTypes.STRING,
		nip: DataTypes.STRING,
		correo: DataTypes.STRING,
		edad: DataTypes.STRING,
		sexo: DataTypes.STRING,
		peso: DataTypes.STRING,
	});
}

