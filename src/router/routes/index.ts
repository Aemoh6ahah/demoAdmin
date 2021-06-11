import Layout from "@/components/layout/index.vue";
import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    component: Layout,
    redirect: { name: "meun1-1" },
    children: [
      {
        path: "meun1-1",
        name: "meun1-1",
        redirect: { name: "meun2-1" },
        component: RouterView,
        meta: {
          title: "首页",
        },
        children: [
          {
            path: "meun2-1",
            name: "meun2-1",
            redirect: { name: "meun3-1" },

            component: RouterView,
            meta: {
              title: "首页",
              icon: "el-icon-house",
            },
            children: [
              {
                path: "meun3-1",
                name: "meun3-1",
                meta: {
                  title: "三级菜单1",
                },
                component: () => import("@/pages/home/index.vue"),
              },
              {
                path: "meun3-4",
                name: "meun3-4",
                meta: {
                  title: "三级菜单4",
                },
                component: () => import("@/pages/home/index.vue"),
              }
            ]
          },

        ],
      },
      {
        path: "meun1-2",
        name: "meun1-2",
        redirect: { name: "meun2-2" },
        component: RouterView,
        meta: {
          title: "一级菜单2",
        },
        children: [
          {
            path: "meun2-2",
            name: "meun2-2",
            redirect: { name: "meun3-2" },

            component: RouterView,
            meta: {
              title: "二级菜单2",
            },
            children: [
              {
                path: "meun3-2",
                name: "meun3-2",
                meta: {
                  title: "三级菜单2",
                },
                component: () => import("@/pages/home/test.vue"),
              }
            ]
          },
        ],
      },
    ],
  },
];
export default routes;
