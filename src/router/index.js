import { createRouter, createWebHashHistory } from "vue-router";
import Logo from "@/components/Logo.vue";

const routes = [
  {
    path: "/",
    name: "Logo",
    component: Logo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
