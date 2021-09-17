import { defineComponent, PropType, Teleport } from "vue";
import classnames from "classnames";

import Button from "../button";
import styles from "./index.module.less";

export default defineComponent({
  name: "BaseDialog",

  props: {
    title: {
      type: String,
      default: null,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    handleCancel: {
      type: Function as PropType<() => void>,
      default: null,
    },
    handleConfirm: {
      type: Function as PropType<() => void>,
      default: null,
    },
    dialogClass: {
      type: String,
      default: null,
    },
  },

  setup(props, { slots }) {
    function handleCancel() {
      props.handleCancel && props.handleCancel();
    }

    function handleConfirm() {
      props.handleConfirm && props.handleConfirm();
    }
    return () => (
      <Teleport to="body">
        <div
          class={classnames([
            styles.wrapper,
            { [styles.hidden]: !props.visible },
          ])}
        >
          <div class={[styles.dialogContainer, props.dialogClass]}>
            <div>
              {slots.header ? (
                slots.header()
              ) : (
                <div class={styles.defaultHeaderContent}>{props.title}</div>
              )}
            </div>

            <div class={styles.content}>{slots.default && slots.default()}</div>

            <div class={styles.footer}>
              {slots.footer
                ? slots.footer()
                : [
                    <Button
                      type="default"
                      class={styles.buttonCancel}
                      onClick={handleCancel}
                    >
                      取消
                    </Button>,

                    <Button type="primary" onClick={handleConfirm}>
                      确定
                    </Button>,
                  ]}
            </div>
          </div>
        </div>
      </Teleport>
    );
  },
});
