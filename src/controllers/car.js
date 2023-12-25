const Car = require('../models/car');

exports.index = async (req, res, next) => {
    const cars = await Car.findAll();
    res.json(cars);
}

exports.show = async(req, res, next) => {
    const carId = req.params.id;
    const car = await car.findByPk(carId);
    res.json(car);
}

exports.store = (req, res, next) => {
}