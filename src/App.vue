<template>
  <div id="app">
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->

            <router-link
              to="/"
              class="nav-link"
              exact-active-class="nav-link active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/editor"
              class="nav-link"
              exact-active-class="nav-link active"
              ><i class="ion-compose"></i>&nbsp;New Post</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/settings"
              class="nav-link"
              exact-active-class="nav-link active"
              ><i class="ion-compose"></i>&nbsp;Settings</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/login"
              class="nav-link"
              exact-active-class="nav-link active"
              ><i class="ion-compose"></i>&nbsp;Sign in</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/register"
              class="nav-link"
              exact-active-class="nav-link active"
              ><i class="ion-compose"></i>&nbsp;Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <router-view />

    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<style></style>
