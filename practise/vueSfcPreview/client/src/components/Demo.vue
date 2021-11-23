<template>
  <div>
    <span v-if="isLoading">Loading...</span>
    <iframe v-else src="http://localhost:3001/#/" class="demo-iframe" />
  </div>
</template>

<script>
export default {
  props: ["isLoading"],
};
</script>

<style scoped>
.demo-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
