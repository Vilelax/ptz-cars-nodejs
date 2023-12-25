const Sequelize = require('sequelize');

const connection = require('../utils/database');

const Sale = connection.define('sale', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    totalPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});


module.exports = Sale;