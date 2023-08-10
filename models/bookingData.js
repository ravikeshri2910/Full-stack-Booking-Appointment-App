
const Sequelize = require('sequelize');


const sequelize = require('../util/database');


const Data = sequelize.define('bookingAppData', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,

    email: Sequelize.STRING,

    phone: {
        type: Sequelize.STRING,
        // allowNull: false
    }


});

module.exports = Data;