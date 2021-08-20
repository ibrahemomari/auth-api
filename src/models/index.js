"use strict";
require("dotenv").config();
const userModel = require("./users");
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./food/model");
const clothesModel = require("./clothes/model");
const dataCollection = require("./data-collection");

<<<<<<< HEAD
let sequelizeOptions = {
      dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          }
        }
  };
=======
let sequelizeOptions={
  dialectOptions:{
    ssl:{
      require:true,
      rejectUnauthorized:false
    }
  }
};
>>>>>>> 4d7a46479dae22f15d02009abe9a95cac02e347d
const DATABASE_URL =
  process.env.NODE_ENV == "test"
    ? "sqlite:memory"
    : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new dataCollection(food),
  clothes: new dataCollection(clothes),
};
