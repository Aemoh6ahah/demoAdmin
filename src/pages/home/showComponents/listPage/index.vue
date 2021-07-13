<template>
  <div class="container">
    <card-header :name="'列表页'">
      <template #operate-btns>
        <el-button size="small" type="primary">查询</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form size="small">
            <el-form-item
              label="活动名称"
              label-width="80px"
              style="max-width: 446px"
            >
              <el-input style="width: 240px" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </card-header>
    <custom-table
      ref="table"
      :columns="tableColumns"
      :loadData="loadData"
      :queryParams="{}"
      :SSConfig="SSConfig"
      @search="search"
      @reset="reset"
      :stateConfig="stateConfig"
    ></custom-table>
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
  name: "listPage",
  components: { CustomTable },
  setup(props, context) {
    const tableColumns = reactive(columns);

    const SSConfig = reactive<SSCONFIG>({
      key: "audioId",
      interface: () => {},
      onlineText: "是否上线",
      offlineText: "是否下线",
      onlineState: 1,
      offlineState: 0,
    });
    const stateConfig = reactive<STATECONFIG[]>([
      {
        label: "上线中",
        stateCode: 1,
        color: "#52C41A",
      },
      {
        label: "已下线",
        stateCode: 0,
        color: "#C5CCD7",
      },
      {
        label: "待发布",
        stateCode: 2,
        color: "#ff8000",
      },
      {
        label: "已删除",
        stateCode: 3,
        color: "#C5CCD7",
      },
    ]);
    return {
      tableColumns,
      SSConfig,
      context,
      stateConfig,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      const { currentPage, pageSize } = query;
      return new Promise((res) => {
        let data = [];
        for (let i = 0; i < pageSize; i++) {
          data.push({
            date: "2019-12-25 00:00 ~ 2020-12-25 00:00",
            id: i + (currentPage - 1) * pageSize,
            state: Number(Math.round(Math.random() * 3)),
            avatar:
              "https://img1.baidu.com/it/u=1475467902,96195076&fm=26&fmt=auto&gp=0.jpg",
            coverUrl:
              "https://img1.baidu.com/it/u=1475467902,96195076&fm=26&fmt=auto&gp=0.jpg",
            content:
              "https://img1.baidu.com/it/u=1475467902,96195076&fm=26&fmt=auto&gp=0.jpg",
          });
        }
        setTimeout(() => {
          res({
            data,
          });
        }, 500);
      });
    },

    modifyAudioState() {},

    search() {},

    reset() {
      this.$refs.table.refresh(true);
    },
  },
});
</script>
<style lang="less" scoped>
.container {
  padding: 24px;
}
</style>