import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    usersTable: null
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      //router.replace("/dashboard/courses");
    },
    registerUser(state, registerUser) {
      state.username = registerUser.username;
      state.email = registerUser.email;
      state.password = registerUser.password;
      state.admin = registerUser.admin;
    },
    fetchUsersMutation (state, usersData) {
      state.usersTable = usersData;
    },
    currentUser (state, currentUserData) {
      state.user = currentUserData;
    },
    logoutUser(state) {
      state.token = null;
    }
  },
  actions: {
    async register({ commit }, registerData) {
      await api
        .post('/dashboard/admin/users/create', {
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
          admin: registerData.admin,
        })
        .then(res => {
          commit("registerUser", {
            username: res.data.username,
            email: res.data.email,
            password: res.data.password,
            admin: res.data.admin,
          });
        })
        .catch(err => console.log(err));
    },
    async login({ commit }, authData) {
      await api
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
    async fetchUsersTable({ commit }) {
      await api
        .get('/dashboard/admin/users')
        .then(res => {
          commit('fetchUsersMutation', res.data);
        });
    },
    async fetchUser({ commit }, userData) {
      await api
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
    user: state => {
      return state.user;
    },
    usersTable: state => {
      return state.usersTable;
    }
  }
});
