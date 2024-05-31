<script>
import axios from "axios";

export default {
  methods: {
    getApi() {
      axios
        .get("http://localhost:5174/api/projects")
        .then((result) => {
          console.log(result.data);
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
