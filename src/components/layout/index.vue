<template>
  <div class="layoout">
    <LayoutHeader :isCollapse="isCollapse" />
    <div class="content" :class="isCollapse ? 'isCollapse' : ''">
      <el-breadcrumb
        separator-class="el-icon-arrow-right"
        style="margin: 0 0 0 24px"
      >
        <template v-for="route in routeInfo" :key="route.name">
          <el-breadcrumb-item :to="route.path" v-if="!route.disable">
            {{ route.meta.title }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-else>
            {{ route.meta.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
      <router-view></router-view>
    </div>
    <Menu @collapse="collapseChange"></Menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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
  computed: {
    routeInfo() {
      let matched = [...this.$route.matched];
      matched.splice(0, 1);
      matched[matched.length - 1].disable = true;
      return matched;
    },
  },
  created() {
    console.log(document.body.offsetWidth);
  },
  mounted() {
    // console.log(document.body.offsetWidth);
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
  padding-top: 61px;
  .content {
    height: 100%;
    padding-left: 200px;
    transition: 0.8s;
    background: #f4f6fa;
    overflow: auto;
    position: relative;
  }
  .isCollapse {
    padding-left: 65px;
  }
  /deep/.el-breadcrumb {
    padding-top: 24px;
    .is-link {
      color: #606266;
      font-weight: 400;
      &:hover {
        color: #4662e6;
      }
    }
  }
}
</style>
