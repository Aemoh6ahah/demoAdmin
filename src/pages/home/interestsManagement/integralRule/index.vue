<template>
  <div class="container">
    <card-header :name="'积分规则'">
      <template #operate-btns>
        <el-button size="default" @click="switBtn" type="primary">{{
          isModify ? "保存" : "编辑"
        }}</el-button>
        <el-button v-if="isModify" size="default" @click="cancel"
          >取消</el-button
        >
      </template>
      <template #filters>
        <div class="ql-editor desc" v-html="ruleDesc" v-if="!isModify"></div>
        <div class="editor-wrap" v-else>
          <quill-editor
            v-model:value="state.content"
            :options="state.editorOption"
            @change="getLength"
            :length="10"
            ref="quillEditor"
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

    // 按钮业务
    let isModify = ref(false);
    const textLength = ref(0);
    let switBtn = async () => {
      if (isModify.value) {
        // 在编辑状态
        console.log(textLength.value);
        if (!textLength.value) {
          _this.$ElMessage({
            type: "error",
            message: "积分规则不能为空!",
          });
          return;
        }
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
      lodeRule();
    };

    return {
      state,
      switBtn,
      cancel,
      isModify,
      ruleDesc,
      ...toRefs(state),
      textLength,
    };
  },
  methods: {
    getLength(e) {
      this.textLength = e.text.length - 1;
      if (e.text.length - 1 > 1000) {
        console.log(this.state);
        e.quill.deleteText(1000, 1, e.text.length);
      }
    },
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
  padding: 16px 50px 90px;
}
</style>