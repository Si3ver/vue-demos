export function renderRadio(h, item) {
  return h(
    'el-radio-group',
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
      return h(
        'el-radio',
        {
          props: {
            label: option.value,
          },
        },
        option.label
      )
    })
  )
}
