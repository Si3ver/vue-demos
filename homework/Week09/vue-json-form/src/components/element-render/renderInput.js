export function renderInput(h, item) {
  return h('el-input', {
    attrs: {
      placeholder: item.props.placeholder,
    },
    props: {
      value: item.value,
      ...item.props,
    },
    on: {
      input(value) {
        item.value = value
      },
    },
  })
}
