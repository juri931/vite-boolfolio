<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getApi() {
      axios
        .get("http://127.0.0.1:8000/api/projects")
        .then((result) => {
          this.projects = result.data.data;
        })
        .catch((error) => {
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
    <h5>I miei progetti:</h5>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
