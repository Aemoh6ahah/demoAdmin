<template>
  <el-card class="wrap" @click="toDetail">
    <div class="topCard">
      <div class="content">
        <div class="title">
          <span
            :style="`color: ${
              cardInfo.index > 3 ? '' : 'orange'
            }; font-size: 22px`"
            >{{ cardInfo.index }}</span
          >
          {{ cardInfo.title }}
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
interface CardInfo {
  title: string;
  link: string;
  hotVal: string;
  index: number;
}

export default defineComponent({
  name: "topCard",
  props: {
    cardInfo: Object as PropType<CardInfo>,
  },
  setup(props) {
    // let cardInfo = reactive(props.cardInfo);
    return {};
  },
  methods: {
    toDetail() {
      window.open(`https://s.weibo.com/${this.cardInfo.link}`);
    },
  },
});
</script>

<style lang="less" scoped>
.wrap {
  margin-bottom: 12px;
  min-width: 840px;
}
.topCard {
  display: flex;
  min-width: 800px;
  cursor: pointer;
  .content {
    min-width: 500px;
    text-align: left;
    .title {
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
    }
    .des {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin-top: 24px;
      text-indent: 16px;
    }
  }
  .img {
    width: 300px;
    flex-shrink: 0;
    margin-left: 12px;
    .cover {
      width: 100%;
    }
  }
  &:hover {
    color: #4662e6;
  }
}
</style>
