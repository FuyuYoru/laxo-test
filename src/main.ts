import { createApp } from "vue";
import "@/shared/configs/styles/style.css";
import App from "@/app/App.vue";
import { router } from "@/app/router/router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
