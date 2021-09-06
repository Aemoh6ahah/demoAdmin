import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "@/assets/reset.css";
import '@/assets/element.less'
import '@/assets/theme/index.css'
import CardHeader from '@/components/cardHeader/index.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import installTools from '@/project/install'
const app = createApp(App).component('CardHeader', CardHeader);
installTools(app);

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(store);
app.use(router);
app.mount("#app");
