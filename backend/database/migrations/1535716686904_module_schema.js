'use strict';

const Schema = use('Schema');

class ModuleSchema extends Schema {
  up () {
    this.create('modules', (table) => {
      table.increments();
      table.integer('course_id').unsigned().index('course_id');
      table.foreign('course_id').references('courses.id');
      table.string("moduleTitle").notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('modules');
  }
}

module.exports = ModuleSchema;
