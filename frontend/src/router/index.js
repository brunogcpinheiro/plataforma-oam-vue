import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import Profile from "@/views/Profile";
import Admin from "@/views/Admin";
import CreateUsers from "@/views/CreateUsers";
import CreateCourses from "@/views/CreateCourses";
import EditCourse from "@/views/EditCourse";
import EditUser from "@/views/EditUser";
import DetailCourse from "@/views/DetailCourse";
import CreateModule from "@/views/CreateModule";
import CreateLecture from "@/views/CreateLecture";

import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: "/dashboard/courses",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token) {
          next();
        } else {
          next("/login");
        }
      }
    },
    {
      path: "/dashboard/admin",
      name: "Admin",
      component: Admin,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/users/create",
      name: "CreateUsers",
      component: CreateUsers,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/courses/create",
      name: "CreateCourses",
      component: CreateCourses,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/users/:id",
      name: "EditUser",
      component: EditUser,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/courses/:id",
      name: "EditCourse",
      component: EditCourse,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/courses/:id/module/create",
      name: "CreateModule",
      component: CreateModule,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/admin/courses/:id/lecture/create",
      name: "CreateLecture",
      component: CreateLecture,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "/dashboard/courses/:id",
      name: "DetailCourse",
      component: DetailCourse,
      meta: { requiresAuth: true },
      beforeRouteEnter(to, from, next) {
        if (store.state.token && store.getters.user.user.admin) {
          next();
        } else {
          next("/dashboard/courses");
        }
      }
    },
    {
      path: "*",
      redirect: "/login"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        path: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
