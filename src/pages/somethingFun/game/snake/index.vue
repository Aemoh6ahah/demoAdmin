<template>
  <div class="snake-page">
    <el-button @click="start" style="position: absolute; z-index: 100"
      >start</el-button
    >
    <img :src="url" alt="" class="phone" />
    <div class="game">
      <div
        class="wall"
        ref="wall"
        tabindex="0"
        @focus="onFocus"
        @keyup.up="upKey"
        @keyup.down="downKey"
        @keyup.left="leftKey"
        @keyup.right="rightKey"
      >
        <div
          class="snake-body"
          v-for="(i, index) in sList"
          :key="index"
          ref="snake"
          :style="{
            transform: ` translateX(${i.translateX}px) translateY(${i.translateY}px)`,
          }"
        ></div>
        <div class="food"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const url = require("@/assets/img/snake/phone.png");

    let snake = ref(null);
    let wall = ref(null);
    let snakeConfig = reactive({
      length: 6,
      headX: 0,
      headY: 0,
    });

    let foodConfig = reactive({});
    //  默认朝向
    let toward = "";
    let timer = null;
    let sList = reactive([]);
    // 方向键
    const keyFun = (key: string, blockKey: string, d: () => void) => {
      if (toward === blockKey || key === toward) {
        return;
      }
      console.log("111");

      move();
      toward = key;
      direction = d;
      clearInterval(timer);
      mainFun();
    };
    const upKey = (e) => {
      keyFun("up", "down", () => {
        sList[0].translateY = sList[0].translateY - 8;
      });
    };
    const downKey = () => {
      keyFun("down", "up", () => {
        sList[0].translateY = sList[0].translateY + 8;
      });
    };
    const leftKey = () => {
      keyFun("left", "right", () => {
        sList[0].translateY = sList[0].translateX - 8;
      });
    };
    const rightKey = () => {
      keyFun("right", "left", () => {
        sList[0].translateY = sList[0].translateX + 8;
      });
    };
    let direction = leftKey; //当前方向

    const move = () => {
      let nList = JSON.parse(JSON.stringify(sList));
      direction();
      for (let j = 0; j < sList.length; j++) {
        if (j) {
          sList[j].translateX = nList[j - 1].translateX;
          sList[j].translateY = nList[j - 1].translateY;
        }
      }
    };

    const mainFun = () => {
      timer = setInterval(() => {
        move();
      }, 300);
    };

    const inintSnake = () => {
      for (let i = 0; i < snakeConfig.length; i++) {
        sList.push({
          translateX: 100 - i * 8,
          translateY: 100,
          text: i + 1,
        });
      }
    };

    onMounted(() => {
      inintSnake();
    });

    const start = () => {
      mainFun();
      wall.value.focus();
    };
    const onFocus = () => {
      console.log("onFocus");
    };
    return {
      url,
      start,
      snake,
      mainFun,
      sList,
      wall,
      upKey,
      downKey,
      rightKey,
      onFocus,
      leftKey,
    };
  },
});
</script>
<style lang="less" scoped>
.snake-page {
  position: relative;
  .phone {
    width: 600px;
    height: 800px;
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .game {
    width: 300px;
    height: 447px;
    position: absolute;
    left: 50%;
    transform: translateX(-101px);
    top: 130px;
    // background-color: #70a205;
    background-color: #fff;
    .wall {
      width: 270px;
      border: 1px solid #000;
      height: 400px;
      position: absolute;
      left: 18px;
      top: 15px;
      .food {
        width: 8px;
        height: 8px;
        background: #000;
      }
      .snake {
        &-body {
          width: 8px;
          position: absolute;
          font-size: 8px;
          height: 8px;
          background-color: #bfa;
          transition: 0.3s;
        }
      }
    }
  }
}
</style>