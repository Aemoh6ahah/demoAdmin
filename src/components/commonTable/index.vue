<template>
  <el-table :data="sourceData" border>
    <el-table-column
      v-for="(column, index) in columns"
      :key="index"
      v-bind="column"
    >
      <template v-if="column.customSolt" #default="scope">
        <component
          :is="column.customSolt"
          :scope="scope"
          v-bind="{ ...column }"
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
    :page-size="pagination.pageSize"
    :current-page="pagination.currentPage"
    @current-change="currentChange"
  >
  </el-pagination>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import State from "./components/state.vue";
// import { Column } from "./const";

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
  },

  components: { State },

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
  },
});
</script>
<style lang="less" scoped>
.pagination {
  display: flex;
  margin-top: 24px;
  justify-content: flex-end;
}
</style>
