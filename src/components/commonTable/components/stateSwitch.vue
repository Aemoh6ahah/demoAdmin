<template>
  <div>
    <el-switch></el-switch>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    SSConfig: {
      type: Object as PropType<SSCONFIG>,
      required: true,
    },
    scope: {
      type: Object,
    },
  },
  computed: {},

  setup(props) {
    const compVal = computed({
      get() {
        return props.scope.row.state;
      },
      async set() {
        // await props.SSConfig.interface(
        //   props.scope.row[props.SSConfig.key],
        //   Number(!props.scope.row.state)
        // );
      },
    });
    return {};
  },
});
</script>
