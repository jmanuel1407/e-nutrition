var express = require('express');
var router = express.Router();

var enutritionController = require('../controllers/e-nutrition_controller');
var sessionController = require('../controllers/session_controller');
var userController = require('../controllers/user_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-nutrition' });
});

router.get('/login',sessionController.new);//form login
router.post('/login',sessionController.create);//crear seseión
router.get('/logout',sessionController.destroy);//destruir sesión

router.get('/menu/fruta',enutritionController.fruta);
router.get('/menu/verdura',enutritionController.verdura);
router.get('/menu/planta',enutritionController.planta);
router.get('/menu/cereal',enutritionController.cereal);
//router.get('/sesion/ingresar',enutritionController.ingresar);
router.get('/sesion/listaUsuarios',enutritionController.listaUsuarios);
router.get('/sesion/registro',enutritionController.registro);
router.post('/sesion/create',enutritionController.create);


module.exports = router;

























