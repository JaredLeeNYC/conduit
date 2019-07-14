import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Editor from "./views/Create-Edit-Article.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login-Register.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Login-Register.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/Settings.vue")
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor
    },
    {
      path: "/article",
      name: "article",
      component: () => import("./views/Article.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue")
    }
  ]
});
