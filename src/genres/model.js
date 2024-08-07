const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Genre = sequelize.define(
  "Genre",
  {
    genreName: {
      type: DataTypes.STRING,
      defaultValue: "unknown genre",
    },
  },
  { timestamps: false }
);

module.exports = Genre;
