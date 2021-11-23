<template>
  <a :class="linkClass">
    <slot></slot>
  </a>
</template>
<script>
import { handleLink } from "./trButtonCompositionAPI";
export default {
  props: {
    type: String,
    underline: String,
    disabled: Boolean,
  },
  setup(props) {
    const { linkClass } = handleLink(props);
    return { linkClass };
  },
};
</script>
<style>
.el-link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: #606266;
}
.el-link:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.el-link-primary {
  color: #409eff;
}
.el-link-success {
  color: #67c23a;
}
.el-link-warning {
  color: #e6a23c;
}
.el-link-disabled {
  cursor: not-allowed;
  user-select: none;
}
</style>
