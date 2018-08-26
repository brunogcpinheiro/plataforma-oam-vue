import Vue from "vue";
import Vuex from "vuex";
import api from "./services/api";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    status: "",
    statusType: "",
    user: null,
    usersTable: null,
    coursesTable: null
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      state.status = "success";
      //router.replace("/dashboard/courses");
    },
    authError(state, message) {
      state.statusType = message;
      state.status = "error";
    },
    clearAlert(state) {
      state.status = "";
      state.statusType = "";
    },
    registerUser(state, registerUser) {
      state.username = registerUser.username;
      state.email = registerUser.email;
      state.password = registerUser.password;
      state.admin = registerUser.admin;
    },
    createCourse(state, courseData) {
      state.title = courseData.title;
      state.url = courseData.url;
      state.author = courseData.author;
      state.description = courseData.description;
    },
    fetchUsersMutation(state, usersData) {
      state.usersTable = usersData;
    },
    fetchCoursesMutation(state, coursesData) {
      state.coursesTable = coursesData;
    },
    currentUser(state, currentUserData) {
      state.user = currentUserData;
    },
    changePassword(state, changeData) {
      state.user.password = changeData.password;
    },
    logoutUser(state) {
      state.token = null;
      state.user = null;
      state.usersTable = null;
      state.coursesTable = null;
      state.status = "";
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
    async createCourse({ commit }, courseData) {
      try {
        const { data } = await api.post("/dashboard/admin/courses/create", {
          title: courseData.title,
          url: courseData.url,
          author: courseData.author,
          description: courseData.description
        });
        commit("createCourse", {
          title: data.title,
          url: data.url,
          author: data.author,
          description: data.description
        });
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, authData) {
      try {
        const { data } = await api.post("/login", {
          email: authData.email,
          password: authData.password
        });
        /*global localStorage*/ localStorage.setItem("token", data.token);
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        await commit("authUser", {
          token: data.token,
          status: "success"
        });
      } catch (error) {
        commit("authError", error.response.data[0].field);
        /*global localStorage*/ localStorage.removeItem("token");
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
    async fetchCoursesTable({ commit }) {
      try {
        const { data } = await api.get("/dashboard/admin/courses");
        commit("fetchCoursesMutation", data);
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
    async removeUser({ commit }, userId) {
      try {
        await api.delete(`/dashboard/admin/users/${userId}`);
      } catch (err) {
        console.log(err);
      }
    },
    clearAlert({ commit }) {
      commit("clearAlert");
    },
    logoutUser({ commit }) {
      commit("logoutUser");
      delete api.defaults.headers.common["Authorization"];
      router.replace("/login");
    }
  },
  getters: {
    statusType: state => {
      return state.statusType;
    },
    status: state => {
      return state.status;
    },
    token: state => {
      return state.token;
    },
    user: state => {
      return state.user;
    },
    usersTable: state => {
      return state.usersTable;
    },
    coursesTable: state => {
      return state.coursesTable;
    }
  }
});
