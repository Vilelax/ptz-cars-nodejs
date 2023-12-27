const Car = require('../models/car');

exports.index = async (req, res, next) => {
    const cars = await Car.findAll();
    res.json(cars);
}

exports.show = async(req, res, next) => {
    const carId = req.params.id;
    const car = await Car.findByPk(carId);
    res.json(car);
}

exports.store = async (req, res, next) => {
    const licensePlate = req.body.licenseplate;
    const image = req.body.image;
    const color = req.body.color;
    const crlv = req.body.crlv;
    const crv = req.body.crv;
    const price = req.body.price;
    const carModelId = req.body.carmodelid;
    const lastOwnerId = req.body.lastownerid;
    await Car.create({
        licensePlate: licensePlate,
        image: image,
        color: color,
        crlv: crlv,
        crv: crv,
        price: price,
        carModelId: carModelId,
        lastOwnerId: lastOwnerId
    });
    res.sendStatus(201);
}

exports.update = async (req, res, next) => {
    const id = req.body.id;
    const licensePlate = req.body.licenseplate;
    const image = req.body.image;
    const color = req.body.color;
    const crlv = req.body.crlv;
    const crv = req.body.crv;
    const price = req.body.price;
    const carModelId = req.body.carmodelid;
    const lastOwnerId = req.body.lastownerid;
    const car = await Car.findByPk(id);
    car.licensePlate = licensePlate;
    car.image = image;
    car.color = color;
    car.crlv = crlv;
    car.crv = crv;
    car.price = price;
    car.carModelId = carModelId;
    car.lastOwnerId = lastOwnerId;
    await car.save();
    res.sendStatus(200);
}

exports.destroy = async (req, res, next) => {
    const id = req.params.id;
    await Car.destroy({
        where: {
            id: id
        }
    });
    res.sendStatus(200);
}