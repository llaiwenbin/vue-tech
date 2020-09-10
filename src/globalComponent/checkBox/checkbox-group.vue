<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { findAllDownComponent } from "@/utils.js";
export default {
    name: "ICheckboxGroup",
    props: {
        value: {
            default: () => [],
            type: Array,
        },
    },
    data() {
        return {};
    },
    mounted() {
        this.initModel();
    },
    methods: {
        // 该组件主要用于将接受到数据的model传输给checkbox
        // 同时子组件调用该组件的方法触发父组件更新

        updateModel(model) {
            if (model != null) this.$emit("input", model);

            let vmList = findAllDownComponent("iCheckbox", this);
            //父组件更新数据后才渲染
            this.$nextTick(() => {
                vmList.forEach((child) => {
                    child.model = this.value;
                });

                console.log(vmList);
            });
        },
        //初始化子组件model,这里也可以使用this.$slot和this.$scopeSlot获取
        initModel() {
            this.updateModel();
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
