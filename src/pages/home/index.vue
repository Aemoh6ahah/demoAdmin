<template>
  <div class="container">
    <h2>table</h2>
    <custom-table
      :columns="tableColumns"
      :loadData="loadData"
      :queryParams="{}"
    ></custom-table>
    <span @click="switchShow(1)">按钮1</span>
    <span @click="switchShow(2)">按钮2</span>
    <div v-show="showId === 1">按钮1内容</div>
    <div v-show="showId === 2">按钮2内容</div>
  </div>
</template>
<script lang="ts">
// eslint-disable-file no-use-before-define
import { ref, Ref, watch, reactive, defineComponent, onMounted } from "vue";
import { userLogin, testGet } from "@/services/index";
import CustomTable from "@/components/commonTable/index.vue";
import { columns } from "./const";
interface FormData {
  account: string;
  psw: string;
}
export default defineComponent({
  name: "login",
  components: { CustomTable },
  setup(props, context) {
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

    const tableColumns = reactive(columns);
    const showId = ref();
    const timer = ref();
    return {
      submit,
      formData,
      get,
      tableColumns,
      showId,
      timer,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      //
      console.log(query);

      return new Promise((res) => {
        res({
          data: [{ date: "2020-12-25", id: 123, state: 1 }],
        });
      });
    },
    switchShow(id) {
      this.showId = id;
    },
    autoSwitch(): void {
      this.timer = setInterval(() => {
        this.showId = this.showId === 1 ? 2 : 1;
      }, 1000);
    },
    mouseOver() {
      clearInterval(this.timer);
    },
    mouseLeave() {
      this.autoSwitch();
    },
  },
  mounted() {
    console.log("1");
    this.autoSwitch();
  },
});
</script>
<style lang="less" scoped>
.container {
  padding: 24px;
}
</style>