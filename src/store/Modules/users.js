import { api, setToken, clearToken } from "../api";

export default {
  namespaced: true,
  state: {
    user: {},
    profile: null
  },
  getters: {
    username(state) {
      return (state.user && state.user.username) || null;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    logoutUser(state) {
      console.log("111");
      clearToken();
      state.user = {};
    }
  },
  actions: {
    getUser: async function({ commit }) {
      const response = await api.get("user");
      if (response.data.user) {
        commit("setUser", response.data.user);
      }
    },
    loginUser: async function({ commit }, { email, password }) {
      clearToken();
      console.log("1111");
      try {
        const response = await api.post("/users/login", {
          user: {
            email,
            password
          }
        });
        console.log("2222");
        if (response.data.user) {
          setToken(response.data.user.token);
          commit("setUser", response.data.user);
        }
        console.log("3333");
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    updateUser: async function({ commit }, currentUser) {
      const response = await api.put("/user", {
        user: {
          email: currentUser.email,
          username: currentUser.username,
          password: currentUser.password,
          image: currentUser.image,
          bio: currentUser.bio
        }
      });
      if (response.data.user) {
        commit("setUser", response.data.user);
      }
    },
    signUp: async function({ commit }, credentials) {
      clearToken();
      try {
        const response = await api.post("/users", {
          user: credentials
        });
        if (response.data.user) {
          setToken(response.data.user.token);
          commit("setUser", response.data.user);
        }
      } catch (e) {
        console.log(e.response.data.errors);
        throw e.response.data.errors;
      }
    }
  }
};
