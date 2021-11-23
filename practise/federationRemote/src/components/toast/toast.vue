<template>
  <div class="wui-dialog-white-mask">
    <div
      class="wui-toast"
      :class="iconsClass == '' ? 'wui-toast-none-icon' : ''"
    >
      <div v-if="iconsClass" :class="iconsClass"></div>
      <p class="wui-toast-content" v-html="content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    icon: String,
    timeout: Number,
    callback: Function,
  },
  computed: {
    iconsClass() {
      let _icon = "";
      if (this.icon === "success" || this.icon === "error") {
        _icon = "wui-toast-" + this.icon + "-icon";
      }
      return _icon;
    },
  },
};
</script>

<style lang="less">
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes rotate-loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.top-line(@color, @zindex: 0) {
  content: "";
  position: absolute;
  z-index: @zindex;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid @color;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.right-line(@color, @zindex: 0) {
  content: "";
  position: absolute;
  z-index: @zindex;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid @color;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

// 遮罩层
// -----------------------------------------------------------------------------
.mask(@bgcolor: rgba(0, 0, 0, 0.4), @z-index: @base-zindex * 1500) {
  background-color: @bgcolor;
  position: fixed;
  z-index: @z-index;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@line-color: #d9d9d9;

.wui {
  &-dialog {
    &-black-mask {
      .mask(rgba(0, 0, 0, 0.4), 2000);
    }

    &-white-mask {
      .mask(rgba(0, 0, 0, 0), 2000);
    }
  }

  // Confirm =================
  &-confirm {
    width: 85%;
    background-color: #fafafa;
    border-radius: 2px;
    font-size: 15px;
    animation: zoomIn 0.15s ease forwards;

    &-hd {
      text-align: left;
      padding: 0.3rem 0.4rem 0.1rem;
    }

    &-title {
      font-weight: normal;
      color: #444;
      word-break: break-all;
    }

    &-bd {
      text-align: left;
      padding: 0 0.4rem;
      font-size: 14px;
      color: #888;
      line-height: 20px;
      word-break: break-all;
    }

    &-ft {
      position: relative;
      line-height: 40px;
      margin-top: 14px;
      display: flex;
      &:after {
        .top-line(@line-color);
      }
      > a {
        position: relative;
        text-align: center;
        display: block;
        flex: 1;
        padding: 0 2px;
        &:not(:last-child):after {
          .right-line(@line-color);
        }
        &.default {
          color: #353535;
        }
        &.primary {
          color: dodgerblue;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .wui-confirm {
    width: 40%;
  }
}

.wui-toast {
  min-width: 130px;
  max-width: 80%;
  padding-top: 20px;
  background: rgba(40, 40, 40, 0.8);
  text-align: center;
  border-radius: 3px;
  color: #fff;
  animation: zoomIn 0.06s ease forwards;

  &-none-icon {
    padding-top: 10px;
    border-radius: 3px;
    .wui-toast-content {
      padding: 0 36px 10px 36px;
    }
  }

  &-content {
    font-size: 15px;
    padding: 0 15px 15px 15px;
    line-height: 22px;
    word-break: break-all;
  }

  &-success-icon,
  &-error-icon {
    display: block;
    margin-bottom: 10px;
    &:after {
      display: inline-block;
      content: "";
    }
  }

  &-success-icon:after {
    width: 43px;
    height: 35px;
    background-size: 43px 35px;
  }

  &-error-icon:after {
    width: 35px;
    height: 35px;
    background-size: 35px 35px;
  }
}
</style>
