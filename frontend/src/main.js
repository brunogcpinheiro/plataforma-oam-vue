// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import Vuelidate from "vuelidate";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primary: "#752939",
    secondary: "#2d3436",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
