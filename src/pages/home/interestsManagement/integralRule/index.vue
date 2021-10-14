<template>
  <div class="container">
    <card-header :name="'积分规则'">
      <template #operate-btns>
        <el-button size="small" @click="switBtn" type="primary">{{
          isModify ? "保存" : "编辑"
        }}</el-button>
        <el-button v-if="isModify" size="small" @click="cancel">取消</el-button>
      </template>
      <template #filters>
        <div class="ql-editor desc" v-html="ruleDesc" v-if="!isModify"></div>
        <div class="editor-wrap" v-else>
          <quill-editor
            v-model:value="state.content"
            :options="state.editorOption"
          ></quill-editor>
        </div>
      </template>
    </card-header>
  </div>
</template>
<script lang="ts">
import { quillEditor } from "vue3-quill";
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  getCurrentInstance,
} from "vue";
import { getRuleDesc, modifyRuleDesc } from "@/services/interests";

export default defineComponent({
  components: {
    quillEditor,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    let _this: any = proxy;

    // 加载规则
    let ruleDesc = ref("");
    let lodeRule = async () => {
      let { data } = await getRuleDesc({});
      state.content = data;
      ruleDesc.value = data;
    };
    lodeRule();

    // 编辑器
    const state = reactive({
      dynamicComponent: null,
      content: "",
      editorOption: {
        placeholder: "core",
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
          ],
        },
      },
      disabled: false,
    });

    // 按钮业务
    let isModify = ref(false);

    let switBtn = async () => {
      if (isModify.value) {
        // 在编辑状态
        console.log(state.content);
        try {
          await modifyRuleDesc({
            desc: state.content,
          });
          _this.$ElMessage({
            type: "success",
            message: "操作成功!",
          });
          lodeRule();
          isModify.value = !isModify.value;
        } catch (error) {
          _this.$ElMessage({
            type: "error",
            message: "操作失败!",
          });
        }
      } else {
        // 不在编辑状态
        isModify.value = !isModify.value;
      }
    };
    let cancel = () => {
      isModify.value = false;
    };

    return {
      state,
      switBtn,
      cancel,
      isModify,
      ruleDesc,
      ...toRefs(state),
    };
  },
});
</script>


<style lang="less" scoped>
.desc {
  padding: 50px 30px;
  height: 60vh;
}

ul {
  list-style: disc;
}
.editor-wrap {
  height: 350px;
  padding: 16px 50px 30px;
}
</style>