<template>
  <div class="home">
    <h3>我要调用另一个webpack构建的包里的内容</h3>
    <a class="btn" @click="doAlert">alert</a>
    <a class="btn" @click="doConfirm">confirm</a>
    <a class="btn" @click="doNotify">notify</a>
    <a class="btn" @click="doToast">toast</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    doAlert() {
      import("federationRemote/dialog").then((dialog) => {
        dialog.Alert("host 1");
      });
    },
    doConfirm() {
      import("federationRemote/dialog").then((dialog) => {
        dialog.Confirm("host 2");
      });
    },
    doNotify() {
      import("federationRemote/dialog").then((dialog) => {
        dialog.Notify("host 3");
      });
    },
    doToast() {
      import("federationRemote/dialog").then((dialog) => {
        dialog.Toast("host 4");
      });
    },
  },
};
</script>
