<template>
    <div>
        <div class="parent">parent</div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "useComponents",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.parent {
    background: #eee;
}
</style>
