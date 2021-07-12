<template>
  <div class="commontable">
    <el-table
      :data="sourceData"
      border
      header-row-class-name="commontable-header"
      height="562"
    >
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        v-bind="column"
      >
        <template v-if="column.customSolt" #default="scope">
          <component
            :is="column.customSolt"
            :scope="scope"
            v-bind="{ ...column, SSConfig }"
            @refresh="refresh(false)"
            @changeState="changeState"
          ></component>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :hide-on-single-page="true"
      background
      layout="sizes, prev, pager, next"
      :total="1000"
      :page-sizes="pageSizes"
      @size-change="sizeChange"
      size="small"
      :page-size="pagination.pageSize"
      :current-page="pagination.currentPage"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, PropType } from "vue";
import State from "./components/state.vue";
import StateSwitch from "./components/stateSwitch.vue";

/**
 * @param columns.customSolt
 * cover:
 */
export default defineComponent({
  name: "customTable",

  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    loadData: {
      type: Function,
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 20, 30, 40, 50];
      },
    },
    queryParams: {
      type: Object,
      default: () => {
        return {};
      },
    },
    SSConfig: {
      type: Object as PropType<SSCONFIG>,
      required: true,
    },
  },

  components: { State, StateSwitch },

  setup() {
    const sourceData = ref([]);
    const pagination = reactive({ pageSize: 10, currentPage: 1 });
    return {
      sourceData,
      pagination,
    };
  },

  async mounted() {
    this.localLoadData();
  },

  methods: {
    currentChange(current) {
      this.pagination.currentPage = current;
      this.localLoadData();
    },

    sizeChange(size) {
      this.pagination.pageSize = size;
      this.localLoadData();
    },

    async localLoadData() {
      const { data } = await this.loadData({
        ...this.queryParams,
        ...this.pagination,
      });
      this.sourceData = data;
    },

    refresh(isReset = false) {
      if (isReset) {
        this.pagination = { pageSize: 10, currentPage: 1 };
        this.localLoadData();
      }
      {
        this.localLoadData();
      }
    },

    changeState(v, scope) {
      this.$ElMessageBox
        .confirm(
          `${v ? this.SSConfig.onlineText : this.SSConfig.offlineText}`,
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
        )
        .then(async () => {
          await this.SSConfig.interface(
            scope.row[this.SSConfig.key],
            Number(!scope.row.state)
          );
          this.refresh(false);
          this.$ElMessage({
            type: "success",
            message: "操作成功!",
          });
        });
    },
  },
});
</script>
<style lang="less" scoped>
.pagination {
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
}
.commontable {
  min-height: 500px;
  background: #fff;
  padding: 11px 10px;
}

/deep/.el-table {
  .el-table__header {
    height: 51px;
  }
  .commontable-header {
    th {
      background: #f4f6fa;
    }
  }
  .el-table__row {
    height: 51px;
  }
}
</style>
