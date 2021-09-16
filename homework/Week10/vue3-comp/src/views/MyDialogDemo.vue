<template>
  <el-button type="text" @click="dialogVisible = true"
    >点击打开 Dialog</el-button
  >

  <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
  <my-dialog />
</template>

<script>
import { defineComponent, ref } from "vue";
import { ElMessageBox } from "element-plus";
import MyDialog from "../components/MyDialog.vue";

export default defineComponent({
  components: {
    MyDialog,
  },
  setup() {
    const dialogVisible = ref(false);

    const handleClose = (done) => {
      ElMessageBox.confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {
          // catch
        });
    };
    return {
      dialogVisible,
      handleClose,
    };
  },
});
</script>