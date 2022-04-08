import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "home",
    redirect: { name: "resourceManagement" },
    component: RouterView,
    meta: {
      title: "首页管理",
      icon: "el-icon-plus",
    },
    children: [
      {
        path: "resourceManagement",
        name: "resourceManagement",
        redirect: { name: "resourceList" },
        meta: {
          title: "资源位管理",
        },
        component: RouterView,
        children: [
          {
            path: "resourceList",
            name: "resourceList",
            meta: {
              title: "资源位列表",
            },
            component: () => import("@/pages/home/homeManagement/resourceManagement/list.vue"),
          },
          {
            path: "addResource",
            name: "addResource",
            meta: {
              title: "新增资源位",
              hidden: true, // 不在菜单展示
            },
            component: () => import("@/pages/home/homeManagement/resourceManagement/add.vue"),
          },
          {
            path: "modifyResource",
            name: "modifyResource",
            meta: {
              title: "编辑资源位",
              hidden: true, // 不在菜单展示
            },
            component: () => import("@/pages/home/homeManagement/resourceManagement/modify.vue"),
          },
          // {
          //   path: "resourceDetail",
          //   name: "resourceDetail",
          //   meta: {
          //     title: "资源位详情",
          //     hidden: true, // 不在菜单展示
          //   },
          //   component: () => import("@/pages/home/homeManagement/resourceManagement/detail.vue"),
          // }
        ]
      },
    ]
  },


];
export default routes;