import { renderInput } from './renderInput.js'
import { renderRadio } from './renderRadio.js'
import { renderSelect } from './renderSelect.js'
import { renderDatePicker } from './renderDatePicker.js'

const renderMap = new Map()
renderMap.set('input', renderInput)
renderMap.set('radio', renderRadio)
renderMap.set('select', renderSelect)
renderMap.set('date-picker', renderDatePicker)

export default {
  name: 'render-form',
  render(h) {
    return h(
      'el-form',
      {
        on: {
          input(event) {
            this.$emit('input', event.target.value)
          },
        },
      },
      this.formJson.items.map((item) => {
        return h(
          'el-form-item',
          {
            props: {
              label: item.label,
            },
            key: item.id
          },
          [renderMap.get(item.type)(h, item)]
        )
      })
    )
  },
  props: {
    formJson: {
      type: Object,
      required: true,
    },
  },
}
