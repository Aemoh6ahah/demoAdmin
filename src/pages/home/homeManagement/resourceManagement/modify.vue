<template>
  <div class="form-page">
    <div class="title">编辑</div>
    <div class="form-card">
      <el-form
        :model="form"
        label-width="120px"
        size="default"
        label-position="left"
      >
        <el-form-item label="名称" prop="name" required>
          <el-input
            placeholder="名称"
            v-model="form.name"
            class="form-input-normal"
            :maxlength="5"
          >
            <template #suffix>
              {{ form.name.length + "/5" }}
            </template>
          </el-input>
        </el-form-item>

        <el-form-item label="图片" prop="coverUrl" required>
          <el-upload
            class="avatar-uploader"
            action="http://114.132.41.48/api/file/upload"
            :show-file-list="false"
            :on-success="handlCoverSuccess"
            :before-upload="beforeCoverUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <div v-else>
              <el-icon class="avatar-uploader-icon"
                ><Plus />
                <div class="text">上传图片</div>
                <div class="hint">
                  上传图片大小不超过5M,图片比例1：1,图片支持格式:png、jpg、jpeg
                </div>
              </el-icon>
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item label="标签" prop="hotJump" required>
          <el-select>
            <el-option label="默认" value="0"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="详情" prop="hotJump" required>
          <div class="editor-wrap">
            <!-- <quill-editor
              v-model:value="state.content"
              :options="state.editorOption"
              ref="quillEditor"
            ></quill-editor> -->
            <editor initialValue="<p>Initial editor content</p>" :init="init">
            </editor>
          </div>
        </el-form-item>

        <div class="btns">
          <el-button type="primary" style="margin-right: 8px">保存</el-button>
          <el-button @click="cancel">取消</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, getCurrentInstance } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { Plus } from "@element-plus/icons-vue";
import { quillEditor } from "vue3-quill";
import contentSelect from "./component/contentSelect.vue";
import { upload } from "@/services/home";
export default defineComponent({
  components: { Plus, contentSelect, quillEditor, Editor },
  setup() {
    const { proxy } = getCurrentInstance();
    let p: any = proxy;

    const form = reactive({ name: "", hotJump: true });

    const imageUrl = ref("");

    const handlCoverSuccess = (res) => {
      console.log(JSON.parse(res.data));
    };
    const beforeCoverUpload = () => {};

    const cancel = () => {
      p.$Modal.comfirm({
        title: "提示",
        content: `取消后当前页面本次变更内容将丢失，确认取消吗？`,
        okText: "确定",
        ok: async () => {
          p.$router.push("/home/resourceManagement/resourceList`");
        },
      });
    };

    // 编辑器
    const state = reactive({
      dynamicComponent: null,
      content: "",
      editorOption: {
        placeholder: "请输入积分规则",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            // [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["image"],
          ],
        },
      },
      disabled: false,
    });
    const init = {
      height: 300,
      menubar: false,
      plugins: [
        "advlist autolink lists link image charmap",
        "searchreplace visualblocks code fullscreen",
        "print preview anchor insertdatetime media",
        "paste code help wordcount table",
      ],
      toolbar:
        "undo redo | formatselect | bold italic | \
        alignleft aligncenter alignright | \
        bullist numlist outdent indent | image",
      selector: "#tinydemo",
      language: "zh_CN",
      images_upload_url: "/demo/upimg.php",
      images_upload_base_path: "/demo",
    };

    const customRequest = async (r) => {
      console.log(r);

      const { data } = await upload({ file: r.file });
    };

    return {
      form,
      imageUrl,
      handlCoverSuccess,
      beforeCoverUpload,
      cancel,
      state,
      init,
      customRequest,
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

.editor-wrap {
  height: 300px;
  padding-bottom: 50px;
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
    width: 400px;
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