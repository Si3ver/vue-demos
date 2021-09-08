<template>
  <el-row :gutter="10">
    <el-col :span="8">
      <form-item-list :dragGroup="dragGroup"></form-item-list>
    </el-col>
    <el-col :span="8">
      <el-tabs
        v-model="activeName"
        type="border-card"
        style="min-height: 500px"
      >
        <el-tab-pane label="预览视图" name="preview">
          <vuedraggable
            :group="dragGroup"
            v-model="formJson.items"
            @change="handleDragChange"
            :sort="!currentEdit.formItem"
          >
            <transition-group>
              <div v-for="(item, index) in formJson.items" :key="item.id">
                <el-row class="preview-item">
                  <el-col :span="16">
                    {{ item.label }}
                  </el-col>
                  <el-col :span="8">
                    <el-button
                      type="primary"
                      icon="el-icon-edit"
                      circle
                      @click="editItem(item, index)"
                    ></el-button>
                    <el-button
                      v-if="!currentEdit.formItem"
                      type="danger"
                      icon="el-icon-delete"
                      circle
                      @click="deleteItem(index)"
                    ></el-button>
                  </el-col>
                </el-row>
              </div>
            </transition-group>
          </vuedraggable>
        </el-tab-pane>
        <el-tab-pane label="渲染视图" name="render">
          <render-form :formJson="formJson" ref="renderForm"></render-form>
        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="8">
      <div id="property-edit">属性编辑</div>
      <component
        :is="currentEdit.type"
        v-if="currentEdit.formItem"
        :formItem="currentEdit.formItem"
        @save="saveProperty"
      ></component>
    </el-col>
  </el-row>
</template>

<script>
import FormItemList from './FormItemList.vue'
import RenderForm from './element-render'
import vuedraggable from 'vuedraggable'
import InputProperty from './property-edit/InputProperty.vue'
import RadioProperty from './property-edit/RadioProperty.vue'
import SelectProperty from './property-edit/SelectProperty.vue'
import DatePickerProperty from './property-edit/DatePickerProperty.vue'

const typePropertyMap = new Map()
typePropertyMap.set('input', InputProperty)
typePropertyMap.set('radio', RadioProperty)
typePropertyMap.set('select', SelectProperty)
typePropertyMap.set('date-picker', DatePickerProperty)

export default {
  components: {
    FormItemList,
    RenderForm,
    vuedraggable,
    InputProperty,
    RadioProperty,
    SelectProperty,
    DatePickerProperty,
  },
  data() {
    return {
      formJson: {
        items: [],
      },
      activeName: 'preview',
      dragGroup: 'formItemList',
      currentEdit: {
        property: '',
        formItem: null,
        index: null,
      },
    }
  },
  methods: {
    handleDragChange(event) {
      console.log(event)
    },
    editItem(item, index) {
      this.currentEdit.type = typePropertyMap.get(item.type)
      this.currentEdit.formItem = item
      this.currentEdit.index = index
    },
    deleteItem(index) {
      this.formJson.items.splice(index, 1)
    },
    saveProperty(formItem) {
      let currentForm = this.formJson.items[this.currentEdit.index]
      this.formJson.items.splice(this.currentEdit.index, 1, {
        ...currentForm,
        ...formItem,
      })
      this.currentEdit = {
        property: '',
        formItem: null,
        index: null,
      }
    },
  },
}
</script>

<style>
.preview-item {
  border: 1px solid #eee;
  padding: 5px;
  margin: 5px;
}
</style>
