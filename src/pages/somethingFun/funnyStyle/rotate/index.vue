<template>
  <div class="container">
    <el-card class="title-card">
      <div class="page-title">加速转转转</div>
    </el-card>
    <el-card>
      <img src="@/assets/img/vue.png" alt="" class="img" />
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.title-card {
  margin-bottom: 24px;
  text-align: left;
}
.img {
  &:hover {
    transform: rotate(666turn);
    transition-delay: 1s;
    transition-property: all;
    transition-duration: 59s;
    transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
  }
}
</style>