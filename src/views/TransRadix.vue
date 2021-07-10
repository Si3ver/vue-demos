<template>
  <div class="arraySort">
    TransRadix
    <hr />
    <ul>
      <li>
        <label for="number"> 要转换的10进制数 </label>
        <input id="number" type="number" v-model="number" />
      </li>
      <li>
        <label for="radix"> 目标进制 </label>
        <input id="radix" type="number" v-model="radix" />
      </li>
      <li>
        <label for="precision"> 保留小数位数 </label>
        <input id="precision" type="number" v-model="precision" />
      </li>
    </ul>
    <div class="btn" @click="compute">开始计算</div>
    <hr />
    <div>计算结果：{{ result }}</div>
  </div>
</template>

<script>
import { transRadix } from "../utils/transRadix";

export default {
  name: "TransRadix",
  data() {
    return {
      number: "",
      radix: "64",
      precision: "10",
      result: "",
    };
  },
  methods: {
    compute() {
      const { number: number, radix, precision } = this;
      this.result = transRadix(
        Number(number),
        Number(radix),
        Number(precision)
      );
    },
  },
};
</script>

<style lang="less">
li {
  clear: both;
  list-style: none;
}
label {
  display: block;
  float: left;
  overflow: hidden;
  width: 150px;
  padding-right: 10px;
  text-align-last: right;
  line-height: 2;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background: lightgreen;
  margin: 10px;
  cursor: pointer;
}
</style>
