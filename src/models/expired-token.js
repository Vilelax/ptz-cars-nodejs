const Sequelize = require('sequelize');

const connection = require('../utils/database');

const ExpiredToken = connection.define('expiredToken', {
    token: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = ExpiredToken;