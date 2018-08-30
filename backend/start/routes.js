"use strict";

const Route = use("Route");

/**
 * User Routes
 */
Route.post("/login", "SessionController.login");
Route.get("/current", "SessionController.currentUser").middleware("auth");
Route.post("/dashboard/admin/users/create", "SessionController.register");
Route.get("/dashboard/admin/users", "SessionController.index").middleware(
  "auth"
);
Route.put(
  "/dashboard/admin/users/:id",
  "SessionController.update"
).middleware("auth");
Route.delete(
  "/dashboard/admin/users/:id",
  "SessionController.destroy"
).middleware("auth");
Route.put(
  "/dashboard/profile/change_password",
  "SessionController.changePassword"
).middleware("auth");

/**
 * Course Routes
 */
Route.get("/dashboard/admin/courses", "CourseController.index").middleware(
  "auth"
);
Route.post(
  "/dashboard/admin/courses/create",
  "CourseController.createCourse"
).middleware("auth");
Route.put(
  "/dashboard/admin/courses/:id",
  "CourseController.update"
).middleware("auth");
Route.delete(
  "/dashboard/admin/courses/:id",
  "CourseController.destroy"
).middleware("auth");