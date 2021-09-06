<template>
  <div class="container">
    <custom-table
      :columns="tableColumns"
      :loadData="loadData"
      :queryParams="{}"
    ></custom-table>
  </div>
</template>
<script lang="ts">
// eslint-disable-file no-use-before-define
import { ref, Ref, watch, reactive, defineComponent, onMounted } from "vue";
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
    const submit = async () => {};

    const get = async () => {};

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
      return new Promise((res) => {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            date: "2020-12-25",
            id: i,
            state: 1,
          });
        }
        res({
          data,
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
    this.autoSwitch();
  },
});
</script>
<style lang="less" scoped>
.container {
  padding: 24px;
}
</style>