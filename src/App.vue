<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      loader: true,
    };
  },
  methods: {
    getApi() {
      axios
        .get("http://127.0.0.1:8000/api/projects")
        .then((result) => {
          this.loader = false;
          this.projects = result.data.data;
          console.log(this.projects);
        })
        .catch((error) => {
          this.loader = false;
          console.log(error);
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
    <h1>Boolfolio Home</h1>
    <div class="container" v-if="!loader">
      <h3>I miei progetti:</h3>
      <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.id }} -
          {{ project.name }}
        </li>
      </ul>
    </div>
    <p v-else>Carico...</p>
  </div>
</template>

<style lang="scss" scoped></style>
