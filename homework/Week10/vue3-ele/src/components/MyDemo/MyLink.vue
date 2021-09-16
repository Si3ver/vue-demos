<template>
  <div>
    <h1>Composition API</h1>
    <div style="text-align: center; margin: 0 450px">
      <div style="display: flex; justify-content: space-between">
        <tr-button @click="handleSize('default')">变大</tr-button>
        <tr-button type="primary" disabled @click="handleSize"
          >主要链接</tr-button
        >
        <tr-button type="success" @click="handleSize">成功链接</tr-button>
        <tr-button type="warning" @click="handleSize">警告链接</tr-button>
      </div>
    </div>
    <h1>同步修改</h1>
    <tr-button :type="btnSize">链接</tr-button>
  </div>
</template>
<script>
import trButton from "./index.vue";
import { ref } from "vue";
export default {
  setup() {
    const btnSize = ref("default");
    function handleSize(e) {
      console.log(e);
      // btnSize.value = e.target;
    }
    return {
      handleSize,
      btnSize,
    };
  },
  components: {
    trButton,
  },
};
</script>
