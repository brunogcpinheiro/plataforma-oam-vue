"use strict";

const Course = use("App/Models/Course");

class CourseController {
  /**
   * Show a list of all courses.
   * GET courses
   */
  async index({ auth }) {
    const courses = await Course.query()
      .with("modules")
      .fetch();
    return courses;
  }

  /**
   * Create/save a new course.
   * POST courses
   */
  async createCourse({ request }) {
    const { modules, ...data } = request.only([
      "title",
      "url",
      "author",
      "description",
      "modules"
    ]);
    const course = await Course.create(data);

    if (modules && modules.length > 0) {
      await course.modules().attach(modules);
      course.modules = await course.modules().fetch();
    }

    return course;
  }
  
  async show({ params }) {
    const course = await Course.findOrFail(params.id);
    await course.load("modules");
    return course;
  }

  /**
   * Update course details.
   * PUT or PATCH courses/:id
   */
  async update({ params, request }) {
    const data = request.all();
    const course = await Course.findOrFail(params.id);
    course.merge(data);
    await course.save();
    return course;
  }

  /**
   * Delete a course with id.
   * DELETE courses/:id
   */
  async destroy({ params }) {
    const course = await Course.findOrFail(params.id);
    await course.delete();
    return course;
  }
}

module.exports = CourseController;
