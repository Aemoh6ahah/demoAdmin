<template>
  <div class="container">
    <card-header :name="'个性化匹配列表'">
      <template #operate-btns>
        <el-button size="small" type="primary">查询</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form size="small" class="filter-form" label-position="left">
            <el-form-item label="适用车型">
              <el-select
                v-model="filterForm.carType"
                multiple
                placeholder="请选择"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="filterForm.times"
                type="datetimerange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="URL地址">
              <el-input
                v-model="filterForm.url"
                placeholder="请输入URL地址"
                style="width: 1150px"
                size="small"
              ></el-input>
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
      @search="search"
      @reset="reset"
      :operations="operations"
    >
    </custom-table>
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

    const filterForm = reactive({});
    const queryForm = reactive({});

    const operations = reactive([
      {
        label: "删除",
        icon: "",
        cb: (scope) => {
          console.log(scope);
        },
      },
    ]);
    return {
      tableColumns,
      SSConfig,
      context,
      stateConfig,
      filterForm,
      queryForm,
      operations,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      const { currentPage, pageSize } = query;
      console.log({
        ...query,
        ...this.queryForm,
      });

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