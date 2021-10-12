<template>
  <div class="line-text" :title="scope.row[scope._column.prop]">
    {{ scope.row[scope._column.prop] }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
    },
    scope: {
      type: Object,
    },
  },
});
</script>
