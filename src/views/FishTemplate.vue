<template>
  <div></div>
</template>

<script>
import V1 from "../components/FishTemplate/v1";
import NewsList from "../components/FishTemplate/templates/NewsList.js";
import V2 from "../components/FishTemplate/v2";
import Template2 from "../components/FishTemplate/templates/template2.js";

export default {
  name: "fishTemplate",
  data() {
    return {};
  },
  async mounted() {
    // this.mountTemplateV1()
    this.mountTemplateV2();
  },
  methods: {
    mountTemplateV1() {
      const newslist = [
        {
          image:
            "https://picbed.qunarzz.com/50214952fbf248f06af43a222c82a532.png",
          title: "新闻1",
          time: "2021-07-11 10:00:32",
        },
        {
          image:
            "https://picbed.qunarzz.com/50214952fbf248f06af43a222c82a532.png",
          title: "新闻2",
          time: "2021-07-12 10:00:32",
        },
      ];
      const v1 = new V1().mounted(this.$el);
      v1.render(NewsList, { newslist });
    },
    mountTemplateV2() {
      console.log(this.$el);
      const v2 = new V2().mounted(this.$el);
      v2.render(Template2, {
        image:
          "https://picbed.qunarzz.com/50214952fbf248f06af43a222c82a532.png",
        info: {
          showImage: true,
          showDate: false,
          name: "very good!",
        },
      });
    },
  },
};
</script>

<style lang="less">
.news-item {
  display: flex;
  width: 600px;
  height: 100px;
  justify-content: space-between;
}
</style>
