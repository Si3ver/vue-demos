# 模块一：前端基本功

## 作业

### 0715

> 知识点：链表、数组、字符串、位运算

请在以下 4 个题目中任选一题解答：

**题目**

+ [206.链表反转](https://leetcode-cn.com/problems/reverse-linked-list/)
+ [215.数组中第 K 大的元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
+ [003.不重复最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
+ 位运算 / 位掩码

**实现源码**

+ [206.链表反转](./206reverseList.js)
+ [215.数组中第 K 大的元素](./215findKthLargest.js)
+ [003.不重复最长子串](./003lengthOfLongestSubstring.js)

### 0717 模板引擎

**题目**

```javascript
let tmpl = `<div class="newslist">
  <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
  <div class="date" v-if="info.showDate">{{info.name}}/></div>
  <div class="img">{{info.name}}/></div>
</div>`;
render(tmpl, {
  image: "some img",
  info: {
    showImage: true,
    showDate: false,
    name: "aaa"
  }
})
```
实现render方法

**实现源码**

+ [FishTemplate代码](../../src/views/FishTemplate.vue)
+ [engine2代码](../../src/components/FishTemplate/engine2.js)
+ [代码diff](https://github.com/Si3ver/vue-demos/commit/14500aee7175a1ab570ba0bbb6147255737c6899)
+ [线上预览](https://si3ver.github.io/vue-demos/#/fishtemplate)
