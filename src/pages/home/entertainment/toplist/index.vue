<template>
  <div class="container">
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="知乎" name="zhihu" v-loading="loading">
          <el-radio-group
            v-model="zhihuType"
            @change="switchZhihuType"
            class="typeSelect"
            size="small"
          >
            <el-radio-button label="total">全部</el-radio-button>
            <el-radio-button label="science">科学</el-radio-button>
            <el-radio-button label="digital">数码</el-radio-button>
            <el-radio-button label="focus">国际</el-radio-button>
          </el-radio-group>
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
        <el-tab-pane label="百度" name="fourth">
          <top-card2
            v-for="(info, index) in baiduTopList"
            :key="index"
            :cardInfo="info"
          ></top-card2>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, Ref } from "vue";
import { getZhihu, getWeibo, getBaidu } from "@/services/index";
import TopCard from "@/pages/home/entertainment/toplist/component/topCard0.vue";
import TopCard1 from "@/pages/home/entertainment/toplist/component/topCard1.vue";
import TopCard2 from "@/pages/home/entertainment/toplist/component/topCard2.vue";
import { getWeiboTop, getBaiduTop } from "@/utils/util";

export default defineComponent({
  components: { TopCard, TopCard1, TopCard2 },
  setup() {
    const activeName = ref("zhihu"),
      loading = ref(false);
    function handleClick(e: any) {}
    // 知乎热榜list
    const topList: Ref<any[]> = ref([]);
    const zhihuType: Ref<string> = ref("total");
    async function getZhihuList(type: string) {
      loading.value = true;
      const { data } = await getZhihu(type);
      topList.value = data.data.map((_, index) => {
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
      loading.value = false;
    }
    function switchZhihuType() {
      getZhihuList(zhihuType.value);
    }
    // 微博
    let weiboTopList = ref([]);

    async function getweiboList() {
      const weibo = await getWeibo();
      weiboTopList.value = getWeiboTop(String(weibo.data));
    }

    // 百度
    let baiduTopList = ref([]);
    async function getBaiduList() {
      const baidu = await getBaidu();
      let res = getBaiduTop(String(baidu.data));
      baiduTopList.value = res.map((_, index) => {
        return {
          title: _.word,
          coverUrl: _.img,
          url: _.url,
          content: _.desc,
          hotVal: _.detail_text,
          index: index + 1,
        };
      });
    }
    // onMounted
    return {
      activeName,
      handleClick,
      topList,
      getZhihuList,
      switchZhihuType,
      getweiboList,
      weiboTopList,
      getBaiduList,
      baiduTopList,
      zhihuType,
      loading,
    };
  },
  async mounted() {
    this.getBaiduList();
    this.getweiboList();
    this.getZhihuList(this.zhihuType);
  },
});
</script>
<style lang="less" scoped>
.typeSelect {
  display: block;
  text-align: left;
  margin-bottom: 12px;
  /deep/.el-radio-group {
    display: flex;
  }
  /deep/.el-radio-button__inner {
    border-radius: 0;
  }
}
.list-wrap {
  min-height: 40vh;
}
</style>
