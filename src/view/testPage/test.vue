
<template>
  <div
    id="main"
    class="container"
    style="color: red"
  >
    <p v-if="show">
      内容 1
    </p>
    <p v-else>
      内容 2
    </p>
  </div>
</template> 
<script>
// 直接使⽤ Render 函数 开发 Vue.js 组件是要⽐ template 困难的，原因在于 Render 函数 返回的是⼀个 JS 对象，没有传统 DOM 的层级关系，配合上 if、 else、for 等语句，将节点拆分成不同 JS 对象再组装，如果模板复 杂，那⼀个 Render 函数是难读且难维护的。所以，绝⼤部分组件开 发和业务开发，我们直接使⽤ template 语法就可以了，并不需要特 意使⽤ Render 函数.
// 那样只会增加负担，同时也放弃了 Vue.js 最 ⼤的优势（React ⽆ template 语法）
export default {
    data() {
        return { show: false };
    },
};
</script>
