<template>
  <div class="form-page">
    <div class="title">编辑称号</div>
    <div class="form-card">
      <el-form
        :model="form"
        label-width="100px"
        size="default"
        label-position="left"
      >
        <div class="btns">
          <el-button type="primary" style="margin-right: 8px">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import { Plus } from "@element-plus/icons-vue";
export default defineComponent({
  components: { Plus },
  setup() {
    const { proxy } = getCurrentInstance();
    let p: any = proxy;

    const form = reactive({ name: "123" });

    const imageUrl = ref(
      "https://pic3.zhimg.com/90/v2-59dc76e6d4486c21a63324b0d85d03a2_250x0.jpg?source=31184dd1"
    );

    const handlCoverSuccess = () => {};
    const beforeCoverUpload = () => {};

    const cancel = () => {
      p.$Modal.comfirm({
        title: "提示",
        content: `取消后当前页面本次变更内容将丢失，确认取消吗？`,
        okText: "确定",
        ok: async () => {
          p.$router.push("/home/resourceManagement/resourceList");
        },
      });
    };
    return { form, imageUrl, handlCoverSuccess, beforeCoverUpload, cancel };
  },
});
</script>
<style lang="less" scoped>
.form-page {
  padding: 20px;
  .form-card {
    background-color: #fff;
    padding: 30px 20px;
    // width: 560px;
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

.btns {
  margin-top: 24px;
  text-align: left;
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 118px;
  background-color: #f4f6fa;
  height: 118px;
  text-align: center;
  border: 1px dashed #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
  .hint {
    position: absolute;
    bottom: -24px;
    font-size: 12px;
    left: 5px;
    width: 350px;
    text-align: left;
  }
  .text {
    font-size: 14px;
  }
  &:hover {
    border-color: #4662e6;
  }
}
</style>