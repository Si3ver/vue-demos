<template>
  <div class="news-list">
    <div
      v-for="item in data"
      :key="item.key"
      class="item"
      @click="handleSelect(item.id)"
      :class="item.id === selectedId ? 'active' : ''"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { resp } from "./data.js";

export default {
  name: "NewsList",
  data() {
    return {
      data: resp.data,
      selectedId: -1,
    };
  },
  methods: {
    handleSelect(id) {
      this.selectedId = id;
      console.log(this.data.find(item => item.id === id).content)
    },
  },
};
</script>

<style scoped>
.news-list {
  height: calc(100vh - 50px);
  overflow: scroll;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item {
  text-align: left;
  margin: 10px;
  cursor: pointer;
}
.item.active {
  background: pink;
}
</style>
