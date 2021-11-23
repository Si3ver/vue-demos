<template>
  <div>
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button>

      <el-button size="small" @click="toggle"> toggle mode </el-button>
      <span>{{ mode }}</span>
    </div>
    <el-tabs
      v-model="editableTabsValue"
      closable
      @tab-remove="removeTab"
      @tab-click="handleClickTab"
      :before-leave="handleBeforeLeave"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <template slot="label">
          <template v-if="item.name === editableTabsValue && mode === 'edit'">
            <input />
          </template>
          <template v-else>
            <span>{{ item.title }}</span>
          </template>
        </template>
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "SuperTab",
  data() {
    return {
      mode: "view",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    toggle() {
      this.mode = this.mode === "view" ? "edit" : "view";
    },
    addTab() {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
    handleClickTab(a, b) {
      console.log("tab-click", a, b);
    },
    handleBeforeLeave(newTagName, oldTagName) {
      console.log("before-leave", newTagName, oldTagName);
      if (this.mode === "edit") {
        const copy = [...this.editableTabs];
        for (let i = 0; i < copy.length; ++i) {
          if (copy[i].name === newTagName) {
            copy[i].title = "❤️";
          }
        }
        this.editableTabs = copy;
        console.log(copy);
        return false;
      }
      return true;
    },
  },
};
</script>
