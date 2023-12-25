const CarModel = require('../models/car-model');

exports.index = async (req, res, next) => {
    const carModels = await CarModel.findAll();
    res.json(carModels);
}

exports.show = async(req, res, next) => {
    const carModelId = req.params.id;
    const carModel = await CarModel.findByPk(carModelId);
    res.json(carModel);
}

exports.store = async (req, res, next) => {
    const carModelName = req.body.name;
    const carModelYear = req.body.year;
    const carModelEngine = req.body.engine;
    const carModelMaxPower = req.body.maxpower;
    const carModelMaxTorque = req.body.maxtorque;
    const carModelMaxSpeed = req.body.maxspeed;
    const carModelManufacturerId = req.body.manufacturerid;
    await CarModel.create({
        name: carModelName,
        year: carModelYear,
        engine: carModelEngine,
        maxPower: carModelMaxPower,
        maxTorque: carModelMaxTorque,
        maxSpeed: carModelMaxSpeed,
        manufacturerId: carModelManufacturerId,
    });
    res.sendStatus(201);
}

exports.update = async (req, res, next) => {
    const carModelId = req.body.id;
    const carModelName = req.body.name;
    const carModelYear = req.body.year;
    const carModelEngine = req.body.engine;
    const carModelMaxPower = req.body.maxpower;
    const carModelMaxTorque = req.body.maxtorque;
    const carModelMaxSpeed = req.body.maxspeed;
    const carModelManufacturerId = req.body.manufacturerid;
    const carModel = await CarModel.findByPk(carModelId);
    carModel.name = carModelName;
    carModel.year = carModelYear;
    carModel.engine = carModelEngine;
    carModel.maxPower = carModelMaxPower;
    carModel.maxTorque = carModelMaxTorque;
    carModel.maxSpeed = carModelMaxSpeed;
    carModel.manufacturerId = carModelManufacturerId;
    await carModel.save();
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const carModelId = req.params.id;
    await carModel.destroy({
        where: {
            id: carModelId
        }
    });
    res.sendStatus(200);
}