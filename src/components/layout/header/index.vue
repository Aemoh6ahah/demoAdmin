<template>
  <div class="header" :class="isCollapse ? 'isCollapse' : ''">
    <ElMenu
      :default-active="defaultActive"
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
    </ElMenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRef } from "vue";
import routes from "@/router/routes/index";

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
      console.log(path);
    },
  },

  computed: {
    defaultActive() {
      return this.$route.fullPath.split("/")[1];
    },
  },
});
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 61px;
  padding-left: 200px;
  transition: 0.8s;
  .hor-menu {
  }
}
.isCollapse {
  padding-left: 65px;
}
</style>
