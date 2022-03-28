<template>
  <div class="menu" :class="isCollapse ? 'collapse' : ''">
    <div :class="isCollapse ? 'collapse logo' : 'logo'"></div>
    <el-menu
      :uniqueOpened="true"
      :default-active="activeName"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#232a36"
      text-color="#888"
      @select="selectMeun"
      active-text-color="#fff"
    >
      <el-sub-menu
        :index="i.name"
        v-for="i in renderMenuMap"
        v-show="!i.meta.hidden"
        :key="i.name"
      >
        <template #title>
          <span>{{ i.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="j in i.children"
            :key="j.name"
            v-show="!j.meta.hidden"
            :index="j.name"
            >{{ j.meta.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import routes from "@/router/concat";

export default defineComponent({
  name: "meun",
  setup() {
    const routeMap = ref(routes);
    const isCollapse = ref(false);

    return { routeMap, isCollapse };
  },
  computed: {
    renderMenuMap() {
      return this.routeMap[0].children;
    },
    routeNames() {
      return this.$route.matched.map((_) => _.name);
    },
    activeName() {
      return this.routeNames.length > 3 ? this.routeNames[2] : this.$route.name;
    },
  },

  methods: {
    selectMeun(index: string, path: string) {
      // return;
      this.$router.push({ name: index });
    },
    handleCollapse(isCollapse) {
      this.isCollapse = isCollapse;
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
  width: 208px;
  height: 100%;
  background-color: #232a36;
  .logo {
    width: 176px;
    background-image: url("../../../assets/img/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 37px;
    background-color: #232a36;
    text-align: center;
    line-height: 61px;
    margin: 12px;
    box-sizing: border-box;
    transition: 0.7s;
    &.collapse {
      width: 66px;
      margin: 0;
    }
  }
}
.el-menu {
  border: none;
}
/deep/.el-sub-menu {
  .el-menu-item.is-active {
    background-color: #4662e6 !important;
  }
  &.is-active {
    .el-sub-menu__title {
      color: #fff !important;
      i {
        color: #fff !important;
      }
    }
  }
}

.collapse {
  width: 66px;
}
/deep/.el-sub-menu__title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
