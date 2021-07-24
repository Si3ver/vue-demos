<template>
  <div>
    <h2>在线编辑器</h2>
    <hr />
    <div id="monaco"></div>
    <input type="file" accept=".txt" @change="openFile" ref="files" />
    <div class="btn" @click="save">保存</div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";

export default {
  name: "WebEditor",
  data() {
    return {
      monacoHandler: null,
      monacoData: "",
    };
  },
  mounted() {
    console.log("monaco >>>", monaco);
    this.initMonaco();
  },
  destroyed() {
    this.destroyMonaco();
  },
  methods: {
    initMonaco111() {
      this.monacoEditor = monaco.editor.create(
        document.getElementById("monaco"),
        {
          value: this.monacoData,
          automaticLayout: true,
          language: "javascript",
        }
      );
    },
    initMonaco() {
      this.monacoHandler = monaco.editor.create(
        document.getElementById("monaco"),
        {
          value: this.monacoData,
          language: "javascript",
          theme: "vs-dark",
        }
      );
    },
    destroyMonaco() {
      this.monacoHandler.dispose();
    },
    openFile() {
      console.log("打开文件", this.$refs.files.files);
      const file = this.$refs.files.files[0];
      if (file.name) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const content = evt.target.result;
          this.monacoData = content;
          this.monacoHandler.setValue(content);
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
  margin-bottom: 20px;
}
</style>
