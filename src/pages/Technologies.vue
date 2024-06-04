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
          console.log(result.data.data);
          this.technologies = result.data.data;
          console.log(this.technologies);
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
        <ul>
          <li v-for="tech in technology.technologies" :key="tech.id">
            {{ tech.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
