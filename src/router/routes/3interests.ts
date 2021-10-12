import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "interestslManagement",
    name: "interestsManagement",
    redirect: { name: "interestsDes" },
    component: RouterView,
    meta: {
      title: "权益管理",
      icon: "el-icon-s-shop",
    },
    children: [
      {
        path: "integralRule",
        name: "integralRule",
        meta: {
          title: "积分规则",
        },
        component: () => import("@/pages/home/interestsManagement/integralRule/index.vue"),
      },

    ]
  },

];
export default routes;