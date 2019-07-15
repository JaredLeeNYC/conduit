import { api, setToken } from "../api";

export default {
  namespaced: true,
  state: {
    user: null,
    profile: null
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    getUser: async function({ commit }) {
      const user = await api.get("user");
      commit("setUser", user);
    },
    loginUser: async function({ commit }, { email, password }) {
      const response = await api.post("/users/login", {
        user: {
          email,
          password
        }
      });
      if (response.data.user) {
        setToken(response.data.user.token);
        commit("setUser", response.data.user);
      }
    }
  }
};
