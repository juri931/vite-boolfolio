<script>
export default {
  name: "Header",
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'home' }">Projects</router-link></li>
        <li><router-link :to="{ name: 'types' }">Types</router-link></li>
        <li>
          <router-link :to="{ name: 'technologies' }">Technologies</router-link>
        </li>
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
