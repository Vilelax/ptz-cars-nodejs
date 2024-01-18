const express = require('express');
const manufacturerController = require('../controllers/manufacturer');
const verifyJWT = require('../controllers/auth').verifyJWT;

const router = express.Router();

router.get('/', verifyJWT, manufacturerController.index);

router.get('/:id', manufacturerController.show);

router.post('/create', manufacturerController.store);

router.put('/edit', manufacturerController.update);

router.delete('/delete/:id', manufacturerController.destroy);

module.exports = router;