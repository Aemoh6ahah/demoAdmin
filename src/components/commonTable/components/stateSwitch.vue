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
    const compVal = computed({
      get() {
        return props.SSConfig.onlineState
          ? props.scope.row.state === props.SSConfig.onlineState
          : Boolean(props.scope.row.state);
      },
      async set(v: boolean) {
        const targetVal = v
          ? props.SSConfig.onlineState
            ? props.SSConfig.onlineState
            : 1
          : props.SSConfig.offlineState
          ? props.SSConfig.offlineState
          : 1;
        context.emit("changeState", v, props.scope, targetVal);
      },
    });
    return { compVal };
  },
});
</script>
