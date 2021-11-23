<template>
  <div class="container">
    <div class="editor" ref="monaco"></div>
    <demo class="preview" :isLoading="isDemoLoading" />
    <div class="btns">
      <button @click="updateCodesOnServer">预览</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as monaco from "monaco-editor";
import Demo from "@/components/Demo.vue";

const host = "http://localhost:3000";

export default {
  components: {
    Demo,
  },
  data() {
    return {
      isDemoLoading: true,
      monacoHandler: null,
      monacoData: `<template>
  <div class="content">This is a demo.</div>
</template>

<style scoped>
.content {
  color: green;
  font-size: 32px;
}
</style>
`,
    };
  },
  mounted() {
    this.initMonaco();
  },
  destroyed() {
    this.destroyMonaco();
  },
  methods: {
    initMonaco() {
      this.monacoHandler = monaco.editor.create(this.$refs.monaco, {
        value: this.monacoData,
        language: "html",
        theme: "vs-dark",
      });
      this.isDemoLoading = true;
      this.startWebpackOnServer();
      this.monacoHandler.onDidChangeModelContent(() => {
        this.monacoData = this.monacoHandler.getValue();
      });
    },

    destroyMonaco() {
      this.monacoHandler.dispose();
    },

    /** 通知服务端启动Webpack */
    startWebpackOnServer() {
      axios
        .post(`${host}/run`, {
          content: this.monacoData,
        })
        .then((response) => {
          console.log("response of /run >>>", response);
          this.isDemoLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /** 更新服务端Vue源码 */
    updateCodesOnServer() {
      this.isDemoLoading = true;
      axios
        .post(`${host}/update`, {
          content: this.monacoData,
        })
        .then((response) => {
          console.log("response of /update >>>", response);
          this.isDemoLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" soped>
.container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 7fr 1fr;
  height: calc(100vh - 60px);

  .editor {
    box-sizing: border-box;
    flex-grow: 1;
    flex-basis: 0;
    border: 1px solid #000;
  }

  .preview {
    box-sizing: border-box;
    flex-grow: 1;
    flex-basis: 0;
    border-bottom: 1px solid #000;
  }

  .btns {
    display: flex;
    align-items: center;
    button {
      height: 40px;
      width: 120px;
      background-color: lightcoral;
      border-radius: 10px;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }
  }
}
</style>
