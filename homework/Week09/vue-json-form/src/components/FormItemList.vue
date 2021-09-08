<template>
  <div>
    <div>表单组件列表</div>
    <vuedraggable
      :group="{ name: dragGroup, pull: 'clone', put: false }"
      :sort="false"
      :clone="cloneItem"
      v-model="formItems"
    >
      <transition-group>
        <div v-for="item in formItems" :key="item.type" class="form-item">
          <el-button>{{ item.type }}</el-button>
        </div>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'

let uid = 1

const optionSet = new Set()
optionSet.add('radio')
optionSet.add('select')

export default {
  components: {
    vuedraggable,
  },
  props: {
    dragGroup: {
      type: String,
    },
  },
  data() {
    return {
      formItems: [
        {
          type: 'input',
        },
        {
          type: 'radio',
        },
        {
          type: 'select',
        },
        {
          type: 'date-picker',
        },
      ],
    }
  },
  methods: {
    cloneItem(item) {
      console.log('clone', item)
      return {
        ...item,
        id: uid++,
        label: item.type,
        value: '',
        props: {
          options: optionSet.has(item.type)
            ? [
                {
                  label: '选项1',
                  value: '1',
                },
                {
                  label: '选项2',
                  value: '2',
                },
              ]
            : [],
        },
      }
    },
  },
}
</script>

<style>
.form-item {
  margin: 5px;
}
</style>
