const express = require("express");
const departmentsRouter = express.Router();
let departments = [
  "IT",
  "Engineering",
  "HR",
  "Operations",
  "Customer Support",
  "Marketing",
  "Managment",
  "Finance",
  "Research and Development",
  "Accounting",
];

const { Departments } = require("../models/index");

// getting departments
departmentsRouter.get("/departments", async (req, res) => {
  let records = await Departments.get();
  if (records.length > 0) res.status(200).json(records);
  else {
    res.status(404).send("No departments found");
  }
});

// adding departments
departmentsRouter.post("/departments", async (req, res) => {
  let departmentsSaved = [];
  for (let index = 0; index < departments.length; index++) {
    let departmentName = departments[index];
    let createdRecord = await Departments.create({ name: departmentName });
    departmentsSaved.push(createdRecord);
  }
  res.status(201).send(departmentsSaved);
});

module.exports = departmentsRouter;
