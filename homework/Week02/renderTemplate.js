function render(tmpl, data) {
  console.log("input", tmpl, data);
  // 1.
  let re = /<(\w+)\s*([^>]*)>([^<]*)<\/\1>/gm;
  while (re.test(tmpl)) {
    tmpl = tmpl.replace(re, (match, s1, s2, s3, offset, string) => {
      console.log("match>> ", match);
      console.log("s1>> ", s1);
      console.log("s2>> ", s2);
      console.log("s3>> ", s3);
      console.log("offset>> ", offset);
      console.log("string>> ", string);

      // const keyArr = s3.slice(2, -2).trim().split(".");
      // console.log(keyArr);
      // let v = data;
      // for (const key of keyArr) {
      //   v = v[key];
      //   console.log(v);
      // }

      // return `<${s1} ${s2}>${v}</${s1}>`;
    });
  }
  // 2.
  // 3.
  return tmpl;
}

const tmpl = `
<div class="newslist">
  <div class="img" v-if="info.showImage">
    <img src="{{image}}" />
  </div>
  <div class="date" v-if="info.showDate">{{info.name}}</div>
  <div class="img">{{info.name}}</div>
</div>
`;

const result = render(tmpl, {
  image: "some img",
  info: {
    showImage: true,
    showDate: false,
    name: "aaa",
  },
});
console.log("result>>>>", result);
