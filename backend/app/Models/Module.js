"use strict";

const Model = use("Model");

class Module extends Model {
  course() {
    return this.belongsTo("App/Models/Course");
  }
  
  lectures() {
    return this.hasMany("App/Models/Lecture");
  }
}

module.exports = Module;
