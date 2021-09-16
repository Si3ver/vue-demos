<template>
  <h1>ElementPlus Dialog</h1>
  <ElDialogDemo />
  <h1>My Dialog</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ElDialogDemo from './components/ElDialogDemo.vue';

export default defineComponent({
  name: 'App',
  components: {
    ElDialogDemo
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
