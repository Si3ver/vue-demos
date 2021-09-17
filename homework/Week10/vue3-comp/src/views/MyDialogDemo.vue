<template>
  <h1>Dialog</h1>

  <Button @click="handleButtonClick">打开 Dialog</Button>
  <!-- <Dialog
    title="标题"
    :visible="visible"
    :handle-confirm="handleConfirm"
    :handle-cancel="handleCancel"
  >
    这是一段dialog中的内容
  </Dialog> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Dialog } from "../components/dialog";

console.log("Dialog", Dialog);

const visible = ref(false);

function handleButtonClick() {
  visible.value = true;
}

// function handleConfirm() {
//   visible.value = false;
// }

// function handleCancel() {
//   visible.value = false;
// }
</script>
