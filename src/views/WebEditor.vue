<template>
  <div>
    <h2>monaco editor</h2>
    <hr />
    <div>--- Step1: 选择文件 ---</div>
    <input type="file" accept=".txt" @change="openFile" ref="files" />
    <div>--- Step2: 编辑 ---</div>
    <div id="monaco" ref="monaco"></div>
    <div>--- Step3: 导出 ---</div>
    <div class="btn" @click="save">另存为</div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
  name: "WebEditor",
  data() {
    return {
      code: "",
      editor: null,
    };
  },
  mounted() {
    console.log(monaco);
  },
  created() {
    this.$nextTick(() => {
      this.editor = monaco.editor.create(this.$refs.monaco, {
        value: this.code,
        language: "javascript",
        theme: "vs-dark",
      });
      this.editor.onDidBlurEditorText((e) => {
        console.log(e);
      });
    });
  },
  methods: {
    openFile() {
      console.log("打开文件", this.$refs.files.files);
      const file = this.$refs.files.files[0];
      if (file.name) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const content = evt.target.result;
          this.code = content;
          this.editor.setValue(content);
        };
        reader.onerror = (err) => {
          console.log(err);
        };
        reader.readAsText(file);
      }
    },
    save() {
      const content = this.editor.getValue();
      console.log(content);
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      this.saveAs(blob, "file.txt");
    },
    saveAs(blob, filename) {
      let url = URL.createObjectURL(blob);
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", filename);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
  },
};
</script>

<style lang="less" scoped>
#monaco {
  width: 600px;
  height: 800px;
  border: 1px solid #333;
}
</style>
