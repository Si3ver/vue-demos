<template>
  <h1>ElementPlus Dialog</h1>
  <ElDialogDemo />
  <h1>My Dialog</h1>
  <MyDialogDemo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ElDialogDemo from './views/ElDialogDemo.vue';
import MyDialogDemo from './views/MyDialogDemo.vue';

export default defineComponent({
  name: 'App',
  components: {
    ElDialogDemo,
    MyDialogDemo,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
