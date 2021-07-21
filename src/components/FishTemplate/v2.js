import Engine from "./engine2";
export default class TemplateV2 {
  constructor() {
    this.root = null;
    this.engine = new Engine();
  }

  render(com, data) {
    let dom = this.engine.render(com.render(), data);
    console.log("html>>>", dom, dom.childNodes);
    this.root.appendChild(dom);
  }

  mounted(dom) {
    this.root = dom;
    return this;
  }
}
