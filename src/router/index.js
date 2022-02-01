import { createRouter, createWebHistory } from "vue-router";
import SongTemplate from "../components/SongTemplate.vue";
import Home from "../components/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/songs",
    name: "SongTemplate",
    component: SongTemplate,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
