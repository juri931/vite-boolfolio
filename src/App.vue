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
        .get("http://localhost:5174/api/projects")
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
  </div>
</template>

<style lang="scss" scoped></style>
