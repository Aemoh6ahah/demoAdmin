<template>
  <div class="container">
    <card-header :name="'个性化匹配列表'">
      <template #filters>
        <div class="entry">
          <div
            class="entry-item"
            v-for="(i, index) in mineMenuList"
            :key="index"
          >
            <span class="entry-name">{{ i.entryName }}</span>
            <el-switch
              @change="entryChange(i)"
              v-model="i.entryEnable"
            ></el-switch>
          </div>
        </div>
      </template>
    </card-header>
  </div>
</template>
<script lang="ts">
// eslint-disable-file no-use-before-define
import {
  ref,
  Ref,
  watch,
  reactive,
  defineComponent,
  getCurrentInstance,
} from "vue";
import CustomTable from "@/components/commonTable/index.vue";
import { columns } from "./const";
import { entyList, modifyEntry } from "@/services/mine";
interface FormData {
  account: string;
  psw: string;
}
export default defineComponent({
  name: "listPage",
  components: { CustomTable },
  setup(context) {
    const instance = getCurrentInstance();

    let mineMenuList = ref([]);
    console.log(mineMenuList);

    async function getEntyList() {
      const { data } = await entyList({ pageSize: 20, page: 1 });
      console.log(data);
      mineMenuList.value = data.rows.map((_) => {
        return {
          ..._,
          entryEnable: Boolean(_.entryEnable),
        };
      });
    }
    getEntyList();

    async function entryChange(e: any) {
      console.log({ ...e });
      let { entryName, entryUrl, entryId, entryLogo, sort } = e;
      try {
        await modifyEntry({
          entryId,
          entryEnable: Number(e.entryEnable),
        });
      } catch (error) {}
    }
    return {
      mineMenuList,
      entryChange,
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  padding: 24px;
}
.entry {
  &-item {
    display: flex;
    justify-content: space-between;
    width: 576px;
    height: 60px;
    background-color: #f4f6fa;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 16px;
    font-family: SourceHanSansSC-Medium, SourceHanSansSC;
    font-weight: 500;
    color: #516076;
  }
}
</style>