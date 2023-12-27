const express = require('express');
const lastownerController = require('../controllers/last-owner');

const router = express.Router();


router.get('/', lastownerController.index);

router.get('/:id', lastownerController.show);

router.post('/create', lastownerController.store);

router.put('/edit', lastownerController.update);

router.delete('/delete', lastownerController.destroy);

module.exports = router;