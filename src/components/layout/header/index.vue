<template>
  <div class="header" :class="isCollapse ? 'isCollapse' : ''">
    <!-- <ElMenu
      :default-active="defaultActive"
      class="hor-menu"
      background-color="#4662E6"
      text-color="#abbaf22"
      size="medium"
      mode="horizontal"
      @select="selectMeun"
      v-show="false"
    >
      <el-menu-item
        v-for="i in routeMap[0].children"
        :key="i.name"
        :index="i.name"
        >{{ i.meta.title }}</el-menu-item
      >
    </ElMenu> -->
    <div class="coll-btn">
      <el-button
        type="text"
        style="width: 84px"
        class="icon"
        @click="handleCollapse"
      >
        <i v-if="isCollapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRef, onMounted } from "vue";
// 从concat获取全部的路由
import routes from "@/router/concat";

export default defineComponent({
  name: "layout-header",
  props: {
    isCollapse: Boolean,
  },
  setup(props, ctx) {
    const routeMap = reactive(routes);

    const isCollapse = ref(false);
    return {
      routeMap,
      isCollapse,
    };
  },

  methods: {
    selectMeun(index: string, path: string) {
      this.$router.push({ name: index });
    },
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
      this.$emit("collapse", this.isCollapse);
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
  background-color: #4662e6;
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
.coll-btn {
  display: flex;
  // flex-direction: row-reverse;
  .icon {
    font-size: 20px;
    margin-right: 20px;
  }
  /deep/.el-button {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>
