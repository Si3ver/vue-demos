export function renderSelect(h, item) {
  return h(
    'el-select',
    {
      props: {
        value: item.value,
      },
      on: {
        input(value) {
          item.value = value
        },
      },
    },
    item.props.options.map((option) => {
      return h('el-option', {
        props: {
          label: option.label,
          value: option.value,
        },
      })
    })
  )
}
