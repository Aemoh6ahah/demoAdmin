<template>
  <div class="container">
    <card-header :name="'资源列表'">
      <template #operate-btns>
        <el-button
          size="default"
          type="primary"
          @click="$router.push('/home/resourceManagement/addResource')"
          >新增</el-button
        >
        <el-button size="default" @click="search" type="primary"
          >查询</el-button
        >
        <el-button size="default" @click="reset">重置</el-button>
      </template>
      <template #filters>
        <div class="form_wapper">
          <el-form size="default" class="filter-form" label-position="left">
            <el-form-item label="标题名称">
              <el-input
                v-model="filterForm.name"
                placeholder="请输入标题名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-select
                v-model="filterForm.state"
                size="default"
                placeholder="请选择"
              >
                <el-option label="上线中" value="1" />
                <el-option label="已下线" value="0" />
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </card-header>
    <custom-table
      ref="table"
      :columns="tableColumns"
      :loadData="loadData"
      :queryParams="queryForm"
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

    const filterForm = reactive({ name: "", state: "" });
    let queryForm = reactive({ name: "", state: "" });

    const operations: OPERATION[] = reactive([
      {
        label: "删除",
        icon: "el-icon-delete-solid",
        cb: (scope) => {
          _this.$Modal.comfirm({
            title: "删除",
            content: `是否删除这条数据`,
            okText: "继续",
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
          _this.$router.push("/home/resourceManagement/modifyResource");
        },
      },
      {
        label: "查看",
        icon: "el-icon-search",
        cb: (scope) => {
          _this.$router.push("/userLabel/medalManagement/medalDetail");
        },
      },
    ]);

    const search = () => {
      const { name, state } = _this.$formatQueryform(filterForm);
      queryForm.name = name;
      queryForm.state = state;
      _this.$refs.table.refresh(true);
    };
    const reset = () => {
      queryForm.name = "";
      queryForm.state = "";
      filterForm.name = "";
      filterForm.state = "";
    };

    return {
      tableColumns,
      queryForm,
      context,
      filterForm,
      operations,
      ...toRefs(filterForm),
      search,
      reset,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      const { currentPage, pageSize } = query;
      console.log(query);
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

    // search() {
    //   this.$formatQueryform(this.filterForm);
    //   this.queryForm = {
    //     ...this.$formatQueryform(this.filterForm),
    //   };
    //   this.$refs.table.refresh(true);
    // },

    // reset() {
    //   this.filterForm.name = "";
    //   this.$refs.table.refresh(true);
    // },
  },
});
</script>
<style lang="less" scoped>
</style>