<template>
  <div>
    <moule-a />
    <moule-b />
    <moule-c />
    <moule-d />
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
    name: "UseRequireContext",
    components,
    data() {
        return {
            jsContext,
        };
    },
    mounted() {},
};
</script>

<style lang='scss' scoped>
</style>
