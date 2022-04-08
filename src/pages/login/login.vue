<template>
  <div class="login-page">
    <div class="login-window">
      <div class="title">阿巴阿巴管理系统</div>
      <el-form
        size="large"
        label-width="100px"
        label-position="left"
        :rules="rules"
        ref="loginFormRef"
        :model="loginForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="width: 100%" @click="handelLogin"
            >登录</el-button
          >
        </el-form-item>
        <el-form-item label="">
          <el-button style="width: 100%" @click="$router.push('/registe')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  getCurrentInstance,
  toRefs,
} from "vue";
import { login } from "@/services/login";
const md5 = require("js-md5");

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const loginForm = reactive({
      userName: "",
      password: "",
    });
    const loginFormRef = ref();
    const handelLogin = async () => {
      await loginFormRef.value.validate();
      const { userName, password } = loginForm;
      await login({ userName, password: md5(password) });
      // proxy.$router.push({ name: "home" });
      const _this: any = proxy;
      _this.$ElMessage({
        type: "success",
        message: "登录成功",
      });
    };
    const rules = reactive({
      userName: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        { min: 5, max: 10, message: "用户名长度不合法", trigger: "blur" },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        { min: 5, max: 10, message: "密码长度不合法", trigger: "blur" },
      ],
    });

    return {
      loginForm,
      handelLogin,
      rules,
      loginFormRef,
      ...toRefs(loginForm),
    };
  },
});
</script>
<style lang="less" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.login-window {
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  .title {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
    text-align: center;
    padding-left: 100px;
  }
}
</style>