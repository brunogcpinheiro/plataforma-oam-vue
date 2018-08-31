"use strict";

const Model = use("Model");

class Course extends Model {
  user() {
    return this.belongsToMany("App/Models/User");
  }
  
  modules() {
    return this.hasMany("App/Models/Module");
  }
}

module.exports = Course;
