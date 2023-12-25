const Sequelize = require('sequelize');
const connection = require('../utils/database');

const Manufacturer = connection.define('manufacturer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Manufacturer;