<template>
    <IdisPlay :code="displaySource"></IdisPlay>
</template>

<script>
import IdisPlay from "@/globalComponent/display/display.vue";
export default {
    name: "useDisplay",
    data() {
        return {
            displaySource: 1,
        };
    },
    components: {
        IdisPlay,
    },
};
</script>

<style lang='scss' scoped>
</style>
