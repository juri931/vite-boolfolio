<script>
import axios from "axios";
import { store } from "../data/store";

import Header from "@/components/Header.vue";
import ProjectCard from "../components/ProjectCard.vue";

import Paginator from "../components/partials/Paginator.vue";

export default {
  name: "App",
  components: {
    Header,
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      paginatorData: {},
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
          this.paginator.current_page = result.data.current_page;
          this.paginator.links = result.data.links;
          this.paginator.total = result.data.total;
          console.log(this.paginator);
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
      <Header />
    </div>

    <div class="container">
      <router-view></router-view>
    </div>

    <h1>Boolfolio Home</h1>
    <h3>I miei progetti:</h3>
    <div class="projects-container" v-if="!loader">
      <div id="app">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />

        <Paginator :data="paginatorData" />
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
