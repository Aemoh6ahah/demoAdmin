import { RouteRecordRaw } from "vue-router";

export const Login: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/pages/home/index.vue"),
  },
];