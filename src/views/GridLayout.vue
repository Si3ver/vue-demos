<template>
  <div class="grid">
    <span>foo</span>
    <div id="container">
      <div class="item item-1">1</div>
      <div class="item item-2">2</div>
      <div class="item item-3">3</div>
      <div class="item item-4">4</div>
      <div class="item item-5">5</div>
      <div class="item item-6">6</div>
      <div class="item item-7">7</div>
      <div class="item item-8">8</div>
      <div class="item item-9">9</div>
    </div>
    <span>bar</span>
  </div>
</template>

<script>
export default {
  name: "Geolocation",
  data() {
    return {
      position: {},
      ip: "",
      msg: "",
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.position = position.coords;
      if (this.timer) {
        clearTimeout(this.timer);
      }
    });
  },
  methods: {
    doTimeout() {
      this.msg = "定位超时";
      this.getIp();
    },
    getIp() {
      // jsonp get "https://www.taobao.com/help/getip.php"
      // baidu sdk get ip information
    },
  },
};
</script>

<style lang="less" scoped>
span {
  font-size: 2em;
}

#container {
  display: grid;
  // grid-template-columns: 50px 50px 50px;
  // grid-template-columns: repeat(auto-fill, 100px 20px 80px);
  // grid-template-columns: 1fr 2fr;
  // grid-template-columns: 150px 1fr 2fr;
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
  grid-template-rows: 50px 50px 50px;
}

.item {
  font-size: 2em;
  text-align: center;
  border: 1px solid #e5e4e9;
}

.item-1 {
  background-color: #ef342a;
}

.item-2 {
  background-color: #f68f26;
}

.item-3 {
  background-color: #4ba946;
}

.item-4 {
  background-color: #0376c2;
}

.item-5 {
  background-color: #c077af;
}

.item-6 {
  background-color: #f8d29d;
}

.item-7 {
  background-color: #b5a87f;
}

.item-8 {
  background-color: #d0e4a9;
}

.item-9 {
  background-color: #4dc7ec;
}
</style>
