// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import Vuelidate from "vuelidate";
import api from "./services/api";
import { sync } from "vuex-router-sync";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#1e90ff",
    secondary: "#4b6584",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

sync(store, router);

Vue.config.productionTip = false;

/*global localStorage*/

const token = localStorage.getItem("token");
if (token) {
  api.defaults.headers.common["Authorization"] = "Bearer " + token;
}

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
