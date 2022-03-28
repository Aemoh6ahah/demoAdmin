import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "@/assets/style/reset.css";
import '@/assets/style/common.less'
// import '@/assets/style/theme/index.css'
import 'element-plus/dist/index.css'
import '@/assets/style/element.less'
import CardHeader from '@/components/cardHeader/index.vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import installTools from '@/project/install'


const app = createApp(App).component('CardHeader', CardHeader);
installTools(app);

app.use(ElementPlus, {
  locale: zhCn,
  size: 'small',
});
app.use(store);
app.use(router);
app.mount("#app");
