"use strict";

const Model = use("Model");

class Course extends Model {
  user() {
    return this.belongsToMany("App/Models/User");
  }
}

module.exports = Course;
