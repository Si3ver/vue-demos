<template>
  <div>
    <div style="font-size: 80px; color: blue">{{ time }}</div>
    <div class="btn" @click="start">开启计时器</div>
  </div>
</template>

<script>
import Clock from "./Clock.worker.js";

export default {
  name: "worker",
  data() {
    return { time: 0 };
  },
  mounted() {
    this.worker = new Clock();

    this.worker.onmessage = (e) => {
      console.log(e.data.time);
      this.time = e.data.time;
    };
  },
  methods: {
    start() {
      this.worker.postMessage({ start: true });
    },
  },
};
</script>
