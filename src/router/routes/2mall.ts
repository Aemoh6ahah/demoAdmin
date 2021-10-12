import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "mallManagement",
    name: "mallManagement",
    redirect: { name: "mallCustomConfig" },
    component: RouterView,
    meta: {
      title: "商城管理",
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "mallCustomConfig",
        name: "mallCustomConfig",
        meta: {
          title: "个性化管理",
        },
        component: () => import("@/pages/home/mallManagement/customConfig/index.vue"),
      },

    ]
  },

];
export default routes;