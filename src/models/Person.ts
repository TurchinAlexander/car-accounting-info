import * as Sequelize from "sequelize";
import db from "../config/database";

export const Person = db.define('person', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    }
});

Person.sync();