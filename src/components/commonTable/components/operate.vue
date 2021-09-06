<template>
  <el-dropdown trigger="click">
    <span>...</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(i, index) in operations" :key="index">
          <el-button @click="i.cb(scope)" type="text"
            ><i v-if="i.icon" :class="i.icon"></i>{{ i.label }}</el-button
          >
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
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
</style>