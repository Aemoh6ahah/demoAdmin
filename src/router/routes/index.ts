import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "home",
    name: "home",
    redirect: { name: "entertainment" },
    component: RouterView,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "entertainment",
        name: "entertainment",
        redirect: { name: "toplist" },
        component: RouterView,

        meta: {
          title: "娱乐",
          icon: "el-icon-coffee-cup",
        },
        children: [
          {
            path: "toplist",
            name: "toplist",
            meta: {
              title: "今日热门",
            },
            component: () => import("@/pages/home/entertainment/toplist/index.vue"),
          },
          {
            path: "holiday",
            name: "holiday",
            meta: {
              title: "什么时候放假",
            },
            component: () => import("@/pages/home/entertainment/holiday/index.vue"),
          },
        ]
      },
      {
        path: "componentsManagement",
        name: "componentsManagement",
        redirect: { name: "table" },
        component: RouterView,
        meta: {
          title: "组件管理",
          icon: "el-icon-house",
          hidden: true,
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
              title: "列表页",
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