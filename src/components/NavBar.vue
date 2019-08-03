<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            exact-active-class="nav-link active"
            >Home</router-link
          >
        </li>
        <li v-if="username" class="nav-item">
          <router-link
            to="/editor"
            class="nav-link"
            exact-active-class="nav-link active"
          >
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link
            to="/settings"
            class="nav-link"
            exact-active-class="nav-link active"
          >
            <i class="ion-compose"></i>&nbsp;Settings
          </router-link>
        </li>
        <li v-if="username == null" class="nav-item">
          <router-link
            to="/login"
            class="nav-link"
            exact-active-class="nav-link active"
          >
            <i class="ion-compose"></i>&nbsp;Sign in
          </router-link>
        </li>
        <li v-if="username == null" class="nav-item">
          <router-link
            to="/register"
            class="nav-link"
            exact-active-class="nav-link active"
          >
            <i class="ion-compose"></i>&nbsp;Sign up
          </router-link>
        </li>
        <li v-if="username" class="nav-item">
          <router-link
            to="`/@${username}`"
            class="nav-link"
            exact-active-class="nav-link active"
          >
            <i class="ion-compose"></i>
            &nbsp;{{ username }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    username() {
      return this.$store.getters["users/username"];
    }
  }
};
</script>
