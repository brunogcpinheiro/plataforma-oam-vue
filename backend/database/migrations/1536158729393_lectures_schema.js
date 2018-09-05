'use strict';

const Schema = use('Schema');

class LecturesSchema extends Schema {
  up () {
    this.create('lectures', (table) => {
      table.increments();
      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("courses");
      table
        .integer("module_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("modules");
      table.string('lectureTitle').notNullable();
      table.string('lectureURL').notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('lectures');
  }
}

module.exports = LecturesSchema;
