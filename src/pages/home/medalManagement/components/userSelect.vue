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
        ></el-input>
        <el-input
          placeholder="请输入用户角色"
          style="width: 200px; margin-right: 50px"
        ></el-input>
        <el-button
          type="primary"
          style="margin-right: 0"
          @click="dialogVisible = false"
          >查询</el-button
        >
        <el-button @click="dialogVisible = false">重置</el-button>
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
import { defineComponent, ref, Ref } from "vue";
import CustomTable from "@/components/commonTable/index.vue";
export default defineComponent({
  components: { CustomTable },
  setup() {
    const dialogVisible: Ref<boolean> = ref(false);

    const handleClose = () => {};

    const loadData = (query): Promise<any> => {
      const { currentPage, pageSize } = query;
      return new Promise((res) => {
        res({
          pageNum: 1,
          pageSize: 10,
          pages: 1,
          rows: [
            { a: "a1", b: "b", c: "c", state: 1, id: 1 },
            { a: "a2", b: "b", c: "c", state: 1, id: 2 },
            { a: "a3", b: "b", c: "c", state: 1, id: 3 },
            { a: "a4", b: "b", c: "c", state: 1, id: 4 },
            { a: "a5", b: "b", c: "c", state: 1, id: 5 },
          ],
          total: 1,
        });
      });
      // return mallPageList({ ...query, ...this.queryForm }).then((res) => {
      //   const { data } = res;
      //   return data;
      // });
    };
    const tableColumns = [
      {
        width: 60,
        type: "selection",
        align: "center",
      },
      {
        type: "index",
        width: 156,
        label: "用户ID",
        prop: "",
        align: "center",
      },
      {
        label: "用户昵称",
        prop: "a",
        componentSolt: "lineText",
        align: "center",
      },
      {
        label: "用户角色",
        prop: "b",
        componentSolt: "lineText",
        align: "center",
      },
    ];
    return {
      dialogVisible,
      handleClose,
      loadData,
      tableColumns,
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