<template>
  <div class="container">
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="知乎" name="zhihu">
          <div class="list-wrap">
            <top-card
              v-for="(info, index) in topList"
              :key="index"
              :cardInfo="info"
            ></top-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="微博" name="second">微博</el-tab-pane>
        <el-tab-pane label="百度" name="fourth">百度</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { getZhihu } from "@/services/index";
import TopCard from "@/pages/home/entertainment/toplist/component/topCard0.vue";

export default defineComponent({
  components: { TopCard },
  setup() {
    const activeName = ref("zhihu");
    function handleClick(e: any) {
      console.log(e);
    }
    // 热榜list
    const topList = ref([]);
    return { activeName, handleClick, topList };
  },
  async mounted() {
    const { data } = await getZhihu();
    let list = data.data.map((_, index) => {
      return {
        title: _.target.title,
        coverUrl: _.children[0].thumbnail,
        url: _.target.url,
        content: _.target.excerpt,
        hotVal: _.detail_text,
        index: index + 1,
        id: _.target.id,
      };
    });
    this.topList = list;
    console.log(this.topList);
  },
});
</script>
<style lang="less" scoped>
</style>
