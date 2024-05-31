<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">{{ project.id }} - {{ project.name }}</h3>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="btn btn-primary">Vai al progetto</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
