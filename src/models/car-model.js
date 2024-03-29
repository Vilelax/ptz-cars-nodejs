const Sequelize = require('sequelize');

const connection = require('../utils/database');

const CarModel = connection.define('carModel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
    },
    engine: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    maxPower: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    maxTorque: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    maxSpeed: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = CarModel;