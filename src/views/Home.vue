<template>
  <div>
    <h2>一、前端基本功</h2>
    <hr />
    <h3>练习</h3>
    <div class="menu">
      <router-link to="/supertabs">
        <div class="item">SuperTabs</div>
      </router-link>
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
      <router-link to="/webrtcscreenshot">
        <div class="item">WebRTCScreenShot</div>
      </router-link>
      <router-link to="/shorturl">
        <div class="item">ShortURL</div>
      </router-link>
      <router-link to="/webworker">
        <div class="item">WebWorker</div>
      </router-link>
      <router-link to="/imagegrid">
        <div class="item">ImageGrid</div>
      </router-link>
      <router-link to="/lazyimage">
        <div class="item">LazyImage</div>
      </router-link>
    </div>

    <h3>作业</h3>
    <div class="menu">
      <router-link to="/transradix">
        <div class="item">TransRadix</div>
      </router-link>
      <router-link to="/webeditor">
        <div class="item">WebEditor</div>
      </router-link>
    </div>
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
  flex-wrap: wrap;
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
