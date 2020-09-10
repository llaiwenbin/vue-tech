<template>
  <div>
    <child />
  </div>
</template>

<script>
import Child from "./components/child.vue";
export default {
    name: "Communication",
    components: {
        Child,
    },
    data() {
        return {
            fooB: {
                a: 1,
            },
        };
    },
    mounted() {
        setTimeout(() => {
            // provide不会主动将该值设置为响应式。
            // 但是如果传入provide为响应式那么子组件可以修改当前传入值。

            // provide 和 inject 最常的用法是 1.代替 vuex 2.组件间的传值
            console.log(this.fooB);
        }, 3000);
    },
    provide() {
        return {
            parent: this,
            foo: this.fooB,
        };
    },
};
</script>

<style lang='scss' scoped>
</style>
