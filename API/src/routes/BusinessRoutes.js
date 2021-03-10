const express = require('express');
const router = express.Router();
const BusinessController = require('../controller/BusinessController');
const FieldValidation = require('../middlewares/FieldValidation');

router.post('/', FieldValidation, BusinessController.create);
router.put('/:id', FieldValidation, BusinessController.update);
router.get('/:id', BusinessController.show);
router.delete('/:id', BusinessController.delete);
// router.put('/:id/:done', BusinessController.done);

router.get('/filter/all/:macaddress', BusinessController.all);
// router.get('/filter/late/:macaddress', BusinessController.late);
router.get('/filter/today/:macaddress', BusinessController.today);
router.get('/filter/week/:macaddress', BusinessController.week);
router.get('/filter/month/:macaddress', BusinessController.month);
router.get('/filter/year/:macaddress', BusinessController.year);

module.exports = router;