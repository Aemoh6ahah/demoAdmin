<template>
  <div class="detail-page">
    <div class="title">称号详情</div>
    <el-card>
      <div class="des-title">
        <span class="icon"></span>
        基本信息
      </div>
      <el-descriptions title="" :column="4">
        <el-descriptions-item label="称号ID">{{
          labelDetail.id
        }}</el-descriptions-item>
        <el-descriptions-item label="称号名字">{{
          labelDetail.name
        }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{
          labelDetail.createTime
        }}</el-descriptions-item>
        <el-descriptions-item label="称号状态">{{
          labelDetail.status ? "上线中" : "已下线"
        }}</el-descriptions-item>
        <el-descriptions-item label="称号图片">
          <img :src="labelDetail.pictureUrl" class="label-cover" alt="" />
        </el-descriptions-item>
        <el-descriptions-item label="使用中人数">{{
          labelDetail.useCount
        }}</el-descriptions-item>
      </el-descriptions>
      <div class="des-title">
        <span class="icon"></span>
        用户列表
      </div>
      <div style="text-align: left; margin-bottom: 12px">
        <user-table :titleId="labelDetail.id"></user-table>
      </div>
      <div class="des-title">
        <span class="icon"></span>
        操作日志
      </div>
      <el-table :data="labelDetail.operateLogVoList" style="width: 600px">
        <el-table-column prop="index" label="序号" width="180" />
        <el-table-column prop="operatorName" label="操作" width="180" />
        <el-table-column prop="createTime" label="操作时间" />
        <el-table-column prop="operatorName" label="操作人" />
      </el-table>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from "vue";
import { getLabel } from "@/services/medal";
import userTable from "./components/userTable.vue";
export default defineComponent({
  components: { userTable },
  setup() {
    const { proxy } = getCurrentInstance();
    const _this = proxy;

    const labelDetail = ref({});
    const getLabelById = async () => {
      const { data } = await getLabel(_this.$route.query.id);
      labelDetail.value = data;
      console.log(data);
    };
    getLabelById();

    return {
      labelDetail,
    };
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
.label-cover {
  width: 90px;
  height: 40px;
}
</style>
