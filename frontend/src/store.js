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
    fetchUsersMutation(state, usersData) {
      state.usersTable = usersData;
    },
    currentUser(state, currentUserData) {
      state.user = currentUserData;
    },
    logoutUser(state) {
      state.token = null;
    }
  },
  actions: {
    async register({ commit }, registerData) {
      try {
        const { data } = await api.post("/dashboard/admin/users/create", {
          username: registerData.username,
          email: registerData.email,
          password: registerData.password,
          admin: registerData.admin
        });
        commit("registerUser", {
          username: data.username,
          email: data.email,
          password: data.password,
          admin: data.admin
        });
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit, dispatch }, authData) {
      try {
        const { data } = await api.post("/login", {
          email: authData.email,
          password: authData.password
        });
        await commit("authUser", {
          token: data.token
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUsersTable({ commit }) {
      try {
        const { data } = await api.get("/dashboard/admin/users");
        commit("fetchUsersMutation", data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUser({ commit }) {
      try {
        const { data } = await api.get("/current");
        commit("currentUser", {
          user: data
        });
      } catch (error) {
        console.log(error);
      }
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
