<template>
  <div class="geolocation">
    Geolocation
    <hr />
    定位坐标 <br />
    经度：{{ position.longitude }}<br />
    纬度：{{ position.latitude }}<br />
    <!-- ip: {{ ip }}<br /> -->
    <hr />
    {{ msg }}
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
