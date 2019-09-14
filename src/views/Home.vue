<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your dev knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a :class="tabY" @click="selectTabY()">Your Feed</a>
              </li>
              <li class="nav-item">
                <a :class="tabG" @click="selectTabG()">Global Feed</a>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.__ob__.dep.id"
          >
            <div class="article-meta">
              <a :href="article.slug">
                <img :src="article.author.image" />
              </a>
              <div class="info">
                <a href class="author">{{ article.author.username }}</a>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i>
                {{ article.favoritesCount }}
              </button>
            </div>
            <router-link
              :to="{ name: 'article', params: { articleSlug: article.slug } }"
              class="preview-link"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </router-link>
          </div>
          <nav>
            <ul class="pagination">
              <li
                v-for="n in 50"
                data-test="page-link-1"
                :class="isActivePage(n)"
                :key="n"
                @click="changePage(n)"
              >
                <a class="page-link">{{ n }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                href
                class="tag-pill tag-default"
                v-for="tag in tags"
                :key="tag"
                >{{ tag }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const api = axios.create({
  baseURL: "https://conduit.productionready.io/api"
});

export default {
  data() {
    return {
      tags: [],
      articles: [],
      selectedPage: 1,
      tabG: "nav-link active",
      tabY: "nav-link"
    };
  },
  methods: {
    getTags: async function() {
      this.tags = await api.get("/tags").then(function(response) {
        return response.data.tags;
      });
    },
    getArticles: async function(n, author) {
      this.articles = await api
        .get(
          "/articles?limit=10&&offset=" + (n - 1) * 10 + "&&author=" + author
        )
        .then(function(response) {
          return response.data.articles;
        });
    },
    changePage: function(n) {
      this.selectedPage = n;
      this.getArticles(n, "");
    },
    isActivePage: function(n) {
      let isActive = "page-item";
      if (this.selectedPage === n) {
        isActive = "page-item active";
      }
      return isActive;
    },
    selectTabG: function() {
      (this.tabG = "nav-link active"), (this.tabY = "nav-link");
      this.getArticles(1, "");
    },
    selectTabY: function() {
      (this.tabY = "nav-link active"), (this.tabG = "nav-link");
      this.getArticles(1, this.$store.state.users.user.username);
    }
  },
  mounted() {
    this.getTags();
    this.getArticles(1, "");
  }
};
</script>
