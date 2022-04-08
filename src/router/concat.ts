import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/layout/index.vue";

const context = require['context']('./routes', true, /\.(ts)$/);

const es6Unwrap = (mod: any) => {
  return mod.__esModule ? mod.default : mod;
};
let routes0 = context.keys()
  .map(id => es6Unwrap(context(id)))
  .reduce((pre, list) => pre.concat(list), []);


// console.log(routes0);


export default [
  {
    path: "/",
    name: "",
    component: Layout,
    redirect: { name: "resourceManagement" },
    children: routes0
  },
  {
    path: "/404",
    name: "notfound",
    component: () => import("@/pages/home/404/404.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/login.vue"),
  },
  {
    path: "/registe",
    name: "registe",
    component: () => import("@/pages/login/registe.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "notfound" },
  }
];
