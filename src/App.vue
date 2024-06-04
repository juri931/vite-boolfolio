<script>
import axios from "axios";
import { store } from "./data/store";
import ProjectCard from "./components/ProjectCard.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    ProjectCard,
    Header,
  },
  data() {
    return {
      projects: [],
      loader: true,
      error: false,
    };
  },
  methods: {
    getApi() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          this.loader = false;
          this.projects = result.data.data;
          console.log(this.projects);
        })
        .catch((error) => {
          this.loader = false;
          console.log(error.message);
          this.error = error.message;
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <router-view></router-view>
      <Header />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/_projectCard.scss";
</style>
