<script>
import axios from "axios";
import { store } from "../data/store";

import Header from "@/components/Header.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    Header,
    ProjectCard,
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
  <div class="container">
    <Header />
  </div>

  <div class="main-wrapper">
    <h1>Boolfolio Home</h1>
    <h3>I miei progetti:</h3>
    <div class="projects-container" v-if="!loader">
      <div id="app">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>

    <p v-else>Carico...</p>

    <div v-if="error">
      <h2>{{ error }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/_projectCard.scss";
</style>
