"use strict";

// requiring files
require("dotenv").config();
const { db } = require("./models/index");
const errorHandler = require("./errorHandlers/500");
const notFound = require("./errorHandlers/404");
const employeesRoutes = require("./routes/employees.js");
const  departmentsRouter = require("./routes/departments.js");


// prepare the express app
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

//routes
app.use(employeesRoutes);
app.use(departmentsRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);

// connection to the databaase and running the server
let port = process.env.PORT || 3030;
db.sync()
  .then(() => {
    app.listen(port, () => console.log(`Server is up on ${port}`));
  })
  .catch((err) => console.log(err));
