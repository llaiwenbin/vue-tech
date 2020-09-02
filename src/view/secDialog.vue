<template>
    <div>
        <button @click="showDialog">打开Dialog</button>
        <Dialog :visible.sync="visible" @confirm="confirm" @close="close">
            <template #foot>
                <button>封装</button>
            </template>
        </Dialog>
    </div>
</template>
<script>
import Dialog from "@/globalComponent/dialog/index.vue";
export default {
    name: "secDialog",
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        showDialog() {
            this.visible = true;
        },
        confirm() {
            console.log("确认");
        },
        close() {
            console.log("取消");
        },
    },
    components: {
        Dialog,
    },
};
</script>
<style lang="scss" scoped>
</style>
