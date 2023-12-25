const CarModel = require('../models/car-model');
const Car = require('../models/car');
const Customer = require('../models/customer');
const LastOwner = require('../models/last-owner');
const Manufacturer = require('../models/manufacturer');
const Sale = require('../models/sale');
const User = require('../models/user');

const bootstrapDatabase = () => {
    CarModel.belongsTo(Manufacturer, {
        foreignKey: 'manufacturerId'
    });
    CarModel.hasMany(Car, {
        foreignKey: 'carModelId'
    });
    
    Car.belongsTo(LastOwner, {
        foreignKey: 'lastOwnerId'
    });
    
    Car.belongsTo(CarModel, {
        foreignKey: 'carModelId'
    });
    
    Car.hasOne(Sale, {
        foreignKey: 'carId'
    });
    
    Customer.hasMany(Sale, {
        foreignKey: 'customerId'
    });
    
    LastOwner.hasMany(Car, {
        foreignKey: 'lastOwnerId'
    });
    
    Manufacturer.hasMany(CarModel,{
        foreignKey: 'manufacturerId'
    });
    
    Sale.belongsTo(Customer, {
        foreignKey: 'customerId'
    });
    
    Sale.belongsTo(User, {
        foreignKey: 'userId'
    });
    
    Sale.belongsTo(Car, {
        foreignKey: 'carId'
    });
    
    User.hasMany(Sale, {
        foreignKey: 'userId'
    });
}

module.exports = bootstrapDatabase;
