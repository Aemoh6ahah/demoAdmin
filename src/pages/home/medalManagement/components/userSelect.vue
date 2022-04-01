<template>
  <div>
    <el-button size="default" type="primary" @click="dialogVisible = true"
      >添加</el-button
    >
    <el-dialog
      v-model="dialogVisible"
      title="选择用户"
      width="700px"
      :before-close="handleClose"
    >
      <div class="query">
        <el-input
          placeholder="请输入用户ID"
          style="width: 200px; margin-right: 12px"
          v-model="filterForm.userId"
        ></el-input>
        <el-select
          placeholder="请选择用户角色"
          style="width: 200px; margin-right: 50px"
          v-model="filterForm.role"
        >
          <el-option
            v-for="r in roles"
            :key="r.id"
            :label="r.display_name"
            :value="r.name"
          ></el-option>
        </el-select>
        <el-button type="primary" style="margin-right: 0" @click="search"
          >查询</el-button
        >
        <el-button @click="reset">重置</el-button>
      </div>
      <div>
        <select-table
          v-if="dialogVisible"
          :loadData="loadData"
          :columns="tableColumns"
          ref="table"
          @search="search"
          @reset="reset"
          @checkChange="selectChange"
          :selectRowKeys="selectRowKeys"
        >
          <template #role="row">
            <div
              class="line-text"
              style="-webkit-line-clamp: 1"
              :title="row.row.roles.map((_) => _.display_name)"
            >
              <span v-for="role in row.row.roles" :key="role.id">{{
                role.display_name
              }}</span>
            </div>
          </template>
        </select-table>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
          <el-button @click="dialogVisible = false">Cancel</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  getCurrentInstance,
  reactive,
  computed,
} from "vue";
import CustomTable from "@/components/commonTable/index.vue";
import SelectTable from "@/components/selectTable/index.vue";
import { getUserList, userRoles } from "@/services/medal";
export default defineComponent({
  components: { SelectTable },
  setup() {
    const dialogVisible: Ref<boolean> = ref(true);
    const table = ref(null);

    const { proxy } = getCurrentInstance();
    const _this = proxy;

    const handleClose = () => {};

    const loadData = (query): Promise<any> => {
      const { currentPage, pageSize, pageNum } = query;
      console.log(query);
      return getUserList({ ...queryFrom, page: pageNum }).then((res) => {
        return res;
      });
    };

    const tableColumns = [
      {
        width: 156,
        label: "用户ID",
        prop: "id",
        align: "center",
      },
      {
        width: 156,
        label: "用户昵称",
        prop: "name",
        componentSolt: "lineText",
        align: "center",
      },
      {
        label: "用户角色",
        width: 156,
        prop: "role",
        customSolt: "role",
        align: "center",
      },
    ];
    // 表格
    const filterForm = reactive({ userId: "", role: "" });
    let queryFrom = { userId: "", role: "" };

    const search = () => {
      queryFrom = { ...filterForm };
      table.value.refresh(true);
    };
    const reset = () => {
      filterForm.userId = "";
      filterForm.role = "";
      search();
    };

    const selectRowKeys = ref([1, 3, 5, 7, 13]);
    const selectChange = (e, list) => {
      selectRowKeys.value = [...e];
    };

    // 获取用户角色
    const roles = ref([]);
    const getUserRoles = async () => {
      roles.value = await userRoles();
    };
    getUserRoles();
    return {
      dialogVisible,
      handleClose,
      loadData,
      tableColumns,
      reset,
      roles,
      table,
      search,
      filterForm,
      selectChange,
      selectRowKeys,
    };
  },
});
</script>
<style lang="less" scoped>
.query {
  display: flex;
  justify-content: space-between;
}
.dialog-footer {
  display: flex;
  justify-content: center;
}
</style>