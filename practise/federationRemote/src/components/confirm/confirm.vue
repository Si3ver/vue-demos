<template>
  <div class="wui-dialog-black-mask">
    <div class="wui-confirm">
      <div class="wui-confirm-hd">
        <strong class="wui-confirm-title" v-html="title"></strong>
      </div>
      <div class="wui-confirm-bd" v-html="content"></div>
      <div class="wui-confirm-ft">
        <a
          class="wui-confirm-btn default"
          @click.stop="closeConfirm(false, callback)"
          >取消</a
        >
        <a
          class="wui-confirm-btn primary"
          @click.stop="closeConfirm(true, callback)"
          >确定</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    callback: {
      type: Function,
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
</style>
