import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/Login";
import Dashboard from "@/views/Dashboard";
import Detail from "@/views/Detail";

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
      path: "/dashboard",
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
      path: "/dashboard/detail",
      name: "Detail",
      component: Detail,
      meta: { requiresAuth: true }
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
