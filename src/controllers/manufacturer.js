const Manufacturer = require('../models/manufacturer');

exports.index = async (req, res, next) => {
    const manufacturers = await Manufacturer.findAll();
    res.json(manufacturers);
}

exports.show = async (req, res, next) => {
    const manufacturerId = req.params.id;
    const manufacturer = await Manufacturer.findByPk(manufacturerId);
    res.json(manufacturer);
}

exports.store = async (req, res, next) => {
    const manufacturerName = req.body.name;
    await Manufacturer.create({name: manufacturerName});
    res.sendStatus(201);
}

exports.update = async (req, res, next) => {
    const manufacturerId = req.body.id;
    const manufacturerName = req.body.name;
    const manufacturer = await Manufacturer.findByPk(manufacturerId);
    manufacturer.name = manufacturerName;
    await manufacturer.save();
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const manufacturerId = req.params.id;
    await Manufacturer.destroy({
        where: {
            id: manufacturerId
        }
    });
    res.sendStatus(200);
}