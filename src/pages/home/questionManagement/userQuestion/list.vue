<template>
  <div class="container">
    <card-header :name="'用户问题列表'">
      <template #operate-btns>
        <el-button size="default" type="primary" @click="dialogVisible = true"
          >导出</el-button
        >
        <el-button size="default" @click="search" type="primary"
          >查询</el-button
        >
        <el-button size="default" @click="reset">重置</el-button>
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form size="default" class="filter-form" label-position="left">
            <el-form-item label="状态">
              <el-select
                v-model="filterForm.state"
                placeholder="请选择"
                style="width: 220px"
              >
                <el-option label="上线中" value="1" />
                <el-option label="已下线" value="0" />
              </el-select>
            </el-form-item>

            <el-form-item label="反馈时间">
              <el-date-picker type="daterange"></el-date-picker>
            </el-form-item>

            <el-form-item label="分类名称">
              <el-input
                v-model="filterForm.name"
                placeholder="请输入分类名称"
              ></el-input>
            </el-form-item>

            <el-form-item label="处理人昵称">
              <el-input
                v-model="filterForm.name"
                placeholder="请输入分类名称"
              ></el-input>
            </el-form-item>

            <el-form-item label="处理时间">
              <el-date-picker type="daterange"></el-date-picker>
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
      :footerLabel="'列表数据'"
      :SSConfig="{
        key: 'id',
        interface: () => {},
        onlineText: '上线',
        offlineText: '下线',
        onlineState: 1,
        offlineState: 0,
      }"
    >
    </custom-table>
    <el-dialog v-model="dialogVisible" title=" " width="700px">
      <el-form>
        <el-form-item label="分类名称" required>
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
// eslint-disable-file no-use-before-define
import {
  ref,
  Ref,
  watch,
  toRefs,
  reactive,
  defineComponent,
  getCurrentInstance,
  nextTick,
} from "vue";
import CustomTable from "@/components/commonTable/index.vue";
import { columns } from "./const";
interface FormData {
  account: string;
  psw: string;
}
export default defineComponent({
  name: "listPage",
  components: { CustomTable },
  setup(context) {
    const { proxy } = getCurrentInstance();
    let _this: any = proxy;

    const tableColumns = reactive(columns);

    const filterForm = reactive({});
    const queryForm = reactive({});

    const operations: OPERATION[] = reactive([
      {
        label: "删除",
        icon: "el-icon-delete-solid",
        cb: (scope) => {
          _this.$Modal.comfirm({
            title: "删除",
            content: `是否删除这条数据`,
            okText: "确定",
            ok: async () => {
              try {
                _this.$refs.table.refresh(true);
                _this.$ElMessage({
                  type: "success",
                  message: "删除成功!",
                });
              } catch (error) {
                _this.$ElMessage({
                  type: "error",
                  message: "删除失败!",
                });
              }
            },
          });
        },
        disable: (scope) => {
          return scope.row.type == 1;
        },
      },
      {
        label: "编辑",
        icon: "el-icon-edit",
        cb: (scope) => {
          _this.$router.push("/userLabel/medalManagement/modifyMedal");
        },
      },
      {
        label: "查看",
        icon: "el-icon-search",
        cb: (scope) => {
          _this.$router.push("/question/userQuestion/userQuestionDetail");
        },
      },
    ]);

    const dialogVisible = ref(false);

    return {
      tableColumns,
      queryForm,
      context,
      filterForm,
      operations,
      ...toRefs(filterForm),
      dialogVisible,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      const { currentPage, pageSize } = query;
      return new Promise((res) => {
        res({
          pageNum: 1,
          pageSize: 10,
          pages: 1,
          rows: [{ a: "a", b: "b", c: "c", state: 1 }],
          total: 1,
        });
      });
      // return mallPageList({ ...query, ...this.queryForm }).then((res) => {
      //   const { data } = res;
      //   return data;
      // });
    },

    search() {
      this.$formatQueryform(this.filterForm);
      const { carModelId } = this.$formatQueryform(this.filterForm);
      this.queryForm = {
        ...this.$formatQueryform(this.filterForm),
        carModelId: carModelId && carModelId.join(""),
      };
      this.$refs.table.refresh(true);
    },

    reset() {
      this.filterForm.carModelId = "";
      this.filterForm.url = "";
      this.filterForm.times._Time = [];

      this.queryForm.carModelId = "";
      this.queryForm.url = "";
      this.queryForm.endTime = "";
      this.queryForm.startTime = "";

      this.$refs.table.refresh(true);
    },
  },
});
</script>
<style lang="less" scoped>
</style>