import { api } from "../api";

export default {
  namespaced: true,
  state: {
    article: {
      author: {}
    },
    articles: []
  },
  getters: {
    currentArticle: state => {
      return state.article;
    }
  },
  mutations: {
    setArticle(state, payload) {
      state.article = payload;
    },
    setArticles(state, payload) {
      state.articles = payload;
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
    },
    async getCurrentArticle({ commit }, articleSlug) {
      const response = await api.get("articles/" + articleSlug);
      if (response.data.article) {
        commit("setArticle", response.data.article);
      }
    },
    async feedArticles({ commit }) {
      console.log("here");
      const response = await api.get("articles/feed");
      console.log("www");
      if (response.data.articles) {
        commit("setArticles", response.data.articles);
      }
    }
  }
};
