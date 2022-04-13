<template>
  <div class="form-page">
    <div class="title">新增称号</div>
    <div class="form-card">
      <el-form
        :model="form"
        label-width="100px"
        ref="labelForm"
        size="default"
        label-position="left"
        :rules="rules"
      >
        <el-form-item label="称号名称" prop="name" required>
          <el-input
            placeholder="请输入称号名称"
            v-model="form.name"
            class="form-input-normal"
            :maxlength="7"
          >
            <template #suffix>
              {{ form.name.length + "/7" }}
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="称号图片" required>
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            action="/"
            :on-success="handlCoverSuccess"
            :before-upload="beforeCoverUpload"
            :http-request="upload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <div v-else>
              <el-icon class="avatar-uploader-icon"
                ><Plus />
                <div class="text">上传图片</div>
                <div class="hint">
                  上传图片大小不超过2M,图片支持格式:png、jpg、jpeg
                </div>
              </el-icon>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="选择用户">
          <user-select ref="userSelect"></user-select>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" @click="save" style="margin-right: 8px"
            >确定</el-button
          >
          <el-button @click="cancel">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import userSelect from "./components/userSelect.vue";
import { Plus } from "@element-plus/icons-vue";
import { addLabel, obsConfig, ossUplaod } from "@/services/medal";
import uploadUsingFile from "@/utils/hwobs.js";
export default defineComponent({
  components: { Plus, userSelect },
  setup() {
    const { proxy } = getCurrentInstance();
    let _this: any = proxy;

    const form = reactive({ name: "" });
    const userSelect = ref();
    const labelForm = ref();

    const imageUrl = ref(
      "http://www.mongoosejs.net/docs/images/mongoose5_62x30_transparent.png"
    );

    const handlCoverSuccess = () => {};
    const beforeCoverUpload = () => {};

    const cancel = () => {
      _this.$Modal.comfirm({
        title: "提示",
        content: `取消后当前页面本次变更内容将丢失，确认取消吗？`,
        okText: "确定",
        ok: async () => {
          _this.$router.push("/userLabel/medalManagement/medalList");
        },
      });
    };

    const rules = reactive({
      name: [{ required: true, trigger: "blur", message: "请输入称号名称" }],
    });

    const save = async () => {
      // await labelForm.value.validate();
      if (!imageUrl.value) {
        _this.$message.error("上传图片");
        return;
      }
      await labelForm.value.validate();
      await addLabel({
        name: form.name,
        pictureUrl: imageUrl.value,
        status: 0,
        userIdLists: userSelect.value.preSelectRowKeys,
      });
      _this.$message.success("添加成功");
      _this.$router.push("/userLabel/medalManagement/medalList");
    };

    // 上传
    const headers = ref({});
    const action = ref("");
    let config: any = {};
    const getConfig = async () => {
      const { data } = await obsConfig();
      config = data;
      action.value = data.endPoint;
      headers.value = {};
      console.log(data);
    };
    getConfig();
    const upload = async (a) => {
      await uploadUsingFile(
        config.bucketName,
        "aaxxxa.png",
        a.file,
        config.credential.access,
        config.credential.secret,
        "http://" + config.endPoint
      );
    };
    return {
      form,
      imageUrl,
      handlCoverSuccess,
      beforeCoverUpload,
      cancel,
      rules,
      labelForm,
      userSelect,
      action,
      headers,
      save,
      upload,
    };
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