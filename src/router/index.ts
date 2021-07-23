import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import routes from "./routes/index";
import routes0 from './concat'

let r = JSON.parse(JSON.stringify(routes0))
console.log(r);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes0,
});

export default router;
