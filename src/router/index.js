import { createRouter, createWebHistory } from "vue-router";
import Logo from "@/components/Logo.vue";
// import City from "@/components/City.vue";
// import Weather from "@/components/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Weather",
    component: Logo,
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
