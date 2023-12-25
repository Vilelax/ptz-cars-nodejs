const express = require('express');
const carController = require('../controllers/car');

const router = express.Router();

router.get('/', carController.index);

router.get('/:id', carController.show);

router.post('/create', carController.store);

router.put('/edit', carController.update);

router.delete('/delete', carController.destroy);

module.exports = router;