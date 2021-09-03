import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "home",
    redirect: { name: "componentsManagement" },
    component: RouterView,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "componentsManagement",
        name: "componentsManagement",
        redirect: { name: "listPage" },
        component: RouterView,
        meta: {
          title: "组件",
          icon: "el-icon-house",
        },
        children: [
          {
            path: "listPage",
            name: "listPage",
            meta: {
              title: "列表页",
            },
            component: () => import("@/pages/home/showComponents/listPage/index.vue"),
          },
          {
            path: "listPage0",
            name: "listPage0",
            meta: {
              title: "列表页",
            },
            component: () => import("@/pages/home/showComponents/listPage0/index.vue"),
          }
        ]
      },
    ],
  },

];
export default routes;