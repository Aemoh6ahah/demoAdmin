import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "somethingFun",
    name: "somethingFun",
    redirect: { name: "funnyStyle" },
    component: RouterView,
    meta: {
      title: "somethingFun",
    },
    children: [
      {
        path: "funnyStyle",
        name: "funnyStyle",
        redirect: { name: "rotate" },

        component: RouterView,
        meta: {
          title: "funnyStyle",
        },
        children: [
          {
            path: "rotate",
            name: "rotate",
            meta: {
              title: "rotate",
            },
            component: () => import("@/pages/somethingFun/funnyStyle/rotate/index.vue"),
          }
        ]
      },
      {
        path: "game",
        name: "game",
        redirect: { name: "wuxia" },

        component: RouterView,
        meta: {
          title: "game",
        },
        children: [
          {
            path: "wuxia",
            name: "wuxia",
            meta: {
              title: "wuxia",
            },
            component: () => import("@/pages/somethingFun/game/wuxia/index.vue"),
          }
        ]
      },
    ],
  },
];
export default routes;
