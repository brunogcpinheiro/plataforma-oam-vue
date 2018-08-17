import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import Profile from "@/views/Profile";
import Detail from "@/views/Detail";
import Admin from "@/views/Admin";
import CreateUsers from "@/views/CreateUsers";

import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      
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
      path: "/dashboard/courses/detail",
      name: "Detail",
      component: Detail,
      meta: { requiresAuth: true }
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
      path: "*",
      redirect: '/login'
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
