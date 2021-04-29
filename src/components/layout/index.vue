<template>
  <div class="layoout">
    <LayoutHeader />
    <div class="content">
      <router-view></router-view>
    </div>
    <Menu></Menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "./header/index.vue";
import Menu from "./menu/index.vue";

export default defineComponent({
  name: "layout",
  components: {
    LayoutHeader,
    Menu,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.layoout {
  position: relative;
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: 100%;
    padding-left: 200px;
  }
}
</style>
