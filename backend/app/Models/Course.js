"use strict";

const Model = use("Model");

class Course extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = Course;
