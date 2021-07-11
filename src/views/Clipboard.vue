<template>
  <div class="page">
    Clipboard
    <pre>
说明：
      1. 劫持剪贴板复制事件，并插入内容
      2. 剪贴板粘贴。可粘贴文字、图片、本地文件。
</pre
    >
    <hr />
    <section>复制内容:{{ pasteContent }}<br /></section>
    <section>
      粘贴内容:
      <textarea> </textarea>
    </section>

    <section>
      粘贴图片:
      <img ref="img" :src="pasteImage" />
    </section>
  </div>
</template>

<script>
export default {
  name: "Clipborad",
  data() {
    return {
      copyContent: "",
      pasteContent: "",
      pasteImage: "",
    };
  },
  mounted() {
    document.body.oncopy = (evt) => {
      console.log("[event copy]", evt);
      const selection = document.getSelection(); // 获取选中的数据
      evt.clipboardData.setData(
        // 修改剪贴板数据
        "text/plain",
        "该文档不允许复制剪贴操作，谢谢配合!" + selection.toString()
      );
      evt.preventDefault();
    };
    document.body.onpaste = (evt) => {
      console.log("[event paste]", evt.clipboardData);

      this.pasteContent = evt.clipboardData.getData("text/plain"); // 剪贴板中文本内容
      console.log("剪贴板中的文本内容：", this.pasteContent);

      if (evt.clipboardData.items) {
        evt.clipboardData.items.forEach((item) => {
          if (item.type.includes("image")) {
            let file = item.getAsFile();
            console.log("file", file);

            var reader = new FileReader();
            reader.onload = (e) => {
              // event.target.result就是图片的Base64地址啦
              this.$refs.img.style.width = file.width + "px";
              this.$refs.img.style.height = file.height + "px";
              this.pasteImage = e.target.result;
              console.log(this.pasteImage);
            };
            reader.onerror = (err) => {
              console.log(err);
            };
            reader.readAsDataURL(file);
          }
        });
      }
    };
  },
};
</script>

<style scoped lang="less">
.page {
  text-align: left;
  section {
    margin: 20px;
  }
  img {
    border: 1px solid #ccc;
  }
}
</style>
