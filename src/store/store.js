import Vue from "vue";
import Vuex from "vuex";
import users from "./Modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users
  }
});
