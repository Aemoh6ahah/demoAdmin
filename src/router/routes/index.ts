import Layout from "@/components/layout/index.vue";
import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    component: Layout,
    redirect: "/project/login",
    children: [
      {
        path: "project",
        name: "layout",
        redirect: "/project/login",
        meta: {
          title: "标题",
        },
        component: RouterView,
        children: [
          {
            path: "login",
            name: "login",
            meta: {
              title: "登录",
            },
            component: () => import("@/pages/home/index.vue"),
          },
        ],
      },
      {
        path: "project1",
        name: "layout1",
        redirect: "/project1/login1",
        meta: {
          title: "标题1",
        },
        component: RouterView,
        children: [
          {
            path: "login1",
            name: "login1",
            meta: {
              title: "登录1",
            },
            component: () => import("@/pages/login/index.vue"),
          },
        ],
      },
    ],
  },
];
export default routes;
