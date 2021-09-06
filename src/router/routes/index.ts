import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "mallManagement",
    name: "mallManagement",
    redirect: { name: "customConfig" },
    component: RouterView,
    meta: {
      title: "商城管理",
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "customConfig",
        name: "customConfig",
        meta: {
          title: "个性化管理",
        },
        component: () => import("@/pages/home/mallManagement/customConfig/index.vue"),
      },
      {
        path: "listPage0",
        name: "listPage0",
        meta: {
          title: "列表页",
        },
        component: () => import("@/pages/home/mallManagement/listPage0/index.vue"),
      }
    ]
  },
];
export default routes;