<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href>Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click="register()"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("users/signUp", {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.errors = [];
        })
        .then(() => {
          // #todo, nice toast and no redirect
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.errors = err;
        });
    }
  }
};
</script>
