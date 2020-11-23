import { createRouter, createWebHistory } from "vue-router";
// import Logo from "@/components/Logo.vue";
import App from "@/App.vue";
// import Weather from "@/components/Weather.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },
  // {
  //   path: "/:id",
  //   name: "city",
  //   component: City,
  //   props: true,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
