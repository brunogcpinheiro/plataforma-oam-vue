'use strict';

const Schema = use('Schema');

class CourseDetailSchema extends Schema {
  up () {
    this.create('course_details', (table) => {
      table.increments();
      table.string('lecturesURL').notNullable();
      table.string('modules').notNullable();
      table.string('lectures').notNullable();
      table.timestamps();
    });
  }

  down () {
    this.drop('course_details');
  }
}

module.exports = CourseDetailSchema;
