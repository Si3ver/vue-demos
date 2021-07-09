<template>
  <div class="menu">
    <router-link to="/arraysort">
      <div class="item">ArraySort</div>
    </router-link>
    <router-link to="/clipboard">
      <div class="item">Clipboard</div>
    </router-link>
    <router-link to="/geolocation">
      <div class="item">Geolocation</div>
    </router-link>
    <router-link to="/keyboard">
      <div class="item">Keyboard</div>
    </router-link>
    <router-link to="/webrtc">
      <div class="item">WebRTC</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less">
.menu {
  display: flex;
  align-items: center;

  .item {
    border: 1px #e0e0e0 solid;
    background: #f0f0f0;
    width: 200px;
    height: 100px;
    margin: 10px;
    border-radius: 6px;
  }
}
</style>
