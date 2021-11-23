<template>
  <div class="home">
    <h3>Vue</h3>
    <a class="btn" @click="doAlert">alert</a>
    <a class="btn" @click="doConfirm">confirm</a>
    <a class="btn" @click="doNotify">notify</a>
    <a class="btn" @click="doToast">toast</a>
  </div>
</template>

<script>
import { Alert, Confirm, Toast, Notify } from "@/components";

export default {
  name: "Home",
  methods: {
    doAlert() {
      Alert("我知道那些夏天,就像青春一样回不来", {
        callback: () => {
          console.log("remote 1");
        },
      });
    },
    doConfirm() {
      Confirm("让我困在城市里，纪念你", {
        title: "安和桥",
        callback: () => {
          console.log("remote 2");
        },
      });
    },
    doNotify() {
      Notify("我也不会再对谁满怀期待", {
        timeout: 1000,
        callback: () => {
          console.log("remote 3");
        },
      });
    },
    doToast() {
      Toast("所以你好，再见", {
        callback: () => {
          console.log("remote 4");
        },
      });
    },
  },
};
</script>
