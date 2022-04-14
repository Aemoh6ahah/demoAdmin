<template>
  <div>
    <el-switch v-model="compVal"></el-switch>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    SSConfig: {
      type: Object,
      required: true,
    },
    scope: {
      type: Object,
    },
  },
  computed: {},

  setup(props, context) {
    function isOnline(value: number) {
      return props.SSConfig.onlineStates.indexOf(value) != -1;
    }
    const compVal = computed({
      get() {
        return props.SSConfig.onlineStates
          ? isOnline(props.scope.row.state)
          : Boolean(props.scope.row.state);
      },
      async set(v: boolean) {
        const targetVal = v
          ? props.SSConfig.onlineState
            ? props.SSConfig.onlineState
            : 1
          : props.SSConfig.offlineState
          ? props.SSConfig.offlineState
          : 0;
        context.emit("changeState", v, props.scope, targetVal);
      },
    });
    return { compVal };
  },
});
</script>
