<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href>
            <img :src="article.author.image" />
          </a>
          <div class="info">
            <a href class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <button
            v-if="article.author.following"
            class="btn btn-sm btn-outline-secondary"
          >
            <i class="ion-plus-round"></i>
            &nbsp; unFollow {{ article.author.username }}
            {{ article.author.following }}
          </button>
          <button v-else class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;+ Follow {{ article.author.username }}
            {{ article.author.following }}
          </button>
          &nbsp;&nbsp;
          <button
            v-if="article.favorited"
            class="btn btn-sm btn-outline-primary"
          >
            <i class="ion-heart"></i>
            &nbsp; Unfavorite Article
            <span class="counter">{{ article.favoritesCount }}</span>
          </button>
          <button v-else class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Article
            <span class="counter">{{ article.favoritesCount }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.description }}</p>
          <p>{{ article.body }}</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html">
            <img src="article.author.image" />
          </a>
          <div class="info">
            <a href class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
          </div>

          <button
            v-if="article.author.following"
            class="btn btn-sm btn-outline-secondary"
          >
            <i class="ion-plus-round"></i>
            &nbsp;+ unFollow {{ article.author.username }}
          </button>

          <button v-else class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;+ Follow {{ article.author.username }}
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post
            <span class="counter">(29)</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href class="comment-author">
                <img src class="comment-author-img" />
              </a>
              &nbsp;
              <a href class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    getCurrentArticle(articleSlug) {
      this.$store.dispatch("article/getCurrentArticle", articleSlug);
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.article,
      currentUser: state => state.users.user
    })
  },
  mounted() {
    this.getCurrentArticle(this.$route.params.articleSlug);
  }
};
</script>
