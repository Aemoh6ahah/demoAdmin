<template>
  <div class="layoout">
    <LayoutHeader :isCollapse="isCollapse" />
    <div class="content" :class="isCollapse ? 'isCollapse' : ''">
      <router-view></router-view>
    </div>
    <Menu @collapse="collapseChange"></Menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import LayoutHeader from "./header/index.vue";
import Menu from "./menu/index.vue";

export default defineComponent({
  name: "layout",
  components: {
    LayoutHeader,
    Menu,
  },
  setup() {
    const isCollapse = ref(false);
    return { isCollapse };
  },
  methods: {
    collapseChange(isCollapse) {
      this.isCollapse = isCollapse;
    },
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
  .isCollapse {
    padding-left: 65px;
  }
}
</style>
