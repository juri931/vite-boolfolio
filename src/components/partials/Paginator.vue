<script>
export default {
  name: "Paginator",
  props: {
    data: Object,
  },
  methods: {
    callApi(link) {
      this.$emit("callApi", link);
    },
  },
};
</script>

<template>
  <div class="paginator">
    <button
      v-for="link in data.links"
      :key="link.label"
      v-html="link.label"
      :disabled="link.active"
      @click="callApi(link.url)"
    ></button>
  </div>
</template>

<style lang="scss" scoped></style>
