import * as Sequelize from "sequelize";
import db from "../config/database";
import { Person } from "./Person";

export var Car = db.define('car', {
    brand: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    maxSpeed: {
        type: Sequelize.INTEGER
    }
});
Car.belongsTo(Person);
Car.sync();