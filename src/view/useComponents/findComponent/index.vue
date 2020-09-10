<template>
  <div>
    <slider1 />
    <slider2 />
    <slider3 />
  </div>
</template>

<script>
const slider = require.context("./components", false, /^(\.\/)slider\d*.vue$/);
let components = {};
slider.keys().forEach((res) => {
    let curr = slider(res).default;
    components[curr.name] = curr;
});
export default {
    name: "App",
    components,
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
</style>
