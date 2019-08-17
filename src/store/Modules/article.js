import { api } from "../api";

export default {
  namespaced: true,
  state: {
    article: {}
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: {
    setArticle(state, payload) {
      state.article = payload;
    }
  },
  actions: {
    async create({ commit }, credentials) {
      try {
        const response = await api.post("articles", {
          article: credentials
        });
        if (response.data.article) {
          commit("setArticle", response.data.article);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  }
};
