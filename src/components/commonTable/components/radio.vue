<template>
  <el-radio v-model="selected" :label="true">{{ "" }}</el-radio>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "table-radio",
  props: {
    selections: {
      type: Object,
    },
    scope: {
      type: Object,
    },
  },

  setup(props, ctx) {
    const selected = computed({
      get: () => {
        return (
          props.scope.row[props.selections.rowKey] ==
          props.selections.selectRowKey
        );
      },
      set: (v1) => {
        ctx.emit(
          "radioSet",
          props.scope.row[props.selections.rowKey],
          props.scope.row
        );
        console.log(v1);
      },
    });

    return { selected };
  },
});
</script>
