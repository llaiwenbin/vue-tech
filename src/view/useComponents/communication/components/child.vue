<template>
  <div />
</template>

<script>
export default {
    name: "Child",
    inject: ["parent", "foo"],
    mounted() {
        console.log(this.foo);
        this.foo.a = 777;
        setTimeout(() => {
            console.log(this.foo);
        }, 4000);
    },
};
</script>

<style lang='scss' scoped>
</style>
