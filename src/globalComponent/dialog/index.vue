<template>
    <div class="dialog-bg" v-show="visible">
        <div class="dialog-box">
            <div class="dialog-box-titile">
                <slot name="header">
                    <span>最内层header</span>
                    <svg
                        t="1599024123848"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2374"
                        ne="0.22331568097192012"
                        width="200"
                        height="200"
                        @click="$_cancel"
                    >
                        <path
                            d="M1023.997 114.97 911.408 2.388 516.149 397.629 118.5 0 5.91 112.585l397.649 397.629L7.107 906.648l112.587 112.59 396.454-396.439 395.259 395.249 112.59-112.59L628.738 510.214 1023.997 114.97z"
                            p-id="2375"
                        />
                    </svg>
                </slot>
            </div>
            <div class="dialog-box-content">
                <slot name="content">最内层content</slot>
            </div>
            <div class="dialog-box-foot">
                <slot name="foot">
                    <button @click="$_confirm" class="m_r10">确认</button>
                    <button @click="$_cancel">关闭</button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "theDialog",
    data() {
        return {};
    },
    props: {
        visible: {
            default: true,
            type: Boolean,
        },
        isPropsInner: {
            default: "",
            type: String,
        },
    },
    methods: {
        $_confirm() {
            this.$emit("confirm");
            this.$_close();
        },
        $_cancel() {
            this.$emit("close");
            this.$_close();
        },
        $_close() {
            // update:属性 发生变化的时候会触发.sync 属性变化
            this.$emit("update:visible", false);
        },
    },
};
</script>
<style lang="scss" scoped>
.dialog-bg {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    .dialog-box {
        left: calc(50% - 300px);
        position: absolute;
        background: #fff;
        top: 15%;
        width: 600px;
        height: 500px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 1px 5px #000;
        > * {
            padding: 0 20px;
            border-bottom: #eee 1px solid;
        }
        &-titile {
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > .icon {
                width: 10px;
                height: 10px;
                padding: 0;
            }
        }
        &-content {
            padding: 20px;
            flex: 1;
        }
        &-foot {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 50px;
            button {
                cursor: pointer;
            }
        }
    }
}
</style>