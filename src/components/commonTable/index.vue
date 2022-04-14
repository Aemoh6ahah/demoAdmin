<template>
  <div class="commontable">
    <el-table
      :data="sourceData"
      :stripe="true"
      border
      header-row-class-name="commontable-header"
      height="465"
      v-loading="loading"
    >
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        v-bind="column"
      >
        <template
          v-if="column.componentSolt || column.customSolt"
          #default="scope"
        >
          <template v-if="column.componentSolt">
            <component
              :is="column.componentSolt"
              :scope="{ ...scope, _column: { ...column } }"
              v-bind="computeAttr(column.componentSolt)"
              @refresh="refresh(false)"
              @changeState="changeState"
              @radioSet="radioSet"
            ></component>
          </template>
          <template v-if="column.customSolt">
            <slot :name="column.customSolt" :row="scope.row"></slot>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer-msg">
      {{ footerLabel }}:
      <span style="color: red">
        {{ pagination.total }}
      </span>
      条
    </div>
    <el-pagination
      v-if="pagination.page"
      class="pagination"
      background
      layout=" prev, pager, next"
      :total="pagination.total"
      :page-sizes="pageSizes"
      @size-change="sizeChange"
      size="default"
      :page-size="pagination.pageSize"
      :current-page="pagination.page"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, Ref, PropType } from "vue";
import State from "./components/state.vue";
import StateSwitch from "./components/stateSwitch.vue";
import Operate from "./components/operate.vue";
import LineText from "./components/lineText.vue";
import TableRadio from "./components/radio.vue";

/**
 * @param columns.customSolt 列表项配置
 * @param loadData  加载表格数据的方法
 * @param queryParams 查询参数
 * @pageSizes 每页条数
 * @footerLabel 角标文案
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
      required: false,
    },
    stateConfig: {
      type: Array as PropType<STATECONFIG[]>,
      required: false,
    },
    operations: {
      type: Array as PropType<OPERATION[]>,
      required: false,
      default: () => {
        return [];
      },
    },
    footerLabel: {
      type: String,
      required: false,
      default: () => {
        return "数据";
      },
    },
    selections: {
      type: Object,
    },
  },

  components: { State, StateSwitch, Operate, LineText, TableRadio },

  setup() {
    const sourceData: Ref<any[]> = ref([]);
    const pagination: {
      pageSize: number;
      page: number;
      total: number;
    } = reactive({ pageSize: 10, page: 1, total: 0 });
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
      this.pagination.page = current;
      this.localLoadData();
    },

    sizeChange(size) {
      this.pagination.pageSize = size;

      this.localLoadData();
    },

    async localLoadData() {
      this.loading = true;
      try {
        const data = await this.loadData({
          ...this.queryParams,
          ...this.pagination,
          pageNum: this.pagination.page,
          page: undefined,
          total: undefined,
          count: true,
        });
        this.sourceData = data.rows;
        this.loading = false;
        this.pagination.page = data.pageNum;
        this.pagination.total = data.total;
      } catch (error) {
        this.loading = false;
      }
    },

    refresh(isReset = false) {
      if (isReset) {
        this.pagination = { pageSize: 10, page: 1, total: 0 };
        this.localLoadData();
      } else {
        this.localLoadData();
      }
    },

    changeState(v: boolean, scope: { [name: string]: any }, targetVal: number) {
      // 操作开关
      this.$Modal.comfirm({
        title: `${v ? "上线" : "下线"}`,
        content: `${v ? this.SSConfig.onlineText : this.SSConfig.offlineText}`,
        okText: "确定",
        ok: async () => {
          try {
            await this.SSConfig.interface(
              scope.row[this.SSConfig.key],
              targetVal
            );
            this.refresh(false);
            this.$ElMessage({
              type: "success",
              message: "操作成功!",
            });
          } catch (error) {
            this.$ElMessage({
              type: "error",
              message: "删除失败!",
            });
          }
        },
      });
    },

    radioSet(key, row) {
      // radio组件选择
      this.selections.selectRowKey = key;
      this.selections.selectRowK = row;
    },

    computeAttr(key) {
      //匹配所组件所需属性
      let res = {};
      switch (key) {
        case "state":
          res = { stateConfig: this.stateConfig };
          break;
        case "stateSwitch":
          res = { SSConfig: this.SSConfig };
          break;
        case "operate":
          res = { operations: this.operations };
          break;
        case "TableRadio":
          res = { selections: this.selections };
          break;
        default:
          break;
      }
      return res;
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
  position: relative;
}
.footer-msg {
  position: absolute;
  left: 10px;
  bottom: 25px;
  font-size: 14px;
  font-family: SourceHanSansSC-Regular, SourceHanSansSC;
  font-weight: 400;
  color: #516076;
  line-height: 14px;
}

/deep/.el-table {
  .el-table__header {
    height: 51px;
  }
  .el-table__row {
    height: 51px;
  }
}
</style>
