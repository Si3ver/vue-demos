import Vue from "vue";
import Alert from "./alert.vue";
const AlertConstructor = Vue.extend(Alert);

const instance = new AlertConstructor({
  el: document.createElement("div"),
});

AlertConstructor.prototype.closeAlert = function () {
  typeof this.callback === "function" && this.callback();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};

const AlertFn = (content, options = {}) => {
  instance.content = content;
  instance.callback = options.callback;
  document.body.appendChild(instance.$el);
};

export default AlertFn;
