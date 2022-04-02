<template>
  <div class="detail-page">
    <div class="title">问题详情</div>
    <el-card>
      <div class="des-title">
        <span class="icon"></span>
        基本信息
      </div>
      <el-descriptions title="" :column="4">
        <el-descriptions-item label="反馈人">kooriookami</el-descriptions-item>
        <el-descriptions-item label="反馈时间">2022-2-22</el-descriptions-item>
        <el-descriptions-item label="处理状态">开发中</el-descriptions-item>
        <el-descriptions-item label="问题分类">分类1</el-descriptions-item>
        <el-descriptions-item label="产品经理">张三</el-descriptions-item>
        <el-descriptions-item label="处理时间">2022-2-22</el-descriptions-item>
      </el-descriptions>
      <el-descriptions title="" :column="1">
        <el-descriptions-item label="内容">xxxx</el-descriptions-item>
      </el-descriptions>

      <div class="des-title">
        <span class="icon"></span>
        用户列表
      </div>
      <div style="text-align: left; margin-bottom: 12px">
        <el-button type="primary">查看用户列表</el-button>
      </div>
      <div class="des-title">
        <span class="icon"></span>
        操作日志
      </div>
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
.detail-page {
  padding: 20px;
}
.des-title {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  line-height: 16px;
  margin-bottom: 12px;
  .icon {
    display: inline-block;
    height: 14px;
    width: 3px;
    background-color: #4662e6;
  }
}
.title {
  height: 20px;
  font-size: 20px;
  font-family: SourceHanSansSC-Medium, SourceHanSansSC;
  font-weight: 500;
  color: #516076;
  line-height: 20px;
  text-align: left;
  margin-bottom: 20px;
}
</style>
