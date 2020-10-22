import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Vue from "vue";
// import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

// Vue.use(VueMaterial);

createApp(App)
  .use(router)
  //   .use(VueMaterial)
  .mount("#app");
