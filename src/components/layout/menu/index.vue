<template>
  <div class="menu" :class="isCollapse ? 'collapse' : ''">
    <div class="logo"></div>
    <el-menu
      :uniqueOpened="true"
      :default-active="$route.name"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      @select="selectMeun"
      active-text-color="#46faf6"
    >
      <el-button type="text" @click="handleCollapse">
        {{ isCollapse ? "展开" : "收起" }}
      </el-button>
      <el-submenu
        :index="i.name"
        v-for="i in renderMenuMap.children"
        :key="i.name"
      >
        <template #title>
          <i class="el-icon-location"></i><span>{{ i.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="j in i.children" :key="j.name" :index="j.name">{{
            j.meta.title
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import routes from "@/router/routes/index";

export default defineComponent({
  name: "meun",
  setup() {
    const routeMap = ref(routes);
    const isCollapse = ref(false);
    return { routeMap, isCollapse };
  },
  computed: {
    renderMenuMap() {
      return this.routeMap[0].children.find((_) => {
        let name = this.$route.fullPath.split("/")[1];
        return name === _.path;
      });
    },
  },
  methods: {
    selectMeun(index: string, path: string) {
      this.$router.push({ name: index });
      console.log(path);
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", this.isCollapse);
    },
  },
});
</script>
<style lang="less" scoped>
.menu {
  position: absolute;
  transition: 0.8s;
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
.el-menu {
  border: none;
}
.collapse {
  width: 66px;
}
</style>
