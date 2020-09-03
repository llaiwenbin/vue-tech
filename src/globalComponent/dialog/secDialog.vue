<template>
    <Dialog v-bind="$attrs" v-on="$listeners" :visible.sync="isDialogVisible">
        <template #header>
            <slot name="header"></slot>
        </template>
        <template #content>
            <slot name="content">
                <div>第二层content</div>
                <div>
                    点击可以获取到第二层组件$attrs:
                    <button @click="logAttrs">click</button>
                </div>

                <div>
                    点击可以获取到第二层组件$listeners:
                    <button @click="logListeners">click</button>
                </div>
            </slot>
        </template>
        <template #foot>
            <slot name="foot">
                <button>第二层foot</button>
            </slot>
        </template>
    </Dialog>
</template>
<script>
import Dialog from "./index.vue";
export default {
    // 默认为true 此时外部传入的都可以在HTML上看到这个属性，设置为false时，只有没有被props的才会在本层的HTML标签属性显示。被props的没有必要显示

    // 组件将不会把未被注册的props呈现为普通的HTML属性。但是在组件里我们可以通过其$attrs可以获取到没有使用的注册属性。
    // 通过设置 inheritAttrs 到 false，这些默认行为将会被去掉

    //如果为false就只有 isNotProps
    //如果为true就有 isNotProps isPropsInner
    // inheritAttrs: false,
    name: "secDialog",
    data() {
        return {};
    },
    props: ["visible", "isProps"],
    computed: {
        // 由于外部如果使用sync那么只是当前组件（父）和外部组件（祖父）之间沟通，update：visible会在最外层（祖父）监听，emit会在最内层（子）监听。
        // 最内层（子）emit只会通知到当前层（父），所以需要当前层再emit给最外层（祖父）

        //相当于中间层的转换，如果没有这层转换回导致子组件变化时修改 props 的 visible，vue会警告
        isDialogVisible: {
            get() {
                return this.visible;
            },
            set(val) {
                this.$emit("update:visible", val);
            },
        },
    },
    methods: {
        confirm() {
            console.log("第二层确认");
        },
        close() {
            console.log("第二层取消");
        },
        logAttrs() {
            console.log(this.$attrs);
        },
        logListeners() {
            console.log(this.$listeners);
        },
    },
    components: {
        Dialog,
    },
};
</script>
<style lang="scss" scoped>
</style>
