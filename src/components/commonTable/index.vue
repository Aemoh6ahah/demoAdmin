<template>
  <div class="commontable">
    <el-table
      :data="sourceData"
      border
      header-row-class-name="commontable-header"
      height="562"
      v-loading="loading"
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
            v-bind="{ ...column, SSConfig, stateConfig }"
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
import { defineComponent, ref, reactive, Ref, PropType } from "vue";
import State from "./components/state.vue";
import StateSwitch from "./components/stateSwitch.vue";

/**
 * @param columns.customSolt 列表项配置
 * @param loadData  加载表格数据的方法
 * @param queryParams 查询参数
 * @pageSizes 每页条数
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
    stateConfig: {
      type: Array as PropType<STATECONFIG[]>,
      required: false,
    },
  },

  components: { State, StateSwitch },

  setup() {
    const sourceData: Ref<any[]> = ref([]);
    const pagination: {
      pageSize: number;
      currentPage: number;
    } = reactive({ pageSize: 10, currentPage: 1 });
    const loading: Ref<boolean> = ref(false);
    return {
      sourceData,
      pagination,
      loading,
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
      this.loading = true;
      const { data } = await this.loadData({
        ...this.queryParams,
        ...this.pagination,
      });
      this.sourceData = data;
      this.loading = false;
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

    changeState(v: boolean, scope: { [name: string]: any }, targetVal: number) {
      // 操作开关
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
            targetVal
          );
          console.log(targetVal);
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
