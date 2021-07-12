import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/reset.css";
import '@/assets/element.less'
import '@/assets/theme/index.css'
import ElementPlus from "element-plus";
import CardHeader from '@/components/cardHeader/index.vue';
import { formatQueryform } from '@/utils/util'
import installTools from '@/project/install'
const app = createApp(App).component('CardHeader', CardHeader);
// app.config.globalProperties.$formatQueryform = formatQueryform;
installTools(app);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
