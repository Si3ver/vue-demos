import { defineComponent, PropType } from "vue";

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
        class="a"
        onClick={handleClick}
      >
        {slots.default?.()}
      </button>
    );
  },
});
