<template>
    <div>
        child2
        <son />
    </div>
</template>

<script>
import son from "./child1Copy";
export default {
    name: "child2",
    data() {
        return {};
    },
    components: {
        son,
    },
};
</script>

<style lang='scss' scoped>
</style>
