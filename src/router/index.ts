import { createWebHistory, createRouter } from "vue-router";
import Home from "~/views/Home.vue";
import NewPage from "~/views/ExampleNewRouter.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: NewPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
