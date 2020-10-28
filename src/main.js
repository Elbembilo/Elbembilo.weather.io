import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import axios from "axios";
import VueAxios from "vue-axios";

// Vue();
// axios();
// VueAxios();

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
