import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "mineManagement",
    name: "mineManagement",
    redirect: { name: "customConfig" },
    component: RouterView,
    meta: {
      title: "我的管理",
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "customConfig",
        name: "customConfig",
        meta: {
          title: "个性化管理",
        },
        component: () => import("@/pages/home/mineManagement/customConfig/index.vue"),
      },
    ]
  },
];
export default routes;