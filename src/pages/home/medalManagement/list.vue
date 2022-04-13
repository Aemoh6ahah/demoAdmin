<template>
  <div class="container">
    <card-header :name="'称号列表'">
      <template #operate-btns>
        <el-button
          size="default"
          type="primary"
          @click="$router.push('/userLabel/medalManagement/addMedal')"
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
            <el-form-item label="称号名称">
              <el-input
                v-model="filterForm.titleName"
                placeholder="请输入称号名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-select
                v-model="filterForm.status"
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
      :queryParams="{}"
      @search="search"
      @reset="reset"
      :operations="operations"
      :footerLabel="'列表数据'"
      :SSConfig="SSConfig"
    >
      <template #img="{ row }">
        <img :src="row.pictureUrl" class="medal-cover" alt="" />
      </template>
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
import {
  userRoles,
  labelList,
  delLabel,
  modifyLabelState,
} from "@/services/medal";
import { columns } from "./const";
export default defineComponent({
  name: "listPage",
  components: { CustomTable },
  setup(context) {
    const { proxy } = getCurrentInstance();
    let _this: any = proxy;

    const tableColumns = reactive(columns);

    const filterForm = reactive({ titleName: "", status: "" });
    const queryForm = reactive({ titleName: "", status: "" });

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
                await delLabel(scope.row.id);
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
          _this.$router.push(
            `/userLabel/medalManagement/modifyMedal/?id=${scope.row.id}`
          );
        },
      },
      {
        label: "查看",
        icon: "el-icon-search",
        cb: (scope) => {
          _this.$router.push(
            `/userLabel/medalManagement/medalDetail/?id=${scope.row.id}`
          );
        },
      },
    ]);

    const SSConfig: SSCONFIG = {
      key: "id",
      interface: modifyLabelState,
      onlineText: "上线",
      offlineText: "下线",
      onlineState: 1,
      offlineState: 0,
    };
    return {
      tableColumns,
      queryForm,
      context,
      filterForm,
      operations,
      ...toRefs(filterForm),
      SSConfig,
    };
  },
  methods: {
    loadData(query): Promise<any> {
      return labelList({ ...query, ...this.queryForm }).then((res) => {
        const { data } = res;
        data.rows = data.rows.map((_) => ({ ..._, state: _.status }));
        return data;
      });
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
      this.filterForm.status = "";
      this.filterForm.titleName = "";

      this.queryForm.status = "";
      this.queryForm.titleName = "";

      this.$refs.table.refresh(true);
    },
  },
});
</script>
<style lang="less" scoped>
.medal-cover {
  height: 40px;
  width: 90px;
}
</style>