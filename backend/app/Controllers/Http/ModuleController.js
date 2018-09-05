"use strict";

const Module = use("App/Models/Module");

/**
 * Resourceful controller for interacting with modules
 */
class ModuleController {
  /**
   * Show a list of all modules.
   * GET modules
   */
  async index() {
    const modules = await Module.query()
      .with("lectures")
      .fetch();
    return modules;
  }

  /**
   * Create/save a new module.
   * POST modules
   */
  async store({ request, params }) {
    const data = request.only(["moduleTitle"]);
    const module = await Module.create({
      ...data,
      course_id: params.course_id
    });
    return module;
  }

  /**
   * Display a single module.
   * GET modules/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update module details.
   * PUT or PATCH modules/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a module with id.
   * DELETE modules/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = ModuleController;
