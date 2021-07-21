export default {
  render() {
    return `
      <div class="newslist">
        <div class="img" v-if="info.showImage">
          <img src="{{image}}" />
        </div>
        <div class="date" v-if="info.showDate">{{info.name}}</div>
        <div class="img">{{info.name}}</div>
      </div>`;
  },
};
