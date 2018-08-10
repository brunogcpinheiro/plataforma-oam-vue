import Vue from 'vue';
import Vuex from 'vuex';
import api from './services/api';

export default new Vuex.Store({
    state: {
        token: null,
    },
    getters: {},
    mutations: {
        authUser (state, userData) {
            state.token = userData.token;
        }
    },
    actions: {
        login({ commit }, authData) {
            api.post('/login', {
            email: authData.email,
            password: authData.password
        }).then(res => {
            console.log(res);
            commit('authUser', {
                token: res.data.token,
            });
        })
          .catch(error => console.log(error));
        }
    },
});