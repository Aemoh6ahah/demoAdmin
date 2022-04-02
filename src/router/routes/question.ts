import { RouteRecordRaw, RouterView } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "question",
    name: "question",
    redirect: { name: "classificationManagement" },
    component: RouterView,
    meta: {
      title: "问题专区管理",
      icon: "el-icon-plus",
    },
    children: [
      {
        path: "classificationManagement",
        name: "classificationManagement",
        redirect: { name: "classificationManagementList" },
        meta: {
          title: "问题分类管理",
        },
        component: RouterView,
        children: [
          {
            path: "classificationManagementList",
            name: "classificationManagementList",
            meta: {
              title: "问题分类管理列表",
            },
            component: () => import("@/pages/home/questionManagement/classificationManagementList/list.vue"),
          },
        ]
      },

      {
        path: "userQuestion",
        name: "userQuestion",
        redirect: { name: "userQuestionList" },
        meta: {
          title: "用户问题管理",
        },
        component: RouterView,
        children: [
          {
            path: "userQuestionList",
            name: "userQuestionList",
            meta: {
              title: "问题分类管理列表",
            },
            component: () => import("@/pages/home/questionManagement/userQuestion/list.vue"),
          },
          {
            path: "userQuestionDetail",
            name: "userQuestionDetail",
            meta: {
              title: "问题分类管理详情",
            },
            component: () => import("@/pages/home/questionManagement/userQuestion/detail.vue"),
          },
        ]
      },


    ]
  },

];
export default routes;