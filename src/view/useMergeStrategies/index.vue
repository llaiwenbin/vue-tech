<template>
    <div>可以去main页面查看原理~</div>
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
        console.log("tooSmall");
    },
    tooBig() {
        console.log("tooBig");
    },
};
</script>

<style lang='scss' scoped>
</style>
