'use strict'

/**
 * Resourceful controller for interacting with coursedetails
 */
class CourseDetailController {
  /**
   * Show a list of all coursedetails.
   * GET coursedetails
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new coursedetail.
   * GET coursedetails/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new coursedetail.
   * POST coursedetails
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single coursedetail.
   * GET coursedetails/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing coursedetail.
   * GET coursedetails/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update coursedetail details.
   * PUT or PATCH coursedetails/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a coursedetail with id.
   * DELETE coursedetails/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CourseDetailController
