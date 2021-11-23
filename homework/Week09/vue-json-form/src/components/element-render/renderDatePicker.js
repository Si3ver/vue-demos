export function renderDatePicker(h, item) {
  return h('el-date-picker', {
    props: {
      value: item.value,
    },
    on: {
      input(value) {
        item.value = value
      },
    },
  })
}
