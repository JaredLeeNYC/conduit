import Vue from "vue";
import Vuex from "vuex";
import users from "./Modules/users";
import article from "./Modules/article";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    article
  }
});
