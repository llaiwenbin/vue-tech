<template>
  <div>
    child2
    <son />
  </div>
</template>

<script>
import son from "./child1Copy";
export default {
    name: "Child2",
    components: {
        son,
    },
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
</style>
