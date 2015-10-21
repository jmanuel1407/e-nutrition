var express = require('express');
var router = express.Router();

var enutritionController = require('../controllers/e-nutrition_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'E-nutrition' });
});

router.get('/menu/fruta',enutritionController.fruta);
router.get('/menu/verdura',enutritionController.verdura);
router.get('/menu/planta',enutritionController.planta);
router.get('/menu/cereal',enutritionController.cereal);

module.exports = router;

























