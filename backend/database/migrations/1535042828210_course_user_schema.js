'use strict';

const Schema = use('Schema');

class CourseUserSchema extends Schema {
  up () {
    this.create('course_user', (table) => {
      table.integer('user_id').unsigned().index('user_id');
      table.integer('course_id').unsigned().index('course_id');
      
      table.foreign('user_id').references('users.id');
      table.foreign('course_id').references('courses.id');
    });
  }

  down () {
    this.drop('course_user');
  }
}

module.exports = CourseUserSchema;
