<template>
    <button @click="handleClick">
        <slot></slot>
    </button>
</template> <script>
export default {
    methods: {
        handleClick(event) {
            console.log("inner");
            this.$emit("on-click", event);
        },
    },
};
</script>