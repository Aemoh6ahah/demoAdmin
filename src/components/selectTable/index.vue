<template>
  <div>
    <div class="select-table-head">
      <div class="checkbox"></div>
      <div
        v-for="(column, index) in columns"
        :key="index"
        :style="{
          width: column.width + 'px',
          flexGrow: column.width ? '0' : '1',
        }"
      >
        {{ column.label }}
      </div>
    </div>
    <el-checkbox-group v-model="checkList" size="large" @change="checkChange">
      <div class="select-table-inner">
        <el-checkbox
          v-for="row in sourceData"
          :label="row[rowKey]"
          :key="row.id"
        >
          <div class="el-checkbox__cell">
            <div
              v-for="(column, index) in columns"
              :key="index"
              :style="{
                width: column.width + 'px',
                flexGrow: column.width ? '0' : '1',
              }"
            >
              <span v-if="!column.customSolt">{{ row[column.prop] }}</span>

              <slot v-else :name="column.customSolt" :row="row"></slot>
            </div>
          </div>
        </el-checkbox>
      </div>
    </el-checkbox-group>
    <el-pagination
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
import { defineComponent, Ref, ref, reactive, PropType } from "vue";

export default defineComponent({
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
    rowKey: {
      type: String,
      default: () => {
        return "id";
      },
    },
    selectRowKeys: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props) {
    const sourceData: Ref<any[]> = ref([]);
    const selectRowKeys: any = props.selectRowKeys;
    const pagination: {
      pageSize: number;
      page: number;
      total: number;
    } = reactive({ pageSize: 10, page: 1, total: 0 });
    const loading: Ref<boolean> = ref(false);

    const checkList = ref([...selectRowKeys]);

    return {
      sourceData,
      pagination,
      loading,
      checkList,
    };
  },
  created() {
    this.localLoadData();
  },
  methods: {
    currentChange(current) {
      this.pagination.page = current;
      this.localLoadData();
    },

    checkChange(e) {
      this.$emit("checkChange", e);
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
        this.pagination.pageSize = 10;
        this.pagination.page = 1;
        this.pagination.total = 0;
        this.localLoadData();
      } else {
        this.localLoadData();
      }
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
/deep/.el-checkbox {
  display: flex;
  justify-content: flex-start;
  .el-checkbox__input {
    flex-grow: 0;
    flex-shrink: 0;
    width: 70px;
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-checkbox__cell {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    height: 40px;
    line-height: 40px;
  }
}
.select-table-inner {
  height: 400px;
  overflow: auto;
}
.select-table-head {
  display: flex;
  height: 40px;
  color: #000;
  .checkbox {
    width: 70px;
  }
}
</style>
