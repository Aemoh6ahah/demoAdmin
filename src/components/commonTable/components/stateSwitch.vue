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
        return Boolean(props.scope.row.state);
      },
      async set(v) {
        context.emit("changeState", v, props.scope);
      },
    });
    return { compVal };
  },
});
</script>
