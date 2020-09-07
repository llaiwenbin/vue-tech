<template>
    <!-- 加了 .native 修饰符 那么当前@click是原生事件，否则 @click 是⾃定义事件，不触发原生点击事件 -->
    <i-button @click="handleClick" @on-click="isOnClick">提交</i-button>
</template>

<script>
import IButton from "./components/IButton";
export default {
    name: "eventNative",
    data() {
        return {};
    },
    components: {
        IButton,
    },
    methods: {
        handleClick() {
            // 原生点击事件
            console.log("handleClick");
        },
        isOnClick() {
            // 自定义事件
            console.log("on-click");
        },
    },
};
</script>

<style lang='scss' scoped>
</style>
