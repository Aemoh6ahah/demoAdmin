<template>
  <div>
    <div>登录</div>
    <div><span>账号</span><input v-model="formData.account" type="text" /></div>
    <div><span>密码</span><input v-model="formData.psw" type="text" /></div>
    <div><button @click="submit">登录</button></div>
    <div><button @click="get">get</button></div>
  </div>
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
