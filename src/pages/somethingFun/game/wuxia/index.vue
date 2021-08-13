<template>
  <div class="container">
    <el-card class="title-card">
      <div class="page-title">更新公告</div>
    </el-card>
    <el-card> </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getZhihu } from "@/services/index";

export default defineComponent({
  setup() {
    return {};
  },
  async mounted() {
    await getZhihu();
  },
});
</script>
<style lang="less" scoped>
</style>