<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "Technologies",
  data() {
    return {
      technologies: [],
    };
  },
  methods: {
    getApi() {
      axios
        .get(store.apiUrl)
        .then((result) => {
          console.log(result.data);
          this.types = result.data.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div>
    <h1>Tecnologie</h1>
    <ul>
      <li v-for="technology in technologies" :key="technology.id">
        {{ technology.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
