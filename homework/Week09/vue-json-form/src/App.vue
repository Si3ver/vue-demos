<template>
  <div id="app">
    <main-panel></main-panel>
  </div>
</template>

<script>
import MainPanel from './components/MainPanel.vue'

export default {
  name: 'app',
  components: {
    MainPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
