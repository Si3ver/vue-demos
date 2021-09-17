import { defineComponent, PropType } from "vue";
import classnames from "classnames";

import styles from "./index.module.less";

export default defineComponent({
  name: "BaseButton",
  props: {
    type: {
      type: String as PropType<"default" | "primary" | "text">,
      default: "default",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit, slots }) {
    function handleClick() {
      if (props.disable) {
        return;
      }
      emit("click");
    }

    return () => (
      <button
        class={classnames([
          styles[props.type],
          { [styles.normal]: !props.disable },
          { [styles.disable]: props.disable },
        ])}
        onClick={handleClick}
      >
        {slots.default?.()}
      </button>
    );
  },
});
