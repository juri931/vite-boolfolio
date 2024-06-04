import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Types from "./pages/Types.vue";
import Technologies from "./pages/Technologies.vue";
import Error404 from "./pages/Error404.vue";

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/types",
      name: "types",
      component: Types,
    },
    {
      path: "/technologies",
      name: "technologies",
      component: Technologies,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error404",
      component: Error404,
    },
  ],
});

export { router };
