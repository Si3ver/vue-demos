import Vue from "vue";
import Toast from "./toast.vue";

const ToastConstructor = Vue.extend(Toast);

const instance = new ToastConstructor({
  el: document.createElement("div"),
});

ToastConstructor.prototype.closeToast = function () {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);

  typeof this.callback === "function" && this.callback();
};

const ToastFn = (content, options = {}) => {
  instance.content = content;
  instance.icon = options.icon;
  instance.timeout = ~~options.timeout || 2000;
  instance.callback = options.callback;

  document.body.appendChild(instance.$el);

  const timer = setTimeout(() => {
    clearTimeout(timer);
    instance.closeToast();
  }, instance.timeout + 100);
};

export default ToastFn;
