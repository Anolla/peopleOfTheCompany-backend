"use strict";

// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema.
class DataCollection {
  constructor(model, departmentModel = "") {
    this.model = model;
    this.departmentModel = departmentModel;
  }

  get() {
    return this.model.findAll({ include: this.departmentModel });
  }

  create(record) {
    return this.model.create(record);
  }
}

module.exports = DataCollection;
