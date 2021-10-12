<template>
  <el-dropdown
    trigger="click"
    size="small"
    placement="top-start"
    class="operate"
  >
    <span class="point">...</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(i, index) in operations"
          :key="index"
          :icon="i.icon"
          :divided="true"
        >
          <el-button
            @click="i.cb(scope)"
            type="text"
            size="mini"
            :disabled="i.disable && i.disable(scope)"
          >
            <span>{{ i.label }}</span>
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  emits: ["refresh", "changeState"],
  props: {
    operations: {
      type: Array as PropType<OPERATION[]>,
      default: () => {
        return [];
      },
    },
    scope: {
      type: Object,
    },
  },
  setup() {},
});
</script>
<style lang="less" scoped>
.el-dropdown-menu--small :first-child {
  border: none !important;
}
.el-dropdown-menu--small {
  padding-top: 0;
  box-sizing: border-box;
  overflow: hidden;
}
.el-dropdown-menu__item {
  width: 108px;
  padding: 0 6px;
  font-weight: normal;
  font-size: 14px;
  color: #516076;
  .el-button {
    text-align: left;
    font-weight: normal;
    color: #516076;
  }
}
.el-dropdown__popper {
  width: 120px;
}
.point {
  cursor: pointer;
  font-size: 38px;
  line-height: 14px;
  letter-spacing: -3px;
}
</style>