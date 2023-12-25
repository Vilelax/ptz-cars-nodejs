const express = require('express');
const carModelController = require('../controllers/car-model');

const router = express.Router();

router.get('/', carModelController.index);

router.get('/:id', carModelController.show);

router.post('/create', carModelController.store);

router.put('/edit', carModelController.update);

router.delete('/delete/:id', carModelController.destroy);

module.exports = router;