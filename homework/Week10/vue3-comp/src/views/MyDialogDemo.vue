<template>
  <Button @click="handleButtonClick">打开 Dialog</Button>
  <Dialog
    title="标题"
    :visible="visible"
    :handle-confirm="handleConfirm"
    :handle-cancel="handleCancel"
  >
    <p>这是一段dialog中的内容</p>
    <p>这是一段dialog中的内容</p>
    <p>这是一段dialog中的内容</p>
    <p>这是一段dialog中的内容</p>
  </Dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import consola from 'consola'
import { Button, Dialog } from "../components";

export default defineComponent({
  components: {
    Button,
    Dialog,
  },
  setup() {
    const visible = ref(false);

    function handleButtonClick() {
      consola.info('打开dialog')
      visible.value = true;
    }

    function handleConfirm() {
      consola.info('点击了确定')
      visible.value = false;
    }

    function handleCancel() {
      consola.info('点击了取消')
      visible.value = false;
    }

    return {
      visible,
      handleButtonClick,
      handleConfirm,
      handleCancel,
    }
  }
});
</script>
