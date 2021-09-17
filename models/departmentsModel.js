"use strict";

const departments = (sequelize, DataTypes) =>
  sequelize.define("departments", {
    name: { type: DataTypes.STRING, required: true , unique: true },
  });

module.exports = departments;
