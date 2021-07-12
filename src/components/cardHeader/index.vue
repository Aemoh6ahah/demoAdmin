<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <div class="card-header-name">{{ name }}</div>
        <div class="card-header-btns">
          <slot name="operate-btns"></slot>
        </div>
      </div>
    </template>
    <slot name="filters"></slot>
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 1px solid #eeeef1;
  &-name {
    font-size: 20px;
    font-family: SourceHanSansSC-Medium, SourceHanSansSC;
    font-weight: 500;
    color: #516076;
  }
}
.el-card {
  padding: 24px 30px;
  box-shadow: none;
  border-radius: 2px;
  margin-bottom: 24px;
  /deep/&__header {
    padding: 0px;
    border-bottom: 0;
  }
}
</style>