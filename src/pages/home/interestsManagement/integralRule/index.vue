<template>
  <div class="container">
    <card-header :name="'积分规则'">
      <template #operate-btns>
        <el-button size="small" type="primary">编辑</el-button>
      </template>
      <template #filters>
        <div class="desc">
          Consistency# 符合实际生活： 符合实际生活的过程和逻辑，
          并符合用户使用的语言和习惯。 Consistent within interface: all elements
          should be consistent, such as: design style, icons and texts, position
          of elements, etc. Feedback# Operation feedback: enable the users to
          clearly perceive their operations by style updates and interactive
          effects. 视觉反馈： 通过更新或重新安排页面元素来反映当前状态。
          Efficiency# Simplify the process: keep operating process simple and
          intuitive. 明确而明确：
          清楚地阐明你的意图，以便用户能够快速理解并做出决定。 易于识别：
          接口应该直截了当，这有助于用户识别并使他们免于记忆和回忆。
        </div>
      </template>
    </card-header>
    <div></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      content: "",
    };
  },
};
</script>
<style lang="less" scoped>
.desc {
  padding: 50px 30px;
  height: 60vh;
  font-size: 20px;
}
</style>