<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tag"
                  @keyup.enter="addTag()"
                />
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(v, k) in tagList"
                    :key="k"
                    >{{ v }}</span
                  >
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="submit()"
              >
                Publish Article
              </button>
            </fieldset>
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
      title: "",
      description: "",
      body: "",
      tag: "",
      tagList: []
    };
  },
  methods: {
    addTag() {
      this.tagList.push(this.tag);
      this.tag = "";
    },
    submit() {
      this.$store
        .dispatch("article/create", {
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: this.tagList
        })
        .then(() => {
          // #todo, nice toast and no redirect
          this.$router.push({ name: "article" });
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
