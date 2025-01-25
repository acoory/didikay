import {DataTypes} from '@sequelize/core';
import sequelize from '../../config/database';
import UserModel from './client.model';
import ServicesModel  from "./services.model";

const daysOfWeekModel = sequelize.define('daysOfWeek', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    day: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    closed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

});

export default daysOfWeekModel;