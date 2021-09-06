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
    redirect: { name: "mallManagement" },
    children: routes0
  }
];
