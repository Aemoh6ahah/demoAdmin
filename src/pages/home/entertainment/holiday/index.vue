<template>
  <div class="container" v-loading="pageLoading">
    <el-card>
      <div class="text">
        <!-- {{ todayText }} -->
        <div v-for="(t, i) in todayText" v-show="t" :key="i">{{ t }}！</div>
      </div>
      <div class="query">
        <el-date-picker
          v-model="queryDay"
          format="YYYY-MM-DD"
          :value-format="'YYYY-MM-DD'"
          placeholder="选个日子吧"
        ></el-date-picker>
        <el-button
          type="primary"
          class="btn"
          :disabled="!queryDay"
          @click="queryHoliday"
          >查询</el-button
        >
      </div>
      <div class="res" v-loading="resLoading">{{ queryRes }}</div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, getCurrentInstance, reactive } from "vue";
import { gethHoliday } from "@/services/index";
import { formatQueryform } from "@/utils/util";
export default defineComponent({
  setup() {
    let V: any = getCurrentInstance();
    let today = V.ctx.$timeFormat(new Date());
    today = today.substring(0, today.length - 9);

    // 每日一句
    let todayText = ref([]);
    let queryDay = ref(""),
      queryRes = ref(""),
      resLoading = ref(false),
      pageLoading = ref(false);
    async function getHoliday() {
      pageLoading.value = true;
      let { data } = await gethHoliday({ param: "tts" });
      pageLoading.value = false;
      todayText.value = data.tts.split("！");
    }
    getHoliday();

    // 几个节假日
    let afterHolidys = ref([]);
    let afterHolidy = ["", "", ""];
    let rest = 0;
    let times = 0;
    async function nextHoliday(day) {
      // 下一个节假日
      let { data } = await gethHoliday({ param: "next/" + day });
      if (!data.holiday) {
        afterHolidys.value = [...afterHolidy];
        return;
      }
      rest = data.holiday.rest + rest;
      afterHolidy[times] = "距离" + data.holiday.name + "还有" + rest + "天";

      // 下一个工作日
      let res = await gethHoliday({
        param: "workday/next/" + data.holiday.date,
      });
      let nextWork = res.data.workday.date;
      console.log(rest, res.data.workday.rest);

      rest = res.data.workday.rest + rest;
      // 下次参数
      times++;
      if (3 - times) {
        console.log(afterHolidy);
        nextHoliday(nextWork);
      } else {
        afterHolidys.value = [...afterHolidy];
      }
    }
    // nextHoliday(today);

    async function queryHoliday() {
      resLoading.value = true;
      let q = V.ctx.$timeFormat(queryDay.value);
      let { data } = await gethHoliday({
        param: "next/" + q.substring(0, q.length - 9),
      });
      resLoading.value = false;
      if (!data.holiday) {
        queryRes.value = "你选的日期后面没有节日啦！";
        return;
      }
      queryRes.value =
        "距离你选的日期最近的节日是" +
        data.holiday.name +
        "，距离那天还有" +
        data.holiday.rest +
        "天";
    }

    function clear() {
      queryRes.value = "";
    }

    return {
      todayText,
      afterHolidys,
      nextHoliday,
      queryDay,
      queryHoliday,
      queryRes,
      pageLoading,
      resLoading,
    };
  },
  mounted() {
    // this.nextHoliday();
  },
});
</script>
<style lang="less" scoped>
.text {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
  font-family: "Microsoft YaHe";
}
.query {
  display: flex;
  align-items: center;
  margin-top: 24px;
  .btn {
    // margin-left: 12px;
    height: 40px;
    border-radius: 20px;
  }
}
.res {
  min-height: 200px;
  text-align: left;
  padding-top: 12px;
}
</style>