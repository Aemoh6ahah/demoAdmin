<template>
  <div class="mask" v-if="show" @click.stop="maskClose">
    <div class="modal_card" :style="{ 'min-width': width + 'px' }" @click.stop>
      <!-- title -->
      <slot v-if="title === 'slot'" name="title" />
      <div v-else class="modal_title" :style="{ 'text-align': titleAlign }">
        {{ title }}
      </div>

      <!-- content 插槽 -->
      <slot />

      <div class="modal_button" v-if="footer">
        <!-- 底部 -->

        <div class="modal_button_wrap" style="display: flex">
          <a-spin :spinning="loading">
            <a-button
              @click.stop="HandleOk"
              class="footer-btn"
              style="margin-right: 24px"
              type="primary"
              >{{ okText }}</a-button
            >
          </a-spin>
          <a-button class="footer-btn" @click.stop="HandleCancel">{{
            cancelText
          }}</a-button>
        </div>
      </div>
      <!-- 插槽自定义组件 -->
      <slot v-else name="footer" />
      <div v-if="closable" class="close" @click.stop="close">
        <slot v-if="closeIcon === 'solt'" name="closeIcon" />
        <a-icon v-else style="color: #516076" :type="closeIcon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    // 使用model， 这2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit
    prop: "visible",
    event: "change",
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      //标题	string|slot
      type: String,
    },
    okText: {
      //确认按钮文字 string|slot
      type: String,
      default: "继续",
    },
    cancelText: {
      //取消按钮文字 string|slot
      type: String,
      default: "取消",
    },
    footer: {
      //是否显示底部按钮 自定义按钮设为false
      type: Boolean,
      default: true,
    },
    width: {
      //宽度	string|number	500
      type: Number,
      default: 500,
    },
    maskClosable: {
      //点击蒙层是否允许关闭 boolean
      type: Boolean,
      default: true,
    },
    closable: {
      //是否显示右上角的关闭按钮	boolean	true
      type: Boolean,
      default: false,
    },
    justify: {
      //flex 布局下的水平排列方式：start end center space-around space-between
      type: String,
      default: "center",
    },
    titleAlign: {
      //title水平排列方式：left center right
      type: String,
      default: "center",
    },
    closeIcon: {
      //基于andt图标库	VNode | slot
      type: String,
      default: "close",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    maskClose() {
      //关闭遮罩层'
      if (this.maskClosable) {
        //点击蒙层是否允许关闭
        this.close();
      }
    },
    close() {
      // 右上角关闭
      this.show = false;
      this.$emit("cancel");
    },
    HandleOk() {
      this.$emit("ok");
    },
    HandleCancel() {
      this.$emit("cancel");
    },
  },
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
  watch: {},
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
  z-index: 1000;
  /deep/ .ant-steps-item-content {
    width: 92% !important;
  }
  .modal_card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 340px;
    max-height: 95%;
    min-height: 178px;
    overflow-y: auto;
    background: #ffffff;
    box-shadow: 0px 12px 48px 16px rgba(0, 0, 0, 0.03),
      0px 9px 28px 0px rgba(0, 0, 0, 0.05),
      0px 6px 16px -8px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 10px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    .modal_title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      font-weight: 400;
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
      display: flex;
      height: 32px;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      &_wrap {
        display: flex;
        height: 32px;
        align-items: center;
      }
    }
    .footer-btn {
      width: 82px;
      height: 32px;
    }
    .close {
      position: absolute;
      right: 10px;
      top: -10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>