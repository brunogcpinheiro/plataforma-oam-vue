"use strict";

const Course = use("App/Models/Course");

class CourseController {
  /**
   * Show a list of all courses.
   * GET courses
   */
  async index({ auth }) {
    const courses = await Course.all();
    return courses;
  }

  /**
   * Create/save a new course.
   * POST courses
   */
  async createCourse({ request }) {
    // const { data } = request.all();
    const course = await Course.create(request.all());
    return course;
  }

  /**
   * Update course details.
   * PUT or PATCH courses/:id
   */
  async update({ params, request }) {
    const data = request.all();
    const course = await Course.find(params.id);
    course.merge(data);
    await course.save();
    return course;
  }

  /**
   * Delete a course with id.
   * DELETE courses/:id
   */
  async destroy({ params }) {
    const course = await Course.find(params.id);
    await course.delete();
    return course;
  }
}

module.exports = CourseController;
