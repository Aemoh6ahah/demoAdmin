import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/reset.css";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);
console.log(ElementPlus);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
