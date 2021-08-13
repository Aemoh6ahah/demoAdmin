<template>
  <div class="header" :class="isCollapse ? 'isCollapse' : ''">
    <ElMenu
      :default-active="defaultActive"
      class="hor-menu"
      background-color="#4662E6"
      text-color="#abbaf22"
      size="medium"
      mode="horizontal"
      @select="selectMeun"
    >
      <el-menu-item
        v-for="i in routeMap[0].children"
        :key="i.name"
        :index="i.name"
        >{{ i.meta.title }}</el-menu-item
      >
    </ElMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRef } from "vue";
// 从concat获取全部的路由
import routes from "@/router/concat";

export default defineComponent({
  name: "layout-header",
  props: {
    isCollapse: Boolean,
  },
  setup(props) {
    // const routeMap = ref([...routes]);
    // const { isCollapse } = toRefs(props);
    const routeMap = reactive(routes);
    return {
      routeMap,
    };
  },

  methods: {
    selectMeun(index: string, path: string) {
      this.$router.push({ name: index });
    },
  },

  computed: {
    defaultActive() {
      return this.$route.fullPath.split("/")[1];
    },
  },

  created() {},
});
</script>
<style lang="less" scoped>
.header {
  height: 61px;
  padding-left: 200px;
  transition: 0.8s;
  margin: -61px 0 0;
  .hor-menu {
  }
}
.isCollapse {
  padding-left: 65px;
}
/deep/.el-menu-item.is-active {
  color: #fff !important;
}
/deep/.el-menu-item {
  &:hover {
    color: #fff !important;
  }
}
</style>
