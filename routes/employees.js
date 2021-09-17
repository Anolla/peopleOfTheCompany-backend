"use strict";

const express = require("express");
const employeesRouter = express.Router();
const { Employees } = require("../models/index");
const faker = require("faker");

// getting employees
employeesRouter.get("/employees", async (req, res) => {
  const allEmployees = await Employees.get();
  const list = allEmployees.map((employee) => employee);
  if (list.length > 0) res.status(200).json(list);
  else {
    res.status(404).send("No users found");
  }
});

// adding employees
let createdRecords = [];
employeesRouter.post("/employees", async (req, res) => {
  for (let index = 0; index < 10; index++) {
    let departmentId = Math.ceil(Math.random() * 9);
    let createdRecord = await Employees.create({
      fullName: faker.name.findName(),
      email: faker.internet.email(),
      departmentId: departmentId,
    });
    createdRecords.push(createdRecord);
  }
  res.status(201).send(createdRecords);
});

module.exports = employeesRouter;
