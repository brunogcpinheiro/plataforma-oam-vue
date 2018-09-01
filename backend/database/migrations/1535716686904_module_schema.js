"use strict";

const Schema = use("Schema");

class ModuleSchema extends Schema {
  up() {
    this.create("modules", table => {
      table.increments();
      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("moduleTitle").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("modules");
  }
}

module.exports = ModuleSchema;
