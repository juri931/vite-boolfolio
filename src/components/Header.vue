<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
