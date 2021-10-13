<template>
  <div class="mask" v-if="visible" @click.stop="maskClose">
    <div class="modal_card" :style="{ 'min-width': width + 'px' }" @click.stop>
      <!-- title -->
      <div
        v-if="title"
        class="modal_title"
        :style="{ 'text-align': titleAlign }"
      >
        {{ title }}
      </div>

      <!-- content -->
      <div class="modal">
        <div class="modal_content">{{ content }}</div>
      </div>

      <!-- footer -->
      <div class="modal_button">
        <!-- 底部 -->
        <div v-if="footer">
          <div
            class="button primary"
            size="small"
            @click.stop="HandleOk"
            type="primary"
          >
            {{ okText }}
          </div>
          <div
            class="button"
            size="small"
            @click.stop="HandleCancel"
            style="margin-left: 24px"
          >
            {{ cancelText }}
          </div>
        </div>
        <!-- 插槽自定义组件 -->
        <slot v-else name="button" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/style/theme/index.css";
import "@/assets/style/element.less";
export default {
  data() {
    return {
      visible: false,
      title: "提示", //标题	string|slot
      content: "您确定要删除这行内容吗？",
      modalType: "modal",
      okText: "确认", //确认按钮文字 string|slot
      cancelText: "取消", //取消按钮文字 string|slot
      width: 340, //宽度	string|number	520
      maskClosable: true, //点击蒙层是否允许关闭 boolean
      ok: null, //点击确定回调	function(e)
      cancel: null, //点击遮罩层或右上角叉或取消按钮的回调	function(e)
      footer: true,
      closable: false, //是否显示右上角的关闭按钮	boolean	true
      justify: "center", //flex 布局下的水平排列方式：start end center space-around space-between
      titleAlign: "center", //
      closeIcon: "close", //基于andt图标库	VNode | slot
      El_P: "",
    };
  },
  methods: {
    maskClose() {
      //关闭遮罩层'
      if (this.maskClosable) {
        //点击蒙层是否允许关闭
        this.visible = false;
        console.log();
        this.$nextTick(() => {
          document.body.removeChild(this.$El_P);
        });
      }
    },
    close() {
      // 右上角关闭
      this.visible = false;
      this.$nextTick(() => {
        document.body.removeChild(this.$El_P);
      });
    },
    HandleOk() {
      if (this.ok) {
        this.ok();
      }
      this.close();
    },
    HandleCancel() {
      if (this.cancel) {
        this.cancel();
      }
      this.close();
    },
  },
};
</script>

<style lang="less" scoped>
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .modal_card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    max-height: 95%;
    min-height: 138px;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03),
      0px 9px 28px 0px rgba(0, 0, 0, 0.05),
      0px 6px 16px -8px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    .modal_title {
      width: 100%;
      height: 30px;
      line-height: 40px;
      font-size: 20px;
      font-weight: 500;
      color: #516076;
      margin: 10px 0;
    }
    .modal {
      margin: auto 0;
      color: #516076;
      font-size: 16px;
      .modal_content {
        padding: 0 10px;
        box-sizing: border-box;
        text-align: center;
      }
    }
    .modal_button {
      width: 100%;
      margin-top: auto;
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
    }
    .close {
      position: absolute;
      right: 10px;
      top: 5px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.div {
  box-sizing: border-box;
  min-width: 82px;
  border-radius: 0;
}

.div--small {
  border-radius: 0;
  font-size: 14px !important;
  height: 32px;
  padding: 8px 15px;
}
.button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  border-radius: 0px;
  width: 82px;
  height: 32px;
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 0px;
  &:hover {
    border-color: rgb(107, 129, 235);
    color: rgb(107, 129, 235);
  }
  &.primary {
    color: #fff;
    background: rgb(107, 129, 235);
    border-color: rgb(107, 129, 235);
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>