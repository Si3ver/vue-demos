<template>
  <div class="arraySort">
    ArraySort
    <hr />
    <div>
      请输入数据规模：
      <input type="number" v-model="scale" />
    </div>
    <a class="btn" @click="createArray">生成数组</a>
    <a class="btn" @click="startSort">开始排序</a>

    <div>Array.prototype.sort：{{ sortTime }}(ms)</div>
    <div>快速排序：{{ quickSortTime }}(ms)</div>

    <hr />
    <div>待排序数据：{{ array.join(" ") }}</div>
  </div>
</template>

<script>
export default {
  name: "ArraySort",
  data() {
    return {
      scale: 50000,
      array: [],
      quickSortTime: 0,
      sortTime: 0,
    };
  },
  methods: {
    startSort() {
      const array1 = this.array.slice();
      const array2 = this.array.slice();

      let start = performance.now();
      array1.sort((a, b) => a - b);
      this.sortTime = performance.now() - start;
      console.log("Array sort结果：", array1, `耗时: ${this.sortTime}ms`);

      start = performance.now();
      this.quickSort(array2, 0, array2.length - 1);
      this.quickSortTime = performance.now() - start;
      console.log("quickSort结果：", array2, `耗时: ${this.quickSortTime}ms`);
      console.log("排序结果是否相同?", "" + array1 === "" + array2);
    },
    createArray() {
      this.array = [];
      this.sortTime = 0;
      this.quickSortTime = 0;
      for (let i = 0; i < this.scale; ++i) {
        this.array.push(Math.round(Math.random() * this.scale));
      }
    },
    quickSort(arr, left, right) {
      if (left < right) {
        const pivotIndex = this.partition(arr, left, right);
        this.quickSort(arr, left, pivotIndex - 1);
        this.quickSort(arr, pivotIndex + 1, right);
      }
      return arr;
    },
    partition(arr, left, right) {
      const pivot = arr[left];
      while (left < right) {
        while (left < right && arr[right] >= pivot) --right;
        if (left < right) arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) ++left;
        if (left < right) arr[right] = arr[left];
      }
      arr[left] = pivot;
      return left;
    },
  },
};
</script>
