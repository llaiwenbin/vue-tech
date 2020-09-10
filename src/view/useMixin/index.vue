<template>
  <div>useMixins</div>
</template>

<script>
/**
 * mixin 分为三类
 * 1. 数据对象（data）：最终会合并mixin和组件内值，以当前组件值为主
 *
 * 2. 生命周期钩子：不会进行覆盖，mixin中同样的钩子会放在这个钩子的数组中，执行的时候按顺序执行
 *
 * 3. 其他值为对象的选项：例如 methods、components、props 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
 *
 * 混入分为局部混入和全局混入
 *      混入一般用作提取出相同流程，只要有多个组件用到了相同的东西，而且和流程有关，此时可以提取成mixin，如果可以单独作为一个组件存则提取成组件。
 *      1.局部混入
 *          1.1 多个组件都有相同的 初始化对象和销毁对象的操作（可以是定时器）
 *          1.2 可以使用防抖或节流等优化
 *
 *      2.全局混入：
 *          1.1 尽量少使用全局混入，它将影响每一个之后创建的 Vue 实例(包括第三方组件)。。
 *          1.2 一般使用在数据的收集，异常的检测
 *
 *
 */
const mixin1 = {
    created() {
        console.log("我是第一个");
    },
};
const mixin2 = {
    created() {
        console.log("我是第二个");
    },
};
export default {
    name: "UseMixin",
    mixins: [mixin1, mixin2],
    data() {
        return {};
    },
    created() {
        console.log("我是第三个");
    },
};
</script>

<style lang='scss' scoped>
</style>
