export default class Vnode {
  /**
   *
   * @param {*} tag 标签名称
   * @param {*} attr 属性
   * @param {*} children 子节点
   * @param {*} parent 父节点
   * @param {*} childrenTemplate 子模板
   */
  constructor(tag, attr, children, parent, childrenTemplate) {
    this.tag = tag;
    this.attr = attr;
    this.children = children;
    this.parent = parent;
    this.childrenTemplate = childrenTemplate;
    this.uuid = this.uuid();
  }

  uuid() {
    return (
      Math.random() * 10000000000 +
      Math.random() * 100000 +
      Date.now()
    ).toString(36);
  }
}
