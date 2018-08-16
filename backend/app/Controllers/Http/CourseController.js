'use strict'

/**
 * Resourceful controller for interacting with courses
 */
class CourseController {
  /**
   * Show a list of all courses.
   * GET courses
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new course.
   * GET courses/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new course.
   * POST courses
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single course.
   * GET courses/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing course.
   * GET courses/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update course details.
   * PUT or PATCH courses/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a course with id.
   * DELETE courses/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CourseController
