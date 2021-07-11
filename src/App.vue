<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background: lightgreen;
  margin: 10px;
  cursor: pointer;
}
</style>
