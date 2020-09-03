<template>
    <div>
        <div>打开控制台，修改页面大小，查看控制台</div>
        <div>可以去main页面查看原理~</div>
    </div>
</template>

<script>
export default {
    name: "useMergeStrategies",
    data() {
        return {};
    },
    overTime() {
        console.log("overTime钩子被触发啦！");
    },
    tooSmall() {
        console.log("宽度小于600px");
    },
    tooBig() {
        console.log("宽度大于600px");
    },
};
</script>

<style lang='scss' scoped>
</style>
