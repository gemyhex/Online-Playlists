import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/*Global Style*/
import "./assets/main.css";

import { pjAuth } from "./firebase/config";

let app;
pjAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
