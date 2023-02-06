import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";

import "../src/assets/scss/main.scss";

const app = createApp(App);

app.use(routes);

app.mount("#app");
