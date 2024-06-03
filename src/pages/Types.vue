<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  name: "Types",
  data() {
    return {
      types: [],
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
    <h1>Tipologie</h1>
    <ul>
      <li v-for="type in types" :key="type.id">{{ type.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
