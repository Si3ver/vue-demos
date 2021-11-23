<template>
  <div>
    <el-form>
      <el-form-item label="label">
        <el-input v-model="form.label"></el-input>
      </el-form-item>
      <el-form-item label="value">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item label="disabled">
        <el-radio-group v-model="form.props.disabled">
          <el-radio :label="0">none</el-radio>
          <el-radio :label="1">true</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="placeholder">
        <el-input v-model="form.props.placeholder"></el-input>
      </el-form-item>
      <el-button @click="save">保存</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        label: this.formItem.label,
        value: '',
        props: {
          disabled: 0,
          placeholder: '',
        },
      },
    }
  },
  methods: {
    save() {
      let { props, ...formBase } = this.form
      if (this.form.props.disabled === 0) {
        delete props.disabled
      } else {
        props.disabled = true
      }
      this.$emit('save', {
        ...formBase,
        props: { ...props },
      })
    },
  },
}
</script>
