const Sequelize = require('sequelize');

const connection = require('../utils/database');

const Car = connection.define('car', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    licensePlate: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    crlv: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    crv: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unique: true,
    }
});

module.exports = Car;