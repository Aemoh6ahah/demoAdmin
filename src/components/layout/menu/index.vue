<template>
  <div class="menu">
    <div class="logo"></div>
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#46faf6"
      :router="true"
    >
      <el-submenu index="1">
        <template #title>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "meun",
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #545c64;
  .logo {
    height: 61px;
    background-color: #fafafa;
  }
}
</style>
