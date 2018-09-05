'use strict';

const Lecture = use("App/Models/Lecture");

/**
 * Resourceful controller for interacting with lectures
 */
class LectureController {
  /**
   * Show a list of all lectures.
   * GET lectures
   */
  async index () {
    const lectures = await Lecture.all();
    return lectures;
  }

  /**
   * Create/save a new lecture.
   * POST lectures
   */
  async store ({ request, params }) {
    const data = request.only(["lectureTitle", "lectureURL"]);
    const lecture = await Lecture.create({
      ...data,
      module_id: params.module_id
    });
    return lecture;
  }

  /**
   * Display a single lecture.
   * GET lectures/:id
   */
  async show () {
  }

  /**
   * Update lecture details.
   * PUT or PATCH lectures/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a lecture with id.
   * DELETE lectures/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LectureController
