<template>
  <div>首页</div>
</template>
<script lang="ts">
import { ref, Ref, watch, reactive, defineComponent } from "vue";
import { userLogin, testGet } from "@/services/index";
interface FormData {
  account: string;
  psw: string;
}
export default defineComponent({
  name: "login",
  setup() {
    const formData = reactive<FormData>({
      account: "",
      psw: "",
    });
    const submit = async () => {
      console.log(formData.psw, formData.account);
      console.log(userLogin);
      await userLogin(formData);
    };
    const get = async () => {
      await testGet();
    };
    return {
      submit,
      formData,
      get,
    };
  },
});
</script>
<style lang="less" scoped>
.test {
  width: 500px;
  height: 300px;
  position: relative;
  .wrap {
    display: flex;
    position: absolute;
    top: 0;
    &-item {
      flex-grow: 1;
      flex-shrink: 0;
      width: 100px;
      margin-left: 24px;
      height: 40px;
      background-color: #00b587;
    }
  }
}
</style>