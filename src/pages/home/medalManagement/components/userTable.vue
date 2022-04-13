<template>
  <div>
    <el-button size="default" type="primary" @click="showDialog"
      >查看用户列表</el-button
    >
    <el-dialog v-model="dialogVisible" title="选择用户" width="700px">
      <div class="query">
        <el-input
          placeholder="请输入用户ID"
          size="normal"
          style="width: 200px; margin-right: 12px"
          v-model="filterForm.userId"
        ></el-input>
        <el-select
          placeholder="请选择使用状态"
          size="normal"
          style="width: 200px; margin-right: 50px"
          v-model="filterForm.useStatus"
        >
          <el-option label="已上线" value="1"></el-option>
          <el-option label="已下线" value="0"></el-option>
        </el-select>
        <el-button type="primary" style="margin-right: 0" @click="search"
          >查询</el-button
        >
        <el-button @click="reset">重置</el-button>
      </div>
      <div>
        <custom-table
          ref="table"
          :columns="tableColumns"
          :loadData="loadData"
          :queryParams="{}"
          @search="search"
          @reset="reset"
          :footerLabel="'列表数据'"
        >
        </custom-table>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="confirm">确定</el-button>
          <el-button @click="cancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import CustomTable from "@/components/commonTable/index.vue";
import { userTableCol } from "../const";
import { medalUserList } from "@/services/medal";
export default defineComponent({
  name: "userTable",
  components: { CustomTable },
  props: {
    titleId: {
      type: String,
    },
  },
  setup(prop) {
    const tableColumns = userTableCol;
    const table = ref();
    const filterForm = reactive({ useStatus: "", userId: "" });
    const queryForm = reactive({ useStatus: "", userId: "" });

    const loadData = (query) => {
      return medalUserList({ ...query, ...queryForm, titleId: prop.titleId });
    };

    const reset = () => {
      filterForm.useStatus = "";
      filterForm.userId = "";
      queryForm.useStatus = "";
      queryForm.userId = "";
      table.value.refresh(true);
    };
    const search = () => {
      const { useStatus, userId } = filterForm;
      queryForm.useStatus = useStatus;
      queryForm.userId = userId;
      table.value.refresh(true);
    };

    const dialogVisible = ref(false);
    const showDialog = () => {
      dialogVisible.value = true;
    };

    const confirm = () => {
      dialogVisible.value = false;
    };
    const cancel = () => {
      dialogVisible.value = false;
    };

    return {
      table,
      tableColumns,
      filterForm,
      queryForm,
      dialogVisible,
      loadData,
      reset,
      search,
      showDialog,
      confirm,
      cancel,
    };
  },
});
</script>
