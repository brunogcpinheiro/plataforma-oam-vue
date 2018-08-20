"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use("Route");

/**
 * User Routes
 */
Route.post("/login", "SessionController.login");
Route.get("/current", "SessionController.currentUser").middleware('auth');
Route.post("/dashboard/admin/users/create", "SessionController.register").middleware('auth');
Route.get("/dashboard/admin/users", "SessionController.index").middleware('auth');
Route.delete("/dashboard/admin/users/:id", "SessionController.destroy").middleware('auth');

/**
 * Course Routes
 */
Route.get("/dashboard/admin/courses", "CourseController.index").middleware('auth');
Route.post("/dashboard/admin/courses/create", "CourseController.store").middleware('auth');
