<template>
  <div>
    <button @click="showDialog">
      打开Dialog
    </button>
    <Dialog
      :visible.sync="visible"
      is-props="isProps"
      is-props-inner="isPropsInner"
      is-no-props="isNotProps"
      @confirm="confirm"
      @close="close"
    >
      <template #foot>
        <button>我是最外层的</button>
      </template>
    </Dialog>
  </div>
</template>
<script>
import Dialog from "@/globalComponent/dialog/secDialog.vue";
export default {
    name: "SecDialog",
    components: {
        Dialog,
    },
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
            console.log("最外层确认");
            this.visible = false;
        },
        close() {
            console.log("最外层取消");
        },
    },
};
</script>
<style lang="scss" scoped>
</style>
