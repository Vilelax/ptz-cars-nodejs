const Sequelize = require('sequelize');

const connection = require('../utils/database');

const LastOwner = connection.define('lastOwner', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    document: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    }
});



module.exports = LastOwner;