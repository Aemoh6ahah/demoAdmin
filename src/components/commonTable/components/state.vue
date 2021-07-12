<template>
  <div class="state">
    <span class="point" :style="{ backgroundColor: renderConfig.color }"></span>
    <span class="text">{{ renderConfig.label }}</span>
    <!-- {{ renderConfig }} -->
  </div>
</template>
<script lang="ts">
/**
 * @params config
 * 默认上线中和已下线两个状态 类型为数组
 * @params state
 * 接收的状态码
 */
import { defineComponent } from "vue";
import { config } from "./const";

export default defineComponent({
  name: "state",
  props: {
    config: {
      type: Array,
      default: (): config[] => {
        return [
          {
            label: "上线中",
            stateCode: 1,
            color: "#52C41A",
          },
          {
            label: "已下线",
            stateCode: 0,
            color: "#C5CCD7",
          },
        ];
      },
    },
    state: {
      type: [String, Number],
    },
    scope: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
  computed: {
    renderConfig() {
      return (
        this.config.find((_: config) => {
          return _.stateCode == this.scope.row.state;
        }) || {}
      );
    },
  },
});
</script>
<style lang="less" scoped>
.point {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transform: translateY(-2px);
  margin-right: 4px;
}
</style>
