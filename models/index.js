"use strict";

const employeesModel = require("./employeesModel");
const departmentsModel = require("./departmentsModel");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "postgresql://snake:snake1337@198.84.76.250:5432/anolla",
  {}
);

const employees = employeesModel(sequelize, DataTypes);
const departments = departmentsModel(sequelize, DataTypes);

employees.belongsTo(departments);

const DataCollection = require("../models/dataCollection");
const EmployeesCollection = new DataCollection(employees, departments);
const DepartmentsCollection = new DataCollection(departments);

module.exports = {
  db: sequelize,
  Employees: EmployeesCollection,
  Departments: DepartmentsCollection,
};
