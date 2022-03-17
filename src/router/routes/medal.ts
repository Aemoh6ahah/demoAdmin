import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "userLabel",
    name: "userLabel",
    redirect: { name: "medalManagement" },
    component: RouterView,
    meta: {
      title: "用户标签",
      icon: "el-icon-plus",
    },
    children: [
      {
        path: "medalManagement",
        name: "medalManagement",
        redirect: { name: "medalList" },
        meta: {
          title: "称号管理",
        },
        component: RouterView,
        children: [
          {
            path: "medalList",
            name: "medalList",
            meta: {
              title: "称号列表",
            },
            component: () => import("@/pages/home/medalManagement/list.vue"),
          },
          {
            path: "addMedal",
            name: "addMedal",
            meta: {
              title: "新增称号",
              hidden: true, // 不在菜单展示
            },
            component: () => import("@/pages/home/medalManagement/add.vue"),
          },
          {
            path: "modifyMedal",
            name: "modifyMedal",
            meta: {
              title: "编辑称号",
              hidden: true, // 不在菜单展示
            },
            component: () => import("@/pages/home/medalManagement/modify.vue"),
          },
          {
            path: "medalDetail",
            name: "medalDetail",
            meta: {
              title: "称号详情",
              hidden: true, // 不在菜单展示
            },
            component: () => import("@/pages/home/medalManagement/detail.vue"),
          }
        ]
      },


    ]
  },

];
export default routes;