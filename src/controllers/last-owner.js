const LastOwner = require('../models/last-owner');

exports.index = async (req, res, next) => {
    const lastOwners = await LastOwner.findAll();
    res.json(lastOwners);
}

exports.show = async (req, res, next) => {
    const id = req.params.id;
    const lastOwner = await LastOwner.findByPk(id);
    res.json(lastOwner);
}

exports.store = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const document = req.body.document;
    await LastOwner.create({
        name: name,
        email: email,
        phone: phone,
        document: document
    });
    res.sendStatus(201);
}

exports.update = async (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const document = req.body.document;
    const lastOwner = await LastOwner.findByPk(id);
    lastOwner.name = name;
    lastOwner.email = email;
    lastOwner.phone = phone;
    lastOwner.document = document;
    await lastOwner.save();
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const id = req.params.id;
    await LastOwner.destroy({
        where: {
            id: id
        }
    });
    res.sendStatus(200);
}
