<template>
    <div>
        <moule-a></moule-a>
        <moule-b></moule-b>
        <moule-c></moule-c>
        <moule-d></moule-d>
    </div>
</template>

<script>
const jsContext = require.context("./jsContent", false, /.js$/);
jsContext.keys().forEach((key) => {
    console.log(jsContext(key).default);
});

const vueContext = require.context("./vueContent", false, /.vue$/);
let components = {};
vueContext.keys().forEach((key) => {
    let curr = vueContext(key).default;
    components[curr.name] = curr;
});
console.log(components);
export default {
    name: "useRequireContext",
    data() {
        return {
            jsContext,
        };
    },
    components,
    mounted() {},
};
</script>

<style lang='scss' scoped>
</style>
