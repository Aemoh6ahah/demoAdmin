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
        redirect: { name: "table" },
        component: RouterView,
        meta: {
          title: "组件管理",
          icon: "el-icon-house",
        },
        children: [
          {
            path: "table",
            name: "table",
            meta: {
              title: "表格",
            },
            component: () => import("@/pages/home/showComponents/table/index.vue"),
          },
          {
            path: "listPage",
            name: "listPage",
            meta: {
              title: "表格页面",
            },
            component: () => import("@/pages/home/showComponents/listPage/index.vue"),
          }
        ]
      },

    ],
  },

];
export default routes;
// {
//   path: "meun1-2",
//   name: "meun1-2",
//   redirect: { name: "meun2-2" },
//   component: RouterView,
//   meta: {
//     title: "一级菜单2",
//   },
//   children: [
//     {
//       path: "meun2-2",
//       name: "meun2-2",
//       redirect: { name: "meun3-2" },

//       component: RouterView,
//       meta: {
//         title: "二级菜单2",
//       },
//       children: [
//         // {
//         //   path: "meun3-2",
//         //   name: "meun3-2",
//         //   meta: {
//         //     title: "三级菜单2",
//         //   },
//         //   component: () => import("@/pages/home/test.vue"),
//         // }
//       ]
//     },
//   ],
// },