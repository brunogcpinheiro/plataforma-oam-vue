import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      //router.replace("/dashboard/courses");
    },
    currentUser (state, currentUserData) {
      state.user = currentUserData;
    },
    logoutUser(state) {
      state.token = null;
    }
  },
  actions: {
    login({ commit }, authData) {
      api
        .post("/login", {
          email: authData.email,
          password: authData.password
        })
        .then(res => {
          commit("authUser", {
            token: res.data.token,
          });
        })
        .catch(error => console.log(error));
    },
    fetchUser({ commit }, userData) {
      api
        .get('/current').then(res => {
          commit('currentUser', {
            user: res.data.user
          });
        });
    },
    logoutUser({ commit }) {
      commit("logoutUser");
      router.replace("/login");
    }
  },
  getters: {
    user (state) {
      return state.user;
    }
  }
});
