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

<style lang="scss" scoped>
header {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    li {
      list-style: none;
      a {
        text-decoration: none;
        padding: 0 20px;
        text-transform: uppercase;
        &:hover {
          text-decoration: underline;
        }
        &.active {
          color: yellow;
        }
      }
    }
  }
}
</style>
