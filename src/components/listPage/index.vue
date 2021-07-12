<script lang="ts">
import { defineComponent } from "vue";
/**
 *格式化查询表单 主要处理时间段
 *
 * @export
 * @param {*} queryForm 查询表单
 * @return {*} queryParams 返回参数
 */
export function formatQueryform(queryForm) {
  let queryParams = {};
  for (const key in queryForm) {
    if (key != "times") {
      queryParams[key] = queryForm[key];
    }
  }
  for (const key in queryForm.times) {
    let start = key;
    let end = key;
    start = start.replace("_", "Start");
    end = end.replace("_", "End");
    queryParams[start] = queryForm.times[key][0];
    queryParams[end] = queryForm.times[key][1];
  }
  return queryParams;
}
export default defineComponent({
  setup() {
    return {};
  },
  methods: {
    reset() {
      this.queryForm = { times: {} };
      this.queryParams = { count: true };
      // this.$refs.table.refresh(false);
    },
    search() {
      this.queryParams = formatQueryform(this.queryForm);
      // this.$refs.table.refresh(true);
    },
  },
});
</script>
