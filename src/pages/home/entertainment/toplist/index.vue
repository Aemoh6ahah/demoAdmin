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
        <el-tab-pane label="微博" name="second">
          <top-card1
            v-for="(info, index) in weiboTopList"
            :key="index"
            :cardInfo="info"
          ></top-card1>
        </el-tab-pane>
        <el-tab-pane label="百度" name="fourth">施工中</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getZhihu, getWeibo } from "@/services/index";
import TopCard from "@/pages/home/entertainment/toplist/component/topCard0.vue";
import TopCard1 from "@/pages/home/entertainment/toplist/component/topCard1.vue";
import { getWeiboTop } from "@/utils/util";

export default defineComponent({
  components: { TopCard, TopCard1 },
  setup() {
    const activeName = ref("zhihu");
    function handleClick(e: any) {
      console.log(e);
    }
    // 热榜list
    const topList = ref([]);

    // 微博业务
    let weiboTopList = ref([]);

    async function getweiboList() {
      const weibo = await getWeibo();
      weiboTopList.value = getWeiboTop(String(weibo.data));
    }
    // onMounted
    return { activeName, handleClick, topList, getweiboList, weiboTopList };
  },
  async mounted() {
    const { data } = await getZhihu();
    this.getweiboList();
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
  },
});
</script>
<style lang="less" scoped>
</style>
