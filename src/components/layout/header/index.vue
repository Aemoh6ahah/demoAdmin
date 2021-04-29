<template>
  <div class="header">
    <ElMenu
      :default-active="'3'"
      class="hor-menu"
      background-color="#46aae6"
      text-color="#fff"
      size="medium"
      active-text-color="#46faf6"
      mode="horizontal"
      @select="selectMeun"
    >
      <el-menu-item
        v-for="i in routeMap[0].children"
        :key="i.name"
        :index="i.name"
        >{{ i.meta.title }}</el-menu-item
      >
      <el-menu-item index="3">消息中心</el-menu-item>
    </ElMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import routes from "@/router/routes/index";

export default defineComponent({
  name: "layout-header",
  setup(props, ctx) {
    // const routeMap = ref([...routes]);
    const routeMap = reactive(routes);
    return {
      routeMap,
    };
  },
  methods: {
    selectMeun(index: string, path: string) {
      this.$router.push({ name: index });
      console.log(path);
    },
  },
});
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 61px;
  padding-left: 200px;
  .hor-menu {
  }
}
</style>
