"use strict";

// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema.
class DataCollection {
  constructor(model) {
    this.model = model;
  }

  get(id) {
    return this.model.findAll({});
  }

  create(record) {
    return this.model.create(record);
  }
}

module.exports = DataCollection;
