import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
// import axios from "axios";
// axios()
createApp(App)
  .use(router)

  .mount("#app");
